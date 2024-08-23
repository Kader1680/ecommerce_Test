import React from 'react';

const PrintLabelsPackingSlips = () => {
  return (
    <div>
      <h3 className="fontLg mb-4">Print Labels and Packing Slips</h3>
      <div className="space-y-2">
        <select className="border p-2 w-full rounded">
          <option>Shipping Address</option>
          <option>123 Main St</option>
          <option>456 Another Rd</option>
        </select>
        <textarea placeholder="Shipment Details" className="border p-2 w-full rounded h-24"></textarea>
        <button className="bg-black text-white  fontmd px-2 py-1 rounded w-full">Print Shipping Label</button>
        <button className="bg-black text-white  fontmd px-2 py-1 rounded w-full">Print Packing Slip</button>
      </div>
    </div>
  );
};

export default PrintLabelsPackingSlips;