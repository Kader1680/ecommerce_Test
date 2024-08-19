import React from 'react'
import f1 from '../public/followers (1).png'
import f2 from '../public/followers (2).png'
import f3 from '../public/followers (3).png'
import f4 from '../public/followers (4).png'
import f5 from '../public/followers (5).png'
import f6 from '../public/followers (6).png'
import f7 from '../public/followers (7).png'
import { Button, Input } from '@nextui-org/react'
import Image from 'next/image'
function Followers() {
    const followers = [
        {'name' : 'Floyd Miles', 'username' : '@floydmiles ', 'pics': f1},
        {'name' : 'Ralph Edwards', 'username' : '@ralphedwards', 'pics': f2},
        {'name' : 'Dianne Russell', 'username' : '@diannerussell', 'pics': f3},
        {'name' : 'Darlene Robertson', 'username' : '@darlenerobertson', 'pics': f4},
        {'name' : 'Theresa Webb', 'username' : '@theresawebb ', 'pics': f5},
        {'name' : 'Robert Fox', 'username' : '@robertfox ', 'pics': f6},
        {'name' : 'Jenny Wilson', 'username' : '@jennywilson ', 'pics': f7},
  
   
    
    
    ]
    return (
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm mb-4">
    
    
        <div className=' flex items-center justify-between mb-3'>
                    <h2 className="text-xl font-bold mt-3 mb-3">Followers</h2>
            
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
                placeholder="search items"
                startContent={
                    <Image alt='alt' width={20} height={20} src='/searchicon.png' />
                }
                />

 

        </div>
        <div className=' mt-5'>
            {
                followers.map(follower => (
                    <div  className=' flex items-center justify-between  p-2  mb-3 rounded-lg'>
                        <div className=' flex items-center '>
                            <Image alt='alt' height={40} width={40} src= {follower.pics} />
                            <div className=' ms-2'>
                                <h3 className=' font-bold'>{follower.name}</h3>
                                <p>{follower.username}</p>
                            </div>
                        </div>
                        <Button     className='    bg-black text-white rounded-full' href="#" variant="flat">
                            Follow
                        </Button>
                    </div>
                ))
            }
        </div>
      
      </div>
  )
}

export default Followers