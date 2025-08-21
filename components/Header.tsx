
import React from 'react';
import { ArrowRightIcon, GitHubIcon } from './icons/Icons';

const Header = () => {
  return (
    <header className="py-5 animate-fadeInDown">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="text-2xl font-bold tracking-wider">
          iris
        </div>
        <div className="flex items-center gap-4">
          <a href="https://github.com/iris-networks/terminator" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-300">
            <GitHubIcon />
          </a>
          <a href="https://github.com/iris-networks/terminator" target="_blank" rel="noopener noreferrer" className="btn-animated-border text-white font-semibold py-2 px-4 rounded-lg flex items-center gap-2 transition-all duration-300">
            Let's Talk
            <ArrowRightIcon />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;