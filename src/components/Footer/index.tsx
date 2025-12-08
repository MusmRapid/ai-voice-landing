import React from 'react';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

const footerItems = [
  { name: "Why Choose Us", to: "whychooseus" },
  { name: "Features", to: "features" },
  { name: "Regions", to: "regions" },
  { name: "Advantages", to: "advantages" },
  { name: "Testimonials", to: "testimonials" },
  { name: "Final CTA", to: "final-cta" },
];

const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    window.scrollTo({
      top: el.offsetTop - 80,
      behavior: "smooth",
    });
  }
};

const Footer: React.FC = () => (
  <footer className="py-12 text-white backdrop-blur-md">
    <div className="flex flex-col items-center justify-between px-6 mx-auto max-w-7xl md:flex-row md:px-12">
      <div className="mb-4 text-xl font-bold text-yellowBrand md:mb-0">
        AIVoice
      </div>

      <div className="flex flex-wrap justify-center mb-4 space-x-6 md:mb-0">
        {footerItems.map(item => (
          <button
            key={item.to}
            onClick={() => scrollToSection(item.to)}
            className="transition-colors cursor-pointer hover:text-yellowBrand"
          >
            {item.name}
          </button>
        ))}
      </div>

      <div className="flex space-x-4">
        <a href="#"><FaTwitter size={20} /></a>
        <a href="#"><FaLinkedin size={20} /></a>
        <a href="#"><FaGithub size={20} /></a>
      </div>
    </div>

    <p className="mt-6 text-sm text-center text-gray-400">
      &copy; {new Date().getFullYear()} AI Voice Agent. All rights reserved.
    </p>
  </footer>
);

export default Footer;
