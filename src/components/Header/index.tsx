import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", to: "hero" },
  { name: "Features", to: "features" },
  { name: "How It Works", to: "howitworks" },
  { name: "Demo", to: "demo" },
  { name: "Pricing", to: "pricing" },
  { name: "Contact", to: "footer" },
];

interface HeaderProps {
  onMenuClick?: () => void;
}

const Header: React.FC<HeaderProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
    className={`fixed top-5 z-50 mx-auto inset-x-0 transition-all duration-500
        ${isScrolled ? "backdrop-blur-md bg-black/30 shadow-md" : "bg-black/20"} 
        rounded-2xl w-[95%] max-w-6xl`}
    initial={{ y: -20 }}
    animate={{ y: 0 }}
    >
      <div className="flex items-center justify-between h-16 px-6">
        {/* Left: Logo */}
        <div className="text-2xl font-bold cursor-pointer select-none text-yellowBrand">
          AIVoice
        </div>

        {/* Right: Desktop Nav */}
        <nav className="hidden space-x-8 text-white md:flex font-inter">
          {navItems.map((item) => (
            <ScrollLink
              key={item.to}
              to={item.to}
              smooth={true}
              duration={500}
              offset={-80}
              className="transition-colors cursor-pointer hover:text-yellowBrand"
            >
              {item.name}
            </ScrollLink>
          ))}
        </nav>

        {/* Right: Mobile Menu */}
        <div className="flex items-center md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white transition-colors hover:text-yellowBrand"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="flex flex-col px-6 py-4 mt-2 space-y-4 text-white md:hidden bg-black/70 backdrop-blur-md rounded-xl">
          {navItems.map((item) => (
            <ScrollLink
              key={item.to}
              to={item.to}
              smooth={true}
              duration={500}
              offset={-80}
              onClick={() => setMenuOpen(false)}
              className="transition-colors cursor-pointer hover:text-yellowBrand"
            >
              {item.name}
            </ScrollLink>
          ))}
        </div>
      )}
    </motion.header>
  );
};

export default Header;
