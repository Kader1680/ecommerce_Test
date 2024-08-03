import Image from 'next/image'
import React from 'react'
import item from "../public/image (1).png"
import {Button, Link} from "@nextui-org/react";
export default function Item() {
  return (
    <div className=' mt-5'>
        <h3 className=' font-bold'>Item info</h3>
        <Image style={{ width:"150", height:"150", margin:"10px auto" }} alt='item' width={150} height={150} src={item} />
        <p style={{ fontSize:"13px" }} className=' font-bold '>CIRCA BROWN LEATHER BELT Square Buckle Small 1.5”WIDE MADE IN USA STITCHED</p>
        <div className=' flex items-center mt-3 mb-3'>
            <p style={{ fontSize:"14px" }} className='font-bold'>$20.36</p>
            <p style={{ color:"#c3c3c3", fontSize:"12px" }} className=' line-through ms-2'>$25.00</p>
        </div>
        <Button   as={Link} className=' w-full mb-3 bg-black text-white rounded-full' href="#" variant="flat">
            Buy Now
          </Button>
        <Button as={Link} style={{ border:"1px solid black" }} className='  w-full bg-white text-black rounded-full border' href="#" variant="flat">
            View Item
          </Button>
         
    </div>
  )
}
 