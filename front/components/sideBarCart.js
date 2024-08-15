import { Button, Image } from '@nextui-org/react'
import React from 'react'
 
function SideBarCart() {
  return (
    <div className=" py-4 border-gray-300 rounded-md border-1.5   w-fit p-4">


            <div className=' flex items-center justify-between'>
                <h3 className=' text-lg font-bold mt-3 mb-3'>Cart</h3>
                <div className=' bg-slate-200 p-2 rounded-full'>
                    <Image  width={18} height={18} alt='close' src='/close.png' />

                </div>
            </div>

            <hr className='line mt-2 mb-5'></hr>

            <div className="flex items-center space-x-4 mb-3">
            <Image
                src="/item (1).png"
                alt="product"
                width={90}
                height={90}
                className="object-cover rounded"
            />
            <div>
                <h3 className="text-md font-bold">NWT Size Medium LF Turquoise Blouse</h3>
                <div className="flex items-center space-x-2">
                <span className="text-lg font-semibold">$20.36</span>
                <span className="text-gray-500 line-through">$25.00</span>
                </div>
                <div className="text-gray-500  flex justify-between items-center" >
                        <span className="text-xs text-black bg-gray-200 rounded-full p-2">$7.99 delivery fee</span>
                        <button className="text-md  font-medium text-black ">Delete</button>

                </div>

                

            </div>
            </div>

            <div className="flex items-center space-x-4 mb-3">
            <Image
                src="/item (5).png"
                alt="product"
                width={90}
                height={90}
                className="object-cover rounded"
            />
            <div>
                <h3 className="text-md font-bold">NWT Size Medium LF Turquoise Blouse</h3>
                <div className="flex items-center space-x-2">
                <span className="text-lg font-semibold">$20.36</span>
                <span className="text-gray-500 line-through">$25.00</span>
                </div>
                <div className="text-gray-500 flex justify-between items-center" >
                        <span className="text-xs text-black bg-gray-200 rounded-full p-2">$7.99 delivery fee</span>
                        <button className="text-md  font-medium text-black ">Delete</button>

                </div>

                

            </div>
            </div>

            <div className="flex items-center space-x-4 mb-3">
            <Image
                src="/item (3).png"
                alt="product"
                width={90}
                height={90}
                className="object-cover rounded"
            />
            <div>
                <h3 className="text-md font-bold">NWT Size Medium LF Turquoise Blouse</h3>
                <div className="flex items-center space-x-2">
                <span className="text-lg font-semibold">$20.36</span>
                <span className="text-gray-500 line-through">$25.00</span>
                </div>
                <div className="text-gray-500  flex justify-between items-center" >
                        <span className="text-xs text-black bg-gray-200 rounded-full p-2">$7.99 delivery fee</span>
                        <button className="text-md  font-medium text-black ">Delete</button>

                </div>

                

            </div>
            </div>

            <div className="flex items-center space-x-4 mb-3">
            <Image
                src="/item (6).png"
                alt="product"
                width={90}
                height={90}
                className="object-cover rounded"
            />
            <div>
                <h3 className="text-md font-bold">NWT Size Medium LF Turquoise Blouse</h3>
                <div className="flex items-center space-x-2">
                <span className="text-lg font-semibold">$20.36</span>
                <span className="text-gray-500 line-through">$25.00</span>
                </div>
                <div className="text-gray-500 flex justify-between items-center" >
                        <span className="text-xs text-black bg-gray-200 rounded-full p-2">$7.99 delivery fee</span>
                        <button className="text-md   font-medium text-black ">Delete</button>

                </div>

                

            </div>
            </div>

            <hr className='line'></hr>

            <div className="flex items-center justify-between mt-4 space-x-4 mb-3">
                <div>
                    Total : <span className=' font-bold'>$81,44 </span>
                </div>
                <Button   className=' bg-black text-white      rounded-full' href="#" variant="flat">
                        View Bag
                </Button>
            </div>


  </div>
  )
}

export default SideBarCart