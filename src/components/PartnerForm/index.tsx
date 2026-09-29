
import React, { useRef, useState } from "react";
import { ArrowUpRight, Check, ChevronDown } from "lucide-react";
import { useAtom } from "jotai/react";
import emailjs from "@emailjs/browser";
import { themeAtom } from "../../atom/themeAtom";

const hearAboutOptions = [
  "Referral",
  "LinkedIn",
  "Industry event",
  "Search engine",
  "Other",
];

const PartnerForm: React.FC = () => {
  const [theme] = useAtom(themeAtom);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<string | null>(null);
  const [source, setSource] = useState("");
  const [sourceOpen, setSourceOpen] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const isDark = theme === "dark";

  const fieldClass = `w-full min-w-0 border bg-transparent px-4 py-3 text-sm outline-none transition-colors placeholder:uppercase placeholder:tracking-[0.08em] placeholder:text-[10px] focus:border-yellowBrand focus:ring-1 focus:ring-yellowBrand/30 ${
    isDark
      ? "border-white/15 text-white placeholder:text-white/35"
      : "border-lightText/20 text-lightText placeholder:text-lightText/40"
  }`;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!formRef.current) return;
    if (!source) {
      setStatus("Please choose how you heard about us.");
      setSourceOpen(true);
      document.getElementById("partner-source-trigger")?.focus();
      return;
    }

    setLoading(true);
    setStatus(null);

    emailjs
      .sendForm(
        import.meta.env.VITE_EXPRESSJS_SERVICE_ID,
        import.meta.env.VITE_EXPRESSJS_PARTNER_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EXPRESSJS_PUBLIC_KEY,
      )
      .then(
        () => {
          setStatus("Thanks for reaching out. Our partner team will be in touch.");
          formRef.current?.reset();
          setSource("");
          setLoading(false);
        },
        (error) => {
          console.error("Partner inquiry email error:", error);
          setStatus("We couldn’t send your inquiry. Please try again.");
          setLoading(false);
        },
      );
  };

  return (
    <div>
      <div className="flex items-center justify-between gap-4 mb-6">
        <div>
          <p className="m-0 font-mono text-[10px] uppercase tracking-[0.2em] text-yellowBrand">Partner intake / 01</p>
          <h3 className="mb-0 mt-2 text-2xl font-semibold tracking-[-0.04em]">Start a conversation</h3>
        </div>
        <span className={`hidden font-mono text-[9px] uppercase tracking-[0.16em] sm:block ${isDark ? "text-white/35" : "text-lightText/40"}`}>
          All fields marked * required
        </span>
      </div>

      <form ref={formRef} onSubmit={handleSubmit} className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <label className="sr-only" htmlFor="partner-name">Full name</label>
        <input id="partner-name" className={fieldClass} name="name" placeholder="Full name *" autoComplete="name" required />

        <label className="sr-only" htmlFor="partner-email">Email address</label>
        <input id="partner-email" className={fieldClass} name="email" type="email" placeholder="Work email *" autoComplete="email" required />

        <label className="sr-only" htmlFor="partner-company">Company name</label>
        <input id="partner-company" className={fieldClass} name="company" placeholder="Company name *" autoComplete="organization" required />

        <label className="sr-only" htmlFor="partner-phone">Phone number</label>
        <input id="partner-phone" className={fieldClass} name="phone" type="tel" placeholder="Phone number *" autoComplete="tel" required />

        <label className="sr-only" htmlFor="partner-country">Country</label>
        <input id="partner-country" className={fieldClass} name="country" placeholder="Country *" autoComplete="country-name" required />

        <label className="sr-only" htmlFor="partner-source-trigger">How did you hear about us?</label>
        <div className="relative">
          <input type="hidden" name="how_did_you_hear" value={source} required />
          <button
            id="partner-source-trigger"
            type="button"
            aria-haspopup="listbox"
            aria-expanded={sourceOpen}
            aria-controls="partner-source-options"
            onClick={() => setSourceOpen((open) => !open)}
            onKeyDown={(event) => {
              if (event.key === "Escape") setSourceOpen(false);
              if (event.key === "ArrowDown") {
                event.preventDefault();
                setSourceOpen(true);
              }
            }}
            className={`${fieldClass} flex items-center justify-between gap-3 text-left ${source ? "" : "opacity-70"}`}
          >
            <span className="truncate">{source || "How did you hear about us? *"}</span>
            <ChevronDown size={16} className={`shrink-0 transition-transform ${sourceOpen ? "rotate-180 text-yellowBrand" : "opacity-50"}`} />
          </button>
          {sourceOpen && (
            <div
              id="partner-source-options"
              role="listbox"
              aria-label="How did you hear about us?"
              className={`absolute inset-x-0 top-full z-30 mt-1 border p-1 shadow-xl ${
                isDark ? "border-white/15 bg-[#10120e]" : "border-lightText/15 bg-[#f7f8f3]"
              }`}
            >
              {hearAboutOptions.map((option, index) => (
                <button
                  key={option}
                  type="button"
                  role="option"
                  aria-selected={source === option}
                  onClick={() => {
                    setSource(option);
                    setSourceOpen(false);
                  }}
                  className={`flex w-full items-center justify-between px-3 py-3 text-left font-mono text-[10px] uppercase tracking-[0.12em] transition-colors hover:bg-yellowBrand hover:text-black focus-visible:bg-yellowBrand focus-visible:text-black focus-visible:outline-none ${
                    source === option
                      ? "bg-yellowBrand/15 text-yellowBrand"
                      : isDark
                        ? "text-white/75"
                        : "text-lightText/75"
                  }`}
                >
                  <span className="flex items-center gap-3"><span className="text-[9px] opacity-45">0{index + 1}</span>{option}</span>
                  {source === option && <Check size={14} />}
                </button>
              ))}
            </div>
          )}
        </div>

        <button
          type="submit"
          disabled={loading}
          className="group col-span-1 mt-1 inline-flex items-center justify-between gap-4 bg-yellowBrand px-5 py-4 font-mono text-xs font-bold uppercase tracking-[0.14em] text-black transition-colors hover:bg-yellow-300 disabled:cursor-not-allowed disabled:opacity-60 sm:col-span-2"
        >
          {loading ? "Sending inquiry..." : "Send partner inquiry"}
          <ArrowUpRight size={17} />
        </button>
      </form>

      {status && (
        <p role="status" className={`mb-0 mt-4 text-sm ${status.startsWith("Thanks") ? "text-yellowBrand" : isDark ? "text-red-300" : "text-red-700"}`}>
          {status}
        </p>
      )}
    </div>
  );
};

export default PartnerForm