import React, {  useRef, useState } from 'react'
import {Breadcrumbs, BreadcrumbItem, Button, Link, Input, Image} from "@nextui-org/react";
 
import point from "../public/point.png"
import upload from "../public/upload.png"
import add from "../public/add.png"
import {Radio} from "@nextui-org/react";

 function SelItems() {
  const hiddenBrowseButton =  useRef(null)

  const [bold, setbold] = useState(false);

  const changeStyle = (e) => {
    
    setbold(e)

  }
  const AddProduct = ({title, children}) => {
  
    const [isOpen, setIsOpen] = useState(false);


    const toggleItem = () => {
     setIsOpen(!isOpen);
     };
   return (
     <div >
         <div  onClick={toggleItem} >{title}</div>
         {isOpen && <div>{children}</div>}
     </div>
    
   )
  

  

  }

  return (
    <div style={{ width:"90%", margin:"auto" }}>


        <Breadcrumbs  style={{ width:"90%", margin:"auto" }}>
            <BreadcrumbItem>Home</BreadcrumbItem>
            <BreadcrumbItem className=' font-bold' >Sell an item</BreadcrumbItem> 
        </Breadcrumbs>

        <h3 style={{ fontSize:"48px" }} className='textDecor myfont'>Sell an item</h3>
 

        
        <div   className=' grid md:grid-cols-6 gap-2 mt-4 mb-4'>
            <div style={{ backgroundColor:"#f3f3f3", height:"fit-content" }} className='rounded-lg p-3 col-span-4 '>
                <div style={{ border:"1.5px solid" }} className=' rounded-lg bg-white p-3'>

                <div className=''>
                    <AddProduct title="Product information">
                      <div className='bg-white rounded-md p-3 mb-3'>


                      <div className='rounded-lg p-6 upload mt-3'  style={{ backgroundColor:"#f3f3f3", width:"100%", margin:"auto" }}>


                          <Image alt='alt' width={40} height={40} src={upload} />

                          <div className='blabla'>
                            <p>Drop your image here or </p>
                            <p className=' font-bold'>Add click Upload Photos</p>
                          </div>




                            <input ref={hiddenBrowseButton} type="file" style={{"display": "none"}} />

                            <div>
                              <Button   onClick={() => hiddenBrowseButton.current.click()} as={Link} className=' add text-black rounded-full border' href="#" variant="flat">
                                    <Image alt='alt'  width={20} height={20} src={add} />
                                    <p>Upload Photos</p>
                                    

                              </Button>
                          </div>

                          </div>

                          <div className=' mt-4 mb-4 flex justify-center items-center'>
                          <Image alt='alt' width={20} height={20}  src={point} />
                          <p  className=' ms-2' style={{ fontSize:"14px" }}>
                          <span className=' font-bold'>Add Minimum 2 photos required High resolution images</span>  800x800px or larger recommended Format PNG,JPG ,JPEG
                          </p>
                          </div>

                          <Input className=' mb-2' type="text" variant="bordered" placeholder='The item title'  />

                          <select class=" mb-4 w-full appearance-none row-start-1 col-start-1 bg-slate-50 dark:bg-slate-800 ...">
                                <option>Select Category</option>
                                <option>Sweaters</option>
                                <option>Shoes</option>
                                <option>Dresses</option>
                                <option>Handbags</option>
                                <option>Skirts</option>
                                <option>Accessories</option>  
                        </select>

                          <Button style={{ backgroundColor:"#dcdcdc"  }} as={Link} className=' text-gray-600  add rounded-full border' href="#" variant="flat">
                          continue
                          </Button>



                      </div>

                    </AddProduct>
                </div>

                 
            
            
            </div>
            
            <div style={{ border:"1.5px solid" }} className=' rounded-lg bg-white p-3 mt-2' >
                  <AddProduct title="Products Details">
                  <div className='bg-white rounded-md p-3 mb-3'>
                  
                  <p>Your phone number will only be used to help you log in. It won’t be made public or used for marketing purposes.</p> 
                  
                  </div>
                  <div style={{ border:"2px solid rgb(210,210,210)" }} className='relative rounded-lg'>
                   
                        
                        
                       <textarea
                       
                        value={bold}
                        placeholder='Describe your item' className='rounded-t-lg outline-none p-3 rounded-b-lg h-40 w-full' 
                        style={{fontFamily: bold ? 'bolder' : "", border:"1px solid rgb(243,243,243)" }}
                        

                        />

                        

                       
                       <div style={{ backgroundColor:"#f3f3f3" }}  className=' rounded-b-lg absolute bottom-1 w-full h-10 flex items-center ps-4'>
                        <Image onClick={changeStyle} alt='alt' src='/bold.png' width={20} height={20} />
                        <Image className=' ms-3' alt='alt' src='/italic.png' width={20} height={20} />
                       </div>
                  </div>

                <div className=' grid grid-cols-2 gap-3  mt-4 '>

                     <div className=''>
                        <select class=" mb-4 w-full appearance-none row-start-1 col-start-1 bg-slate-50 dark:bg-slate-800 ...">
                                <option>Select Condition </option>
                                <option>Excellent</option>
                                <option>Very Good</option>
                                <option>Good</option>
                        </select>
                         

                        <select class="mb-4   w-full appearance-none row-start-1 col-start-1 bg-slate-50 dark:bg-slate-800 ...">
                                <option style={{ border:"5px solid red" }} >Select Brand</option>
                                <option>Brandy Melville</option>
                                <option>Forever 21</option>
                                <option>Caddis</option>
                                <option>Nike</option>
                                <option>New Balance</option>
                                <option>Aragona</option>
                                
                          </select>
                           
                      
                     </div>
                     <div className=''>
                    
                          <select class="mb-4  w-full appearance-none row-start-1 col-start-1 bg-slate-50 dark:bg-slate-800 ...">
                                <option>Select Color</option>
                                <option>Red</option>
                                <option>Black</option>
                                <option>White</option>
                                <option>Blue</option>
                                <option>Green</option>
                                <option>Yellow</option>
                                <option>Green</option>
                          </select>
                          
                        
                          <select class="mb-4  w-full appearance-none row-start-1 col-start-1 bg-slate-50 dark:bg-slate-800 ...">
                                  <option>Select Model</option>
                                  <option>XXL</option>
                                  <option>S</option>
                                  <option>XL</option>
                                  <option>M</option>
                                  <option>L</option>
                                  <option>3XL</option>
                            </select>
                           
                     </div>

                </div>

                  </AddProduct>
            </div>

            <div style={{ border:"1.5px solid" }} className=' rounded-lg bg-white p-3 mt-2'>
                  <AddProduct title="Price & Stock">
                  <div className='bg-white rounded-md p-3 mb-3'>
                      <p>Your phone number will only be used to help you log in. It won’t be made public or used for marketing purposes.</p>
                      <div className=' grid grid-cols-2 gap-2 mt-4 mb-4  '>
                          <div className='w-full'>
                              <Input className=' w-full' type="text" label="item's price" />
                              <Input type="text" label="SKU" className=' mt-2' />
                          </div>
                          <div className=''>
                              <Input type="text" label="Discount / Sales" />
                              <Input  className=' mt-2' type="text" label="Stock / Quantity" />
                          </div>
                      </div>
                  </div>
                  </AddProduct>
            </div>

            <div style={{ border:"1.5px solid", height:"auto" }} className=' rounded-lg bg-white p-3 mt-2'>
                  <AddProduct title="Shipping">
                  <div className='bg-white rounded-md p-3 mb-3'>
                       <p>Your phone number will only be used to help you log in. It won’t be made public or used for marketing purposes.</p>
                       <div className=' grid grid-cols-2 gap-1 mt-3'>
                          <div>
                              <p className=' fw-bolder'>Item weight</p>
                              <p>Key Facts and Tips</p>
                          </div>
                          <Input type="text" label="Weight" style={{ backgroundColor:"transparent" }}  />
                       </div>
                       <div className=' grid grid-cols-3 gap-2 mt-3'>
                          <Input type="text" label="Length"   />
                          <Input type="text" label="Wide"   />
                          <Input type="text" label="Height"   />
                       </div>
                       <div>
                          
                          <div>
                                <div class="flex items-center justify-between mt-3 mb-3">
                                    <div>
                                        <h4>Insurance</h4>
                                        <p>Essential Coverage and Benefits</p>
                                    </div>
                                   <div>
                                        <input  id="default-radio-2" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label for="default-radio-2" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Checked state</label>

                                        <input  id="default-radio-2" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600  ms-3 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label for="default-radio-2" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Checked state</label>
                                   </div>
                                   
                                </div>


                           
                          </div>
                       </div>
                       <div className=' float-end'>
                    <Button  as={Link} className=' me-3 bg-white text-black rounded-full border' href="/auth/signup" variant="flat">
                          Save as darft
                    </Button>
                    <Button  as={Link} className=' bg-black text-white rounded-full' href="#" variant="flat">
                    Sell Now
                    </Button>
                    </div>
                  </div>

                    
                  </AddProduct>
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

export default SelItems 