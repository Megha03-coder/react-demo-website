import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-purple-900 to-indigo-900 text-white py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-pattern opacity-20"></div>
      <div className="absolute top-0 left-1/4 w-2 h-2 bg-white rounded-full animate-ping"></div>
      <div className="absolute bottom-4 right-1/3 w-1 h-1 bg-purple-400 rounded-full animate-pulse"></div>
      <div className="absolute top-8 right-1/4 w-3 h-3 bg-pink-400 rounded-full animate-bounce"></div>
      
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-4 gradient-text animate-float">
            Let's Connect
          </h3>
          <div className="flex justify-center space-x-6">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer animate-pulse">
              <span className="text-xl">📧</span>
            </div>
            <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-red-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer animate-pulse" style={{animationDelay: '0.5s'}}>
              <span className="text-xl">📱</span>
            </div>
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer animate-pulse" style={{animationDelay: '1s'}}>
              <span className="text-xl">💼</span>
            </div>
          </div>
        </div>
        <p className="text-gray-300 hover:text-white transition-colors duration-300 transform hover:scale-105">
          © 2025 Portfolio Website. All rights reserved. Built with React & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};

export default Footer;