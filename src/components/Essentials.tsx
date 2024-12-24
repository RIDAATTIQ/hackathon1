import React from 'react';
import Image from 'next/image';

const Essentials = () => {
  return (
    <div className="text-2xl font-bold text-black p-6">
      {/* Heading */}
      <h2 className="text-left mb-8">The Essentials</h2>

      {/* Images Section */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-6">
        {/* Men's Image */}
        <div className="relative group">
          <Image
            src="/image/men.png"  // Correct path for men.png (relative to the /public directory)
            alt="Men's Essentials"
            width={300}
            height={400}
            className="w-[300px] h-[400px] object-cover rounded-lg shadow-lg"
          />
          <p className="absolute bottom-4 left-4 bg-white px-4 py-1 rounded-full shadow-md text-gray-800 group-hover:underline">
            Men's
          </p>
        </div>

        {/* Women's Image */}
        <div className="relative group">
          <Image
            src="/image/women.png"  // Correct path for women.png
            alt="Women's Essentials"
            width={300}
            height={400}
            className="w-[300px] h-[400px] object-cover rounded-lg shadow-lg"
          />
          <p className="absolute bottom-4 left-4 bg-white px-4 py-1 rounded-full shadow-md text-gray-800 group-hover:underline">
            Women's
          </p>
        </div>

        {/* Kids' Image */}
        <div className="relative group">
          <Image
            src="/image/kids.png"  // Correct path for kids.png
            alt="Kids' Essentials"
            width={300}
            height={400}
            className="w-[300px] h-[400px] object-cover rounded-lg shadow-lg"
          />
          <p className="absolute bottom-4 left-4 bg-white px-4 py-1 rounded-full shadow-md text-gray-800 group-hover:underline">
            Kids
          </p>
        </div>
      </div>

      {/* Last Section: Categories */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 text-sm text-gray-700">
        {/* Icons */}
        <div>
          <h3 className="font-bold mb-2">Icons</h3>
          <ul className="space-y-1">
            <li>Air Force 1</li>
            <li>Huarache</li>
            <li>Air Max 90</li>
            <li>Air Max 95</li>
          </ul>
        </div>

        {/* Shoes */}
        <div>
          <h3 className="font-bold mb-2">Shoes</h3>
          <ul className="space-y-1">
            <li>All Shoes</li>
            <li>Custom Shoes</li>
            <li>Jordan Shoes</li>
            <li>Running Shoes</li>
          </ul>
        </div>

        {/* Clothing */}
        <div>
          <h3 className="font-bold mb-2">Clothing</h3>
          <ul className="space-y-1">
            <li>All Clothing</li>
            <li>Modest Wear</li>
            <li>Hoodies & Pullovers</li>
            <li>Shirts & Tops</li>
          </ul>
        </div>

        {/* Kids */}
        <div>
          <h3 className="font-bold mb-2">Kids</h3>
          <ul className="space-y-1">
            <li>Infant & Toddler Shoes</li>
            <li>Kids' Shoes</li>
            <li>Kids' Jordan Shoes</li>
            <li>Kids' Basketball Shoes</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Essentials;
