
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedOn from './components/FeaturedOn';
import TargetAudience from './components/TargetAudience';
import SocialProof from './components/SocialProof';
import Demo from './components/Demo';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-brand-dark min-h-screen text-white font-sans overflow-x-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#2d2d2d_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>
      <div className="relative z-10">
        <Header />
        <main className="container mx-auto px-6">
          <Hero />
          <Demo />
          <FeaturedOn />
          <TargetAudience />
          <SocialProof />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;