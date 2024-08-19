import React, { useState } from 'react'
import Shipping from './Dashboard/shipping';
import Products from './Dashboard/products';
import Overview from './Dashboard/overview';
import Orders from './Dashboard/orders';
import Marketing from './Dashboard/marketing';
import Inventory from './Dashboard/inventory';
import Financial from './Dashboard/financial';
import Customer from './Dashboard/customer';
import Analytics from './Dashboard/analytics';
function Dashboard() {

  const itemsDahsboard = [
    "Overview",
    "Orders",
    "Products",
    "Customer",
    "Inventory",
    "Shipping and Fulfillment",
    "Financials",
    "Analytics and Reporting", 
    "Marketing and Promotions",
  ]
  const [items, setitems] = useState("Overview");
  const handelPage = () => {
    switch (items) {
        case "Shipping and Fulfillment":
            return <Shipping />
           
        case "Products":
            return <Products />
          
        case "Overview":
            return <Overview />
         
        case "Orders":
            return <Orders />
           
        case "Marketing and Promotions":
            return <Marketing />
             
        case "Inventory":
            return <Inventory />
             
        case "Financials":
            return <Financial />
             
        case "Customer":
            return <Customer />
            
        case "Analytics and Reporting":
            
            return <Analytics />
           
    }
  } 

  return (
    <div style={{ width:"90%", margin:"auto" }} >
 
            
        <h3 style={{ fontSize:"35px" }} className='myfont mt-4 mb-4  font-bold'>Account Setting</h3>
   
        <div className=' gap-4 row grid md:grid-cols-5'>
            <div className=' col-span-1'>
        
                <div className="max-w-2xl mx-auto">

                    <aside className='aside'  aria-label="Sidebar">
                        <div class="px-3 py-4 overflow-y-auto rounded   ">
                            <ul class="space-y-2">

                            
                                {
                                    itemsDahsboard.map(items =>(
                                        <li key={items} 
                                        class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-black hover:text-white" onClick={()=>{setitems(items)}}>
                                   
                                        <span class="ml-3">{items}</span>

                                  
                                 
                                </li>
                                    ))
                                }                           

                            </ul>
                        </div>
                    </aside>

                </div>
            </div>
            <div style={{ backgroundColor:"#f3f3f3" }} className=' col-span-4 border rounded-xl'>
                {handelPage()}
            </div>

        </div>
       
    </div>
  )
}

export default Dashboard