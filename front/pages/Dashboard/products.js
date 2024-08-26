import React, { useState } from 'react'
import view from "../../public/view.png"
import edit from "../../public/edit.png"
import Search  from '../../components/search';
import {Image} from "@nextui-org/react";
import PriceRange from '../../components/priceRange';
function Products() {

  const orders = [


     
    { id: ['DJI mavic mini 2 4K Drone Fly More', '/p1.png'], buyer: 'Alice Johnson', seller: 'Michael Brown', date: '2023-02-15', status: 'Completed', brand: 'Brand1', totalAmount: '$75.00', view: view, edit, edit },
    
    { id: ['Embellished Flare Leg Jeans 90s', '/p2.png'], buyer: 'Sarah Lee', seller: 'Chris Thompson', date: '2023-03-20', status: 'As Draft', brand: 'DJI', totalAmount: '$50.00', view: view, edit, edit },


    { id: ['Embellished Flare Leg Jeans 90s', '/p2.png'], buyer: 'David Wang', seller: 'Emily Davis', date: '2023-04-10', status: 'Completed', brand: 'Brand1', totalAmount: '$120.00' },

    { id: ['Embellished', '/p4.png'], buyer: 'Olivia Garcia', seller: 'Daniel Wilson', date: '2023-05-05', status: 'Inactive', brand: 'Brand1', totalAmount: '$90.00', view: view, edit, edit },

    { id: ['Embellished Flare', '/p3.png'], buyer: 'Sophia Martinez', seller: 'Ethan Moore', date: '2023-06-30', status: 'Completed', brand: 'DJI', totalAmount: '$85.00', view: view, edit, edit },

    { id: ['Embellished Flare Leg Jeans 90s', '/p2.png'], buyer: 'Ava Anderson', seller: 'Matthew White', date: '2023-07-25', status: 'Inactive', brand: 'DJI', totalAmount: '$110.00', view: view, edit, edit },

    { id: ['Embellished Flare Leg Jeans 90s', '/p2.png'], buyer: 'Liam Clark', seller: 'Grace Baker', date: '2023-08-10', status: 'Completed', brand: 'Brand1', totalAmount: '$95.00', view: view, edit, edit },

    { id: ['Embellished Flare Leg Jeans 90s', '/p2.png'], buyer: 'Chloe Hall', seller: 'Andrew King', date: '2023-09-15', status: 'Completed', brand: 'DJI', totalAmount: '$70.00', view: view, edit, edit },
    { id: ['Embellished Flare Leg', '/p5.png'], buyer: 'Mia Scott', seller: 'William Taylor', date: '2023-10-05', status: 'Completed', brand: 'Brand1', totalAmount: '$130.00', view: view, edit, edit },
  ];
  const status = [
    { "state":"all",
      "color":""},
   { "state":"Pending",
     "color":"#ff7a00"},
     { "state":"In Process",
      "color":"#6100ff"},
      { "state":"Completed",
        "color":"#10a76f"},
        { "state":"Cancelled",
          "color":"#f80925"},

  ]

  const [price, setprice] = useState(false);
  const displayPrice = () => {
    setprice(!price)
  }
  
  return (
    <div className="overflow-x-auto  p-3">
      <h4 className='  font-bold text-xl'>Orders</h4>

 

      <div className=' flex rounded-xl mt-4 mb-4 bg-white w-fit p-1'>
      
        {
          status.map(s => (
            <div key={s.color} className=' status w-fit p-2 flex items-center gap-2 rounded-xl'>
            
              <div className='rounded-full' style={{ backgroundColor:s.color, width:"10px", height:"10px" }}></div>
              {s.state}
            </div>
          ))
        }
      </div>


        <div className=' grid grid-cols-5 bg-white p-3'>
            <div className=' col-span-4 flex justify-start gap-2'>
  
              <div>
                  <div style={{ width:"5rem" }}>
                    <div onClick={displayPrice} className=' border p-2 rounded-lg cursor-pointer flex items-center justify-between '><p>Price</p> <Image width={20} height={20} alt='alt' src='/down.png' /></div>
                    <div className=' absolute z-50 mt-5' style={{ display : price ?  "block" : "none" }}>
                    <PriceRange />
                    </div>
                    
                  </div>
                </div>

                
                <div>
                  <form class="max-w-sm mx-auto">
                
                    <select style={{ border:"1px solid #e8e8e8" }} id="countries" class="bg-white border   text-gray-900 text-sm rounded-md   block w-full p-2.5 ">
                        <option selected>Brand</option>
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="FR">France</option>
                        <option value="DE">Germany</option>
                    </select>
                  </form>
                </div>

               <div>
                  <form class="max-w-sm mx-auto">
                  
                  <select style={{ border:"1px solid #e8e8e8" }}  id="countries" class="bg-white border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option selected>Price Range</option>
                    
                            
                    
                      
                  </select>
                  </form> 
               </div>


               <div>
                  <form class="max-w-sm mx-auto">
                  
                  <select style={{ border:"1px solid #e8e8e8" }}  id="countries" class="bg-white border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option selected>Status</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="FR">France</option>
                    <option value="DE">Germany</option>
                  </select>
                  </form> 
               </div>
               <form class="max-w-md float-end ">   
                      <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>

                      <div class="relative">
                          <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                          <Image alt='alt' width={15} height={15} src='/searchicon.png' />
                          </div>
                          <input type="search" id="default-search" class="block  p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white outline-none " placeholder="Search orders,buyer,seller" required />
                          
                      </div>
                  </form>
            </div>

       
            
            
        </div>

 


      <table className="min-w-full bg-white  p-3">
        <thead>
          <tr style={{ backgroundColor:"#f3f3f3" }}>
            <th className="py-2 px-4 border-b-2 border-gray-200">
              <input type="checkbox" className="w-4 h-4" />
            </th>
            <th className="py-2 px-4 border-b-2 border-gray-200">Name Product</th>
            <th className="py-2 px-4 border-b-2 border-gray-200">Seller</th>
            <th className="py-2 px-4 border-b-2 border-gray-200">Category</th>
            <th className="py-2 px-4 border-b-2 border-gray-200">Brand</th>
            <th className="py-2 px-4 border-b-2 border-gray-200">Created at</th>
            <th className="py-2 px-4 border-b-2 border-gray-200">Status</th>
            <th className="py-2 px-4 border-b-2 border-gray-200">Price</th>
            <th className="py-2 px-4 border-b-2 border-gray-200">Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id} className="text-center fontmd">
              <td className="py-2 px-4 border-b border-gray-200 fontmd">
                <input type="checkbox" className="w-4 h-4" />
              </td>
              <td  className="py-2 px-0 w-70 border-b  border-gray-200  fontmd flex items-center">
                    <Image className=' rounded-none' alt='alt' width={60} height={60} src={order.id[1]} />
                    <span className='fontmd text-xs '>{order.id[0]}</span>
              </td>
              <td className="py-2 px-4 border-b border-gray-200 fontmd">{order.buyer}</td>
              <td className="py-2 px-4 border-b border-gray-200 fontmd">{order.seller}</td>
              <td className="py-2 px-4 border-b border-gray-200 fontmd">{order.brand}</td>
              <td className="py-2 px-4 border-b border-gray-200 fontmd">{order.date}</td>
              <td className="py-2 px-4 border-b border-gray-200 fontmd">
                <span style={{ backgroundColor: order.status === 'As Draft' ? '#f3f3f3' : order.status === 'Completed' ? '#cbffec' : order.status === 'In Process' ? '#e9dcff' : '#ffdce0',
                
                color: order.status === 'As Draft' ? 'black' : order.status === 'Completed' ? '#10a76f' : order.status === 'In Process' ? '#6100ff' : '#f80925'
                
                 }} className={`py-1 px-3 rounded-md font-bold  `}>
                  {order.status}
                </span>
              </td>
              
              <td className="py-2 px-4 border-b border-gray-200">{order.totalAmount}</td>
              <td className="py-2 px-4 border-b border-gray-200">
                <div className="flex justify-center space-x-2 gap-2">
                  <button className="text-gray-600 hover:text-gray-800">
                    <Image alt = 'alt' width={30} height={30} src="/view.png" />
                  </button>
                  <button className="text-gray-600 hover:text-gray-800">
                  <Image alt = 'alt' width={30} height={30} src="/edit.png" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>



      

 
      <nav aria-label="Page navigation example" className=' float-end mt-2 mb-2'>
        <ul class="inline-flex -space-x-px text-base h-10">
          <li>
            <a href="#" class="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-black hover:text-white ">First</a>
          </li>
          <li>
            <a href="#" class="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300   hover:bg-black hover:text-white">1</a>
          </li>
          <li>
            <a href="#" class="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300   hover:bg-black hover:text-white">2</a>
          </li>
          <li>
            <a href="#" aria-current="page" class="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300   hover:bg-black hover:text-white">3</a>
          </li>
          <li>
            <a href="#" class="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300   hover:bg-black hover:text-white">4</a>
          </li>
          <li>
            <a href="#" class="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300  hover:bg-black hover:text-white">5</a>
          </li>
          <li>
            <a href="#" class="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-e-lg hover:bg-black hover:text-white">Last</a>
          </li>
        </ul>
      </nav>

    </div>
  )
}

export default Products