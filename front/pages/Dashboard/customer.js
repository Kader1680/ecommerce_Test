import React, { useState } from 'react'
 
import {Image, Input, Link, Select, SelectItem} from "@nextui-org/react";
import CustomerSegement from './customerItems/customerSegement';
import Reward from './customerItems/reward';
import CustomerList from './customerItems/customerList';
import GroupeCustomer from './customerItems/groupeCustomer';
 
function Customer() {

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
      <h4 className='fontLg   '>Customer Management</h4>

 

      <div className=' flex rounded-xl mt-4 mb-4  w-fit p-1'>
 
            <div className='p-2 flex items-center bg-white gap-2 rounded-xl'>
            
              {
                itemCustomer.map(it=>(
                  <div key={it} onClick={()=>setitem(it.name)}  className='rounded-lg  w-fit bg-black text-white fontmd flex items-center pt-1 pb-1 ps-2 pe-2  gap-1 ' >
                
                    <Image alt='alt' width={20} height={20} src={it.pic} />
                    <span className='fontmd'>{it.name}</span>
                  </div>

                ))
              }
             
             
               
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