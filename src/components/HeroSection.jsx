import React from 'react';
import image from '../assets/image.png'; // Importing the image

const HeroSection = () => {
  return (
    <>
      <section className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-20 bg-pattern">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 leading-tight mb-8 animate-bounce gradient-text">
              About Me
            </h1>
            
          </div>
          <div className="flex flex-col md:flex-row gap-12 items-center">
            
            <div className="space-y-6 order-2 md:order-2 w-full">
              <p className="text-xl text-gray-700 leading-relaxed hover:text-blue-600 transition-all duration-500 transform hover:scale-105 text-right">
                I specialize in creating responsive and user-friendly applications using modern frameworks<br></br> like React, vue, Angular.
                 My passion lies in solving complex problems through <br></br>elegant code and innovative 
                design solutions. I believe in continuous learning<br></br> and staying up-to-date with 
                the latest industry trends and technologies.
              </p>
              
            </div>
          </div>
        </div>
      </section>
      <hr className="border-gradient-to-r from-blue-300 via-purple-300 to-pink-300 border-2" />
    </>
  );
};

export default HeroSection;