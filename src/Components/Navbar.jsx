import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="top-0 w-full">
      <nav className="flex items-center justify-between w-full py-4 text-white bg-black border-b-2 border-black" id="nav">
        <div className="mx-8 logo">
          <span className="text-2xl italic font-semibold">Portfolio</span>
        </div>
        <div className="hidden md:flex">
          <ul className="flex gap-8 mx-9">
            <Link to="/">
              <li className="text-lg transition-all duration-200 cursor-pointer hover:font-bold hover:underline">Home</li>
            </Link>
            <Link to="/about">
              <li className="text-lg transition-all duration-200 cursor-pointer hover:font-bold hover:underline">About</li>
            </Link>
            <Link to="/contactme">
              <li className="text-lg transition-all duration-200 cursor-pointer hover:font-bold hover:underline">Contact Me</li>
            </Link>
          </ul>
        </div>
        <div className="mx-8 md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              )}
            </svg>
          </button>
        </div>
      </nav>
      {isOpen && (
        <div className="text-white bg-black md:hidden">
          <ul className="flex flex-col items-center gap-4 p-4 border-t border-gray-700">
            <Link to="/" onClick={toggleMenu}>
              <li className="text-lg transition-all duration-200 cursor-pointer hover:font-bold hover:underline">Home</li>
            </Link>
            <Link to="/about" onClick={toggleMenu}>
              <li className="text-lg transition-all duration-200 cursor-pointer hover:font-bold hover:underline">About</li>
            </Link>
            <Link to="/contactme" onClick={toggleMenu}>
              <li className="text-lg transition-all duration-200 cursor-pointer hover:font-bold hover:underline">Contact Me</li>
            </Link>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
