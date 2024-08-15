import React from 'react'
import Image from "next/image";

function WomenSawar() {
  return (
    <div style={{ borderRadius:"30px" }} className=" bg-white flex flex-col lg:flex-row  ">
    
    <div className="w-full lg:w-2/4 p-5 bg-white  ">
      <h2 className="text-xl font-bold mb-6">Menswear</h2>
      <div className='grid grid-cols-2'>
        <ul className="space-y-3 text-black font-normal ">
            <li className=" text-gray-700">Men &apos; s Accessories</li>
            <li className="cursor-pointer">Shoes</li>
            <li className="cursor-pointer">Athletic Apparel</li>
            <li className="cursor-pointer">Tops</li>
            <li className="cursor-pointer">Shorts</li>
            <li className="cursor-pointer">Jeans</li>
            <li className="cursor-pointer">Sweats & Hoodies</li>
            <li className="cursor-pointer">Sweaters</li>
            <li className="cursor-pointer">Coats & Jackets</li>
            <li className=" cursor-pointer">View All</li>
        </ul>
        <ul className="space-y-1 border-l-3 ps-6 font-normal">
            <li className="font-semibold text-gray-700"> </li>
            <li className="text-gray-500 hover:text-black cursor-pointer">Backpacks</li>
            <li className="text-gray-500 hover:text-black cursor-pointer">Hats</li>
            <li className="text-gray-500 hover:text-black cursor-pointer">Cosmetic Bags</li>
            <li className="text-gray-500 hover:text-black cursor-pointer">Ties</li>
            <li className="text-gray-500 hover:text-black cursor-pointer">Hobo Bags</li>
            <li className="text-gray-500 hover:text-black cursor-pointer">Crossbody Bags</li>
            <li className="text-gray-500 hover:text-black cursor-pointer">Satchels</li>
            <li className="text-gray-500 hover:text-black cursor-pointer">Shoulder Bags </li>

            <li className="text-gray-500 hover:text-black cursor-pointer">Tote Bags  Waist</li>


            <li className="text-gray-500 hover:text-black cursor-pointer">Bags & Fanny</li>


            <li className="text-gray-500 hover:text-black cursor-pointer">Packs</li>


            <li className="text-gray-500 hover:text-black cursor-pointer">Messenger Bags </li>


            <li className="text-gray-500 hover:text-black cursor-pointer">Bucket Bags  </li>


            <li className="text-gray-500 hover:text-black cursor-pointer">View All</li>

 


            
        </ul>

      </div>
    </div>

    {/* Main Content */}
    <div className="w-full lg:w-2/4 p-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">






        <div>
            <div className="relative">
            <Image
            
                src="/pink.png"  
                alt="Sweats & Hoodies"
                layout="responsive"
                width={300}
                height={100}
                className="rounded-xl md:mb-3"
            />
            
             
        </div>

        <div className="relative">
            <Image
                src="/run.png"  
                alt="Sunglass"
                layout="responsive"
                width={500}
                height={300}
                className="rounded-xl"
            />
            
            
        </div>
        </div>












        <div className="relative">
          <Image 
          style={{ height:"fit-content" }}
            src="/dress.png" 
            alt="Men's Sneakers"
            layout="responsive"
            width={500}
            height={300}
            className="rounded-xl"
          />
           
         
        </div>
      </div>
    </div>
  </div>
  )
}

export default WomenSawar