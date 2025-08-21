
import React from 'react';
import { BuildingIcon, UserIcon } from './icons/Icons';
import { ArrowRightIcon } from './icons/Icons';

const TargetAudience = () => {
  return (
    <section className="py-24">
      <div className="text-center mb-16 animate-fadeInUp">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Built for Everyone</h2>
        <p className="mt-4 text-lg text-brand-gray-200 max-w-2xl mx-auto">Whether you're scaling a business or boosting your personal productivity, Iris has you covered.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* B2B Card */}
        <div 
          className="bg-brand-gray-400/50 border border-transparent hover:border-brand-orange/70 rounded-xl p-8 transition-all duration-300 group animate-fadeInUp animation-delay-200 flex flex-col"
        >
          <div className="flex-grow">
            <div className="text-brand-orange mb-5 w-12 h-12 group-hover:scale-110 transition-transform duration-300">
              <BuildingIcon />
            </div>
            <h3 className="text-3xl font-bold mb-3">For Your Business</h3>
            <p className="text-brand-gray-200">
              Implement enterprise-grade automation to enhance team productivity, streamline complex workflows, and drive scalable growth.
            </p>
          </div>
          <div className="mt-6">
            <a 
              href="https://calendly.com/shanur-tryiris/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-animated-border text-white font-semibold py-2 px-5 rounded-lg inline-flex items-center gap-2 transition-all duration-300"
            >
              Book a Meeting
              <ArrowRightIcon />
            </a>
          </div>
        </div>
        
        {/* B2C Card */}
        <div 
          className="bg-brand-gray-400/50 border border-transparent hover:border-brand-orange/70 rounded-xl p-8 transition-all duration-300 group animate-fadeInUp animation-delay-300 flex flex-col"
        >
          <div className="flex-grow">
            <div className="text-brand-orange mb-5 w-12 h-12 group-hover:scale-110 transition-transform duration-300">
              <UserIcon />
            </div>
            <h3 className="text-3xl font-bold mb-3">For Personal Use</h3>
            <p className="text-brand-gray-200">
              Automate your repetitive daily tasks, manage personal projects effortlessly, and reclaim your time for what matters most.
            </p>
          </div>
          <div className="mt-6">
            <a 
              href="https://calendly.com/shanur-tryiris/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-animated-border text-white font-semibold py-2 px-5 rounded-lg inline-flex items-center gap-2 transition-all duration-300"
            >
              Book a Meeting
              <ArrowRightIcon />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;