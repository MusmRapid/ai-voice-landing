import React from 'react';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer: React.FC = () => (
  <footer className="py-12 mt-24 text-white bg-black/80 backdrop-blur-md">
    <div className="flex flex-col items-center justify-between px-6 mx-auto max-w-7xl md:flex-row md:px-12">
      <div className="mb-4 text-xl font-bold text-yellowBrand md:mb-0">
        AIVoice
      </div>
      <div className="flex mb-4 space-x-6 md:mb-0">
        <a href="#" className="transition-colors hover:text-yellowBrand">Home</a>
        <a href="#" className="transition-colors hover:text-yellowBrand">Features</a>
        <a href="#" className="transition-colors hover:text-yellowBrand">Demo</a>
        <a href="#" className="transition-colors hover:text-yellowBrand">Contact</a>
      </div>
      <div className="flex space-x-4">
        <a href="#"><FaTwitter size={20} /></a>
        <a href="#"><FaLinkedin size={20} /></a>
        <a href="#"><FaGithub size={20} /></a>
      </div>
    </div>
    <p className="mt-6 text-sm text-center text-gray-400">
      &copy; {new Date().getFullYear()} AI Voice Agent. All rights reserved.
    </p>
  </footer>
);

export default Footer;
