import { Image, Switch } from '@nextui-org/react';
import React from 'react'
  function LoyaltyProgramCard({ program }) {
    return (
      <div className="border rounded-lg shadow-md p-4 w-64 ">
        <div className="flex justify-between items-center mb-4">
          <Image
          width={30}
          height={30}
            src={program.image}
            alt={program.name}
            className="w-12 h-12"
          />
          <button className="text-gray-600 hover:text-gray-900">
            <i className="fas fa-edit"></i>
          </button>
        </div>
        <h3 className="text-lg font-semibold mb-2">{program.name}</h3>
        <p className="text-sm text-gray-600 mb-1">
          Points Required <span className="font-semibold">{program.pointsRequired}</span>
        </p>
        <p className="text-sm text-gray-600 mb-4">
          Reward <span className="font-semibold">{program.reward}</span>
        </p>
        <div className="flex items-center">
        <Switch defaultSelected color="default">Active</Switch>
        </div>
      </div>
    );
  }
function Reward() {
    const loyaltyPrograms = [
        {
          name: 'VIP Program',
          pointsRequired: 500,
          reward: 'Free Shipping',
          active: true,
          image: '/gold.png',  
        },
        {
          name: 'Silver Member',
          pointsRequired: 500,
          reward: 'Free Shipping',
          active: true,
          image: '/silver.png',  
        },
      ];
    
      return (
        <div className="container mx-auto p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-xl font-semibold">Loyalty Programs List</h1>
            <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800">
              + Add New Loyalty Program
            </button>
          </div>
    
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {loyaltyPrograms.map((program, index) => (
              <LoyaltyProgramCard key={index} program={program} />
            ))}
          </div>
        </div>
      );
}

export default Reward