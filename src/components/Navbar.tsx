import React from "react";
import Image from 'next/image'
const Navbar: React.FC = () => {
  return (
    <nav className="w-full bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 h-14">
        {/* Left - Nike Logo */}
        <div className="cursor-pointer">
          <Image
            src={"/image/logo.png"}
            alt="Nike Logo"
            height={24}
            width={24}/>
        </div>

        {/* Middle - Menu Items */}
        <div className="hidden md:flex space-x-6">
          <a
            href="#"
            className="text-sm font-medium text-gray-700 hover:underline transition-all duration-300"
          >
            New & Featured
          </a>
          <a
            href="#"
            className="text-sm font-medium text-gray-700 hover:underline transition-all duration-300"
          >
            Men
          </a>
          <a
            href="#"
            className="text-sm font-medium text-gray-700 hover:underline transition-all duration-300"
          >
            Women
          </a>
          <a
            href="#"
            className="text-sm font-medium text-gray-700 hover:underline transition-all duration-300"
          >
            Kids
          </a>
          <a
            href="#"
            className="text-sm font-medium text-gray-700 hover:underline transition-all duration-300"
          >
            Sale
          </a>
          <a
            href="#"
            className="text-sm font-medium text-gray-700 hover:underline transition-all duration-300"
          >
            SNKRS
          </a>
        </div>

        {/* Right - Search Bar and Cart */}
        <div className="flex items-center space-x-4">
          {/* Search Bar */}
          <input
            type="text"
            placeholder="Search"
            className="hidden md:block border rounded-full px-4 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-gray-300 shadow-sm"
          />

          {/* Favorites and Cart Icons */}
          <div className="flex items-center space-x-4 text-gray-700 text-xl">
            <button
              aria-label="Favorites"
              className="hover:text-gray-900 transition-all"
            >
              ❤
            </button>
            <button
              aria-label="Shopping Cart"
              className="hover:text-gray-900 transition-all"
            >
              🛒
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;