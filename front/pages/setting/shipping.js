import React from 'react'
import { Button } from '@nextui-org/react'
import Link from 'next/link'

function Shipping() {
  return (
    <div className=' p-6'>
          <h3 className='myfont font-bold'>Account settings</h3>
         <div className=' mt-3 flex items-center justify-between'>
            <div>
              <h5 className=' font-bold'>Saved Delivery Addresses</h5>
              <p style={{ width:"70%" }}>You currently don&apos;t have any saved delivery addresses. Add an address here to be prefilled for quicker checkout.</p>
            </div>
            <div className=' flex items-center justify-between'>
               
                <Button as={Link} className=' bg-black text-white rounded-full border' href='#' variant="flat">
              Change Email
          </Button>
            </div>
        </div>
    </div>
  )
}

export default Shipping