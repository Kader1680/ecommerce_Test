
import React from 'react';

import { Image } from '@nextui-org/react';
 

const ManageShippingCarriers = () => {
    const carriers = [
    
      { name: 'Carrier A', date: '2024-06-10', status: 'Active' },
      { name: 'Carrier B', date: '2024-06-12', status: 'Inactive' },
      { name: 'Carrier C', date: '2024-06-15', status: 'Active' },
      { name: 'Carrier D', date: '2024-06-20', status: 'Inactive' },
    
    
    ];
  
    return (
      <div>
        <div className="flex justify-between items-center mb-4">
          <h3  style={{ fontSize:"16px" }}  className="fontLg">Manage Shipping Carriers</h3>
          <button className="bg-black  text-white fontmd px-2 py-1 rounded">+ Add New Shipping</button>
        </div>
        <ul>
          {carriers.map((carrier, index) => (
            <li key={index} className="flex justify-between items-center p-2 border-b fontmd">
              <span>{carrier.name}</span>
              <span>{carrier.date}</span>
              <span className={`px-2 py-1 fontmd rounded ${carrier.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'}`}>{carrier.status}</span>
              <div className="flex space-x-2">
                <button className="text-gray-500 hover:text-black">
                    <Image alt='alt' width={24} height={24} src='/edit.png' />
                </button>
                <button className="text-gray-500 hover:text-black">
                    <Image alt='alt' width={24} height={24} src='/trash.png' />

                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  };

export default ManageShippingCarriers