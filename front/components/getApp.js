

import Image from 'next/image'
import React from 'react'

function GetApp() {
  return (
    <div className='getApp md:flex items-center justify-around relative'>
        <div className=' sm:text-center'>
            <h2>Get the app.</h2>
            <p className=' sm:text-center'>Download the app for free on iPhone, iPad and Android.</p>
            <div  className=' flex items-center mt-3 mb-3 '>
           
                        <Image alt='alt' height={100} width={100}  src="/App Store Blue Border.png" />
                        <Image alt='alt' height={30}  className=' ms-5' width={100} src="/Google Play Blue Border.png" />
            </div>
        </div>
        <div className='imgDirc  '>

            
            <Image alt='alt' height={30} width={33} className='relative'  src='/Rectangle 798.png' />
            


        </div>
    
    
    </div>
  )
}

export default GetApp