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
      className={`border-t py-12 transition-colors duration-500 ${
        theme === "dark" ? "border-white/10 bg-black/30 text-white" : "border-lightText/15 bg-lightBg/60 text-lightText"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid gap-12 md:grid-cols-[1fr_auto] md:items-start">
          <div>
            <div
              onClick={() => scrollToSection("hero")}
              className="inline-block cursor-pointer"
            >
              <img src={logo} alt="Humalogue" className="h-auto w-32" />
            </div>
            <p className={`mt-5 max-w-xs text-sm leading-relaxed ${theme === "dark" ? "text-white/45" : "text-lightText/55"}`}>
              Autonomous voice infrastructure for teams that operate everywhere.
            </p>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 md:gap-20">
            <div>
              <p className={`mb-4 font-mono text-[10px] uppercase tracking-[0.2em] ${theme === "dark" ? "text-white/35" : "text-lightText/40"}`}>
                Navigate
              </p>
              <div className="flex flex-col items-start gap-3 font-mono text-xs uppercase tracking-[0.08em]">
                <button onClick={() => scrollToSection("hero")} className="transition hover:text-yellowBrand">Home</button>
                <button onClick={() => scrollToSection("whychooseus")} className="transition hover:text-yellowBrand">Why us</button>
                <button onClick={() => scrollToSection("features")} className="transition hover:text-yellowBrand">Features</button>
                <button onClick={() => scrollToSection("contact")} className="transition hover:text-yellowBrand">Contact</button>
              </div>
            </div>
            <div>
              <p className={`mb-4 font-mono text-[10px] uppercase tracking-[0.2em] ${theme === "dark" ? "text-white/35" : "text-lightText/40"}`}>
                Legal
              </p>
              <div className="flex flex-col items-start gap-3 font-mono text-xs uppercase tracking-[0.08em]">
          <Link
            to="/terms-of-service"
            className="transition hover:text-yellowBrand"
          >
            Terms of Service
          </Link>
          <Link
            to="/privacy-policy"
            className="transition hover:text-yellowBrand"
          >
            Privacy Policy
          </Link>
          <Link
            to="/acceptable-use-policy"
            className="transition hover:text-yellowBrand"
          >
            Acceptable Use Policy
          </Link>
          <Link
            to="/responsible-ai-policy"
            className="transition hover:text-yellowBrand"
          >
            Responsible AI Policy
          </Link>
              </div>
            </div>
          </div>
        </div>
        <div className={`mt-12 flex flex-col gap-3 border-t pt-5 font-mono text-[10px] uppercase tracking-[0.16em] sm:flex-row sm:items-center sm:justify-between ${theme === "dark" ? "border-white/10 text-white/35" : "border-lightText/15 text-lightText/40"}`}>
          <span>Humalogue / autonomous voice infrastructure</span>
          <span>&copy; {new Date().getFullYear()} / all systems reserved</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;