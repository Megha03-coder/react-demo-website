import React from 'react';

const AboutSection = () => {
  return (
    <>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-video bg-gradient-to-br from-green-500 to-teal-600 rounded-lg shadow-xl flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="w-16 h-16 mx-auto mb-3 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <p className="font-medium">Skills & Expertise</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">
                About My Journey
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                With over 5 years of experience in web development, I specialize in creating 
                responsive and user-friendly applications using modern frameworks like React, 
                Vue, and Angular.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                My passion lies in solving complex problems through elegant code and innovative 
                design solutions. I believe in continuous learning and staying up-to-date with 
                the latest industry trends and technologies.
              </p>
              <p className="text-lg text-gray-600">
                When I'm not coding, you can find me exploring new technologies, contributing to 
                open source projects, or sharing knowledge with the developer community.
              </p>
            </div>
          </div>
        </div>
      </section>
      <hr className="border-gray-200" />
    </>
  );
};

export default AboutSection;