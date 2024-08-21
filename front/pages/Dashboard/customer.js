import React, { useState } from 'react'
 
import Search  from '../../components/search';
import {Image, Input, Link, Select, SelectItem} from "@nextui-org/react";
import CustomerSegement from './customerItems/customerSegement';
import Reward from './customerItems/reward';
import CustomerList from './customerItems/customerList';
import GroupeCustomer from './customerItems/groupeCustomer';
import view from "../../public/vercel.svg"
import edit from "../../public/edit.png"
function Customer() {

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

  const itemCustomer = [
    {name: "Customer List", pic:"/usr.png"},
    {name:"Groups", pic:"/grp.png"},
    {name:"Customer Segments", pic:"/community.png"},
    {name:"Loyalty and Reward", pic:"/gift.png"},
  ]

  const [item, setitem] = useState('Customer List');
  const handelCustomerItem = () => {
      
    switch (item) {
      case "Customer List":
          return <CustomerList />
           
      case "Groups":
          return <GroupeCustomer />
      case "Customer Segments":
          return <CustomerSegement />
      case "Loyalty and Reward":
          return <Reward />
      
  }

  }
  return (
    <div className="overflow-x-auto  p-3">
      <h4 className='  font-bold text-xl'>Customer Management</h4>

 

      <div className=' flex rounded-xl mt-4 mb-4  w-fit p-1'>
 
            <div className='p-2 flex items-center bg-white gap-2 rounded-xl'>
            
              {
                itemCustomer.map(it=>(
                  <div key={it} onClick={()=>setitem(it.name)}  className='rounded-lg  w-fit bg-black text-white font-medium flex items-center pt-1 pb-1 ps-2 pe-2  gap-1 ' >
                
                    <Image alt='alt' width={20} height={20} src={it.pic} />
                    <span>{it.name}</span>
                  </div>

                ))
              }
             
             
               
            </div>
       
      </div>


        <div className=' grid grid-cols-5 bg-white p-3'>
            <div className=' col-span-4 flex justify-start gap-3'>
  
               <h3 className=' font-bold'>Customer List</h3>
                
                <div>
                  <form class="max-w-sm mx-auto">
                
                    <select style={{ border:"1px solid #e8e8e8", width:"fit" }} id="countries" class="bg-white border   text-gray-900 text-sm rounded-md   block   p-2.5 ">
                        <option selected>Location</option>
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="FR">France</option>
                        <option value="DE">Germany</option>
                    </select>
                  </form>
                </div>

               <div>
                  <form class="max-w-sm mx-auto">
                  
                  <select style={{ border:"1px solid #e8e8e8" }}  id="countries" class="bg-white border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block   w-fit p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option selected>Order history</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="FR">France</option>
                    <option value="DE">Germany</option>
                  </select>
                  </form> 
               </div>


               <div>
                  <form class="max-w-sm mx-auto">
                  
                  <select style={{ border:"1px solid #e8e8e8" }}  id="countries" class="bg-white border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-30 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option selected>Groupe</option>
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

 
       
      
      {handelCustomerItem()}
 
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

export default Customer