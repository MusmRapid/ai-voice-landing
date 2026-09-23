import React from "react";
import { FaWhatsapp } from "react-icons/fa";

interface WhatsAppButtonProps {
  phoneNumber?: string;
  message?: string;
  label?: string;
  mobileLabel?: string;
  className?: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  phoneNumber = "+923495081801",
  message = "Hi, I would like to learn more about Humalogue.",
  label = "Chat on WhatsApp",
  mobileLabel = "WhatsApp",
  className = "",
}) => {
  const normalizedNumber = phoneNumber.replace(/\D/g, "");
  const whatsappUrl = `https://wa.me/${normalizedNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label={`${label} at ${phoneNumber}`}
      className={`inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-4 py-3 text-xs font-bold uppercase tracking-[0.1em] text-[#062b16] transition-colors hover:bg-[#5bea8b] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 sm:gap-3 sm:px-6 sm:py-4 sm:text-sm sm:tracking-[0.14em] ${className}`}
    >
      <FaWhatsapp className="h-[18px] w-[18px] sm:h-[21px] sm:w-[21px]" aria-hidden="true" />
      <span className="sm:hidden">{mobileLabel}</span>
      <span className="hidden sm:inline">{label}</span>
    </a>
  );
};

export default WhatsAppButton;