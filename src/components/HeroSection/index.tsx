import React from 'react';
import Particles from './Particles';

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
    <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-white">
      <h1 className="text-5xl font-bold md:text-7xl">AI Voice Agent</h1>
      <p className="max-w-3xl mt-8 text-xl text-center text-gray-300 md:text-2xl">
        Revolutionizing communication with AI-powered voice agents — from insurance to home improvement, in 17 languages.
      </p>
    </div>
  </div>
);

export default HeroSection;
