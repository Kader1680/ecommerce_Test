import { Button, Input } from '@nextui-org/react'
import React from 'react'
import {Select, SelectItem} from "@nextui-org/react";
import {country} from "./country";

function AddShippingAdress() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm mb-5 h-fit ">
      <h2 className="text-xl font-semibold mb-4">Add your shipping address</h2>
      <form>
        <div className="mb-4">
           
          <Select 
            className="text-gray-700 w-full text-sm  mb-2"
            variant="bordered"

            label="Country" 
            
            >
            {country.map((count) => (
            <SelectItem key={count.key}>
                {count.label}
            </SelectItem>
            ))}
        </Select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Full Name</label>
          <Input
            variant="bordered"
            type="text"
            placeholder="Full Name"
            className=" appearance-none  rounded w-full   text-gray-700  "
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Address Line 1</label>
          <Input
            variant="bordered"
            type="text"
            placeholder="Address Line 1"
            className=" appearance-none  rounded w-full   text-gray-700  "
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Address Line 2 (optional)</label>
          <Input
            variant="bordered"
            type="text"
            placeholder="Address Line 2 (optional)"
            className=" appearance-none  rounded w-full   text-gray-700  "
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Zip Code</label>
          <Input
            variant="bordered"
            type="text"
            placeholder="Zip Code"
            className=" appearance-none  rounded w-full   text-gray-700  "
          />
        </div>
         
          <Button  className='me-1 bg-white text-black rounded-full border' href="/auth/signup" variant="flat">
            Cancel
          </Button>
          <Button  className='bg-black text-white rounded-full' href="#" variant="flat">
           Save
          </Button>
          
      </form>
    </div>
  )
}

export default AddShippingAdress