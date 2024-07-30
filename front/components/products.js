import Image from 'next/image'
import React from 'react'

function Products() {
  return (
    <div className='products  md:gap-4 grid sm:grid-cols-2 md:grid-cols-4'>
    <div className='relative car'>
    

   

        <div  className='discount absolute'>20 %</div>
        <Image alt='alt'  src="/images/p1.png " width={300} height={460.03}  />
        <div className='price  flex justify-between '>
            <div>name Product</div>
            <div className=' block '>
                <div style={{ fontSize:"18px" }} className=' font-bold '>$50.00</div>
                <div style={{ fontSize:"12px" }}>$30.00</div>
            </div>
        </div>
    </div>
    
    <div className='relative'>
        <div  className='discount absolute'>20 %</div>
        <Image alt='alt'  src="/images/p2.png " width={300} height={460.03}  />
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
        <Image alt='alt'  src="/images/p3.png " width={300} height={460.03}  />
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
        <Image alt='alt'  src="/images/p4.png " width={300} height={460.03}  />
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
        <Image alt='alt'  src="/images/p5.png " width={300} height={460.03}  />
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
        <Image alt='alt'  src="/images/p6.png " width={300} height={460.03}  />
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
        <Image alt='alt'  src="/images/p7.png " width={300} height={460.03}  />
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
        <Image alt='alt'  src="/images/p8.png " width={300} height={460.03}  />
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
        <Image alt='alt'  src="/images/p9.png " width={300} height={460.03}  />
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
        <Image alt='alt'  src="/images/p10.png " width={300} height={460.03}  />
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