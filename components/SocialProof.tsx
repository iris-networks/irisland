
import React from 'react';
import { GoogleLogo, MicrosoftLogo, AppleLogo, AmazonLogo, NetflixLogo, TeslaLogo } from './icons/Icons';

const SocialProof = () => {
  const logos = [
    <GoogleLogo />, <MicrosoftLogo />, <AppleLogo />, <AmazonLogo />, <NetflixLogo />, <TeslaLogo />
  ];

  return (
    <section className="py-24">
      <div className="text-center mb-12 animate-fadeInUp">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Powering Professionals From World-Class Companies</h2>
        <p className="mt-4 text-lg text-brand-gray-200 max-w-2xl mx-auto">Our tools are trusted by individuals and teams at the world's leading organizations to build faster and work smarter.</p>
      </div>
      <div className="relative overflow-hidden max-w-4xl mx-auto">
        <div className="flex animate-carousel gap-12 items-center">
          {[...logos, ...logos].map((Logo, index) => (
            <div 
              key={index} 
              className="flex-shrink-0"
            >
              {Logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;