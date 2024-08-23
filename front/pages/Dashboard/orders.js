import React, { useState } from 'react'
import view from "../../public/view.png"
import edit from "../../public/edit.png"
import Search  from '../../components/search';
import {Image, Link} from "@nextui-org/react";
import OrderDetail from './orderDetail';



const OrderHeader = ({orderId}) => {
  <div className="flex justify-between items-center mb-4">
  <h2 className="text-2xl font-bold">Order {orderId}</h2>
  
</div>
}


function Orders() {

  const orders = [
    { id: 12345, buyer: 'John Doe', seller: 'Jane Smith', date: '2023-01-01', status: 'Pending', paymentMethod: [
      
      'master', '/ms.png'
    
    ], totalAmount: '$100.00', view: view, edit, edit },
    { id: 67890, buyer: 'Alice Johnson', seller: 'Michael Brown', date: '2023-02-15', status: 'Completed', paymentMethod: [
      
      'master', '/ms.png'
    
    ], totalAmount: '$75.00', view: view, edit, edit },
    { id: 24680, buyer: 'Sarah Lee', seller: 'Chris Thompson', date: '2023-03-20', status: 'Pending', paymentMethod: [
      
      'master', '/vs.png'
    
    ], totalAmount: '$50.00', view: view, edit, edit },
    { id: 13579, buyer: 'David Wang', seller: 'Emily Davis', date: '2023-04-10', status: 'Completed', paymentMethod: [
      
      'master', '/py.png'
    
    ], totalAmount: '$120.00' },
    { id: 86420, buyer: 'Olivia Garcia', seller: 'Daniel Wilson', date: '2023-05-05', status: 'In Process', paymentMethod: [
      
      'master', '/py.png'
    
    ], totalAmount: '$90.00', view: view, edit, edit },
    { id: 97531, buyer: 'Sophia Martinez', seller: 'Ethan Moore', date: '2023-06-30', status: 'Pending', paymentMethod: [
      
      'master', '/am.png'
    
    ], totalAmount: '$85.00', view: view, edit, edit },
    { id: 54321, buyer: 'Ava Anderson', seller: 'Matthew White', date: '2023-07-25', status: 'In Process', paymentMethod: [
      
      'master', '/am.png'
    
    ], totalAmount: '$110.00', view: view, edit, edit },
    { id: 98765, buyer: 'Liam Clark', seller: 'Grace Baker', date: '2023-08-10', status: 'Pending', paymentMethod: [
      
      'master', '/vs.png'
    
    ], totalAmount: '$95.00', view: view, edit, edit },
    { id: 10293, buyer: 'Chloe Hall', seller: 'Andrew King', date: '2023-09-15', status: 'In Process', paymentMethod: [
      
      'master', '/ms.png'
    
    ], totalAmount: '$70.00', view: view, edit, edit },
    { id: 45678, buyer: 'Mia Scott', seller: 'William Taylor', date: '2023-10-05', status: 'Cancelled', paymentMethod: [
      
      'master', '/ms.png'
    
    ], totalAmount: '$130.00', view: view, edit, edit },
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

  

  const [detail, setdetail] = useState();
  
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
                  <form class="max-w-md mx-auto">   
                      <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                      <div class="relative">
                          <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                          <Image alt='alt' width={15} height={15} src='/searchicon.png' />
                          </div>
                          <input type="search" id="default-search" class="block  p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white outline-none " placeholder="Search orders,buyer,seller" required />
                          
                      </div>
                  </form>
                </div>

                
                <div>
                  <form class="max-w-sm mx-auto">
                
                    <select style={{ border:"1px solid #e8e8e8" }} id="countries" class="bg-white border   text-gray-900 text-sm rounded-md   block w-full p-2.5 ">
                      <option selected>Payment method</option>
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
                    <option selected>Category</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="FR">France</option>
                    <option value="DE">Germany</option>
                  </select>
                  </form> 
               </div>
            </div>

       
            <div className=' col-span-1'>
             
                <form class="max-w-sm mx-auto">
                    
                    <select style={{ backgroundColor:"#004bbb" }} id="countries" class=" border border-gray-300 text-white text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                      <option selected>Import/Export</option>
                      <option value="US">United States</option>
                      <option value="CA">Canada</option>
                      <option value="FR">France</option>
                      <option value="DE">Germany</option>
                    </select>
                </form>  
            </div>

            
        </div>

 


      <table className="min-w-full bg-white  p-3">
        <thead>

         
          <tr style={{ backgroundColor:"#f3f3f3" }}>
            <th className="py-2 px-4 border-b-2 border-gray-200">
              <input type="checkbox" className="w-4 h-4" />
            </th>
            <th className="py-2 px-4 border-b-2 border-gray-200 fontLg">Order ID</th>
            <th className="py-2 px-4 border-b-2 border-gray-200 fontLg">Buyer</th>
            <th className="py-2 px-4 border-b-2 border-gray-200 fontLg">Seller</th>
            <th className="py-2 px-4 border-b-2 border-gray-200 fontLg">Date</th>
            <th className="py-2 px-4 border-b-2 border-gray-200 fontLg">Status</th>
            <th className="py-2 px-4 border-b-2 border-gray-200 fontLg">Payment Method</th>
            <th className="py-2 px-4 border-b-2 border-gray-200 fontLg">Total Amount</th>
            <th className="py-2 px-4 border-b-2 border-gray-200 fontLg">Actions</th>
          </tr>
        </thead>
        <tbody>
        

          {orders.map((order) => (
             
            <tr onClick={()=>{setdetail(order.id)}} key={order.id} className="text-center fontmd" >

            
              <td className="py-2 px-4 border-b border-gray-200">
                <input type="checkbox" className="w-4 h-4" />
              </td>

              <td    onClick={()=> setdetail(!detail)} className="py-2 px-4 border-b border-gray-200"> 
              
              <Link  className='fontmd' href={`dashboard/${order.id}`}>
              {order.id} 
              </Link>
              
              </td>
              <td style={{ fontSize:"12px" }} className="py-2 px-4 border-b fontmd border-gray-200" >{order.buyer}</td>
              <td style={{ fontSize:"12px" }} className="py-2 px-4 border-b fontmd border-gray-200">{order.seller}</td>
              <td style={{ fontSize:"12px" }} className="py-2 px-4 border-b fontmd border-gray-200">{order.date}</td>
              <td style={{ fontSize:"12px" }} className="py-2 px-4 border-b fontmd border-gray-200">
                <span  style={{ backgroundColor: order.status === 'Pending' ? '#ffedd8' : order.status === 'Completed' ? '#cbffec' : order.status === 'In Process' ? '#e9dcff' : '#ffdce0', fontSize:"12px" ,
                
                color: order.status === 'Pending' ? '#ff7b03' : order.status === 'Completed' ? '#10a76f' : order.status === 'In Process' ? '#6100ff' : '#f80925'
                
                 }} className={`py-1 px-3 rounded-md fontmd  `}>
                  {order.status}
                </span>
              </td>
              
              <td style={{ fontSize:"12px" }} className="py-2 px-4  border-b    border-gray-200">
              
              <p className=' flex'>
                <img alt='alt'  src={order.paymentMethod[1]} />
                <span>{order.paymentMethod[0]} </span>
              </p>
              
              </td>
              <td style={{ fontSize:"12px" }} className="py-2 px-4 fontmd border-b border-gray-200">{order.totalAmount}</td>
              <td style={{ fontSize:"12px" }} className="py-2 px-4 border-b  border-gray-200">
                <div className="flex justify-center space-x-2 gap-2">
                  <button className="text-gray-600 hover:text-gray-800">
                    <Image alt = 'alt' width={24} height={24} src="/view.png" />
                  </button>
                  <button className="text-gray-600 hover:text-gray-800">
                  <Image alt = 'alt' width={24} height={24} src="/edit.png" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>



      <OrderDetail />
      
     
    </div>
  )
}

export default Orders