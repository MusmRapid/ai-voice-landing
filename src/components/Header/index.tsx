import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { themeAtom } from "../../atom/themeAtom";
import { useAtom } from "jotai/react";
import {Sun , Moon} from "lucide-react";

const navItems = [
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

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [theme, setTheme] = useAtom(themeAtom);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 100; 
      let currentSection = "hero";

      navItems.forEach((item) => {
        const el = document.getElementById(item.to);
        if (el && el.offsetTop <= scrollPos) {
          currentSection = item.to;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); 
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <motion.header
      className={`fixed top-5 z-50 mx-auto inset-x-0 transition-all duration-500
        ${isScrolled ? "backdrop-blur-md bg-black/30 shadow-md" : "bg-black/20"} 
        rounded-2xl w-[95%] max-w-7xl`}
      initial={{ y: -20 }}
      animate={{ y: 0 }}
    >
    <div className="flex items-center justify-between h-16 px-6">
      <div
        onClick={() => {
          scrollToSection("hero");
          setMenuOpen(false);
        }}
        className={`text-2xl font-bold cursor-pointer select-none ${theme === 'dark' ? 'text-yellowBrand' : 'text-heroLeft'}`}
      >
        AI Voice
      </div>

      <div className="items-center hidden space-x-6 md:flex">
        <nav className="flex space-x-8 font-inter">
          {navItems.map((item) => (
            <button
              key={item.to}
              onClick={() => scrollToSection(item.to)}
              className={`
                transition-colors cursor-pointer
                ${activeSection === item.to
                  ? theme === 'dark'
                    ? 'text-yellowBrand'
                    : 'text-heroLeft' // active in light mode
                  : theme === 'dark'
                    ? 'text-white hover:text-yellowBrand'
                    : 'text-lightText hover:text-yellowBrand'}
              `}
            >
              {item.name}
            </button>
          ))}
        </nav>

        <button
          onClick={toggleTheme}
          className={`
            transition-colors
            ${theme === 'dark' ? 'text-white hover:text-yellowBrand' : 'text-lightText hover:text-yellowBrand'}
          `}
        >
          {theme === 'dark' ? <Sun /> : <Moon />}
        </button>
      </div>

      <div className="flex items-center space-x-4 md:hidden">
        <button
          onClick={toggleTheme}
          className="text-white transition-colors hover:text-yellowBrand"
        >
          {theme === 'dark' ? <Sun /> : <Moon />}
        </button>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white transition-colors hover:text-yellowBrand"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </div>


    {menuOpen && (
      <div className={`
        flex flex-col px-6 py-4 mt-2 space-y-4 rounded-xl backdrop-blur-md
        ${theme === 'dark' ? 'bg-black/70 text-white' : 'bg-lightBg/90 text-lightText'}
      `}>
        {navItems.map((item) => (
          <button
            key={item.to}
            onClick={() => {
              scrollToSection(item.to);
              setMenuOpen(false);
            }}
            className={`
              transition-colors cursor-pointer
              ${activeSection === item.to
                ? 'text-yellowBrand'
                : 'hover:text-yellowBrand'}
            `}
          >
            {item.name}
          </button>
        ))}
      </div>
    )}

    </motion.header>
  );
};

export default Header;
