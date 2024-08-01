import React from 'react'
import {Breadcrumbs, BreadcrumbItem, Button, Link, Input} from "@nextui-org/react";
import GetApp from '@/components/getApp';
import Image from 'next/image';


function Review() {
  return (
    <div style={{ width:"90%", margin:"auto" }}> 
        
        <Breadcrumbs>
            <BreadcrumbItem>Home</BreadcrumbItem>
            <BreadcrumbItem>Leslie Alexander</BreadcrumbItem>
            <BreadcrumbItem className=' font-bold' >Reviews</BreadcrumbItem> 
        </Breadcrumbs>
        <h3 className=' mt-4 mb-4 font-bold'>Top compliments from reviews</h3>

        <div  className=' reviews mb-4'>
            <div className=' md:flex items-center justify-start gap-2'>
                <div className='  rounded-md font-bold text-center p-2' style={{ width: "fils-content", backgroundColor:"#e5e5e5" }}>
                    7
                    <p style={{ fontSize:"16px" }} className=' font-normal'>Quick shipper </p>
                </div>
                <div className='rounded-md font-bold text-center p-2' style={{ width:"fils-content", backgroundColor:"#e5e5e5" }}>
                    8
                    <p style={{ fontSize:"16px" }}  className=' font-normal'>Great packaging</p>
                </div>
                <div className='rounded-md font-bold text-center p-2' style={{ width:"fils-content", backgroundColor:"#e5e5e5" }}>
                    12
                    <p style={{ fontSize:"16px" }}  className='  font-normal'>Item description</p>
                </div>
                <div className= 'rounded-md font-bold text-center p-2' style={{ width:"fils-content", backgroundColor:"#e5e5e5" }}>
                    3
                    <p style={{ fontSize:"16px" }}  className=' font-normal'>Friendly</p>
                </div>
                <div className='rounded-md font-bold text-center p-2' style={{ width:"fils-content", backgroundColor:"#e5e5e5" }}>
                    9
                    <p style={{ fontSize:"16px" }}  className=' font-normal'>Communication</p>
                </div>
            </div> 
            <div className=" md:flex mt-3 mb-3 gap-2 ">
                <Button  as={Link} className=' bg-black text-white rounded-full' href="#" variant="flat">
                    Sold (103) 
                    </Button>
                <Button as={Link} className=' bg-white text-black rounded-full border' href="#" variant="flat">
                    Purchased (34)
                    </Button>
                    
                <Button as={Link} className=' float-right  bg-white text-black rounded-full border' href="#" variant="flat">
                Most recent
                </Button>
            </div>
            <div>
                <div className=' mb-4 md:flex items-center justify-start gap-3'>
                    <Image alt='alt' className='reviewImg' width={200} height={20} src='/p1.png' />
                    <div className=' flex align-center gap-2'>
                 
                        <Image alt='alt' className='reviewUser' width={80} height={80} src='/Ellipse 1178.png' />
                        <div >
                            <h3 className=' font-bold'>Theresa Webb</h3>
                            <p style={{ fontSize:"14px" }}>@theresawebb</p>
                            <div>
                                <p>Just as described and shipped quickly!! Thank you!</p>
                                <p>2 months ago</p>
                            </div>
                        </div>

                    </div>
                    <Image alt='alt' className='stars' src='/stars.png' />
                </div>

                <div className=' mb-4 md:flex items-center justify-start gap-3'>
                    <Image alt='alt' className='reviewImg' width={200} height={20} src='/p7.png' />
                    <div className=' flex align-center gap-2'>
                        <Image alt='alt' className='reviewUser' width={80} height={80} src='/Ellipse 1178.png' />
                        <div >
                            <h3 className=' font-bold'>Theresa Webb</h3>
                            <p style={{ fontSize:"14px" }}>@theresawebb</p>
                            <div>
                                <p>Just as described and shipped quickly!! Thank you!</p>
                                <p>2 months ago</p>
                            </div>
                        </div>

                    </div>
                    <Image alt='alt' className='stars' src='/stars.png' />
                </div>


                <div className=' mb-4 md:flex items-center justify-start gap-3'>
                    <Image alt='alt' className='reviewImg' width={200} height={20} src='/p2.png' />
                    <div className=' flex align-center gap-2'>
                        <Image alt='alt' className='reviewUser' width={80} height={80} src='/Ellipse 1178.png' />
                        <div >
                            <h3 className=' font-bold'>Theresa Webb</h3>
                            <p style={{ fontSize:"14px" }}>@theresawebb</p>
                            <div>
                                <p>Just as described and shipped quickly!! Thank you!</p>
                                <p>2 months ago</p>
                            </div>
                        </div>

                    </div>
                    <Image alt='alt' className='stars' src='/stars.png' />
                </div>


                <div className='mb-4 md:flex items-center justify-start gap-3'>
                    <Image alt='alt' className='reviewImg' width={200} height={20} src='/p3.png' />
                    <div className=' flex align-center gap-2'>
                        <Image alt='alt' className='reviewUser' width={80} height={80} src='/Ellipse 1178.png' />
                        <div >
                            <h3 className=' font-bold'>Theresa Webb</h3>
                            <p style={{ fontSize:"14px" }}>@theresawebb</p>
                            <div>
                                <p>Just as described and shipped quickly!! Thank you!</p>
                                <p>2 months ago</p>
                            </div>
                        </div>

                    </div>
                    <Image alt='alt' className='stars' src='/stars.png' />
                </div>


                <div className=' mb-4 md:flex items-center justify-start gap-3'>
                    <Image alt='alt' className='reviewImg' width={200} height={20} src='/p4.png' />
                    <div className=' flex align-center gap-2'>
                        <Image alt='alt' className='reviewUser' width={80} height={80} src='/Ellipse 1178.png' />
                        <div >
                            <h3 className=' font-bold'>Theresa Webb</h3>
                            <p style={{ fontSize:"14px" }}>@theresawebb</p>
                            <div>
                                <p>Just as described and shipped quickly!! Thank you!</p>
                                <p>2 months ago</p>
                            </div>
                        </div>

                    </div>
                    <Image alt='alt' className='stars' src='/stars.png' />
                </div>

                <div className=' mb-4 md:flex items-center justify-start gap-3'>
                    <Image alt='alt' className='reviewImg' width={200} height={20} src='/p5.png' />
                    <div className=' flex align-center gap-2'>
                        <Image alt='alt' className='reviewUser' width={80} height={80} src='/Ellipse 1178.png' />
                        <div >
                            <h3 className=' font-bold'>Theresa Webb</h3>
                            <p style={{ fontSize:"14px" }}>@theresawebb</p>
                            <div>
                                <p>Just as described and shipped quickly!! Thank you!</p>
                                <p>2 months ago</p>
                            </div>
                        </div>

                    </div>
                    <Image alt='alt' className='stars' src='/stars.png' />
                </div>


                <div className='mb-4 md:flex items-center justify-start gap-3'>
                    <Image alt='alt' className='reviewImg' width={200} height={20} src='/p6.png' />
                    <div className=' flex align-center gap-2'>
                        <Image alt='alt' className='reviewUser' width={80} height={80} src='/Ellipse 1178.png' />
                        <div >
                            <h3 className=' font-bold'>Theresa Webb</h3>
                            <p style={{ fontSize:"14px" }}>@theresawebb</p>
                            <div>
                                <p>Just as described and shipped quickly!! Thank you!</p>
                                <p>2 months ago</p>
                            </div>
                        </div>

                    </div>
                    <Image alt='alt' className='stars' style={{  width:"96px", height:"20px" }} src='/stars.png' />
                </div>
            </div>

            
        </div>
    
        <GetApp />
    </div>
  )
}

export default Review