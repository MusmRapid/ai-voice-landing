import React from "react";
import { motion } from "framer-motion";
import { useAtom } from "jotai/react";
import { themeAtom } from "../../atom/themeAtom";

const FinalCTA: React.FC = () => {
  const [theme] = useAtom(themeAtom);

  return (
    <section
      id="final-cta"
      className={`relative py-32 transition-colors duration-500 ${
        theme === "dark"
          ? "text-white bg-gradient-to-r from-yellowBrand/20 via-yellowBrand/10 to-yellowBrand/20"
          : "text-lightText bg-gradient-to-r from-yellowBrand/10 via-yellowBrand/5 to-yellowBrand/10"
      }`}
    >
      <div className="max-w-5xl px-6 mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`mb-6 text-4xl font-bold leading-tight md:text-6xl transition-colors duration-500 ${
            theme === "dark" ? "text-white" : "text-lightText"
          }`}
        >
          Transform Your Call Center Operations Today
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
          className={`max-w-3xl mx-auto mb-12 text-lg md:text-2xl transition-colors duration-500 ${
            theme === "dark" ? "text-gray-200" : "text-lightText/80"
          }`}
        >
          Scale effortlessly, improve customer experience, and reduce operational costs
          with AI Voice Agents — no additional hiring or infrastructure required.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center gap-6 sm:flex-row"
        >
          <a
            href="#book-demo"
            className={`px-10 py-4 font-bold rounded-lg transition-colors duration-500 ${
              theme === "dark"
                ? "text-black bg-yellowBrand hover:bg-yellow-400"
                : "text-black bg-yellowBrand/90 hover:bg-yellowBrand/70"
            }`}
          >
            Book a Demo
          </a>
          <a
            href="#contact"
            className={`px-10 py-4 border rounded-lg transition-colors duration-500 ${
              theme === "dark"
                ? "border-white/30 hover:bg-white/10 text-white"
                : "border-lightText/30 hover:bg-lightText/10 text-lightText"
            }`}
          >
            Speak with an AI Deployment Specialist
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
