import React from "react";
import Link from "next/link";
const Navbar = () => {
  return (
    <div className="bg-gray-800 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-white">Surya Prasad Portfolio</h1>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-6">
            <Link href="/">
              <button className="px-4 py-2 rounded-md hover:bg-gray-700 hover:text-yellow-300 transition duration-300">
                Home
              </button>
            </Link>
            <Link href="/projects">
              <button className="px-4 py-2 rounded-md hover:bg-gray-700 hover:text-yellow-300 transition duration-300">
                Projects
              </button>
            </Link>
            <Link href="/skills">
              <button className="px-4 py-2 rounded-md hover:bg-gray-700 hover:text-yellow-300 transition duration-300">
                Skills
              </button>
            </Link>
            <Link href="/contactme">
              <button className="px-4 py-2 rounded-md hover:bg-gray-700 hover:text-yellow-300 transition duration-300">
                Contact Us
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button className="text-white hover:text-green-300 focus:outline-none">
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
      <div className="md:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link href="/">
            <button className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 hover:text-gree-300">
              Home
            </button>
          </Link>
          <Link href="/projects">
            <button className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 hover:text-gree-300">
              Projects
            </button>
          </Link>
          <Link href="/skills">
            <button className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 hover:text-gree-300">
              Skills
            </button>
          </Link>
          <Link href="/contactme">
            <button className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 hover:text-green-300">
              Contact Me
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
