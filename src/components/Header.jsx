import React from 'react';
import logo from '../assets/image.png';

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b mt-6 bg-pattern">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="grid grid-cols-3 items-center">
          {/* Left - Logo */}
          <div className="flex items-center">
            <img 
              src={logo} 
              alt="Logo" 
              className="w-2 h-3 mr-3 rounded-full animate-glow image-hover"
            />
           
          </div>
          
          {/* Center - Main Heading */}
          <div className="text-center">
            <h1 className="text-3xl font-bold gradient-text animate-float">
               My Portfolio
            </h1>
          </div>
          
          {/* Right - Navigation */}
          <nav className="flex justify-end space-x-8">
            <a href="#home" className="text-gray-800 hover:text-blue-600 transition-all duration-300 font-medium hover:scale-110 transform">Home</a>
            <a href="#about" className="text-gray-800 hover:text-purple-600 transition-all duration-300 font-medium hover:scale-110 transform">About</a>
            <a href="#projects" className="text-gray-800 hover:text-pink-600 transition-all duration-300 font-medium hover:scale-110 transform">Projects</a>
            <a href="#contact" className="text-gray-800 hover:text-green-600 transition-all duration-300 font-medium hover:scale-110 transform">Contact</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;