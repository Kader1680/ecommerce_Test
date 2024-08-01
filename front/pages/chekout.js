import React from 'react'
import {Breadcrumbs, BreadcrumbItem, Button, Link, Input} from "@nextui-org/react";
import Summary from '@/components/summary';
import Image from 'next/image';

function Chekout() {
  return (
    <div style={{ width:"90%", margin:"auto" }}>
    
    <Breadcrumbs>
      <BreadcrumbItem>Home</BreadcrumbItem>
      <BreadcrumbItem>bag</BreadcrumbItem>
      <BreadcrumbItem className=' font-bold' >Checkout</BreadcrumbItem> 
    </Breadcrumbs>
    
    <h3 style={{ fontSize:"48px" }} className='textDecor'>Checkout</h3>
        {/* style={{ backgroundColor:"#635bff" }} */}
    <div className=' md:grid grid:cols-2 lg:grid-cols-3 gap-5 '>
        <div  className='buying lg:col-span-2'>
            <div className='   border p-4'>
            <h3 className='textDecor' style={{ fontSize:"24px" }}>For Faster Checkout Experience</h3> 
              <div className=' gap-2 flex items-center'>
                      <Button style={{  backgroundColor:"#635bff", width:"50%" }}  as={Link} className=' font-bold text-medium mt-5 mb-5   text-white rounded-full' href="#" variant="flat">
                        Stripe
                        </Button>
                        <Button style={{  width:"50%" }}  as={Link} className=' mt-5 mb-5 bg-white text-white rounded-full border' href="#" variant="flat">
                        
                            <Image width={100} height={30} alt='alt'  src='/PayPal 1.png' />
                        </Button>
                      </div>
                      <p style={{ fontSize:"12px", color:"#b0b0b0" }}>By continuing, I confirm that I have read and accept the Terms and Conditions. and the Privacy Policy.</p>

            </div>


            <div className=" mt-6 mb-6 flex items-center justify-center gap-2">
               <hr></hr> <p>Or</p> <hr></hr>
            </div>



          <div className='border p-2 mt-3'>
              <h3 className='textDecor' style={{ fontSize:"24px" }}>Contact</h3> 
              
              <div className='data grid grid-cols-3 gap-4'>

                    
              <Input className=' border-none col-span-2' style={{  width:"40%", backgroundColor:"white" }} type="email"  placeholder="Enter your email" variant='bordered' />

              <p className='col-span-1 mt-1'>Have an account? <Link className=' font-bold text-black'>Log in</Link> </p>
              </div>

          </div>
          
         
          <div className=' border p-2 mt-3'>
            
            <h3 className='textDecor' style={{ fontSize:"24px" }}>Shipping address</h3>

            <div className='data flex items-center gap-3'>
                  <Input style={{  width:"50%" }} size='md' type="email"  placeholder="Mohamed" variant='bordered' />

                  <Input style={{  width:"50%" }} size='md' type="email"  placeholder="amine" variant='bordered' />
            </div>
            <Input className=' mt-4' style={{  width:"100%" }} size='md' type="email"  placeholder="Mohamed" variant='bordered' />
            <p style={{fontSize:"10px",  Color:"#b0b0b0" }} className=' pt-2 pb-2 underline'><Link>Enter address manually</Link></p>
            <div className='data flex items-center gap-3'>
                  <Input style={{  width:"50%" }} size='md' type="email"  placeholder="Email" variant='bordered' />

                  <Input style={{  width:"50%" }} size='md' type="email"  placeholder="Phone" variant='bordered' />
            </div>
            
            <Button disabled style={{  color:"#b0b0b0" }}  as={Link} className=' float-right  text-normal mt-5 mb-5   text-white rounded-full' href="#" variant="flat">
            Save and contiune
            </Button>


          

          </div>
        
          <div style={{ marginTop: "4rem" }}>
                <hr style={{ width:"100%" }} className=' mt-5 mb-5' ></hr>
                <h3 className=' mt-5 mb-5 textDecor'   style={{ fontSize:"24px" }}>Delivery options </h3>
              
                <hr style={{ width:"100%" }} className=' mt-5 mb-5 textDecor'></hr>
                <h3 className=' mt-5 mb-5 textDecor' style={{ fontSize:"24px" }}>Payment
                </h3>
            </div>
        </div>
        
        <div className='lg:col-span-1'>
            <Summary />
            <div className=' mt-3 p-4 rounded-lg ' style={{ backgroundColor:"#f2f2f2" }}>
                  <h3 style={{ fontSize:"24px" }} className='textDecor'>Voucher and promo</h3>
                  <div className=' flex items-center gap-3'>
                      <Input className=' mt-4' style={{  width:"100%" }} size='md' type="text"  placeholder="Enter Code" variant='bordered' />
                      <Button disabled style={{  color:"#b0b0b0" }}  as={Link} className=' mt-3 text-medium      text-white rounded-full' href="#" variant="flat">
                      Apply
                      </Button>
                  </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Chekout