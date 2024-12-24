import Image from "next/image";

 //interface ProductCardProps {
  //image: string;
  //title: string;
  //price: string;
  //description: string;
//}

const ProductCard= () => {// React.FC<ProductCardProps> = ({ image, title, price, description }) 

  return (
    
    <div className="flex flex-col md:flex-row items-start border border-gray-300 rounded-lg p-4 gap-6">
      {/* Left: Image */}
      <div className="w-full md:w-1/2">
        <Image src="/image/Rectangle-6.png" alt="image"
        width={100}
       height= {100}
         className="w-full h-auto rounded-md" />
      </div>

      {/* Right: Text Content */}
      
      <div className="w-full md:w-1/2 flex flex-col justify-center gap-6 m-9">
        <h2 className="text-4xl font-700">
        Nike Air Force 1<br/> 
        PLT.AF.ORM</h2>
        <p className="text-gray-600 flex flex-items">Turn style on its head with this crafted take on the<br/> Air Jordan 1 Mid. Its "inside out"-inspired<br/> construction, including unique layering and <br/>exposed foam accents, ups the ante on this <br/>timeless Jordan Brand silhouette. Details like the<br/> deco stitching on the Swoosh add coveted<br/> appeal, while the unexpected shading, rich<br/> mixture of materials and aged midsole aesthetic<br/> give this release an artisan finish.</p>
        <div className="text-xl font-semibold text-black">₹ 8 695.00</div>


        <button className="px-6 py-2 bg-black mt-6 flex justify-center 
 text-white rounded-full mx-auto">Add to Cart </button>

        
        
      </div>
    </div>

  );
};

export default ProductCard;