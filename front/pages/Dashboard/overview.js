import Image from 'next/image'
import React, { useState } from 'react'
import docs from "../../public/receipt.png"
import user from "../../public/users 01.png"
import statics from "../../public/static.png"
import invoise from "../../public/invoice.png"
import plus from "../../public/add.png"
import gmail from "../../public/gmail.png"
import packagez from "../../public/package box 01.svg"
import {Progress} from "@nextui-org/react";

function Overview() {

  const headerStatic = [
    {"number": 235634, "pics": docs, "total": "Total Listings", bg:"#c4dcff"},
    {"number": 235634, "pics": invoise, "total": "Total Transactions", bg:"#cbffec"},
    {"number": 235634, "pics": user, "total": "Active Users", bg:"#ffedd8"},
    {"number": 235634, "pics": statics, "total": "Revenue", bg:"#e9dcff"},
  ]

  const CategoryProgress = [
    {"progress": 70,   "category": "Clothing", "color":"primary" },
    {"progress": 60,   "category": "Toys and games", "color":"secondary"},
    {"progress": 50,   "category": "Home decor", "color":"success"},
    {"progress": 40,  "category": "Electronics", "color":"warning"},
    {"progress": 30, "category": "Handbags", "color":"danger"},
  ]
   

  return (
    <div className=' p-4'>       
        <div className='flex items-center justify-between gap-3'>
           
                {
                    headerStatic.map(it =>(
                        <div key={it.number} className='bg-white p-3 rounded-lg w-full'>
  
        <div className=' mt-2 mb-2 p-3 rounded-full w-fit'  style={{ backgroundColor:"#c4dcff" }}>
                            <Image alt='alt' width={30} height={30} src={it.pics} />
                            </div>
                            <h3 className=' font-bold text-xl'> {it.number} </h3>
                            <p className=' text-sm text-gray-400'>{it.total}</p>
                         </div>

                    ))
                }
        </div>
        <div className='flex items-center gap-4 mt-3 '>
            <div className='topCategory  w-full bg-white rounded-xl p-3'>
                
                <div className=" ">
                <h3 className=' font-bold mt-3 mb-3 ms-4'>Top Categories</h3>
                    {
                        CategoryProgress.map(el=>(
                            <ul key={el.color}>
                                <li className='flex pe-4 ps-4 pt-1 pb-1  items-center justify-between gap-3  '>
                                <p className=' text-xs '>{el.category}</p>
                                <Progress style={{ width:"100%" }} color={el.color} aria-label="Loading..." value={el.progress} />
                                </li>
                            </ul>
                        ))
                    }
                   
                   
                </div> 
            </div>
            <div className='w-full rounded-xl '  >
                <div className='  flex items-center  rounded-xl  justify-between bg-white p-4  mb-3'>
                    <div className=' flex items-center gap-2'>
                        <Image src={packagez} alt='alt' width={30} height={30} />
                        <div className=' font-bold'>New product</div>
                    </div>
                    <div className=' p-2 border-2  rounded-full '>
                        <Image   src={plus} alt='alt' width={15} height={15} />
                    </div>
                </div>
                <div className=' flex items-center mb-3 rounded-xl  justify-between bg-white p-4'>
                   <div className=' flex items-center gap-2'>
                   <Image src={gmail} alt='alt' width={30} height={30} />
                   <div  className=' font-bold'>Sending a promo </div>
                   </div>
                   <div className=' p-2 border-2  rounded-full '>
                        <Image   src={plus} alt='alt' width={15} height={15} />
                    </div>
                </div>
                <div className=' flex items-center mb-3 rounded-xl    justify-between bg-white p-4'>
                    <div className=' flex items-center gap-2
                    '>
                        <Image src={invoise} alt='alt' width={30} height={30}  />
                        <div  className=' font-bold'>Generating a report</div>
                    </div>
                    <div className=' p-2 border-2  rounded-full '>
                        <Image   src={plus} alt='alt' width={15} height={15} />
                    </div>
                </div>
            </div>
        </div>
        <div className=' bg-white rounded-xl'>
            <h3>User Management</h3>
        </div>
    
    
    </div>
  )
}

export default Overview