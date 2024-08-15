import { Button, Input } from '@nextui-org/react'
import React from 'react'

function AddPaymentMethod() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm mb-4">
      <h2 className="text-xl font-semibold mb-4">Add Payment Method</h2>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Cart Number</label>
          <Input
            variant="bordered"
            type="text"
            placeholder="Cart Number"
            className=" appearance-none  rounded w-full   text-gray-700  "
          />
        </div>


        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">MM/YY</label>
          <Input
            variant="bordered"
            type="text"
            placeholder="MM/YY"
            className=" appearance-none  rounded w-full   text-gray-700  "
          />
        </div>


        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">CVV</label>
          <Input
            variant="bordered"
            type="text"
            placeholder="CVV"
            className=" appearance-none  rounded w-full   text-gray-700  "
          />
        </div>

        
        
        <Button  className='me-1 bg-white text-black rounded-full border' href="/auth/signup" variant="flat">
            Cancel
          </Button>
          <Button  className='bg-black text-white rounded-full' href="#" variant="flat">
           Confirm
        </Button>
      </form>
    </div>
  )
}

export default AddPaymentMethod