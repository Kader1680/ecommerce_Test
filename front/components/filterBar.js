import React, { useState } from 'react'
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";
import {Checkbox} from "@nextui-org/react";
import Image from 'next/image';

function FilterCategory() {
  


  const [taz, setfilter] = useState(false);

    const dsplay = () =>{
          setfilter(!taz)
    }

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
    
      const sizes = ['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL'];
    
      const colors = [
        'gray', 'black', 'white', 'brown', 'pink', 'blue', 
        'red', 'orange', 'yellow', 'green', 'purple', 'multicolor'
      ];
    
      const handleBrandChange = (brand) => {
        setSelectedBrand((prev) =>
          prev.includes(brand)
            ? prev.filter((item) => item !== brand)
            : [...prev, brand]
        );
      };
    
      const handleSizeChange = (size) => {
        setSelectedSize((prev) =>
          prev.includes(size)
            ? prev.filter((item) => item !== size)
            : [...prev, size]
        );
      };
    
      const handleColorChange = (color) => {
        setSelectedColor((prev) =>
          prev.includes(color)
            ? prev.filter((item) => item !== color)
            : [...prev, color]
        );
      };

      
  return (
    <>
      
      {/* <button className=' md:hidden' onClick={dsplay}><img src='images/menu.png' /></button> */}

{/* className= {`${taz ? 'sm:block' : 'sm:hidden'} md:block`} */}
      <div   >

        

        <div className=' font-bold flex items-center'><Image width={25} height={38} src='/images/filter 01.png' alt='alt' /><h4 style={{ fontSize:"20px" }} className=' ms-1 '>FILTER</h4>
        </div>
       
       <div className="w-64 p-4 border rounded-lg mt-4">
      <div className="mb-4">
        <h3 className="font-semibold">Status</h3>
        <div className="mt-2">
          <label className="block">
            <input type="radio" name="status" className="mr-2" />
            Any
          </label>
          <label className="block">
            <input type="radio" name="status" className="mr-2" />
            For sale
          </label>
          <label className="block">
            <input type="radio" name="status" className="mr-2" />
            Sold
          </label>
        </div>
      </div>
      <div className="mb-4">
        <h3 className="font-semibold">Brand</h3>
        <div className="mt-2">
          <input
            type="text"
            placeholder="Search brand"
            className="w-full p-2 border rounded-lg mb-2"
          />
          <div className="h-40 overflow-y-scroll">
            {brands.map((brand, index) => (
              <label key={index} className="block">
                <input
                  type="checkbox"
                  className="mr-2"
                  checked={selectedBrand.includes(brand.name)}
                  onChange={() => handleBrandChange(brand.name)}
                />
                {brand.name} ({brand.count})
              </label>
            ))}
          </div>
        </div>
      </div>
      <div className="mb-4">
        <h3 className="font-semibold">Size</h3>
        <div className="mt-2">
          {sizes.map((size, index) => (
            <label key={index} className="block">
              <input
                type="checkbox"
                className="mr-2"
                checked={selectedSize.includes(size)}
                onChange={() => handleSizeChange(size)}
              />
              {size}
            </label>
          ))}
        </div>
      </div>
      <div className="mb-4">
        <h3 className="font-semibold">Price</h3>
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
      <div className="mb-4">
        <h3 className="font-semibold">Color</h3>
        <div className="mt-2 flex flex-wrap gap-2">
          {colors.map((color, index) => (
            <label key={index} className="inline-block">
              <input
                type="checkbox"
                className="mr-2"
                checked={selectedColor.includes(color)}
                onChange={() => handleColorChange(color)}
              />
              <span
                className={`inline-block w-6 h-6 rounded-full border border-gray-300 bg-${color}-500`}
              ></span>
            </label>
          ))}
        </div>
      </div>
    </div>

    </div>
    </>
    
  )
}

export default FilterCategory