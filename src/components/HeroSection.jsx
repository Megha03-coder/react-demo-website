import React from 'react';

const HeroSection = () => {
  return (
    <>
      <section className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-20 bg-pattern">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 leading-tight mb-8 animate-bounce gradient-text">
              Creative Developer & Designer
            </h1>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 md:order-1">
              <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg shadow-2xl flex items-center justify-center animate-glow card-hover">
                <div className="text-white text-center animate-float">
                  <div className="w-24 h-24 mx-auto mb-4 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                    </svg>
                  </div>
                  <p className="text-lg font-medium">Your Image Here</p>
                </div>
              </div>
            </div>
            <div className="space-y-6 order-1 md:order-2">
              <p className="text-xl text-gray-700 leading-relaxed hover:text-blue-600 transition-all duration-500 transform hover:scale-105">
                I craft beautiful digital experiences that combine innovative design with 
                cutting-edge technology. Passionate about creating solutions that make a difference.
              </p>
              <p className="text-lg text-gray-600 hover:text-purple-600 transition-all duration-500 transform hover:scale-105">
                With expertise in modern web technologies, I bring ideas to life through 
                clean code and thoughtful user experiences. Let's build something amazing together.
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