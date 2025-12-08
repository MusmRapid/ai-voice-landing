import React from "react";
import { motion } from "framer-motion";

const FinalCTA: React.FC = () => {
  return (
    <section
      id="final-cta"
      className="relative py-32 text-white bg-gradient-to-r from-yellowBrand/20 via-yellowBrand/10 to-yellowBrand/20"
    >
      <div className="max-w-5xl px-6 mx-auto text-center">
        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-6 text-4xl font-bold leading-tight md:text-6xl"
        >
          Transform Your Call Center Operations Today
        </motion.h2>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mb-12 text-lg text-gray-200 md:text-2xl"
        >
          Scale effortlessly, improve customer experience, and reduce operational costs
          with AI Voice Agents — no additional hiring or infrastructure required.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center gap-6 sm:flex-row"
        >
          <a
            href="#book-demo"
            className="px-10 py-4 font-bold text-black transition rounded-lg bg-yellowBrand hover:bg-yellow-400"
          >
            Book a Demo
          </a>
          <a
            href="#contact"
            className="px-10 py-4 transition border rounded-lg border-white/30 hover:bg-white/10"
          >
            Speak with an AI Deployment Specialist
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
