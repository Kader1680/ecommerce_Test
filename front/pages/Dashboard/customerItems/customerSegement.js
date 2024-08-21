import { Image } from '@nextui-org/react';
import React from 'react'
// components/CustomerListItem.js
function CustomerListItem({ name, avatar }) {
    return (
      <div className="flex items-center p-2 hover:bg-gray-100 rounded-md cursor-pointer">
        <Image  width={30} height={30}
          src={avatar}
          alt={name}
          className="w-8 h-8 rounded-full mr-3"
        />
        <span className="font-medium">{name}</span>
      </div>
    );
  }


function CustomerSegement() {
    const customers = [
        { name: 'Lucy Johnson', avatar: '/followers (2).png' },
        { name: 'Oliver Smith', avatar: '/followers (3).png' },
        { name: 'Emma Brown', avatar: '/followers (4).png' },
        { name: 'Oliver Smith', avatar: '/followers (2).png' },
        { name: 'Lucy Johnson', avatar: '/followers (3).png' },
        { name: 'Emma Brown', avatar: '/followers (4).png' },
        { name: 'Oliver Smith', avatar: '/followers (3).png' },
        { name: 'Emma Brown', avatar: '/followers (2).png' },
      ];
    
      const participants = [
        { name: 'Bessie Cooper', avatar: '/followers (2).png' },
        { name: 'Paul Jennings', avatar: '/followers (2).png' },
        { name: 'Jeanne Caliment', avatar: '/followers (2).png' },
        { name: 'Bessie Cooper', avatar: '/followers (2).png' },
        { name: 'Jeanne Caliment', avatar: '/followers (2).png' },
        { name: 'Bessie Cooper', avatar: '/followers (2).png' },
        { name: 'Paul Jennings', avatar: '/followers (2).png' },
        { name: 'Jeanne Caliment', avatar: '/followers (2).png' },

      ];
      return (
        <div className="flex bg-white shadow-md rounded-lg overflow-hidden">
          {/* Customer List */}
          <div className="w-1/4 border-r border-gray-200 p-4">
            <h3 className="text-lg font-semibold mb-4">Customer List</h3>
            <div >
              {customers.map((customer, index) => (
                <div key={customer.name} className=' border-1 rounded-lg'>
                <CustomerListItem
                  key={index}
                  name={customer.name}
                  avatar={customer.avatar}
                />

                </div>
              ))}
            </div>
          </div>
    
          {/* Customer Segments */}
          <div className="w-3/4 p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Choose Segmentation</h3>
              <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800">
                + Create segment
              </button>
            </div>
    
            <div style={{ backgroundColor:"#f3f3f3" }} className="border rounded-lg p-4 mb-6 ">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium">Segment Name</p>
                  <p className="text-sm text-gray-600">Dubai</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">Type</p>
                  <p className="text-sm text-gray-600">Location</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">Customers</p>
                  <p className="text-sm text-gray-600">5</p>
                </div>
                <div className="flex items-center space-x-3">
                  <button className="text-gray-600 hover:text-black">
                    <i className="fas fa-edit"></i>
                  </button>
                  <button className="text-gray-600 hover:text-black">
                    <i className="fas fa-trash-alt"></i>
                  </button>
                  <button className="text-gray-600 hover:text-black">
                    <i className="fas fa-ellipsis-v"></i>
                  </button>
                </div>
              </div>
            </div>
    
            <h4 className="text-lg font-semibold mb-4">
              All participants ({participants.length})
            </h4>
            <div className="space-y-2">
              {participants.map((participant, index) => (
                <div
                  key={index}
                  className="flex justify-start gap-2 items-center p-2 hover:bg-gray-100 rounded-md border-1"
                >
                  <Image alt = 'alt' width={30} height={30}    src={participant.avatar} />
                  <span className="font-medium">{participant.name}</span>
                  <button className="text-gray-600 hover:text-black">
                  <Image alt = 'alt' width={30} height={30}  src="/close.png" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
}

export default CustomerSegement