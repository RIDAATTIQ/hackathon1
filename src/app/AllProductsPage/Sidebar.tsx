import React from "react";

const Sidebar = () => {
  return (
    <div className="w-full lg:w-64 bg-gray-100 p-4 border-r">
      <h2 className="text-lg font-semibold mb-4">New (500)</h2>

      {/* Categories List */}
      <ul className="space-y-2">
        {[
          "Shoes",
          "Sports Bras",
          "Tops & T-shirts",
          "Hoodies & Sweatshirts",
          "Jackets",
          "Trousers & Tights",
          "Shorts",
          "Tracksuits",
          "Jumpsuits & Rompers",
          "Skirts & Dresses",
        ].map((category, index) => (
          <li key={index}>
            <a href="#" className="text-gray-700 hover:underline">
              {category}
            </a>
          </li>
        ))}
      </ul>

      {/* Filters */}
      <div className="mt-6 space-y-6">
        {/* Gender Filter */}
        <div>
          <h3 className="text-sm font-medium mb-2">Gender</h3>
          <div className="space-y-2">
            {["Men", "Women", "Unisex"].map((gender, index) => (
              <label key={index} className="flex items-center space-x-2">
                <input type="checkbox" className="w-4 h-4" />
                <span>{gender}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Price Filter */}
        <div>
          <h3 className="text-sm font-medium mb-2">Shop by Price</h3>
          <div className="space-y-2">
            {["Under ₹2,500", "₹2,501 - ₹7,000"].map((price, index) => (
              <label key={index} className="flex items-center space-x-2">
                <input type="checkbox" className="w-4 h-4" />
                <span>{price}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;