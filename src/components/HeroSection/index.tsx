import React, { useState } from 'react';
import Particles from './Particles';
import { motion } from 'framer-motion';
import { useAtom } from 'jotai/react';
import { themeAtom } from '../../atom/themeAtom';
import LeadCaptureModal from "../Modal/LeadCaptureModal";
import WhatsAppButton from "../WhatsAppButton";
import { ArrowDownRight, Activity, Radio } from "lucide-react";

const darkParticleColors = ['#d7ff48', '#ffffff', '#6f7d72'];
const lightParticleColors = ['#8eaa00', '#182018', '#b3c77a'];

const HeroSection: React.FC = () => {
  const [theme] = useAtom(themeAtom);
    const [openModal, setOpenModal] = useState(false);

  return (
    <section className="relative w-full min-h-screen overflow-hidden hero-shell">
      <Particles
        particleCount={260}
        particleColors={theme === 'dark' ? darkParticleColors : lightParticleColors}
        moveParticlesOnHover={true}
        particleSpread={3.2}
        particleBaseSize={110}
        speed={theme === 'dark' ? 0.1 : 0.08}
        alphaParticles={true}
      />
      <div
        id="hero"
        className={`hero-content absolute inset-0 z-10 mx-auto flex max-w-7xl flex-col justify-center px-6 pt-0 md:pt-24 transition-colors duration-500 md:px-12 ${theme === 'dark' ? 'text-white' : 'text-lightText'}`}
      >
        <div className="hero-kicker mb-8 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-yellowBrand">
          <span className="status-dot" /> Autonomous voice infrastructure / 01
        </div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-5xl text-4xl font-semibold leading-[0.96] tracking-[-0.045em] md:text-8xl lg:text-[7.2rem]"
        >
          High-Volume Call Center Operations. Fully Run on AI
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className={`mt-8 max-w-xl text-base leading-relaxed transition-colors duration-500 md:text-lg ${
            theme === 'dark' ? 'text-gray-300' : 'text-lightText/80'
          }`}
        >
          Built to handle 1,000 or 100,000 calls without missing a beat.
          Same infrastructure, zero recruiting, zero ceiling.
        </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-row items-center gap-2 mt-10 sm:gap-5"
      >
        <button
          onClick={() => setOpenModal(true)}
          className="inline-flex items-center gap-3 rounded-xl bg-yellowBrand px-4 py-3 text-xs font-bold uppercase tracking-[0.1em] text-black transition-colors hover:bg-yellow-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellowBrand focus-visible:ring-offset-2 sm:gap-4 sm:px-6 sm:py-4 sm:text-sm sm:tracking-[0.14em]"
        >
          <span className="sm:hidden">Demo</span>
          <span className="hidden sm:inline">Book a demo</span>
          <ArrowDownRight className="h-4 w-4 sm:h-[18px] sm:w-[18px]" />
        </button>
        <WhatsAppButton />
      </motion.div>

      <div className={`hero-readout absolute bottom-8 left-6 right-6 flex max-w-7xl flex-col gap-5 border-t pt-4 text-[10px] uppercase tracking-[0.18em] md:left-12 md:right-12 md:flex-row md:items-center md:justify-between ${theme === 'dark' ? 'border-white/15 text-white/45' : 'border-black/15 text-lightText/55'}`}>
        <span className="flex items-center gap-2"><Activity size={14} className="text-yellowBrand" /> System status: operational</span>
        <span className="flex items-center gap-2"><Radio size={14} className="text-yellowBrand" /> 24 / 7 / everywhere</span>
        <span>01. Philippines / 02. India / 03. Global</span>
      </div>

      </div>
      <LeadCaptureModal open={openModal} onClose={() => setOpenModal(false)} />
    </section>
  );
};

export default HeroSection;
