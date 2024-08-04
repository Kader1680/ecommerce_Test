import React from 'react'
import { Button } from '@nextui-org/react'
import Link from 'next/link'
function Security() {
  return (
    <div className=' p-6'>
        <h3 className='myfont font-bold'>Notifications</h3>
        <div className=' mt-3 md:flex items-center justify-between'>
            <div>
              <h5 className=' font-bold'>Email</h5>
              <p>Check that your email is correct</p>
            </div>
            <div className=' flex items-center justify-between'>
               
                <Button as={Link} className=' bg-white text-black     rounded-full        border' href='#' variant="flat">
                Delete Account
                </Button>
            </div>
        </div>

        <hr className='w-full mt-7 mb-7'></hr>

        <div className=' mt-3 md:flex items-center justify-between'>
            <div>
              <h5 className=' font-bold'>Change Password</h5>
              <p>Protect your account with a stronger password.</p>
            </div>
            <div className=' flex items-center justify-between'>
               
                <Button as={Link} className=' bg-white text-black     rounded-full        border' href='#' variant="flat">
                Change Password
                </Button>
            </div>
        </div>

        <hr className='w-full  mt-7 mb-7'></hr>


        <div className=' mt-3 md:flex items-center justify-between'>
            <div>
              <h5 className=' font-bold'>2-step verification</h5>
              <p>Add an extra layer of security to your Vinted account — verify your phone number now. You’ll receive a verification code if we ever notice any unusual activity</p>
            </div>
            <div className=' flex items-center justify-between'>
               
                <Button as={Link} className=' mr-auto bg-white text-black     rounded-full        border' href='#' variant="flat">
                Two factor authentication
                </Button>
            </div>
        </div>

        <hr className='w-full mt-7 mb-7'></hr>

        <div className='mb-10 mt-3 md:flex items-center justify-between'>
            <div>
              <h5 className=' font-bold'>Delete Account</h5>
              <p>This will be permanently deleted account in KIFTm this action connot be undone</p>
            </div>
            <div className=' flex items-center justify-between'>
               
                <Button style={{ border:"1px solid #fa586c", color:"#fa586c" }} as={Link} className=' bg-white      rounded-full        border' href='#' variant="flat">
                Delete Account
                </Button>
            </div>
        </div>

    </div>
  )
}

export default Security