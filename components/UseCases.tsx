
import React from 'react';
import { USE_CASES } from '../constants';

const UseCases = () => {
  return (
    <section className="py-24">
      <div className="text-center mb-16 animate-fadeInUp">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Powerful RPA Use Cases</h2>
        <p className="mt-4 text-lg text-brand-gray-200 max-w-2xl mx-auto">Automate complex processes across industries to unlock new levels of productivity.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {USE_CASES.map((useCase, index) => (
          <div 
            key={useCase.title} 
            className="bg-brand-gray-400/50 border border-transparent hover:border-brand-orange rounded-xl p-8 transition-all duration-300 group animate-fadeInUp"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <div className="text-brand-orange mb-4 group-hover:scale-110 transition-transform duration-300 w-12 h-12">
              {useCase.icon}
            </div>
            <h3 className="text-2xl font-bold mb-3">{useCase.title}</h3>
            <p className="text-brand-gray-200">{useCase.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UseCases;