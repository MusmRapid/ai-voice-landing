import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, X } from "lucide-react";
import { useAtom } from "jotai/react";
import emailjs from "@emailjs/browser";
import { themeAtom } from "../../atom/themeAtom";

interface PartnerInquiryModalProps {
  open: boolean;
  onClose: () => void;
}

const PartnerInquiryModal: React.FC<PartnerInquiryModalProps> = ({ open, onClose }) => {
  const [theme] = useAtom(themeAtom);
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<string | null>(null);
  const [partnerType, setPartnerType] = useState("");
  const [partnerTypeOpen, setPartnerTypeOpen] = useState(false);

  if (!open) return null;

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // if (!formRef.current) return;

    // setLoading(true);
    // setStatus(null);

    // emailjs
    //   .sendForm(
    //     import.meta.env.VITE_EXPRESSJS_SERVICE_ID,
    //     import.meta.env.VITE_EXPRESSJS_TEMPLATE_ID,
    //     formRef.current,
    //     import.meta.env.VITE_EXPRESSJS_PUBLIC_KEY,
    //   )
    //   .then(
    //     () => {
    //       setStatus("Thanks. Our partnerships team will be in touch.");
    //       formRef.current?.reset();
    //       setLoading(false);
    //     },
    //     () => {
    //       setStatus("Something went wrong. Please try again.");
    //       setLoading(false);
    //     },
    //   );
  };

  const fieldClass = `w-full border bg-transparent px-4 py-3 text-sm outline-none transition focus:border-yellowBrand ${
    theme === "dark" ? "border-white/15 text-white placeholder:text-white/35" : "border-lightText/20 text-lightText placeholder:text-lightText/40"
  }`;
  const partnerTypes = [
    ["referral", "Client referrals"],
    ["reseller", "Reseller or agency"],
    ["integration", "Technology or integration"],
  ];

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center p-5">
      <motion.button
        type="button"
        aria-label="Close partner inquiry"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        className="absolute inset-0 cursor-pointer bg-black/75 backdrop-blur-sm"
      />
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        className={`relative z-10 w-full max-w-xl border p-6 shadow-2xl md:p-8 ${
          theme === "dark" ? "border-white/15 bg-[#0b0d0a] text-white" : "border-lightText/15 bg-[#f7f8f3] text-lightText"
        }`}
      >
        <button type="button" onClick={onClose} aria-label="Close" className="absolute transition opacity-50 right-5 top-5 hover:opacity-100">
          <X size={20} />
        </button>
        <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-yellowBrand">Partner intake / 01</p>
        <h2 className="m-0 max-w-md text-3xl font-semibold leading-tight tracking-[-0.04em]">Let&apos;s build your next revenue channel.</h2>
        <p className={`mt-4 text-sm leading-relaxed ${theme === "dark" ? "text-white/55" : "text-lightText/65"}`}>
          Tell us where you operate and how you reach clients. We&apos;ll share the partner model, enablement path, and revenue-share terms.
        </p>

        <form ref={formRef} onSubmit={handleSubmit} className="grid gap-3 mt-7">
          <input className={fieldClass} name="name" placeholder="Full name" required />
          <input className={fieldClass} name="email" type="email" placeholder="Work email" required />
          <input className={fieldClass} name="company" placeholder="Company or network" />
          <div className="relative">
            <input type="hidden" name="partner_type" value={partnerType} />
            <button
              type="button"
              aria-haspopup="listbox"
              aria-expanded={partnerTypeOpen}
              onClick={() => setPartnerTypeOpen((open) => !open)}
              className={`${fieldClass} flex items-center justify-between text-left ${partnerType ? "" : "opacity-60"}`}
            >
              <span>{partnerTypes.find(([value]) => value === partnerType)?.[1] ?? "How do you want to partner?"}</span>
              <ChevronDown size={17} className={`transition-transform ${partnerTypeOpen ? "rotate-180" : ""}`} />
            </button>
            {partnerTypeOpen && (
              <div role="listbox" className={`absolute inset-x-0 top-full z-20 mt-1 border p-1 shadow-xl ${theme === "dark" ? "border-white/15 bg-[#11140f]" : "border-lightText/15 bg-[#f7f8f3]"}`}>
                {partnerTypes.map(([value, label]) => (
                  <button
                    key={value}
                    type="button"
                    role="option"
                    aria-selected={partnerType === value}
                    onClick={() => {
                      setPartnerType(value);
                      setPartnerTypeOpen(false);
                    }}
                    className={`flex w-full items-center justify-between px-3 py-3 text-left font-mono text-[10px] uppercase tracking-[0.12em] transition-colors hover:bg-yellowBrand hover:text-black ${partnerType === value ? "bg-yellowBrand/15 text-yellowBrand" : ""}`}
                  >
                    {label}
                    <span className="text-[9px] opacity-50">{value === "referral" ? "01" : value === "reseller" ? "02" : "03"}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
          <textarea className={fieldClass} name="message" rows={3} placeholder="Tell us about your reach (optional)" />
          <button type="submit" disabled={loading} className="mt-2 bg-yellowBrand px-5 py-4 font-mono text-xs font-bold uppercase tracking-[0.16em] text-black transition-colors hover:bg-yellow-300 disabled:cursor-not-allowed disabled:opacity-60">
            {loading ? "Sending..." : "Start the conversation"}
          </button>
        </form>
        {status && <p className="mt-4 text-sm text-center text-yellowBrand">{status}</p>}
      </motion.div>
    </div>
  );
};

export default PartnerInquiryModal;
