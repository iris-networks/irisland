
import React from 'react';
import { GraphoLogo, SignumLogo, VectraLogo, OptimalLogo, BoltLogo } from './icons/Icons';

const FeaturedOn = () => {
  const logos = [<GraphoLogo />, <SignumLogo />, <VectraLogo />, <OptimalLogo />, <BoltLogo />];

  return (
    <section className="py-16 text-center">
      <p className="text-brand-gray-200 mb-8 animate-fadeInUp">Our services are featured on</p>
      <div className="flex justify-center items-center gap-10 sm:gap-16 flex-wrap">
        {logos.map((Logo, index) => (
          <div key={index} className={`animate-fadeInUp animation-delay-${(index + 1) * 100}`}>
            {Logo}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedOn;