import React from 'react';
import { ArrowRightIcon } from './icons/Icons';

const Hero = () => {
  return (
    <section className="text-center py-24 sm:py-32 md:py-40">
      <div className="inline-flex items-center bg-green-900/50 text-green-300 border border-green-700 rounded-full px-4 py-1 mb-6 text-sm animate-fadeInUp">
        <span className="relative flex h-2 w-2 mr-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
        </span>
        All Systems Online
      </div>
      <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter leading-tight">
        <span className="block animate-fadeInUp animation-delay-100">Our AI agents automate workflows,</span>
        <span className="block text-brand-orange animate-fadeInUp animation-delay-200">so you don't have to.</span>
      </h1>
      <p className="max-w-xl mx-auto mt-8 text-lg text-brand-gray-200 animate-fadeInUp animation-delay-300">
        Iris, our flagship AI product, is designed to bring powerful automation to your fingertips. Follow our progress on <a href="https://github.com/iris-networks/terminator" target="_blank" rel="noopener noreferrer" className="underline hover:text-brand-orange">GitHub</a>.
      </p>
      <div className="mt-10 animate-fadeInUp animation-delay-400 flex flex-col sm:flex-row gap-4 justify-center items-center">
        <a 
          href="https://github.com/iris-networks/terminator" 
          target="_blank" 
          rel="noopener noreferrer"
          className="btn-animated-border text-white font-semibold py-3 px-6 rounded-lg flex items-center gap-2 transition-all duration-300"
        >
          View on GitHub
          <ArrowRightIcon />
        </a>
        <a 
          href="https://github.com/iris-networks/terminator" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-brand-orange hover:bg-brand-orange/90 text-white font-semibold py-3 px-6 rounded-lg flex items-center gap-2 transition-all duration-300"
        >
          Get Started
          <ArrowRightIcon />
        </a>
      </div>
    </section>
  );
};

export default Hero;