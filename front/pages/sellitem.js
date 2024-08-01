import React from 'react'
import {Breadcrumbs, BreadcrumbItem, Button, Link, Input, Image} from "@nextui-org/react";

import point from "../public/point.png"
import upload from "../public/upload.png"
import add from "../public/add.png"
 function selItems() {
  return (
    <div style={{ width:"90%", margin:"auto" }}>
        <Breadcrumbs  style={{ width:"90%", margin:"auto" }}>
            <BreadcrumbItem>Home</BreadcrumbItem>
            <BreadcrumbItem className=' font-bold' >Sell an item</BreadcrumbItem> 
        </Breadcrumbs>

        <h3 style={{ fontSize:"48px" }} className='textDecor '>Sell an item</h3>

        <div className=' grid md:grid-cols-6 gap-2 mt-4 mb-4'>
            <div style={{ backgroundColor:"#f3f3f3" }} className='rounded-lg p-3 col-span-4 '>
                <div style={{ border:"1.5px solid" }} className=' rounded-lg bg-white p-3'>
                  <h3 className=' font-bold'>Product information</h3>

                  <div className='rounded-lg p-6 upload mt-3'  style={{ backgroundColor:"#f3f3f3" }}>


 
                               
                               
                                <Image alt='alt' width={40} height={40} src={upload} />
                                <div className='blabla'>
                                  <p>Drop your image here or </p>
                                  <p className=' font-bold'>Add click Upload Photos</p>
                                </div>
                                <Button as={Link} className=' bg-white add text-black rounded-full border' href="#" variant="flat">
                                      <Image alt='alt'  width={20} height={20} src={add} />
                                      <p>Upload Photos</p>
                                </Button>
                  </div>

                  <div className=' mt-4 mb-4 flex justify-center items-center'>
                      <Image alt='alt' width={20} height={20}  src={point} />
                      <p  className=' ms-2' style={{ fontSize:"14px" }}>
                          <span className=' font-bold'>Add Minimum 2 photos required High resolution images</span>  800x800px or larger recommended Format PNG,JPG ,JPEG
                      </p>
                  </div>

                  <Input className=' mb-2' type="text" variant="bordered" placeholder='The item title'  />

                  <Input type="text" variant="bordered" placeholder='The item title' />

                  <Button style={{ backgroundColor:"#dcdcdc"  }} as={Link} className=' text-gray-600  add rounded-full border' href="#" variant="flat">
                                      continue
                                </Button>
                </div>
            
            <div className=' mt-4'>
                  <div className='bg-white rounded-md p-3 mb-3'> Products Details  </div>
                  <div className='bg-white rounded-md p-3 mb-3'> Price & Stock  </div>
                  <div className='bg-white rounded-md p-3 mb-3'> Shipping  </div>
            </div>


            </div>
            <div style={{ height:"auto" }} className=' md:col-span-2 border p-4 rounded-lg'>
              <h3 className=' font-bold mb-4'>Review Product</h3>
              <div className=' rounded-md'  style={{ backgroundColor:"#f3f3f3", width:"100%", height:"281px" }}></div>
            
            </div>
        </div>
    </div>
  )
}

export default selItems 