import { Image } from '@nextui-org/react'
import React from 'react'

import app from '../public/app.png'
import google from '../public/googleBorder.png'


function DownloadApp() {
  return (
    // style={{ height:"27rem" }}
    <div  className="max-w-sm   bg-white p-6 rounded-lg shadow-lg mb-4">
    <div className=' flex items-center justify-between mb-3'>
                <h2 className="text-xl font-bold mt-3 mb-3">Download the app</h2>
                {/* <h3 className=' text-lg font-bold mt-3 mb-3'>Cart</h3> */}
                <div className=' bg-slate-200 p-2 rounded-full'>
                    <Image  width={18} height={18} alt='close' src='/close.png' />

                </div>
    </div>
    <div className="mb-6">
      <Image
        src="/noti.png"  
        alt="App promotion"
        width={500}
        height={250}
        className="rounded-lg"
      />
      <div className="mt-4">
     
        <p className="text-lg text-gray-600">
        List and shop and easier than on web 
        (and unlock the lastest features )
        </p>
      </div>
      <div className="flex mt-4 space-x-2">
        <Image
          src={app}  
          alt="App Store"
          width={220}
          height={40}
          className="object-contain"
        />
        <Image
          src={google} 
          alt="Google Play"
          width={120}
          height={40}
          className="object-contain"
        />
      </div>
    </div>
   
     
  </div>
  )
}

export default DownloadApp