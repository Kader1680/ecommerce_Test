import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import p1 from "../public/p1.png"
import p2 from "../public/p2.png"
import p3 from "../public/p3.png"
import p4 from "../public/p4.png"
import p5 from "../public/p5.png"
import p6 from "../public/p6.png"
import p7 from "../public/p7.png"
import p8 from "../public/p8.png"
import p9 from "../public/p9.png"
import p10 from "../public/p10.png"

import products from "../pages/product"

function Products() {


    
    
        
    
  
  return (
    <div  className='products  md:gap-4 grid sm:grid-cols-4 md:grid-cols-4'>
   
      
        {
            products.map(item => (
                <div key={item.id} className='relative car mb-5'>
                    <div  className='discount absolute'>{item.discount} $</div>
                    <div style={{ top:"3rem", width:"fit-content", backgroundColor:"#cc0d39" }} className='discount absolute'>{item.featured}</div>
                    <Image alt='alt'  src={item.image} width={300} height={460.03}  />
                    <div className='price flex justify-between '>
                        <div>{item.name}</div>
                        <div className=' block '>
                            <div style={{ fontSize:"18px" }} className=' font-bold '>{item.oldPrice}</div>
                            <div style={{ fontSize:"12px" }}>{item.newOld}</div>
                        </div>
                    </div>
                </div>
                ))
        }

       
    
    
   


</div>
  )
}

export default Products