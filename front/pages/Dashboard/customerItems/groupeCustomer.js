import { Image } from '@nextui-org/react';
import React, { useState } from 'react'
 
function GroupeCustomer() {

    const orders = [


     
        { id: 'DJI mavic mini 2 4K Drone Fly More', buyer: 'Alice Johnson', seller: 'Palestine', date: '2023-02-15', status: 'VIP', brand: 5, totalAmount: '$75.00' },
        
        { id: 'Embellished Flare Leg Jeans 90s', buyer: 'Sarah Lee', seller: 'Viet Nam', date: '2023-03-20', status: 'New', brand: 5, totalAmount: '$50.00' },
        { id: 'Embellished Flare Leg Jeans 90s', buyer: 'David Wang', seller: 'Sao Tome and Principe', date: '2023-04-10', status: 'Regular', brand: 5, totalAmount: '$120.00' },
        { id: 'Embellished Flare Leg Jeans 90s', buyer: 'Olivia Garcia', seller: 'Iceland', date: '2023-05-05', status: 'New', brand: 5, totalAmount: '$90.00' },
        { id: 'Embellished Flare Leg Jeans 90s', buyer: 'Sophia Martinez', seller: 'Brazil', date: '2023-06-30', status: 'Regular', brand: 5, totalAmount: '$85.00' },
    
        { id: 'Embellished Flare Leg Jeans 90s', buyer: 'Ava Anderson', seller: 'Haiti', date: '2023-07-25', status: 'New', brand: 5, totalAmount: '$110.00' },
    
        { id: 'Embellished Flare Leg Jeans 90s', buyer: 'Liam Clark', seller: 'Poland', date: '2023-08-10', status: 'Regular', brand: 5, totalAmount: '$95.00' },
    
        { id: 'Embellished Flare Leg Jeans 90s', buyer: 'Chloe Hall', seller: 'Algeria', date: '2023-09-15', status: 'Regular', brand: 5, totalAmount: '$70.00' },
        { id: 'Embellished Flare Leg Jeans 90s', buyer: 'Mia Scott', seller: 'Afghanistan', date: '2023-10-05', status: 'VIP', brand: 5, totalAmount: '$130.00' },
      ];
      const status = [
        { "state":"all", "color":""},
       { "state":"VIP", "color":"#fffdc8"},
         { "state":"New",  "color":"#c1dafe"},
          { "state":"Regular", "color":"#f3f3f3"},
        
    
      ]
  return (
    <div>
    
    <table className="min-w-full bg-white  p-3">
        <thead>
          <tr style={{ backgroundColor:"#f3f3f3" }}>
            <th className="py-2 px-4 border-b-2 border-gray-200">
              <input type="checkbox" className="w-4 h-4" />
            </th>
            <th className="p-4  border-b-2 border-gray-200">Name Groupe</th>
            <th className="p-4  border-b-2 border-gray-200">Customers in groupe</th>
            
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id} className="text-center">
              <td className="py-2 px-4 border-b border-gray-200">
                <input type="checkbox" className="w-4 h-4" />
              </td>

              <td className="p-4  border-b border-gray-200">
                <span style={{ backgroundColor: order.status === 'VIP' ? '#fffdc8' : order.status === 'Regular' ? '#f3f3f3' : order.status === 'New' ? '#c4dcff' : '#ffdce0' 
                
              
                
                 }} className={` p-2 text-sm font-medium rounded-full    `}>
                  {order.status}
                </span>
              </td>

              <td className="p-4 border-b border-gray-200">{order.brand}</td>
               
             
              
            
              <td className="py-2 px-4 border-b border-gray-200">
                <div className="flex justify-center space-x-2 gap-2">
                  <button className="text-gray-600 hover:text-gray-800">
                    <Image alt = 'alt' width={30} height={30} src="/view.png" />
                  </button>
                  <button className="text-gray-600 hover:text-gray-800">
                  <Image alt = 'alt' width={30} height={30} src="/edit.png" />
                  </button>
                  <button className="text-gray-600 hover:text-gray-800">
                  <Image alt = 'alt' width={30} height={30} src="/trash.png" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    
    
    </div>
  )
}

export default GroupeCustomer