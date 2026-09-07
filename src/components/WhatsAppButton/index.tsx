import React from "react";
import { FaWhatsapp } from "react-icons/fa";

interface WhatsAppButtonProps {
  phoneNumber?: string;
  message?: string;
  label?: string;
  className?: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  phoneNumber = "+923109562202",
  message = "Hi, I would like to learn more about Humalogue.",
  label = "Chat on WhatsApp",
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
      className={`group inline-flex items-center gap-3 bg-[#25D366] px-6 py-4 text-sm font-bold uppercase tracking-[0.14em] text-[#062b16] transition hover:bg-[#5bea8b] ${className}`}
    >
      <FaWhatsapp size={21} aria-hidden="true" />
      <span>{label}</span>
    </a>
  );
};

export default WhatsAppButton;