
import React from 'react';

const Demo = () => {
  return (
    <section className="py-24">
      <div className="text-center mb-12 animate-fadeInUp">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">See Iris in Action</h2>
        <p className="mt-4 text-lg text-brand-gray-200 max-w-2xl mx-auto">
          Watch a quick walkthrough to see how Iris can revolutionize your workflows in under 2 minutes.
        </p>
      </div>
      <div 
        className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-xl shadow-2xl shadow-brand-orange/10 animate-fadeInUp animation-delay-200 aspect-video"
      >
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/KsJ1Nz74MWA"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

export default Demo;