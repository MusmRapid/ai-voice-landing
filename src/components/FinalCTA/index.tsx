import React, { useState } from "react";
import { motion } from "framer-motion";
import { useAtom } from "jotai/react";
import { themeAtom } from "../../atom/themeAtom";
import LeadCaptureModal from "../Modal/LeadCaptureModal";

const FinalCTA: React.FC = () => {
  const [theme] = useAtom(themeAtom);
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <section
        id="contact"
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
            className="mb-6 text-4xl font-bold md:text-6xl"
          >
            Transform Your Call Center Operations Today
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto mb-12 text-lg md:text-2xl"
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
            <button
              onClick={() => setOpenModal(true)}
              className="px-10 py-4 font-bold text-black transition rounded-lg bg-yellowBrand hover:bg-yellow-400"
            >
              Book a Demo
            </button>

            {/* <button
              onClick={() => setOpenModal(true)}
              className={`px-10 py-4 border rounded-lg transition-colors duration-500 ${
                theme === "dark"
                  ? "border-white/30 hover:bg-white/10 text-white"
                  : "border-lightText/30 hover:bg-lightText/10 text-lightText"
              }`}
            >
              Speak with an AI Deployment Specialist
            </button> */}
          </motion.div>
        </div>
      </section>

      <LeadCaptureModal open={openModal} onClose={() => setOpenModal(false)} />
    </>
  );
};

export default FinalCTA;
