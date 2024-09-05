import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="text-xl font-bold text-gray-800">
              Admin Table
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-800 hover:text-gray-600">
              Home
            </a>
            <a href="#" className="text-gray-800 hover:text-gray-600">
              About
            </a>
            <a href="#" className="text-gray-800 hover:text-gray-600">
              Project
            </a>
            <a href="#" className="text-gray-800 hover:text-gray-600">
              Code
            </a>
            <a href="#" className="text-gray-800 hover:text-gray-600">
              Contact
            </a>
          </div>

          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-800 hover:text-gray-600 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#"
              className="block text-gray-800 hover:bg-gray-100 hover:text-gray-600"
            >
              Home
            </a>
            <a
              href="#"
              className="block text-gray-800 hover:bg-gray-100 hover:text-gray-600"
            >
              About
            </a>
            <a
              href="#"
              className="block text-gray-800 hover:bg-gray-100 hover:text-gray-600"
            >
              Services
            </a>
            <a
              href="#"
              className="block text-gray-800 hover:bg-gray-100 hover:text-gray-600"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
