import React, { useState } from 'react'
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";
import {Checkbox} from "@nextui-org/react";
import Image from 'next/image';
import filter from "../public/filter.png"

import bellow from "../public/bellow.png"
function FilterCategory() {
  

 
    const [selectedBrand, setSelectedBrand] = useState([]);
    const [selectedSize, setSelectedSize] = useState([]);
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [selectedColor, setSelectedColor] = useState([]);


    const brands = [
        { name: 'Brandy Melville', count: 30 },
        { name: 'Forever 21', count: 670 },
        { name: 'Caddis', count: 10 },
        { name: 'Nike', count: 230 },
        { name: 'New Balance', count: 1230 },
        { name: 'Aragona', count: 80 },
        { name: 'Aragona', count: 270 },
      ];
    
      const sizes = ['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL', "3XL", "4XL", "5XL", "One size"];
    
      const colors = [
        'gray', 'black', 'white', 'brown', 'pink', 'blue', 
        'red', 'orange', 'yellow', 'green', 'purple', 'multicolor'
      ];
    
 

      
  return (
    <>
      
 
      <div>
 



        <div className=' font-bold flex items-center'><Image width={25} height={38} src={filter} alt='alt' /><h4 style={{ fontSize:"20px" }} className=' ms-1 '>FILTER</h4>
        </div>
       
           <div className="filtring w-64 p-4 border rounded-lg  ">



          <div className="mb-4">
              <div class="relative w-full   mx-auto max-w-screen-sm">
                  <div id="bouton" class="relative group/bouton w-full">
                  <div className=' flex items-center justify-between'>
                    <p className=' font-bold'>Status</p>
                    <Image src={bellow} alt='alt' width={20} height={20}  />
                  </div>
                  <div class="absolute w-full  z-50  top-full bg-white origine-top opacity-0 hidden flex-col group-hover/bouton:flex group-hover/bouton:opacity-100 transition-all">
                    <div className=' flex items-center p-2'>
                      <input type='radio' /><p className=' ms-3'>Any</p>
                    </div>
                    <div className=' flex items-center p-2'>
                      <input type='radio' /><p className=' ms-3'>For sale </p>
                    </div>
                    <div className=' flex items-center p-2'>
                      <input type='radio' /><p className=' ms-3'>Sold</p>
                    </div>
                    

                
                  </div>
                  </div>
              </div>
          </div>








      <div className="mb-4">
          <div class="relative w-full   mx-auto max-w-screen-sm">
              <div id="bouton" class="relative group/bouton w-full">
              <div className=' flex items-center justify-between'>
                    <p className=' font-bold'>Size</p>
                    <Image src={bellow} alt='alt' width={20} height={20}  />
                  </div>
              <div class="absolute w-full  z-50  top-full bg-white origine-top opacity-0 hidden flex-col group-hover/bouton:flex group-hover/bouton:opacity-100 transition-all">
                

               <h5 className=' font-bold mt-3 mb-3'>Tops</h5>
                <div className=' flex flex-wrap gap-1 '>
                  {
                    sizes.map(item => (
                      <div  key={item} className='w-fit p-2 border   text-black hover:bg-black hover:text-white rounded-md gap-2'> {item} </div>
                    ))
                  }
                </div>
              

                <h5 className=' font-bold mt-3 mb-3'>BOTTOMS</h5>  

              <div className=' flex flex-wrap gap-1 '>
                  {
                    sizes.map(item => (
                      <div  key={item} className='w-fit p-2 border   text-black hover:bg-black hover:text-white rounded-md gap-2'> {item} </div>
                    ))
                  }
                </div>

                

            
              </div>
              </div>
          </div>
      </div>
 










      <div className="mb-4">
          <div class="relative w-full   mx-auto max-w-screen-sm">
              <div id="bouton" class="relative group/bouton w-full">
              <div className=' flex items-center justify-between'>
                    <p className=' font-bold'>Condition</p>
                    <Image src={bellow} alt='alt' width={20} height={20}  />
                  </div>
              <div class="absolute w-full  z-50  top-full bg-white origine-top opacity-0 hidden flex-col group-hover/bouton:flex group-hover/bouton:opacity-100 transition-all">
                <div className=' flex items-center p-2'>
                  <input type="checkbox" /><p className=' ms-3'>Excellent (243)</p>
                </div>
                <div className=' flex items-center p-2'>
                  <input type='checkbox' /><p className=' ms-3'>Very Good (670)</p>
                </div>
                

            
              </div>
              </div>
          </div>
      </div>
 



       {/* Price  */}

    
        <div className="mb-4">
   
        <div class="relative w-full  z-40  mx-auto max-w-screen-sm">
    <div id="bouton" class="relative group/bouton w-full">
    <div className=' flex items-center justify-between'>
                    <p className=' font-bold'>Price</p>
                    <Image src={bellow} alt='alt' width={20} height={20}  />
                  </div>
      <div class="absolute w-full   top-full bg-white origine-top opacity-0 hidden flex-col group-hover/bouton:flex group-hover/bouton:opacity-100 transition-all">
        <div className=' flex items-center p-2'>
          <input type='radio' /><p className=' ms-3'>Any</p>
        </div>
        <div className=' flex items-center p-2'>
          <input type='radio' /><p className=' ms-3'>Under $25</p>
        </div>
        <div className=' flex items-center p-2'>
          <input type='radio' /><p className=' ms-3'>$25 to $50</p>
        </div>
        <div className=' flex items-center p-2'>
          <input type='radio' /><p className=' ms-3'>$50 to $100</p>
        </div>

        <div className=' flex items-center p-2'>
          <input type='radio' /><p className=' ms-3'>$100 to $200</p>
        </div>

        <div className=' flex items-center p-2'>
          <input type='radio' /><p className=' ms-3'>$200 to $UP</p>
        </div>

        <div className="mt-2 flex space-x-2">
          <input
            type="number"
            placeholder="Min"
            className="w-full p-2 border rounded-lg"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
          />
          <input
            type="number"
            placeholder="Max"
            className="w-full p-2 border rounded-lg"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
          />
        </div>
      </div>
    </div>
      </div>
      </div>
      
   






      {/* Color */}
      <div className="mb-4">
          <div class="relative w-full   mx-auto max-w-screen-sm">
              <div id="bouton" class="relative group/bouton w-full">
              <div className=' flex items-center justify-between'>
                    <p className=' font-bold'>Price</p>
                    <Image src={bellow} alt='alt' width={20} height={20}  />
                  </div>










          <div class="absolute w-full z-40  top-full bg-white origine-top opacity-0 hidden flex-col group-hover/bouton:flex group-hover/bouton:opacity-100 transition-all">
            <div className='  '>
                <h5 className=' font-bold mt-3 mb-3'>Tops</h5>
                <div className=' flex flex-wrap gap-1 '>
                  {
                    colors.map(item => (
                      <div key={item} style={{ backgroundColor: item, width:"25px", height:"25px" }} className={`  p-2 border ${item}  rounded-full   gap-2`}></div>
                    ))
                  }
                </div>
              

               
            </div>
            

        
              </div>
              </div> 
          </div>
      </div>

      {/* shipping */}

      <div className="mb-4">
          <div class="relative w-full   mx-auto max-w-screen-sm">
              <div id="bouton" class="relative group/bouton w-full">
              <div className=' flex items-center justify-between'>
                    <p className=' font-bold'>Shipping</p>
                    <Image src={bellow} alt='alt' width={20} height={20}  />
                  </div>
              <div class="absolute w-full  z-50  top-full bg-white origine-top opacity-0 hidden flex-col group-hover/bouton:flex group-hover/bouton:opacity-100 transition-all">
                <div className=' flex items-center p-2'>
                  <input type="checkbox" /><p className=' ms-3'>All (243)</p>
                </div>
                <div className=' flex items-center p-2'>
                  <input type='checkbox' /><p className=' ms-3'>Free Shipping (670)</p>
                </div>
            
                

            
              </div>
              </div>
          </div>
      </div>
 
    </div>

    </div>
    </>
    
  )
}

export default FilterCategory







 