import React from 'react'
 
import { Button, Input } from '@nextui-org/react'
import Image from 'next/image'
import { useTranslation } from '../context/TranslationContext';

function Following() {
    
    const { t } = useTranslation();

 

    const followingUsers = t("followingUsers")

     

    return (
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm mb-4">
    
    
        <div className=' flex items-center justify-between mb-3'>
                    <h2 className="text-xl font-bold mt-3 mb-3">Following</h2>
            
                    <div className=' bg-slate-200 p-2 rounded-full'>
                        <Image  width={18} height={18} alt='close' src='/close.png' />
    
                    </div>
        </div>
        <div>

                <Input
                style={{ backgroundColor:"transparent" }}
                className='searchBar bg-transparent'
                onChange={(e)=>{targerInput(e.target.value)}}
                radius="lg"
                placeholder={t("searchItemsBar")}
                startContent={
                    <Image alt='alt' width={20} height={20} src='/searchicon.png' />
                }
                />

 

        </div>
        <div className=' mt-5'>
            {
                followingUsers.map(follower => (
                    <div key={follower.name} className=' flex items-center justify-between  p-2  mb-3 rounded-lg'>
                        <div className=' flex items-center '>
                            <Image alt='alt' height={40} width={40} src= {follower.pics} />
                            <div className=' ms-2'>
                                <h3 className=' font-bold'>{follower.name}</h3>
                                <p>{follower.username}</p>
                            </div>
                        </div>
                        <Button     className='    bg-black text-white rounded-full' href="#" variant="flat">
                            {t("follow")}
                        </Button>
                    </div>
                ))
            }
        </div>
      
      </div>
  )
}

export default Following