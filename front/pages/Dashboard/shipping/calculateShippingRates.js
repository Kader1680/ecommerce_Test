import React from 'react';
import {Select, SelectItem} from "@nextui-org/react";

const CalculateShippingRates = () => {
  const animals = [
    {key: "cat", label: "Algeria"},
    {key: "dog", label: "USA"},
    {key: "elephant", label: "Canada"},
    {key: "lion", label: "Germany"},
    {key: "tiger", label: "Italia"},
   
  ];
  return (
    <div>
      <h3 style={{ fontSize:"16px" }} className="fontLg  ">Calculate Shipping Rates</h3>
      <p className=' text-sm text-gray-500 md:mb-4'>Review past orders and their details.</p>

      <div className="space-y-2">
        <div className='grid grid-cols-3  items-center'>
        <p className=' col-span-1 fontmd'>Weight</p>
        <input type="text" placeholder="Weight" className="border   outline-none w-full rounded fontmd p-2  col-span-2" />
        </div>
        <div className="flex space-x-2">
          <div className=' grid grid-cols-3  items-center '>
            <p className=' col-span-1 fontmd'>Dimention</p>
            <div className=' col-span-2 flex '>

            <input type="text" placeholder="Height" className="border p-2  w-1/3 rounded md:me-2 fontmd" />
            <input type="text" placeholder="Width" className="border p-2   w-1/3 rounded md:me-2 fontmd" />
            <input type="text" placeholder="Length" className="border p-2   w-1/3 rounded fontmd" />
            </div>
          </div>
        </div>
        <div className='grid grid-cols-3  items-center'>
          <p className='col-span-1 fontmd'>Shipping Location</p>
          <div className='col-span-2 outline-none  fontmd'>
          <Select 
        label="Shipping Location " 
        className=" w-full  p-0" 
      >
        {animals.map((animal) => (
          <SelectItem key={animal.key}>
            {animal.label}
          </SelectItem>
        ))}
      </Select>
          </div>
        </div>
        <button className="bg-black text-white px-4 py-2 rounded w-full fontmd">Calculate Rates</button>
      </div>
    </div>
  );
};

export default CalculateShippingRates;