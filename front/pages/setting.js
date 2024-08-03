  
"use client"
import { useEffect, useState } from 'react'
import {Breadcrumbs, BreadcrumbItem, Button, Link, Input, Image} from "@nextui-org/react";
import Account from './setting/account';
import Bio from './setting/bio';
import ProfilDetail from './setting/profilDetail';
 
function Setting() {
    const [countClick, setCountClick] = useState(false);
    const [aze, setaze] = useState(false);

    const countClickHandler = () => {
        setCountClick(!countClick);
        setaze(aze);

    }; 
    const f = () => {
        setaze(!aze);
        setCountClick(countClick);

    }; 
  return (
    <div style={{ width:"90%", margin:"auto" }} >
       {/* {countClick}  
            <button onClick={countClickHandler}>
                Click Me
            </button> */}
           <Breadcrumbs>
            <BreadcrumbItem>Home</BreadcrumbItem>
            <BreadcrumbItem className=' font-bold' >Account Setting</BreadcrumbItem>
        </Breadcrumbs>
        <h3 style={{ fontSize:"35px" }} className=' mt-4 mb-4  font-bold'>Account Setting</h3>
        <div className=' row grid md:grid-cols-3'>
            <div className=' col-span-1'>
        
                <div className="max-w-2xl mx-auto">

                    <aside className='aside'  aria-label="Sidebar">
                        <div class="px-3 py-4 overflow-y-auto rounded   ">
                            <ul class="space-y-2">
                                <li onClick={countClickHandler}>
                                  <a 
                                        class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                        
                                        <span class="ml-3">Profile details</span>
                                    </a>
                                </li>
                                <li onClick={f}>
                                    <a  
                                        class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                        
                                        <span class="flex-1 ml-3 whitespace-nowrap">Account settings</span>
                                        
                                    </a>
                                </li>
                                <li>
                                    <a  
                                        class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                        
                                        <span class="flex-1 ml-3 whitespace-nowrap">Shipping</span>
                                        
                                    </a>
                                </li>
                                <li>
                                    <a 
                                        class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                        
                                        <span class="flex-1 ml-3 whitespace-nowrap">Payments</span>
                                    </a>
                                </li>
                                <li>
                                    <a 
                                        class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                        
                                        <span class="flex-1 ml-3 whitespace-nowrap">Notifications</span>
                                    </a>
                                </li>
                                <li>
                                    <a 
                                        class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                        
                                        <span class="flex-1 ml-3 whitespace-nowrap">Security</span>
                                    </a>
                                </li>
                                
                            </ul>
                        </div>
                    </aside>

                    
                </div>
            </div>
            <div className=' col-span-2 border rounded-xl'>
            
                 <div style={{ display: countClick ? "block" : "none" }}   className=' pt-8 pb-8'>
                    <ProfilDetail />
                   
                </div>
                <div style={{ display: countClick ? "block" : "none" }} className=' pt-8 pb-8 bg-yellow-200'>
                    <Account />
                    {countClick}  
                </div>                 
                <div style={{ display: aze ? "block" : "none" }}  className=' pt-8 pb-8 bg-green-200'>
                    <Bio />
                    {countClick}  
                </div>
            
            </div>
        </div>
    </div>
  )
}

export default Setting