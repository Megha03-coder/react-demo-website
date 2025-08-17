import React from "react";

import Navbar from "./Navbar"; // Ensure this matches the casing

const MainLayout = ({ currentPage, setCurrentPage }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gray-100 p-8">
        <div className="max-w-6xl mx-auto">
          {/* Logo and Navigation - Flex layout with space between */}
          <div className="flex items-center justify-between mb-8">
            {/* Logo on the left */}
            <div className="flex-shrink-0">
              <img className="h-12 w-auto" src="#" alt="Logo" />
            </div>

            {/* Navigation links with proper spacing */}
            <nav className="flex space-x-32">
              <a
                href="#link1"
                className="text-gray-700 hover:text-gray-900 font-medium"
              >
                About me
              </a>
              <a
                href="#link2"
                className="text-gray-700 hover:text-gray-900 font-medium"
              >
                Education
              </a>
              <a
                href="#link3"
                className="text-gray-700 hover:text-gray-900 font-medium"
              >
                Projects
              </a>
              <a
                href="#link4"
                className="text-gray-700 hover:text-gray-900 font-medium"
              >
                Contact me
              </a>
            </nav>
          </div>

          {/* Hero content centered */}
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900">
              Some heading text go here
            </h1>
            
            <p className="mt-4 max-w-2xl mx-auto text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section - Centered */}
      <section className="bg-white p-8 flex flex-col items-center justify-center text-center">
        <div className="flex-shrink-0">
              <img className="h-12 w-auto" src="#" alt="Logo" />
            </div>
        <h2 className="text-2xl font-semibold">Some heading text go here</h2>
        <p className="mt-4 max-w-2xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </section>

      {/* Profile Section - Centered */}
      <section className="bg-gray-100 p-8 flex flex-col items-center justify-center text-center">
        <h2 className="text-2xl font-semibold mb-6">
          Some heading text go here
        </h2>
        <div className="flex space-x-4 justify-center">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-gray-300 rounded-full"></div>
            <p className="mt-2">Name</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-gray-300 rounded-full"></div>
            <p className="mt-2">Name</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-gray-300 rounded-full"></div>
            <p className="mt-2">Name</p>
          </div>
        </div>
      </section>

      {/* Footer Section - Centered */}
      <footer className="bg-white p-4 text-center">
        <p>Some heading text go here</p>
        <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">
          Button
        </button>
        <p className="mt-4">Copyright Text</p>
      </footer>
    </div>
  );
};

export default MainLayout;
