import React from 'react'
import Image from "next/image";
function MegaMenu() {
  return (
    <div style={{ borderRadius:"30px" }} className="flex flex-col lg:flex-row   bg-white">
    
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
        <ul className="space-y-3 border-l-3 ps-6 font-normal">
            <li className="font-semibold text-gray-700"> </li>
            <li className="text-gray-500 hover:text-black cursor-pointer">Belts</li>
            <li className="text-gray-500 hover:text-black cursor-pointer">Hats</li>
            <li className="text-gray-500 hover:text-black cursor-pointer">Sunglass</li>
            <li className="text-gray-500 hover:text-black cursor-pointer">Ties</li>
            <li className="text-gray-500 hover:text-black cursor-pointer">Wallets</li>
            <li className="text-gray-500 hover:text-black cursor-pointer">Watches</li>
            <li className="text-gray-500 hover:text-black cursor-pointer">Other</li>
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
            
                src="/black.png" // replace with your image path
                alt="Sweats & Hoodies"
                layout="responsive"
                width={300}
                height={100}
                className="rounded-xl md:mb-3"
            />
            
            <div className="absolute top-4 right-4 bg-white p-2 rounded-full">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5 text-black"
                >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
                </svg>
            </div>
        </div>

        <div className="relative">
            <Image
                src="/eys.png" // replace with your image path
                alt="Sunglass"
                layout="responsive"
                width={500}
                height={300}
                className="rounded-xl"
            />
            
            <div className="absolute top-4 right-4 bg-white p-2 rounded-full">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5 text-black"
                >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
                </svg>
            </div>
        </div>
        </div>












        <div className="relative">
          <Image 
          style={{ height:"fit-content" }}
            src="/shoes.png" // replace with your image path
            alt="Men&apos;s Sneakers"
            layout="responsive"
            width={500}
            height={300}
            className="rounded-xl"
          />
           
          <div className="absolute top-4 right-4 bg-white p-2 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5 text-black"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default MegaMenu