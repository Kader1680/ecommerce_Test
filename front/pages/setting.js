  
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
import { useTranslation } from "../context/TranslationContext";

function Setting() {

    const { t } = useTranslation();
 
 

    const list = [t("Profildetails"), t("Accountsettings"), t("Shipping"), t("notifications"), t("Payments"), t("Security")]
    
    const [items, setitems] = useState(t("Profildetails"));

    const handelPage = () =>{
        switch (items) {
            case t("Profildetails"):
                return <ProfilDetail />
                 
            case t("Accountsettings"):
                return <Account />
            case t("Shipping"):
                return <Shipping />
            case t("notifications"):
                return <Notification />
            case t("Payments"):
                return <Payaments />
            case t("Security"):
                return <Security />
            default:
                return <ProfilDetail />
        }
    }
  return (
    <div style={{ width:"90%", margin:"auto" }} >
 
            <Breadcrumbs>
                <BreadcrumbItem>Home</BreadcrumbItem>
                <BreadcrumbItem className=' font-bold' >{t("Accountsettings")}</BreadcrumbItem>
            </Breadcrumbs>
        <h3 style={{ fontSize:"35px" }} className='myfont mt-4 mb-4  font-bold'>{t("Accountsettings")}</h3>
   
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