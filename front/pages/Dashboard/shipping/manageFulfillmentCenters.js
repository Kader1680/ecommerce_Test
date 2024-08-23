import { Image } from '@nextui-org/react';
import React from 'react';

const ManageFulfillmentCenters = () => {
  const centers = [
    { name: 'Center A', location: 'Córdoba', cost: 500 },
    { name: 'Center B', location: 'Lübeck', cost: 550 },
    { name: 'Center C', location: 'Resistencia', cost: 600 },
    { name: 'Center D', location: 'Salem (OR)', cost: 450 },
    { name: 'Center E', location: 'Mar del Plata', cost: 700 },
    { name: 'Center F', location: 'Wuppertal', cost: 480 },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold">Manage Fulfillment Centers</h3>
        <button className="bg-black text-white  fontmd px-2 py-1 rounded">+ Add New Fulfillment</button>
      </div>
      <ul>
        {centers.map((center, index) => (
          <li key={index} className="flex justify-between items-center p-2 border-b fontmd">
            <span>{center.name}</span>
            <span>{center.location}</span>
            <span>{center.cost}</span>
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

export default ManageFulfillmentCenters;
