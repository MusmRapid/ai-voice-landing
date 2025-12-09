import React from 'react';
import { useAtom } from 'jotai/react';
import { themeAtom } from '../../atom/themeAtom';

const footerItems = [
  { name: "Why Choose Us", to: "whychooseus" },
  { name: "Features", to: "features" },
  { name: "Regions", to: "regions" },
  { name: "Advantages", to: "advantages" },
  { name: "Testimonials", to: "testimonials" },
  { name: "Contact", to: "contact" },
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

const Footer: React.FC = () => {
  const [theme] = useAtom(themeAtom);

  return (
    <footer
      className={`py-12 transition-colors duration-500 backdrop-blur-md ${
        theme === 'dark' ? 'text-white bg-black/20' : 'text-lightText bg-lightBg/50'
      }`}
    >
      <div className="flex flex-col items-center justify-between px-6 mx-auto max-w-7xl md:flex-row md:px-12">

        <div 
          onClick={() => scrollToSection("hero")} 
          className={`mb-4 cursor-pointer text-xl font-bold md:mb-0 transition-colors duration-500 ${
            theme === 'dark' ? 'text-yellowBrand' : 'text-heroLeft'
          }`}
        >
          AI Voice
        </div>

        <div className="flex flex-wrap justify-center mb-4 space-x-6 md:mb-0">
          {footerItems.map(item => (
            <button
              key={item.to}
              onClick={() => scrollToSection(item.to)}
              className={`transition-colors duration-500 cursor-pointer ${
                theme === 'dark'
                  ? 'hover:text-yellowBrand text-white'
                  : 'hover:text-yellowBrand text-lightText'
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* 🔥 Removed social icons from here */}

      </div>

      <p className={`mt-6 text-sm text-center transition-colors duration-500 ${
        theme === 'dark' ? 'text-gray-400' : 'text-lightText/80'
      }`}>
        &copy; {new Date().getFullYear()} AI Voice Agent. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
