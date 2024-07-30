import Image from 'next/image'
import React from 'react'
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
function Products() {
  return (
    <div className='products  md:gap-4 grid sm:grid-cols-2 md:grid-cols-4'>
    <div className='relative car'>
    

   

        <div  className='discount absolute'>20 %</div>
        <Image alt='alt'  src={p1} width={300} height={460.03}  />
        <div className='price flex justify-between '>
            <div>name Product</div>
            <div className=' block '>
                <div style={{ fontSize:"18px" }} className=' font-bold '>$50.00</div>
                <div style={{ fontSize:"12px" }}>$30.00</div>
            </div>
        </div>
    </div>
    
    <div className='relative'>
        <div  className='discount absolute'>20 %</div>
        <Image alt='alt'  src={p2} width={300} height={460.03}  />
        <div className='price  flex justify-between '>
            <div>name Product</div>
            <div className=' grid grid-cols-1 '>
                <div>$50.00</div>
                <div>$30.00</div>
            </div>
        </div>
    </div>

    <div className='relative'>
        <div  className='discount absolute'>20 %</div>
        <Image alt='alt'  src={p3} width={300} height={460.03}  />
        <div className='price  flex justify-between '>
            <div>name Product</div>
            <div className=' grid grid-cols-1 '>
                <div>$50.00</div>
                <div>$30.00</div>
            </div>
        </div>
    </div>

    <div className='relative'>
        <div  className='discount absolute'>20 %</div>
        <Image alt='alt'  src={p4} width={300} height={460.03}  />
        <div className='price  flex justify-between '>
            <div>name Product</div>
            <div className=' grid grid-cols-1 '>
                <div>$50.00</div>
                <div>$30.00</div>
            </div>
        </div>
    </div>

    <div className='relative'>
        <div  className='discount absolute'>20 %</div>
        <Image alt='alt'  src={p5} width={300} height={460.03}  />
        <div className='price  flex justify-between '>
            <div>name Product</div>
            <div className=' grid grid-cols-1 '>
                <div>$50.00</div>
                <div>$30.00</div>
            </div>
        </div>
    </div>

    <div className='relative'>
        <div  className='discount absolute'>20 %</div>
        <Image alt='alt'  src={p6} width={300} height={460.03}  />
        <div className='price  flex justify-between '>
            <div>name Product</div>
            <div className=' grid grid-cols-1 '>
                <div>$50.00</div>
                <div>$30.00</div>
            </div>
        </div>
    </div>

    <div className='relative'>
        <div  className='discount absolute'>20 %</div>
        <Image alt='alt'  src={p7} width={300} height={460.03}  />
        <div className='price  flex justify-between '>
            <div>name Product</div>
            <div className=' grid grid-cols-1 '>
                <div>$50.00</div>
                <div>$30.00</div>
            </div>
        </div>
    </div>


    <div className='relative'>
        <div  className='discount absolute'>20 %</div>
        <Image alt='alt'  src={p8} width={300} height={460.03}  />
        <div className='price  flex justify-between '>
            <div>name Product</div>
            <div className=' grid grid-cols-1 '>
                <div>$50.00</div>
                <div>$30.00</div>
            </div>
        </div>
    </div>


    <div className='relative'>
        <div  className='discount absolute'>20 %</div>
        <Image alt='alt'  src={p9} width={300} height={460.03}  />
        <div className='price  flex justify-between '>
            <div>name Product</div>
            <div className=' grid grid-cols-1 '>
                <div>$50.00</div>
                <div>$30.00</div>
            </div>
        </div>
    </div>


    <div className='relative'>
        <div  className='discount absolute'>20 %</div>
        <Image alt='alt'  src={p10} width={300} height={460.03}  />
        <div className='price  flex justify-between '>
            <div>name Product</div>
            <div className=' grid grid-cols-1 '>
                <div>$50.00</div>
                <div>$30.00</div>
            </div>
        </div>
    </div>


</div>
  )
}

export default Products