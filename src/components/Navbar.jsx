import React from 'react';

function Navbar() {
  return (
    <nav className="bg-white shadow-lg fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center h-16">
          <div className="text-center">
            <a href="#" className="text-3xl font-bold text-indigo-600">
              Portfolio
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
