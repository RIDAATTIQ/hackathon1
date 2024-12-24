import React from 'react';
import Image from 'next/image';  // Ensure you are importing Image from next/image
import { ChevronLeft, ChevronRight } from "lucide-react"; // Shadcn Icons

const Gearup = () => {
  return (
    <div>
      <div className="flex justify-between items-center mt-4"></div>
      <span className="font-bold text-lg">gearup</span>

      {/* Thin Section with Arrows and Links */}
      <div className="flex items-center justify-between border-t border-b border-gray-300 py-3 px-6 mb-6">
        {/* Left Arrow */}
        <button className="text-gray-600 hover:text-black transition">
          <ChevronLeft size={20} />
        </button>

        {/* Center Links */}
        <div className="flex items-center space-x-12 text-lg font-medium">
          <button className="hover:underline hover:text-black">Shop Men's</button>
          <button className="hover:underline hover:text-black">Shop Women's</button>
        </div>

        {/* Right Arrow */}
        <button className="text-gray-600 hover:text-black transition">
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-4">
        {/* Product Card 1 */}
        <div className="text-center shadow-md rounded-lg p-4 hover:shadow-lg transition">
          <Image
            src="/image/prod.png"  // Correct path for prod.png
            alt="Product"
            width={100}
            height={64}
            className="mx-auto mb-4 w-full h-64 object-cover rounded-md"
          />
          <h3 className="text-lg font-semibold">Nike Dri-FIT ADV Top</h3>
          <p className="text-gray-500 text-sm">Running Top</p>
          <p className="font-bold mt-2">$1,995</p>
        </div>

        {/* Product Card 2 */}
        <div className="text-center shadow-md rounded-lg p-4 hover:shadow-lg transition">
          <Image
            src="/image/pro.png"  // Correct path for pro.png
            alt="Product 2"
            width={64}
            height={100}
            className="mx-auto mb-4 w-full h-64 object-cover rounded-md"
          />
          <h3 className="text-lg font-semibold">Nike Flex Challenger</h3>
          <p className="text-gray-500 text-sm">Running Shorts</p>
          <p className="font-bold mt-2">$1,295</p>
        </div>

        {/* Product Card 3 */}
        <div className="text-center shadow-md rounded-lg p-4 hover:shadow-lg transition">
          <Image
            src="/image/product.png"  // Correct path for product.png
            alt="Product 3"
            width={100}
            height={64}
            className="mx-auto mb-4 w-full h-64 object-cover rounded-md"
          />
          <h3 className="text-lg font-semibold">Nike Pro 365 Tights</h3>
          <p className="text-gray-500 text-sm">Training Gear</p>
          <p className="font-bold mt-2">$1,895</p>
        </div>

        {/* Product Card 4 */}
        <div className="text-center shadow-md rounded-lg p-4 hover:shadow-lg transition">
          <Image
            src="/image/stretch.png"  // Correct path for stretch.png
            alt="Product 4"
            width={100}
            height={64}
            className="mx-auto mb-4 w-full h-64 object-cover rounded-md"
          />
          <h3 className="text-lg font-semibold">Nike Yoga Top</h3>
          <p className="text-gray-500 text-sm">Stretch Gear</p>
          <p className="font-bold mt-2">$1,299</p>
        </div>
      </div>
    </div>
  );
};

export default Gearup;
