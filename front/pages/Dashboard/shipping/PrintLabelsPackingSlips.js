import React from 'react';
import {Select, SelectItem} from "@nextui-org/react";

const PrintLabelsPackingSlips = () => {

  const animals = [
    {key: "cat", label: "Algeria"},
    {key: "dog", label: "USA"},
    {key: "elephant", label: "Canada"},
    {key: "lion", label: "Germany"},
    {key: "tiger", label: "Italia"},
   
  ];
  return (
    <div>
      <h3 style={{ fontSize:"16px" }} className="fontLg  mb-4">Print Labels and Packing Slips</h3>
      <p className=' text-gray-500'>Review past orders and their details.</p>
      <div className='  mt-4'>
      <p className=' text-gray-700'>Shipment Details</p>

      <Select 
        label="Shipping Addressl" 
        className=" w-full" 
      >
        {animals.map((animal) => (
          <SelectItem key={animal.key}>
            {animal.label}
          </SelectItem>
        ))}
      </Select>
      
        </div>
      
      <div className="space-y-2 mt-3">
        <p className=' text-gray-700'>Shipment Details</p>
        <textarea placeholder="Shipment Details" className="border p-2 w-full rounded h-44"></textarea>
        <button className="bg-black text-white  fontmd px-2 py-1 rounded w-full">Print Shipping Label</button>
        <button className=" border fontmd px-2 py-1 rounded w-full">Print Packing Slip</button>
      </div>
    </div>
  );
};

export default PrintLabelsPackingSlips;