"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Button, link } from '@nextui-org/react';
import Image from 'next/image';




const MyNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);


  const open = () => {
    setIsOpen(true)
  }
  return (
    <div className="flex items-center justify-between p-4 bg-white">
      <div className="text-2xl font-bold">KIFT</div>
      <ul className="hidden lg:flex lg:gap-3  font-bold ">
        <li>
          <Link href="/">
            Menswear
          </Link>
        </li>
        <li>
          <Link href="/">
            Womenswear
          </Link>
        </li>
        <li>
          <Link href="/">
            Brands
          </Link>
        </li>
        <li>
          <Link href="/">
           Sale
          </Link>
        </li>
      </ul>
      <div className="flex space-x-4">
      
        <div className="text-lg"><Image alt='alt' height={30} width={30} src='/images/srch.svg' /></div>
        <div className="text-lg"><Image alt='alt' height={30} width={30} src='/images/noti.svg' /></div>
        <div className="text-lg"><Image alt='alt' height={30} width={30} src='/images/bg.svg' /></div>
      </div>
      <div className="hidden lg:flex space-x-4 ml-4">
      <Button as={Link} className=' bg-white text-black rounded-full border' href="#" variant="flat">
           Signup or sing in
        </Button>
        <Button  as={Link} className=' bg-black text-white rounded-full' href="#" variant="flat">
        Sell Now
        </Button>
      </div>
      <div className="lg:hidden">
          <button  onClick={open} className="text-2xl">
              ☰
          </button>
      </div>
      <div>
      
      
      <ul style={{ 'zIndex':'100' }} className= {`${isOpen ? 'sm:block md:block' : 'sm:hidden md:hidden'} absolute top-16 left-0 w-full bg-white flex flex-col items-center space-y-4  z-30`} >
        <li>
          <Link href="/">
            Menswear
          </Link>
        </li>
        <li>
          <Link href="/">
            Menswear
          </Link>
        </li>
        <li>
          <Link href="/">
            Menswear
          </Link>
        </li>
        <li>
          <Link href="/">
            Menswear
          </Link>
        </li>
          <div className="flex flex-col space-y-4">
            <Button as={Link} className=' bg-white text-black rounded-full border' href="#" variant="flat">
                  Signup or sing in
             </Button>

            
             <Button as={Link} className=' bg-black text-white rounded-full' href="#" variant="flat">
                Sell Now
             </Button>
          </div>
        </ul>
      </div>
     
      
    </div>
  );
};

export default MyNavbar;
