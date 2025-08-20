import React from 'react';


const Header = () => {
  return (
    <header className="bg-blue-600 shadow-sm border-b mt-6">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          {/* Left - Main Heading */}
          <div className="flex-1">
            <h1 className="text-3xl font-bold gradient-text animate-float">
               My Portfolio
            </h1>
          </div>
          
          {/* Right - Navigation */}
          <nav className="flex space-x-8 text-center">
            <a href="#home" className="text-gray-300 hover:text-blue-600 transition-all duration-300 font-medium hover:scale-110 transform">About</a>
            <a href="#about" className="text-gray-300 hover:text-purple-600 transition-all duration-300 font-medium hover:scale-110 transform">Skills</a>
            <a href="#projects" className="text-gray-300 hover:text-pink-600 transition-all duration-300 font-medium hover:scale-110 transform">Projects</a>
            <a href="#contact" className="text-gray-300 hover:text-green-600 transition-all duration-300 font-medium hover:scale-110 transform">Contact</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;