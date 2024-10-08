import React from 'react'
  
import {Image} from "@nextui-org/react";
function CustomerList() {

    const orders = [


     
        { id: 'DJI mavic mini 2 4K Drone Fly More', buyer: 'Alice Johnson', seller: 'Palestine', date: '2023-02-15', status: 'VIP', brand: 5, totalAmount: '$75.00', user: '/us (1).png' },
        
        { id: 'Embellished Flare Leg Jeans 90s', buyer: 'Sarah Lee', seller: 'Viet Nam', date: '2023-03-20', status: 'New', brand: 5, totalAmount: '$50.00', user: '/us (2).png' },
        { id: 'Embellished Flare Leg Jeans 90s', buyer: 'David Wang', seller: 'Sao Tome and Principe', date: '2023-04-10', status: 'Regular', brand: 5, totalAmount: '$120.00', user: '/us (4).png' },
        { id: 'Embellished Flare Leg Jeans 90s', buyer: 'Olivia Garcia', seller: 'Iceland', date: '2023-05-05', status: 'New', brand: 5, totalAmount: '$90.00', user: '/us (3).png' },
        { id: 'Embellished Flare Leg Jeans 90s', buyer: 'Sophia Martinez', seller: 'Brazil', date: '2023-06-30', status: 'Regular', brand: 5, totalAmount: '$85.00', user: '/us (4).png' },
    
        { id: 'Embellished Flare Leg Jeans 90s', buyer: 'Ava Anderson', seller: 'Haiti', date: '2023-07-25', status: 'New', brand: 5, totalAmount: '$110.00', user: '/us (5).png' },
    
        { id: 'Embellished Flare Leg Jeans 90s', buyer: 'Liam Clark', seller: 'Poland', date: '2023-08-10', status: 'Regular', brand: 5, totalAmount: '$95.00', user: '/us (6).png' },
    
        { id: 'Embellished Flare Leg Jeans 90s', buyer: 'Chloe Hall', seller: 'Algeria', date: '2023-09-15', status: 'Regular', brand: 5, totalAmount: '$70.00', user: '/us (7).png' },
        { id: 'Embellished Flare Leg Jeans 90s', buyer: 'Mia Scott', seller: 'Afghanistan', date: '2023-10-05', status: 'VIP', brand: 5, totalAmount: '$130.00', user: '/us (8).png' },
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
            <th style={{ fontSize:"12px", fontWeight:"700" }} className="p-3   border-b-2 border-gray-200">Name</th>
            <th style={{ fontSize:"12px", fontWeight:"700" }} className="p-3  border-b-2 border-gray-200">Location</th>
            <th style={{ fontSize:"12px", fontWeight:"700" }} className="p-3  border-b-2 border-gray-200">Order History</th>
            <th style={{ fontSize:"12px", fontWeight:"700" }} className="p-3 border-b-2 border-gray-200 ">Group</th>
            <th style={{ fontSize:"12px", fontWeight:"700" }} className="p-3 border-b-2 border-gray-200">Last Purchase</th>
            <th style={{ fontSize:"12px", fontWeight:"700" }} className="p-3  border-b-2 border-gray-200">Actions</th>
          </tr>
        </thead>
        <tbody className=''>
          {orders.map((order) => (
            <tr key={order.id} className="text-center ">
              <td className="py-2 px-4 border-b border-gray-200">
                <input type="checkbox" className="w-4 h-4" />
              </td>
              <td className="p-4 flex items-center   border-b border-gray-200">
                  <Image className='imgDshabord me-2' src={order.user} width={50} height={30} alt='alt' />
                  <p  style={{ fontSize:"12px" }}>{order.buyer}</p>
                
              </td>
              <td style={{ fontSize:"12px" }} className="p-4  border-b border-gray-200">{order.seller}</td>
              <td style={{ fontSize:"12px" }} className="p-4 border-b border-gray-200">{order.brand}</td>
               
              <td className="p-4  border-b border-gray-200">
                <span style={{ backgroundColor: order.status === 'VIP' ? '#fffdc8' : order.status === 'Regular' ? '#f3f3f3' : order.status === 'New' ? '#c4dcff' : '#ffdce0', fontSize:"12px" 
                
              
                
                 }} className={` p-2 text-sm font-medium rounded-full  `}>
                  {order.status}
                </span>
              </td>
              
              <td style={{ fontSize:"12px" }} className="py-2 px-4 border-b border-gray-200 ">{order.date}</td>
              <td className="py-2 px-4 border-b border-gray-200">
                <div className="flex justify-center space-x-2 gap-2">
                  <button className="text-gray-600 hover:text-gray-800">
                    <Image alt = 'alt' width={24} height={24} src="/view.png" />
                  </button>
                  <button className="text-gray-600 hover:text-gray-800">
                  <Image alt = 'alt' width={24} height={24} src="/edit.png" />
                  </button>
                  <button className="text-gray-600 hover:text-gray-800">
                  <Image alt = 'alt' width={24} height={24} src="/trash.png" />
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

export default CustomerList