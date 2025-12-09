import React from 'react';
import { useAtom } from 'jotai/react';
import { themeAtom } from '../../atom/themeAtom';

const Footer: React.FC = () => {
  const [theme] = useAtom(themeAtom);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer
      className={`py-12 transition-colors duration-500 backdrop-blur-md ${
        theme === 'dark' ? 'text-white bg-black/20' : 'text-lightText bg-lightBg/50'
      }`}
    >
      <div className="flex flex-col items-center justify-center px-6 mx-auto max-w-7xl md:px-12">
        <div 
          onClick={() => scrollToSection("hero")} 
          className={`cursor-pointer text-xl font-bold transition-colors duration-500 ${
            theme === 'dark' ? 'text-yellowBrand' : 'text-heroLeft'
          }`}
        >
          AI Voice
        </div>
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
