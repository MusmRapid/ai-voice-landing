import React from "react";
import { useAtom } from "jotai/react";
import { themeAtom } from "../../atom/themeAtom";
import { Link } from "react-router-dom";
import logo from "/logo.png";

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
        theme === "dark" ? "text-white bg-black/20" : "text-lightText bg-lightBg/50"
      }`}
    >
      <div className="flex flex-col items-center justify-center px-6 mx-auto max-w-7xl md:px-12">
        {/* Logo */}
        <div
          onClick={() => scrollToSection("hero")}
          className={`cursor-pointer text-xl font-bold transition-colors duration-500 ${
            theme === "dark" ? "text-yellowBrand" : "text-heroLeft"
          }`}
        >
          <img src={logo} alt="AI Voice Agent Logo" className="w-32 h-auto" />
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-6 mt-6 text-sm font-medium">
          <Link
            to="/terms-of-service"
            className={`transition-colors duration-300 ${
              theme === "dark" ? "text-gray-300 hover:text-yellowBrand" : "text-lightText/80 hover:text-heroLeft"
            }`}
          >
            Terms of Service
          </Link>
          <Link
            to="/privacy-policy"
            className={`transition-colors duration-300 ${
              theme === "dark" ? "text-gray-300 hover:text-yellowBrand" : "text-lightText/80 hover:text-heroLeft"
            }`}
          >
            Privacy Policy
          </Link>
          <Link
            to="/acceptable-use-policy"
            className={`transition-colors duration-300 ${
              theme === "dark" ? "text-gray-300 hover:text-yellowBrand" : "text-lightText/80 hover:text-heroLeft"
            }`}
          >
            Acceptable Use Policy
          </Link>
          <Link
            to="/responsible-ai-policy"
            className={`transition-colors duration-300 ${
              theme === "dark" ? "text-gray-300 hover:text-yellowBrand" : "text-lightText/80 hover:text-heroLeft"
            }`}
          >
            Responsible AI Policy
          </Link>
        </div>
      </div>

      {/* Copyright */}
      <p
        className={`mt-6 text-sm text-center transition-colors duration-500 ${
          theme === "dark" ? "text-gray-400" : "text-lightText/80"
        }`}
      >
        &copy; {new Date().getFullYear()} Humalogue. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;