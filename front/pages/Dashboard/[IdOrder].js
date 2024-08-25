import { Image } from '@nextui-org/react';
import { useRouter } from 'next/router';
import React from 'react';

function IdOrder() {
  const router = useRouter();
  const idOrder = router.query;
  console.log((parseInt(idOrder.IdOrder)))
  const orderDetails = [
    {
      id: 12345,
      buyer: 'John Doe',
      seller: 'Jane Smith',
      date: '2023-01-01',
      status: 'Pending',
      items: [{ name: 'Leather Belt', price: '$20.36' }],
    },
    {
      id: 67890,
      buyer: 'Alice Johnson',
      seller: 'Michael Brown',
      date: '2023-02-15',
      status: 'Completed',
      items: [{ name: 'Sneakers', price: '$75.00' }],
    },
    {
      id: 24680,
      buyer: 'Sarah Lee',
      seller: 'Chris Thompson',
      date: '2023-03-20',
      status: 'Pending',
      items: [{ name: 'Backpack', price: '$50.00' }],
    },
  ];

  // Check if idOrder is defined and filter the order details based on it
  const filteredOrder = orderDetails.find((order) => order.id === parseInt(idOrder.IdOrder));

  // Check if data is still being loaded or if no matching order is found
  if (!router.isReady) {
    return <p>Loading...</p>;
  }

  if (!filteredOrder) {
    return <p>No order details found for the given ID.</p>;
  }

  return (


    <div>

<div className="bg-gray p-6 min-h-screen">
    <h1 className="text-2xl font-semibold text-black mb-4">Order 2345</h1>
    <div className="text-sm text-gray-400 mb-6">
      Order History / Order Details / Order {filteredOrder.id}
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
                <Image width={20} height={20} alt='alt  ' src='/packaging-done.png' />
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
              width={220}
              height={120}
              src="/p3.png"
              alt="Product"
              className="w-20 h-20 object-cover rounded"
            />
            <div className="ml-4">
              <p>CIRCA BROWN LEATHER BELT Square Buckle</p>
              <p>Small 1.5 &quot; WIDE MADE IN USA STITCHED</p>
            </div>
            <div className="ml-auto font-semibold text-lg"></div>
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
    </div>

    // <div>
    //   <h1>Order Details</h1>
    //   <p>Order ID: {filteredOrder.id}</p>
    //   <p>Buyer: {filteredOrder.buyer}</p>
    //   <p>Seller: {filteredOrder.seller}</p>
    //   <p>Date: {filteredOrder.date}</p>
    //   <p>Status: {filteredOrder.status}</p>
    //   <h4>Items:</h4>
    //   <ul>
    //     {filteredOrder.items.map((item, index) => (
    //       <li key={index}>
    //         {item.name} - {item.price}
    //       </li>
    //     ))}
    //   </ul>
    // </div>
  );
}

export default IdOrder;
