import React, { useState } from "react";
import { motion } from "framer-motion";
import { useAtom } from "jotai/react";
import { themeAtom } from "../../atom/themeAtom";
import LeadCaptureModal from "../Modal/LeadCaptureModal";
import WhatsAppButton from "../WhatsAppButton";
import { ArrowDownRight, MoveUpRight } from "lucide-react";

const FinalCTA: React.FC = () => {
  const [theme] = useAtom(themeAtom);
  const [openModal, setOpenModal] = useState(false);
  const isDark = theme === "dark";

  return (
    <>
      <section
        id="contact"
        className={`relative overflow-hidden transition-colors duration-500 ${
          isDark ? "bg-[#d7ff48] text-black" : "bg-[#182018] text-[#f7f8f3]"
        }`}
      >
        <div className="relative px-6 mx-auto max-w-7xl md:px-12">
          <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.75fr)] lg:items-end lg:gap-24">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.7 }}
                className="mb-8 flex items-center gap-3 font-mono text-[10px] font-medium uppercase tracking-[0.24em] opacity-60"
              >
                <span className="w-8 h-px bg-current" />
                06 / Deployment ready
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="m-0 max-w-4xl text-left text-5xl font-semibold leading-[0.9] tracking-[-0.06em] md:text-8xl"
              >
                Put every conversation to work.
              </motion.h2>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7, delay: 0.12 }}
              className="pl-6 border-l border-current/30 md:pl-8"
            >
              <p className="max-w-md m-0 text-base leading-relaxed opacity-75 md:text-lg">
                Start with one workflow. Scale to every market. Our deployment
                team will help you find the first conversation worth automating.
              </p>

              <div className="flex flex-col items-start gap-4 mt-10 sm:flex-row sm:items-center">
                <button
                  onClick={() => setOpenModal(true)}
                  className="group inline-flex items-center gap-4 bg-black px-6 py-4 font-mono text-sm font-bold uppercase tracking-[0.14em] text-white transition hover:bg-white hover:text-black"
                >
                  Book a demo
                  <ArrowDownRight size={18} className="transition-transform group-hover:translate-x-1 group-hover:translate-y-1" />
                </button>
                <WhatsAppButton
                  className={`px-5 py-4 ${isDark ? "bg-white text-black hover:bg-black hover:text-white" : "bg-[#25D366] text-[#062b16]"}`}
                />
              </div>
            </motion.div>
          </div>

          <div className="mt-20 flex items-center justify-between border-t border-current/25 pt-4 font-mono text-[10px] uppercase tracking-[0.2em] opacity-60">
            <span>Humalogue / autonomous voice infrastructure</span>
            <span className="items-center hidden gap-2 md:flex">
              System ready <MoveUpRight size={14} />
            </span>
          </div>
        </div>
      </section>

      <LeadCaptureModal open={openModal} onClose={() => setOpenModal(false)} />
    </>
  );
};

export default FinalCTA;
