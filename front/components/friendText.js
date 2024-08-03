import Image from 'next/image'
import React from 'react'
import user from "../public/Ellipse 443.png"
function FriendText() {
  return (
    <div className=' mt-3 rounded-lg p-3 grid grid-cols-4 items-center justify-between' style={{ backgroundColor:"#f2f2f2" }}>
        <div className=' col-span-1'>
            <Image src={user} alt='user' width={50} height={50} />
        </div>
        <div className=' col-span-2'>
            <h4 className=' font-bold'>Dianne Russell</h4>
            <p style={{ width:"100%", fontSize:"12px" }}>Has survived not only five centuries, but also the leap into</p>
        </div>
        
        <div className='col-span-1' style={{ fontSize:"12px" }}>
            02-07-2021
        </div>
    </div>
  )
}

export default FriendText