import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-purple-900 to-indigo-900 text-white py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-pattern opacity-20"></div>
      <div className="absolute top-0 left-1/4 w-2 h-2 bg-white rounded-full animate-ping"></div>
      <div className="absolute bottom-4 right-1/3 w-1 h-1 bg-purple-400 rounded-full animate-pulse"></div>
      <div className="absolute top-8 right-1/4 w-3 h-3 bg-pink-400 rounded-full animate-bounce"></div>
      
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
       
        <p className="text-gray-300 hover:text-white transition-colors duration-300 transform hover:scale-105">
          © 2025 Portfolio Website. All rights reserved. Built with React & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};

export default Footer;