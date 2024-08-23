import React from "react";

import { Image } from "@nextui-org/react";
function CustomerList() {
  const orders = [

    {
      id: "DJI mavic mini 2 4K Drone Fly More",
      buyer: [
      
        'master', '/ms.png'
      
      ],
      seller: "6/21/19 - 10:24AM",
      date: "6/21/19 - 10:24AM",
      status: "Pending",
      brand: 5,
      totalAmount: "AED100.00",
      user: "/us (1).png",
    },

    {
      id: "Embellished Flare Leg Jeans 90s",
      buyer: [
      
        'master', '/ms.png'
      
      ],
      seller: "6/21/19 - 10:24AM",
      date: "6/21/19 - 10:24AM",
      status: "Pending",
      brand: 5,
      totalAmount: "AED100.00",
      user: "/us (2).png",
    },
    
    {
      id: "Embellished Flare Leg Jeans 90s",
      buyer: [
      
        'master', '/ms.png'
      
      ],
      seller: "6/21/19 - 10:24AM",
      date: "6/21/19 - 10:24AM",
      status: "Completed",
      brand: 5,
      totalAmount: "AED100.00",
      user: "/us (4).png",
    },

    {
      id: "Embellished Flare Leg Jeans 90s",
      buyer: [
      
        'master', '/ms.png'
      
      ],
      seller: "6/21/19 - 10:24AM",
      date: "6/21/19 - 10:24AM",
      status: "Pending",
      brand: 5,
      totalAmount: "AED100.00",
      user: "/us (3).png",
    },

    {
      id: "Embellished Flare Leg Jeans 90s",
      buyer: [      
        'master', '/ms.png'
      ],
      seller: "6/21/19 - 10:24AM",
      date: "6/21/19 - 10:24AM",
      status: "Completed",
      brand: 5,
      totalAmount: "AED100.00",
      user: "/us (4).png",
    },

    {
      id: "Embellished Flare Leg Jeans 90s",
      buyer: [
        'master', '/ms.png'
      ],
      seller: "6/21/19 - 10:24AM",
      date: "6/21/19 - 10:24AM",
      status: "Completed",
      brand: 5,
      totalAmount: "AED100.00",
      user: "/us (5).png",
    },

    {
      id: "Embellished Flare Leg Jeans 90s",
      buyer: [
      
        'master', '/ms.png'
      
      ],
      seller: "6/21/19 - 10:24AM",
      date: "6/21/19 - 10:24AM",
      status: "Failed",
      brand: 5,
      totalAmount: "AED100.00",
      user: "/us (6).png",
    },

    {
      id: "Embellished Flare Leg Jeans 90s",
      buyer: [
      
        'master', '/ms.png'
      
      ],
      seller: "6/21/19 - 10:24AM",
      date: "6/21/19 - 10:24AM",
      status: "Pending",
      brand: 5,
      totalAmount: "AED100.00",
      user: "/us (7).png",
    },

    {
      id: "Embellished Flare Leg Jeans 90s",
      buyer: [
      
        'master', '/ms.png'
      
      ],
      seller: "6/21/19 - 10:24AM",
      date: "6/21/19 - 10:24AM",
      status: "Failed",
      brand: 5,
      totalAmount: "AED100.00",
      user: "/us (8).png",
    },
    
  ];

  return (
    <div>
      <table className="min-w-full bg-white  p-3">
        <thead>
          <tr style={{ backgroundColor: "#f3f3f3" }}>
            <th className="py-2 px-4 border-b-2 border-gray-200">
              <input type="checkbox" className="w-4 h-4" />
            </th>
            <th
              style={{ fontSize: "12px", fontWeight: "700" }}
              className="p-3   border-b-2 border-gray-200"
            >
              Transaction ID
            </th>
            <th
              style={{ fontSize: "12px", fontWeight: "700" }}
              className="p-3  border-b-2 border-gray-200"
            >
              Payout ID
            </th>
            <th
              style={{ fontSize: "12px", fontWeight: "700" }}
              className="p-3  border-b-2 border-gray-200"
            >
              Date
            </th>
            <th
              style={{ fontSize: "12px", fontWeight: "700" }}
              className="p-3 border-b-2 border-gray-200 "
            >
              States
            </th>
            <th
              style={{ fontSize: "12px", fontWeight: "700" }}
              className="p-3 border-b-2 border-gray-200"
            >
              Amount
            </th>
            <th
              style={{ fontSize: "12px", fontWeight: "700" }}
              className="p-3  border-b-2 border-gray-200"
            >
               
            </th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id} className="text-center ">


              <td className="py-2 px-4 border-b border-gray-200">
                <input type="checkbox" className="w-4 h-4" />
              </td>


              <td className="p-4 flex items-center   border-b border-gray-200">
                <p style={{ fontSize: "12px" }}>{order.seller}</p>
              </td>


              <td
                style={{ fontSize: "12px" }}
                className="py-2 px-4 border-b border-gray-200"
              >
                 <p className='flex'>
                    <img alt='alt'  src={order.buyer[1]} />
                    <span>{order.buyer[0]} </span>
                 </p>
              </td>



              <td
                style={{ fontSize: "12px" }}
                className="p-4 border-b border-gray-200"
              >
                {order.date}
              </td>

              <td className="p-4  border-b border-gray-200">
                <span
                  style={{
                    backgroundColor:
                      order.status === "Pending"
                        ? "#cbffec"
                        : order.status === "Completed"
                        ? "#ffdce0"
                        : order.status === "Failed"
                        ? "#ffedd8"
                        : "#ffdce0",
                    color:
                      order.status === "Pending"
                        ? "#10a76f"
                        : order.status === "Completed"
                        ? "#f80925"
                        : order.status === "Failed"
                        ? "#ff7a00"
                        : "#ffdce0",
                    fontSize: "12px",
                  }}
                  className={` p-2 text-sm font-medium rounded-md  `}
                >
                  {order.status}
                </span>
              </td>

              <td
                style={{ fontSize: "12px" }}
                className="py-2 px-4 border-b border-gray-200 "
              >
                {order.totalAmount}
              </td>


              <td className="py-2 px-4 border-b border-gray-200">
                <div className="flex justify-center space-x-2 gap-2">
                  <button className="text-gray-600 hover:text-gray-800">
                    <Image alt="alt" width={24} height={24} src="/view.png" />
                  </button>
                  <button className="text-gray-600 hover:text-gray-800">
                    <Image alt="alt" width={24} height={24} src="/sent.png" />
                  </button>
                </div>
              </td>



            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CustomerList;
