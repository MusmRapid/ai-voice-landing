import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useAtom } from "jotai/react";
import { themeAtom } from "../../atom/themeAtom";
import emailjs from "@emailjs/browser";

interface Props {
  open: boolean;
  onClose: () => void;
}

const LeadCaptureModal: React.FC<Props> = ({ open, onClose }) => {
  const [theme] = useAtom(themeAtom);
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);

  if (!open) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setLoading(true);
    setSuccess(null);

    emailjs
      .sendForm(
        import.meta.env.VITE_EXPRESSJS_SERVICE_ID,
        import.meta.env.VITE_EXPRESSJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EXPRESSJS_PUBLIC_KEY
      )
      .then(
        (__) => {
          setSuccess("Thank you! Your demo request has been sent.");
          formRef.current?.reset();
          setLoading(false);
        },
        (error) => {
          setSuccess("Oops! Something went wrong. Please try again.");
          setLoading(false);
          console.error("EmailJS error:", error);
        }
      );
  };

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center">
      <motion.div
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 cursor-pointer bg-black/60 backdrop-blur-sm"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className={`relative z-[1000] w-full max-w-lg p-8 rounded-2xl shadow-2xl transition-colors duration-500 ${
          theme === "dark" ? "bg-neutral-900 text-white" : "bg-white text-lightText"
        }`}
      >
        <h2 className="mb-4 text-3xl font-bold">Book a Demo</h2>
        <p className={`mb-6 ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
          Fill out the form and our AI deployment team will contact you.
        </p>

        <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
            className="w-full p-3 bg-transparent border rounded-lg border-white/20 focus:outline-yellowBrand"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            className="w-full p-3 bg-transparent border rounded-lg border-white/20 focus:outline-yellowBrand"
          />

          <input
            type="text"
            name="company"
            placeholder="Company Name"
            className="w-full p-3 bg-transparent border rounded-lg border-white/20 focus:outline-yellowBrand"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone (optional)"
            className="w-full p-3 bg-transparent border rounded-lg border-white/20 focus:outline-yellowBrand"
          />

          <textarea
            name="message"
            placeholder="Tell us about your needs..."
            rows={4}
            className="w-full p-3 bg-transparent border rounded-lg border-white/20 focus:outline-yellowBrand"
          />

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 mt-2 font-bold rounded-lg bg-yellowBrand hover:bg-yellow-400 text-black ${
              loading ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Sending..." : "Submit"}
          </button>
        </form>

        {success && (
          <p className={`mt-4 text-center ${theme === "dark" ? "text-green-400" : "text-green-600"}`}>
            {success}
          </p>
        )}

        <button
          onClick={onClose}
          className="absolute text-xl top-3 right-5 opacity-70 hover:opacity-100"
        >
          ✕
        </button>
      </motion.div>
    </div>
  );
};

export default LeadCaptureModal;
