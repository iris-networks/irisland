
import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-brand-gray-300 mt-16">
      <div className="container mx-auto px-6 py-8 text-center text-brand-gray-200">
        <p>&copy; {new Date().getFullYear()} HIVE LOGIC PTE. LTD. All rights reserved.</p>
        <p className="mt-2">A product by HIVE LOGIC PTE. LTD.</p>
        <p className="mt-2">Contact: <a href="https://github.com/iris-networks/terminator" target="_blank" rel="noopener noreferrer" className="text-brand-orange hover:underline">GitHub</a></p>
      </div>
    </footer>
  );
};

export default Footer;