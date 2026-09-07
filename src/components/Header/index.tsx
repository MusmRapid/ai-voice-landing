import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { themeAtom } from "../../atom/themeAtom";
import { useAtom } from "jotai/react";
import { Sun, Moon } from "lucide-react";
import logo from '/logo.png';

const navItems = [
  // { name: "Recordings", to: "recordings" },
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
     className={`fixed inset-x-0 top-0 z-50 border-b backdrop-blur-xl transition-all duration-500 ${
       theme === "dark"
         ? isScrolled
           ? "border-white/15 bg-black/80"
           : "border-white/10 bg-black/35"
         : isScrolled
           ? "border-lightText/15 bg-lightBg/90"
           : "border-lightText/10 bg-lightBg/60"
     }`}

      initial={{ y: -20 }}
      animate={{ y: 0 }}
    >
    <div className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between px-6 md:px-12">
      <div
        onClick={() => {
          scrollToSection("hero");
          setMenuOpen(false);
        }}
        className="cursor-pointer select-none"
      >
        <img src={logo} alt="Humalogue" className="h-auto w-28"/>
      </div>

      <div className="items-center hidden gap-8 md:flex">
        <nav className="flex items-center gap-7 font-mono text-[11px] uppercase tracking-[0.12em]">
          {navItems.map((item) => (
            <button
              key={item.to}
              onClick={() => scrollToSection(item.to)}
              className={`
                cursor-pointer transition-colors
                ${
                  activeSection === item.to
                    ? "text-yellowBrand"
                    : theme === "dark"
                      ? "text-white/65 hover:text-yellowBrand"
                      : "text-lightText/65 hover:text-yellowBrand"
                }
              `}
            >
              {item.name}
            </button>
          ))}
        </nav>

        <button
          onClick={toggleTheme}
          aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          className={`border-l pl-6 transition-colors
            ${theme === 'dark' ? 'text-white hover:text-yellowBrand' : 'text-lightText hover:text-yellowBrand'}
          `}
        >
          {theme === 'dark' ? <Sun /> : <Moon />}
        </button>
      </div>

      <div className="flex items-center gap-5 md:hidden">
        <button
          onClick={toggleTheme}
          aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          className={`transition-colors
            ${theme === "dark" ? "text-white" : "text-lightText"} 
            hover:text-yellowBrand`}
        >
          {theme === "dark" ? <Sun /> : <Moon />}
        </button>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          className={`transition-colors
            ${theme === "dark" ? "text-white" : "text-lightText"} 
            hover:text-yellowBrand`}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </div>


    {menuOpen && (
      <div className={`
        flex flex-col gap-5 border-t px-6 py-5 font-mono text-xs uppercase tracking-[0.14em]
        ${theme === 'dark' ? 'border-white/10 bg-black/95 text-white' : 'border-lightText/10 bg-lightBg/95 text-lightText'}
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
