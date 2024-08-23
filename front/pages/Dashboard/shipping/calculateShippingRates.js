import React from 'react';

const CalculateShippingRates = () => {
  return (
    <div>
      <h3 className="font-semibold mb-4">Calculate Shipping Rates</h3>
      <div className="space-y-2">
        <input type="text" placeholder="Weight" className="border p-2 w-full rounded" />
        <div className="flex space-x-2">
          <input type="text" placeholder="Height" className="border p-2 w-1/3 rounded" />
          <input type="text" placeholder="Width" className="border p-2 w-1/3 rounded" />
          <input type="text" placeholder="Length" className="border p-2 w-1/3 rounded" />
        </div>
        <select className="border p-2 w-full rounded">
          <option>Location</option>
          <option>USA</option>
          <option>Europe</option>
        </select>
        <button className="bg-black text-white px-4 py-2 rounded w-full">Calculate Rates</button>
      </div>
    </div>
  );
};

export default CalculateShippingRates;