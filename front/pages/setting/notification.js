import React from 'react'
import {Switch}  from "@nextui-org/react";

function Notification() {
  return (
    <div className=' p-6'>
          <h3 className='myfont font-bold'>Notifications</h3>
          <div className=' flex items-center justify-between mt-4 mb-4'>
              <h5 className=' font-bold'>Show city in profile</h5>
              <Switch  color="dark" defaultSelected aria-label="Automatic updates"/>
    
          </div>

        <hr className='w-full  mt-7 mb-7'></hr>
        <h6 className='myfont font-bold'>Profile details</h6>
        <div className=' mt-3 flex items-center justify-between'>
            <div>
              <h5 className=' font-bold'>Google</h5>
            </div>
            <div className=' flex items-center justify-between'>
               
            <Switch  color="dark" defaultSelected aria-label="Automatic updates"/>

            </div>
        </div>

        <hr className='w-full  mt-7 mb-7'></hr>
        <h4 className=' text-gray-400'>News</h4>
        <h6 className='myfont font-bold '>KIFT Updates</h6>
        <div className=' mt-3 flex items-center justify-between'>
            <div>
              <h5 className='text-gray-400'>Be the first to know about our newest features, updates, and changes</h5>
            </div>
            <div className=' flex items-center justify-between'>
               
            <Switch  color="dark" defaultSelected aria-label="Automatic updates"/>

            </div>
        </div>

        <h6 className='myfont font-bold'>Marketing communications</h6>
        <div className=' mt-3 flex items-center justify-between'>
            <div>
              <h5 className='text-gray-400'>Receive personalized offers, news, and recommendations</h5>
            </div>
            <div className=' flex items-center justify-between'>
               
            <Switch  color="dark" defaultSelected aria-label="Automatic updates"/>

            </div>
        </div>

        <hr className='w-full  mt-7 mb-7'></hr>
        <h5 className='text-gray-400'>Other notifications</h5>

        <div className=' flex items-center justify-between mt-4 mb-4'>
            <h3 className='myfont font-bold'>New messages</h3>  
            <Switch  color="dark" defaultSelected aria-label="Automatic updates"/> 
        </div>

        <div className=' flex items-center justify-between mt-4 mb-4'>
            <h3 className='myfont font-bold'>New feedback</h3>  
            <Switch  color="dark" defaultSelected aria-label="Automatic updates"/> 
        </div>
        <div className=' flex items-center justify-between mt-4 mb-4'>
            <h3 className='myfont font-bold'>Discounted items</h3>  
            <Switch  color="dark" defaultSelected aria-label="Automatic updates"/> 
        </div>
        <hr className='w-full  mt-7 mb-7'></hr>
        <h5 className='text-gray-400'>Other notifications</h5>
        <div className=' flex items-center justify-between mt-4 mb-4'>
            <h3 className='myfont font-bold'>Favorited Items</h3>  
            <Switch  color="dark" defaultSelected aria-label="Automatic updates"/> 
        </div>

        <div className=' flex items-center justify-between mt-4 mb-4'>
            <h3 className='myfont font-bold'>New followers</h3>  
            <Switch  color="dark" defaultSelected aria-label="Automatic updates"/> 
        </div>

        <div className=' flex items-center justify-between mt-4 mb-4'>
            <h3 className='myfont font-bold'>New items</h3>  
            <Switch  color="dark" defaultSelected aria-label="Automatic updates"/> 
        </div>
    </div>
  )
}

export default Notification