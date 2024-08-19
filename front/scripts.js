import React from 'react';

function OrderHeader({ orderId }) {
  return (
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-2xl font-bold">Order {orderId}</h2>
      <div className="flex gap-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Payment</button>
        <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded">Invoice</button>
      </div>
    </div>
  );
}

export default OrderHeader;









function OrderStatus({ status }) {
  const statusMap = {
    'Order Confirming': 'bg-yellow-300',
    'Payment': 'bg-green-300',
    'Shipping': 'bg-blue-300',
    'Delivered': 'bg-purple-300',
    'Completed': 'bg-gray-300',
  };

  return (
    <div className={`flex gap-2 mb-4 ${statusMap[status]}`}>
      <div className="w-8 h-8 flex items-center justify-center rounded-full">
        {/* Add appropriate icons for each status */}
      </div>
      <span>{status}</span>
    </div>
  );
}

export default OrderStatus;


import React from 'react';

function OrderItems({ items }) {
  return (
    <div className="mb-4">
      <h3 className="text-lg font-semibold mb-2">Items Purchased</h3>
      <ul>
        {items.map((item) => (
          <li key={item.id} className="flex justify-between mb-2">
            <div>
              <img src={item.image} alt={item.name} className="w-16 h-16" />
              <p>{item.name}</p>
            </div>
            <span>${item.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default OrderItems;

 

function OrderPage({ orderId, orderData }) {
  const { status, items, shippingAddress, shippingMethod, notes } = orderData;

  return (
    <div className="container mx-auto px-4">
      <OrderHeader orderId={orderId} />
      <OrderStatus status={status} />
      <OrderItems items={items} />
      
    </div>
  );
}

export default OrderPage;