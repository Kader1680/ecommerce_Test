  
"use client"
import { useEffect, useState } from 'react'
import {Breadcrumbs, BreadcrumbItem, Button, Link, Input, Image} from "@nextui-org/react";
import Account from './setting/account';
import Bio from './setting/payaments';
import ProfilDetail from './setting/profilDetail';
import Security from './setting/security';
import Payaments from './setting/payaments';
import Notification from './setting/notification';
import Shipping from './setting/shipping';
 
function Setting() {

 
 

    const list = ["Profile details", "Account settings", "Shipping", "notifications", "Payments", "Security"]
    
    const [items, setitems] = useState("Profile details");

    const handelPage = () =>{
        switch (items) {
            case "Profile details":
                return <ProfilDetail />
                 
            case "Account settings":
                return <Account />
            case "Shipping":
                return <Shipping />
            case "notifications":
                return <Notification />
            case "Payments":
                return <Payaments />
            case "Security":
                return <Security />
        }
    }
  return (
    <div style={{ width:"90%", margin:"auto" }} >
 
            <Breadcrumbs>
                <BreadcrumbItem>Home</BreadcrumbItem>
                <BreadcrumbItem className=' font-bold' >Account Setting</BreadcrumbItem>
            </Breadcrumbs>
        <h3 style={{ fontSize:"35px" }} className='myfont mt-4 mb-4  font-bold'>Account Setting</h3>
   
        <div className=' row grid md:grid-cols-3'>
            <div className=' col-span-1'>
        
                <div className="max-w-2xl mx-auto">

                    <aside className='aside'  aria-label="Sidebar">
                        <div class="px-3 py-4 overflow-y-auto rounded   ">
                            <ul class="space-y-2">

                            
                                {
                                    list.map(items =>(
                                        <li key={items} 
                                        class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700" onClick={()=>{setitems(items)}}>
                                   
                                        <span class="ml-3">{items}</span>

                                  
                                 
                                </li>
                                    ))
                                }                           

                            </ul>
                        </div>
                    </aside>

                </div>
            </div>
            <div className=' col-span-2 border rounded-xl'>
                {handelPage()}
            </div>
        </div>
       
    </div>
  )
}

export default Setting