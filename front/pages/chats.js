import React from 'react'
import {Breadcrumbs, BreadcrumbItem, Button, Link, Input, Image} from "@nextui-org/react";
import Users from '../components/users';
import Item from '../components/item';
import rec from "../public/Frame 1000005677.png"
import swip from "../public/p1.png"
import SearchBar from '../components/searchBar';
import FriendText from '../components/friendText';
import send from "../public/Group 39564.png"
function Chats() {
  return (
    <div style={{ width:"90%", margin:"auto" }} >


        <Breadcrumbs>
            <BreadcrumbItem>Home</BreadcrumbItem>
            <BreadcrumbItem>Leslie Alexander</BreadcrumbItem>
            <BreadcrumbItem className=' font-bold' >Messages</BreadcrumbItem> 
        </Breadcrumbs>
        <h3 style={{ fontSize:"35px" }} className='myfont mt-4 mb-4 font-bold'>Messages</h3>
        <Image alt='alt' width={10} height={10} src={swip} />
        <div className=' md:grid md:grid-cols-5 gap-2'>
            <div className=' col-span-2 border p-4 rounded-xl'>
                <div className=' m-3 flex justify-between'>
                   <div>
                        <Button   as={Link} className=' mb-3 bg-black text-white rounded-full' href="#" variant="flat">
                            Chat
                        </Button>
                        <Button as={Link} style={{ border:"1px solid black" }} className='   bg-white ms-1 text-black rounded-full border' href="#" variant="flat">
                        Offers
                        </Button>
                   </div>
                   <div className=' flex items-center'>
                       <Image alt='alt' width={10} height={10} src={rec} />
                        
                   </div>
                </div>
                <SearchBar />
                <FriendText />
            </div>
            <div className='sm:mt-4 col-span-2 border p-4 rounded-xl md:relative'>
            
                <div style={{ width:"-webkit-fill-available", borderRadius:"50px", marginRight:"0.5rem" }} className=' messageInpu border md:absolute bottom-2 '>
                    <form  method='post' action='' >
                        <div  className=' flex justify-between'>
                            <input  className=' ps-2 outline-none w-full ' />
                            <button  className=' p-3 text-white w-fill bg-black rounded-full'>
                            send
                            {/* <Image alt='send' width={30} height={30} src={send} /> */}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <div className=' col-span-1 border p-4 rounded-xl font-normal relative'>
                {/* <div style={{ width:"20px", height:"20px", backgroundColor:"#1fb582", top:"20px", left:"8.5rem", border:"2px solid white"  }} className='online rounded-full absolute'></div> */}
                <Users /> 
                <Item />
            </div>
            
        </div>
    </div>
  )
}

export default Chats