

import React from 'react'

function GetApp() {
  return (
    <div className='getApp md:flex items-center justify-around relative'>
        <div className=' sm:text-center'>
            <h2>Get the app.</h2>
            <p className=' sm:text-center'>Download the app for free on iPhone, iPad and Android.</p>
            <div  className=' flex items-center mt-3 mb-3 '>
                        <img width={100}  src="/images/App Store Blue Border.png" />
                        <img className=' ms-5' width={100} src="/images/Google Play Blue Border.png" />
            </div>
        </div>
        <div className='imgDirc  '>

            
            <img className='relative'  src='/images/Rectangle 798.png' />
            


        </div>
        
    {/* <img  className='scndImg md:absolute' width={308} height={483} src='/images/Rectangle 799.png' />
     */}
    </div>
  )
}

export default GetApp