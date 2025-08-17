import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <h1 className="text-white text-center text-2xl">Website Title</h1>
      <hr className="my-2 border-gray-600" />
      <div className="text-white text-right mt-2">
        <a href="#link1" className="mx-2" >Link 1</a> 
        <a href="#link2" className="mx-2">Link 2</a> 
        <a href="#link3" className="mx-2">Link 3</a>  
        <a href="#link4" className="mx-2">Link 4</a>
      </div>
      
    </nav>
  );
};

export default Navbar;
