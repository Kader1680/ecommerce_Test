import { Button, Link } from '@nextui-org/react'
import React from 'react'
import {User} from "@nextui-org/user";
import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card";
import Products from '@/components/products';
import GetApp from '@/components/getApp';
import Image from 'next/image';
function Id() {
  return (
    <div style={{ width:"90%", margin:"auto" }}>
        <div className='singleProduct grid md:grid-cols-10  '>
        <div className=' md:col-span-7 sm:col-span-10 '>

            <Image alt='alt'  style={{ borderRadius:"30px" }} width={759} height={674} src= '/singleProduct.png' />

        </div>



        <div className='description md:col-span-3 sm:col-span-10'>
            <h2>DJI mavic mini 2 4K Drone Fly More Version New Unregistered /Drone 10km 4500m</h2>
            <div className=' flex items-center'>
                <Image alt='alt'  width={80.5} height={14} src='/Img - Rated 4.00 out of 5.png' />
                <p className=' ms-4' style={{ fontSize:"14px" }}>1 Review</p>
            </div>
            <p>Price</p>
            <div className=' mb-5 flex items-center'><h3 className=' font-bold' style={{ fontSize:"24px" }}>$543.39</h3><p className='  line-through ms-2'>$669.00</p></div>
            <h4 className=' font-bold'>Details</h4>
            <div className=' grid grid-cols-5'>
                <div className=' col-span-2'>
                    <ul>
                        <li>Condition</li>
                        <li>Model</li>
                        <li>Brand</li>
                        <li>Category</li>
                        <li>Color</li>
                        <li>Posted</li>
                    </ul>
                </div>
                <div className='col-span-3 font-bold'>
                    <ul>
                        <li>New</li>
                        <li>Mavic 2 Enterprise Series</li>
                        <li>DJI</li>
                        <li>DJI</li>
                        <li>Gray </li>
                        <li>04/20/24 </li>
                    </ul>
                </div>
            </div>

            <div className='adding mt-8 grid '>
            <Button as={Link} className='font-bold  bg-black text-white rounded-full' href="#" variant="flat">
            Buy Now
        </Button>
                <div className=' grid grid-cols-2 mt-2 gap-3'>
                <Button as={Link} className='font-bold bg-white text-black rounded-full border border-black' href="#" variant="flat">
                Add to bag
        </Button>
        <Button as={Link} className='font-bold bg-white border-black text-black rounded-full border' href="#" variant="flat">
        Make an offer
        </Button>

                </div>
            </div>

            <div className=' detials'>
                <h3 className=' font-bold mt-5'>Description</h3>
                <div className=' mt-3 mb-3'>DJI Mini 2 is beginner-friendly,powerful,and well, mini. Impressive performance, stunning image quality, & creative 4k videos are just a few taps away.</div>
                <p  className=' mt-3 mb-3'>Fly More Combo  /</p>
                <ul>
                    <li>In The Box :  Aircraft x 1</li>
                    <li>Remote Controller x1</li>
                    <li>Intelligent Flight Battery x3</li>
                    <li>Pair of Spare Propellers x3</li>
                    <li>Type-C Cable x1</li>
                    <li>Gimbal Protector x1</li>
                    <li>Micro-USB Connector) x1</li>
                    <li>Pair of Spare Control Sticks x1</li>
                    <li>Spare Screws,prop hubs</li>
                    <li>10km Video Transmission</li>
                    <li>Ultra-Clear 4K Video</li>
                </ul>
            </div>
            <div className='payment mt-4'>
                <h3 className=' font-bold mb-2'>Shipping & Payments</h3>
                <Card className=' mb-3'>
                    <CardBody className=' bg-gray-200'>
                        <p>Free shipping on orders over $89 Details</p>
                    </CardBody>
                </Card>
                <Image alt='alt' width={100} height={100} src='/Screenshot 2024-04-23 at 12.57 1.png'/>

                <div className='safe flex items-center mt-3'>
                    <Image alt='alt'  width={32} height={32} src='images/shield.png' />
                    <div className=' ms-4'>Mercari keeps your payment information secure.
                    Mercari sellers never receive your credit card information.</div>
                </div>

                <User  className=' border p-4 mt-5'  
                    name="Leslie Alexander"
                    description="(137) reviews"
                    avatarProps={{
                        src: "/Ellipse 443.png"
                }}
                 />
            </div>


        </div>

    </div>

    <div className='Brands flex items-center '>
        <h3  className=''>More from this seller</h3> 
        <Button as={Link} className=' font-bold ms-4 bg-white border-black text-black rounded-full border' href="#" variant="flat">
        View All
        </Button>
    </div>
    <Products />
    <GetApp />
    </div>
  )
}

export default Id