import React from 'react'
import { Button } from '@nextui-org/react'
import Link from 'next/link'
import {Textarea, Switch}  from "@nextui-org/react";

function Payaments() {
  return (
    <div className=' p-6'>
     <h3 className='myfont font-bold'>Payments</h3>
         <div className=' mt-3 flex items-center justify-between'>
            <div>
              <h5 className=' font-bold'>Saved Payment Methods</h5>
              <p style={{ width:"70%" }}>You currently don&apos;t have any saved payment methods. Add a payment method here for quicker checkout.</p>
            </div>
            <div className=' flex items-center justify-between'>
               
                <Button as={Link} className=' bg-black text-white rounded-full border' href='#' variant="flat">
                Add Payment
          </Button>
            </div>
        </div>
    </div>
  )
}

export default Payaments