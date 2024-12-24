"use client"; // Marking this as a Client Component

import React, { useState } from "react";
import Image from "next/image"; // Import Image component from Next.js
import Sidebar from "./Sidebar"; // Import Sidebar component

const FilterSort = () => {
  const [showFilters, setShowFilters] = useState(true); // Toggle for showing/hiding filter bar

  const toggleFilters = () => {
    setShowFilters(!showFilters); // Toggle filter visibility
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      {/* Sidebar */}
      {showFilters && (
        <div className="w-full lg:w-64 bg-gray-100 border-r p-4">
          <Sidebar />
        </div>
      )}

      {/* Main Content Area */}
      <div className="flex-1 p-4">
        {/* Navbar: Sort Dropdown */}
        <div className="flex items-center justify-between bg-white border-b p-2">
          <button
            className="text-sm font-medium text-gray-700 flex items-center"
            onClick={toggleFilters}
          >
            {showFilters ? "🔽 Hide Filters" : "🔼 Show Filters"}
          </button>

          {/* Sort Dropdown */}
          <div className="relative">
            <select
              className="border border-gray-300 rounded-md text-sm p-2 focus:outline-none"
            >
              <option value="relevance">Sort By: Relevance</option>
              <option value="price_low_high">Price: Low to High</option>
              <option value="price_high_low">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Responsive Image Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
          {/* Gallery Item */}
          {[
            { src: "/image/rectangle-5.svg", title: "Nike Standard Issue" },
            { src: "/image/rectangle-3.svg", title: "Nike Airforce 1 React" },
            { src: "/image/rectangle.png", title: "Nike AirForce 1 Mid '07" },
            { src: "/image/rectangle-6.png", title: "Nike Court Legacy Lift" },
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <Image
                src={item.src} // Ensure images are in the public directory
                alt={item.title}
                width={300}
                height={300}
                className="object-cover rounded-lg shadow-lg mb-2"
              />
              <p className="text-center text-sm text-gray-600">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterSort;