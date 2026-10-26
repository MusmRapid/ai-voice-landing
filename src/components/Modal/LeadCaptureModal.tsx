import React, { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useAtom } from "jotai/react";
import { ChevronDown } from "lucide-react";
import { themeAtom } from "../../atom/themeAtom";
import emailjs from "@emailjs/browser";
import { createPortal } from "react-dom";

interface Props {
  open: boolean;
  onClose: () => void;
}

interface CampaignDropdownPosition {
  left: number;
  width: number;
  top?: number;
  bottom?: number;
  maxHeight: number;
}

const LeadCaptureModal: React.FC<Props> = ({ open, onClose }) => {
  const [theme] = useAtom(themeAtom);
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [selectedCampaign, setSelectedCampaign] = useState("");
  const [campaignOpen, setCampaignOpen] = useState(false);
  const [campaignDropdownPosition, setCampaignDropdownPosition] = useState<CampaignDropdownPosition | null>(null);

  const updateCampaignDropdownPosition = useCallback(() => {
    const button = document.getElementById("campaign-select");
    const rect = button?.getBoundingClientRect();
    if (!rect) return;

    const gap = 8;
    const maxHeight = 144;
    const spaceBelow = window.innerHeight - rect.bottom - gap;
    const spaceAbove = rect.top - gap;
    const openUp = spaceBelow < maxHeight && spaceAbove > spaceBelow;
    const availableSpace = openUp ? spaceAbove : spaceBelow;

    setCampaignDropdownPosition({
      left: rect.left,
      width: rect.width,
      maxHeight: Math.max(0, Math.min(maxHeight, availableSpace)),
      ...(openUp
        ? { bottom: window.innerHeight - rect.top + gap }
        : { top: rect.bottom + gap }),
    });
  }, []);

  const toggleCampaignDropdown = () => {
    const nextState = !campaignOpen;
    setCampaignOpen(nextState);

    if (nextState) {
      updateCampaignDropdownPosition();
    }
  };

  useEffect(() => {
    if (!open || !campaignOpen) return;

    const updatePosition = () => updateCampaignDropdownPosition();
    window.addEventListener("resize", updatePosition);
    window.addEventListener("scroll", updatePosition, true);

    return () => {
      window.removeEventListener("resize", updatePosition);
      window.removeEventListener("scroll", updatePosition, true);
    };
  }, [open, campaignOpen, updateCampaignDropdownPosition]);

  useEffect(() => {
    if (!open) return;

    const scrollY = window.scrollY;
    const bodyStyles = {
      position: document.body.style.position,
      top: document.body.style.top,
      left: document.body.style.left,
      right: document.body.style.right,
      width: document.body.style.width,
      overflow: document.body.style.overflow,
    };
    const htmlOverflow = document.documentElement.style.overflow;

    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.style.width = "100%";
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    return () => {
      Object.assign(document.body.style, bodyStyles);
      document.documentElement.style.overflow = htmlOverflow;
      window.scrollTo(0, scrollY);
    };
  }, [open]);

  if (!open) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    const currentTime = new Date().toISOString();
    const timeInput = formRef.current.querySelector<HTMLInputElement>('input[name="time"]');
    if (timeInput) {
      timeInput.value = currentTime;
    }

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
        () => {
          setSuccess("Thank you! Your demo request has been sent.");
          formRef.current?.reset();
          setSelectedCampaign("");
          setCampaignOpen(false);
          setLoading(false);
        },
        (error) => {
          setSuccess("Oops! Something went wrong. Please try again.");
          setLoading(false);
          console.error("EmailJS error:", error);
        }
      );
  };

  const inputClass = `w-full rounded-xl border bg-transparent px-4 py-3 text-sm outline-none transition-all duration-200 placeholder:text-xs placeholder:uppercase placeholder:tracking-[0.12em] focus:border-yellowBrand focus:ring-2 focus:ring-yellowBrand/20 ${
    theme === "dark"
      ? "border-white/15 bg-white/5 text-white placeholder:text-white/40"
      : "border-slate-300 bg-slate-50 text-slate-900 placeholder:text-slate-500"
  }`;

  const selectButtonClass = `${inputClass} flex items-center justify-between gap-3 pr-11 text-left ${
    selectedCampaign ? "text-current" : theme === "dark" ? "text-slate-300" : "text-slate-500"
  }`;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center p-4">
      <motion.div
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 cursor-pointer bg-black/60 backdrop-blur-md"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className={`relative z-[1000] w-full max-w-2xl max-h-[92vh] overflow-y-auto rounded-[28px] border p-4 shadow-[0_24px_80px_rgba(0,0,0,0.35)] transition-colors duration-500 sm:p-6 md:p-8 ${
          theme === "dark" ? "border-white/10 bg-[#121212] text-white" : "border-slate-200 bg-white text-slate-900"
        }`}
      >
        <div className="flex items-start justify-between gap-4 mb-6">
          <div>
            <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.18em] text-yellowBrand">Book a demo</p>
            <h3 className="text-3xl font-bold tracking-[-0.05em] text-marope">Let’s talk about your AI voice goals</h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex items-center justify-center w-10 h-10 text-xl transition-colors rounded-full text-slate-400 hover:bg-slate-200 hover:text-slate-700 dark:hover:bg-white/10 dark:hover:text-white"
            aria-label="Close modal"
          >
            ✕
          </button>
        </div>

        <p className={`mb-6 text-sm ${theme === "dark" ? "text-gray-300" : "text-slate-600"}`}>
          Share a few details and our team will reach out with the right solution for your business.
        </p>

        <form ref={formRef} onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <input type="hidden" name="time" value={new Date().toISOString()} />

          <div className="md:col-span-2">
            <label className="mb-2 block text-xs font-medium uppercase tracking-[0.12em] text-yellowBrand" htmlFor="company">
              Company name
            </label>
            <input id="company" type="text" name="company" placeholder="Company name" required className={inputClass} />
          </div>

          <div>
            <label className="mb-2 block text-xs font-medium uppercase tracking-[0.12em] text-yellowBrand" htmlFor="name">
              Person in charge
            </label>
            <input id="name" type="text" name="name" placeholder="Name" required className={inputClass} />
          </div>

          <div>
            <label className="mb-2 block text-xs font-medium uppercase tracking-[0.12em] text-yellowBrand" htmlFor="phone">
              Phone number
            </label>
            <input id="phone" type="tel" name="phone" placeholder="Phone number" required className={inputClass} />
          </div>

          <div>
            <label className="mb-2 block text-xs font-medium uppercase tracking-[0.12em] text-yellowBrand" htmlFor="email">
              Email
            </label>
            <input id="email" type="email" name="email" placeholder="Email" required className={inputClass} />
          </div>

          <div>
            <label className="mb-2 block text-xs font-medium uppercase tracking-[0.12em] text-yellowBrand" htmlFor="msid">
              Microsoft Teams ID
            </label>
            <input id="msid" type="text" name="msid" placeholder="Optional" className={inputClass} />
          </div>

          <div className="md:col-span-2">
            <label className="mb-2 block text-xs font-medium uppercase tracking-[0.12em] text-yellowBrand" htmlFor="campaign-select">
              Campaign
            </label>
            <input id="campaign-select" type="text" name="campaign-select" placeholder="Medicare, Final Expense..." className={inputClass} />
          </div>

          <div className="md:col-span-2">
            <label className="mb-2 block text-xs font-medium uppercase tracking-[0.12em] text-yellowBrand" htmlFor="totalBots">
              Number of bots
            </label>
            <input
              id="totalBots"
              type="number"
              name="totalBots"
              min="1"
              step="1"
              placeholder="Enter a number"
              className={`${inputClass} [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none`}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`md:col-span-2 mt-2 w-full rounded-xl bg-yellowBrand px-5 py-3 text-sm font-bold uppercase tracking-[0.14em] text-black transition-colors hover:bg-yellow-400 disabled:cursor-not-allowed disabled:opacity-70 ${
              loading ? "opacity-70" : ""
            }`}
          >
            {loading ? "Sending..." : "Request a demo"}
          </button>
        </form>

        {success && (
          <p className={`mt-4 text-center text-sm ${theme === "dark" ? "text-green-400" : "text-green-600"}`}>
            {success}
          </p>
        )}
      </motion.div>
    </div>
  );
};

export default LeadCaptureModal;
