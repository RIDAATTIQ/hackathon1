import Image from 'next/image'
import React from 'react'

const Featured = () => {
  return (
    <div>
        <div className="flex justify-between items-center mb-4"></div>
        <span className="font-bold text-lg">featured</span>

<div className="flex  flex-col items-center">
<Image src={"/image/featur.png"} alt="Shoes" 
width={1344} 
height={600} />
<span className='text-4xl to-black flex flex-col items-center mt-3'>STEP INTO WHAT FEELS GOOD </span>
<span>Cause everyone should know the feeling of running in that perfect pair.</span>
</div>

<button className="px-6 py-2 bg-black mt-6 flex justify-center 
 text-white rounded-full mx-auto">Find Your Shoe</button>

    </div>
    


  )
}

export default Featured