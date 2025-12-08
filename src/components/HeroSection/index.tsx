import React from 'react';
import Particles from './Particles';
import { motion } from 'framer-motion';

const HeroSection:React.FC = () => (
  <div className="relative w-full h-screen">
    <Particles
      particleCount={200}
      particleColors={['#FFBB23', '#80B28F']}
      moveParticlesOnHover={true}
      particleSpread={10}
      particleBaseSize={100}
      speed={0.1}
    />
    <div id="hero" className="absolute inset-0 z-10 flex flex-col items-center justify-center max-w-5xl px-6 mx-auto text-center text-white">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-2xl font-bold leading-tight md:text-6xl"
      >
        AI Voice Agents Trusted by{" "}
        <span className="text-yellowBrand">Leading Call Centers</span>{" "}
        Worldwide
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="max-w-3xl mt-6 leading-relaxed text-gray-300 text-md md:text-2xl"
      >
        Powering high-performance call centers across the Philippines, India, Sri
        Lanka, South Africa, Latin America, and more — delivering natural-sounding,
        scalable autonomous voice agents built for real BPO environments.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex flex-col items-center justify-center gap-4 mt-10 sm:flex-row"
      >
        <button className="px-8 py-4 font-bold text-black transition rounded-lg bg-yellowBrand hover:bg-yellow-400">
          Book a Demo
        </button>

        <button className="px-8 py-4 transition border rounded-lg border-white/30 hover:bg-white/10">
          Try the AI Voice Agent Live
        </button>
      </motion.div>
    </div>
  </div>
);

export default HeroSection;
