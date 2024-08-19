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


  const router = useRouter();
  const { id } = router.query;
  const order = orderDetails[id];

  if (!order) {
    return <p>Order not found</p>;
  }

  return (
    <div className="p-4">
      <h1 className="text-xl font-semibold mb-4">Order Details for Order #{order.id}</h1>
      <div className="bg-white p-4 rounded-md shadow-md">
        <h2 className="text-lg font-semibold">Order Status: {order.status}</h2>
        <h3 className="mt-2 font-semibold">Customer Details:</h3>
        <p>Buyer: {order.buyer}</p>
        <p>Seller: {order.seller}</p>
        <h3 className="mt-2 font-semibold">Items Purchased:</h3>
        <ul>
          {order.items.map((item, index) => (
            <li key={index} className="mt-1">
              {item.name} - {item.price}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default OrderDetail