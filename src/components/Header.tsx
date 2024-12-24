
import React from "react";
import Image from "next/image";
import frame from "../../public/image/Frame.png"; // Ensure this path is correct

const Header: React.FC = () => {
  return (
    <nav className="w-full bg-gray-100 border-b text-sm h-12 flex items-center">
      {/* Container for Center Alignment */}
      <div className="max-w-7xl mx-auto w-full flex justify-between items-center px-4">
        {/* Logo Section */}
        <div className="font-bold text-lg flex items-center h-full">
          <Image
            src={frame} // Ensure the imported image path is correct
            alt="Frame image"
            width={40} // Slimmer size to match the bar
            height={40}
          />
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-4 text-gray-700 items-center h-full">
          <a href="#" className="hover:underline transition-all duration-300 flex items-center">
            Find a Store
          </a>
          <span className="text-gray-400">|</span>
          <a href="#" className="hover:underline transition-all duration-300 flex items-center">
            Help
          </a>
          <span className="text-gray-400">|</span>
          <a href="#" className="hover:underline transition-all duration-300 flex items-center">
            Join Us
          </a>
          <span className="text-gray-400">|</span>
          <a href="#" className="hover:underline transition-all duration-300 flex items-center">
            Sign In
          </a>
        </div>

        {/* Mobile Menu Toggle (for small screens) */}
        <div className="md:hidden">
          <button className="text-gray-700 focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;