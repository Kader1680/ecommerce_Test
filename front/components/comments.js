import Image from 'next/image'
import React from 'react'
import user from "../public/Ellipse 1186.png"
import user2 from "../public/Ellipse 1191.png"
import menu from "../public/menu-circle-vertical.png"
import arrow from "../public/Combo shape.png"
function Comments() {
  return (
    <div>
        <h3 style={{ fontSize:"24px" }} className=' font-bold mt-5 mb-5 '>Comments</h3>
        <div className='comment p-4 mt-5 mb-5 border rounded-lg' style={{ backgroundColor:"#f3f3f3" }} >
            <div className='head flex items-center justify-between'>
                <div className=' flex items-center'>
                    <Image className=' rounded-full' alt='user' width={40} height={40} src={user} />
                    <div className=' ms-2'>
                        <h4 style={{ fontSize:"16px"  }} className=' font-bold'>Ronald Richards</h4>
                        <p style={{ color:"#bfc0c0", fontSize:"12px" }}>27 minutes ago</p>
                    </div>
                </div>
                
                
                <Image alt='user' width={40} height={40} src={menu} />
                
            </div>
            <p className=' mt-2'>
            List and shop and easier than on web (and unlock the lastest features )
            </p>
        </div>

        <div className='comment p-4 mt-5 mb-5 border rounded-lg' style={{ backgroundColor:"#f3f3f3" }} >
            <div className='head flex items-center justify-between'>
                <div className=' flex items-center'>
                    <Image className=' rounded-full' alt='user' width={40} height={40} src={user2} />
                    <div className=' ms-2'>
                        <h4 style={{ fontSize:"16px"  }} className=' font-bold'>Ralph Edwards</h4>
                        <p style={{ color:"#bfc0c0", fontSize:"12px" }}>27 1 hour ago</p>
                    </div>
                </div>
                
                
                <Image alt='user' width={40} height={40} src={menu} />
                
            </div>
            <p className=' mt-2'>
            List and shop and easier than on web List and shop and easier than on web List and shop and easier than on web 
            </p>
        </div>
         <form  method='POST' action= ""  className=' formSubmit flex items-center justify-between mb-5'>
            <div  style={{ width:"100%" }}  className=' p-3 flex items-center justify-between bg-white border rounded-md'>
                
                    <input className=' border-none outline-none w-full' placeholder='Add your comment' width={100} />
                    <button  className=' outline-none border-none  '>
                        <Image alt='alt' width={30} height={30} src={arrow} />
                    </button>
            
            </div>
        </form>

        
    </div>
  )
}

export default Comments