import { Button, Link } from '@nextui-org/react'
import React from 'react'

function Summary() {
  return (
    <div style={{ backgroundColor:"#f2f2f2" }} className='summary pt-5 p-2 rounded-lg'>
    <h3 style={{ fontSize:"24px" }} className='textDecor mt-2'>Summary</h3>
 
    <div className='price mt-3'>
        <div className=' flex items-center justify-between'>
            <div>
                <ul>
                    <li className='mb-2'>Subtotal</li>
                    <li className='mb-2'>Estimated Shipping & Handling</li>
                    <li className='mb-2'>Estimated Tax</li>
                    <li className='mb-2'>Discount Total</li>
                    <hr className=' mb-2' ></hr>
                    <li className='mb-2'>Total</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li  className='mb-2'>$120.00</li>
                    <li  className='mb-2'>$8.00</li>
                    <li  className='mb-2'>—</li>
                    <li  className='mb-2'>$12.00</li>
                     
                    <li className='mb-2 font-bold'>$116.00</li>
                </ul>
            </div>
        </div>
    </div>

    
 
</div>
  )
}

export default Summary