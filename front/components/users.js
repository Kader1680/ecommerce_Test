import Image from 'next/image'
import React from 'react'
import user from "../public/Ellipse 1178.png"
 

export default function Users() {
  return (
    <div className='user'  >
          <Image className='flex items-center justify-center m-auto' src={user} alt='user' width={100} height={100} />
          <div className=' flex items-center justify-center'>
                <h3 className=' font-bold '>Leslie Alexander</h3>
                <Image width={30} height={30} alt='alt' src='/Frame.png' />
          </div>
          <div className=' flex items-center justify-center'>
                <Image alt='alt' width={90} height={28} src='/Frame 1000005481.png' />
                <p className=' ms-2' style={{ fontSize:"15px" }}>(137) reviews</p>
          </div>

          <hr className=' mt-5'></hr>

          
    </div>
  )
}
