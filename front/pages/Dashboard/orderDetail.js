import { Image, Progress } from '@nextui-org/react'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
const orderDetails = {
  12345: {
    id: 12345,
    buyer: 'John Doe',
    seller: 'Jane Smith',
    date: '2023-01-01',
    status: 'Pending',
    items: [{ name: 'Leather Belt', price: '$20.36' }],
  },
  67890: {
    id: 67890,
    buyer: 'Alice Johnson',
    seller: 'Michael Brown',
    date: '2023-02-15',
    status: 'Completed',
    items: [{ name: 'Sneakers', price: '$75.00' }],
  },
  24680: {
    id: 24680,
    buyer: 'Sarah Lee',
    seller: 'Chris Thompson',
    date: '2023-03-20',
    status: 'Pending',
    items: [{ name: 'Backpack', price: '$50.00' }],
  },
};
function OrderDetail() {

 
 
  return (
    <div className="bg-gray p-6 min-h-screen">
    <h1 className="text-2xl font-semibold text-black mb-4">Order 2345</h1>
    <div className="text-sm text-gray-400 mb-6">
      Order History / Order Details / Order 2345
    </div>

    {/* Main Grid Layout */}
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      {/* Left Column */}
      <div className="col-span-2 space-y-4">
        {/* Order Status */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="font-semibold mb-2">Order Status</h2>
          <div className="flex justify-between items-center bg-gray-100 p-2 rounded-lg">
            <div className="flex flex-col items-center text-center">
              <div className="  rounded-full flex items-center justify-center shadow">
                <Image width={30} height={30} alt='ALT' src='/packaging-done.png' />
              </div>
              <span className="mt-2 text-green-500 font-semibold">
                Order Confirming
              </span>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow">
                💳
              </div>
              <span className="mt-2 text-orange-500 font-semibold">
                Payment
              </span>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow">
                🚚
              </div>
              <span className="mt-2 text-gray-400 font-semibold">
                Shipping
              </span>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow">
                📭
              </div>
              <span className="mt-2 text-gray-400 font-semibold">
                Delivered
              </span>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow">
                ✅
              </div>
              <span className="mt-2 text-gray-400 font-semibold">
                Completed
              </span>
            </div>
          </div>
        </div>

        {/* Customer Details */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="font-semibold">Customer details</h2>
          <p className="text-gray-500">Current order status</p>
        </div>

        {/* Items Purchased */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="font-semibold">Items Purchased</h2>
          <p className="text-gray-500">Current order status</p>
          <div className="flex items-center mt-4">
            <Image
              width={30}
              height={30}
              src="/path/to/product-image.jpg"
              alt="Product"
              className="w-20 h-20 object-cover rounded"
            />
            <div className="ml-4">
              <p>CIRCA BROWN LEATHER BELT Square Buckle</p>
              <p>Small 1.5 &quot; WIDE MADE IN USA STITCHED</p>
            </div>
            <div className="ml-auto font-semibold text-lg">$20.36</div>
          </div>
        </div>

        {/* Shipping Address */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="font-semibold">Shipping address</h2>
          <p className="text-gray-500">Current order status</p>
        </div>

        {/* Shipping Method */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="font-semibold">Shipping method</h2>
          <p className="text-gray-500">Current order status</p>
        </div>

        {/* Notes and Documents */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="font-semibold">Notes and Documents</h2>
          <p className="text-gray-500">Current order status</p>
        </div>
      </div>

      {/* Right Column */}
      <div className="space-y-4">
        {/* Payment Section */}
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex justify-between items-center">
            <h2 className="font-semibold">Payment</h2>
            <button className="bg-gray-100 text-black py-1 px-3 rounded-full">
              Invoice
            </button>
          </div>
          <p className="text-gray-500">Payment Amount</p>
        </div>

        {/* Tracking Information */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="font-semibold">Tracking information</h2>
          <p className="text-gray-500">Payment Amount</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default OrderDetail