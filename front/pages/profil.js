import React from 'react'
import { Button, Link } from '@nextui-org/react'
import FilterCategory from '@/components/filterBar'
import Products from '@/components/products'
import GetApp from '@/components/getApp'
import SearchBar from '@/components/searchBar'
import Image from 'next/image'

function profil() {
  return (
    <div className='mt-8 profil'>
        <div className='bio grid  sm:justify-center  lg:grid-cols-4 items-center '>

                
            <div className=' sm:mr-auto items-center'>
                <Image width={30} height={30} alt='alt'  src='/images/Ellipse 1178.png' />
            </div>


            <div className=' lg:grid-span-1 items-center'>
               <div className=' flex items-center'>
                    <h3>Leslie Alexander</h3>
                    <Image width={30} height={30} alt='alt' src='/images/Frame.png' />
               </div>
               <div className=' flex items-center'>
                    <Image alt='alt' width={100} height={28} src='/images/Frame 1000005481.png' />
                    <p className=' ms-2' style={{ fontSize:"15px" }}>(137) reviews</p>
               </div>
            </div>


            <div className=' lg:grid-span-1 items-center '>
                <div className=' flex items-center gap-3'>
                    <div style={{ fontSize:"24px" }} className=' text-center font-bold'>
                    1600 <p style={{ fontSize:"16px", color:"#a4a5a5" }} className=' font-normal'>Items</p>
                    </div>
                    <div  style={{ fontSize:"24px" }}  className=' text-center  font-bold'>
                    453 <p  style={{ fontSize:"16px", color:"#a4a5a5" }} className=' font-normal'>Followers</p>
                    </div>
                    <div  style={{ fontSize:"24px" }}  className='  text-center  font-bold'>
                    453 <p  style={{ fontSize:"16px", color:"#a4a5a5" }}  className=' font-normal'>Following</p>
                    </div>
                    <div  style={{ fontSize:"24px" }}  className='  text-center  font-bold'>
                    200,615
<p  style={{ fontSize:"16px", color:"#a4a5a5" }}  className=' font-normal'>Likes</p>
                    </div>

                </div>
            </div>

            <div className=' lg:grid-span-3 flex items-center justify-center gap-3'>
            <Image width={30} height={30} alt='alt'  src='/images/mail.png' />
            <Button as={Link} className='font-bold  bg-black text-white rounded-full' href="#" variant="flat">
            Follow
        
            </Button>
            </div>
       

        </div>
    
        <div className='contentCategorie grid md:grid-cols-10 mt-10 mb-6 '>
            <div className='  md:col-span-3'>
                <FilterCategory  />

            </div>
            <div className=' md:col-span-7'>
                <div className=' flex items-center justify-between mb-5'>
                    <h3>All Items</h3>
                    <SearchBar />
                </div>
                <Products />
            </div>
            
        
        </div>

        <GetApp  />
    
    </div>
  )
}

export default profil