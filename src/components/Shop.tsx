import React from 'react'
import Image from 'next/image'
const Shop = () => {
  return (
    <div className='text-2xl font-bold m-4 px-4 text-black'>Don't Miss
    <div className='flex flex-col items-center'>
        <Image
        src="/image/flight.png" alt ="flight" width={1344} height={700} layout="responsive" />

        <span className='text-4xl to-black flex flex-col items-center mt-5'>FLIGHT ESSENTIALS</span>
<span className='text-sm m-2'>Your built-to-last, all-week wears—but with style only Jordan Brand can deliver.</span>
        
<button className="px-6 py-2 bg-black mt-6 flex justify-center 
 text-white rounded-full mx-auto">Shop</button>


    </div>
    

    </div>
  )
}

export default Shop