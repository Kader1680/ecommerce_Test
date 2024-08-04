

import Image from 'next/image'
import React from 'react'
import appstore from "../public/appelBorder.png"
import google from "../public/googleBorder.png"
import rect789 from "../public/Rectangle 798.png"

function GetApp() {
  return (
    <div className='getApp mt-5 md:flex items-center justify-around relative'>
        <div className=' sm:text-center'>
            <h2 className='myfont'>Get the app.</h2>
            <p className=' sm:text-center'>Download the app for free on iPhone, iPad and Android.</p>
            <div  className=' flex items-center mt-3 mb-3 '>
           
                        <Image alt='alt' height={100} width={100}  src={appstore}/>
                        <Image alt='alt' height={30}  className=' ms-5' width={100} src={google}/>
            </div>
        </div>
        <div className='imgDirc  '>

            
            <Image alt='alt' height={210} width={133} className='relative'  src={rect789} />
            


        </div>
    
    
    </div>
  )
}

export default GetApp