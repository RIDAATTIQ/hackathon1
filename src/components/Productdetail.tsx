import React from "react";
import Image from "next/image";

 // Correct image path

const ProductDetail: React.FC = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8">
      {/* Product Image */}
      <div className="flex justify-center">
        <Image
          src="/image/shoe.png" // Shoe image
          alt={"shoe"}
          width={1340} // Adjust size as per requirement
          height={700}
          layout="responsive"
          // Adjust size as per requirement
        />
      </div>

      {/* Product Details */}
      <div className="mt-8 text-center">
        <h2 className="text-2xl font-semibold">Nike Air Max pulse</h2>
        <p className="text-lg text-#111111 mt-2 ">Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse<br />
        —designed to push you past your limits and help you go to the max.</p>
        
        
        
        {/* Add to Cart Button */}
        <button className="mt-6 mx-3 px-6 py-2 bg-black
 text-white rounded-lg mb-0">notifyMe</button>
 <button className="px-6 py-2 bg-black
 text-white rounded-lg">shopAirmax</button>
 

      </div>
    </div>
  )
};

export default ProductDetail;