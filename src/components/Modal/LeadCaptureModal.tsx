import React from "react";
import { motion } from "framer-motion";
import { useAtom } from "jotai/react";
import { themeAtom } from "../../atom/themeAtom";

interface Props {
  open: boolean;
  onClose: () => void;
}

const LeadCaptureModal: React.FC<Props> = ({ open, onClose }) => {
  const [theme] = useAtom(themeAtom);

  if (!open) return null;

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
          theme === "dark"
            ? "bg-neutral-900 text-white"
            : "bg-white text-lightText"
        }`}
      >
        <h2 className="mb-4 text-3xl font-bold">Book a Demo</h2>
        <p className={`mb-6 ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
          Fill out the form and our AI deployment team will contact you.
        </p>

        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-3 bg-transparent border rounded-lg border-white/20 focus:outline-yellowBrand"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-3 bg-transparent border rounded-lg border-white/20 focus:outline-yellowBrand"
          />

          <input
            type="text"
            placeholder="Company Name"
            className="w-full p-3 bg-transparent border rounded-lg border-white/20 focus:outline-yellowBrand"
          />

          <input
            type="tel"
            placeholder="Phone (optional)"
            className="w-full p-3 bg-transparent border rounded-lg border-white/20 focus:outline-yellowBrand"
          />

          <textarea
            placeholder="Tell us about your needs..."
            rows={4}
            className="w-full p-3 bg-transparent border rounded-lg border-white/20 focus:outline-yellowBrand"
          />

          <button
            type="submit"
            className="w-full py-3 mt-2 font-bold text-black rounded-lg bg-yellowBrand hover:bg-yellow-400"
          >
            Submit
          </button>
        </form>

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
