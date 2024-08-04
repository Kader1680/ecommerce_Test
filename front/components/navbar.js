import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@nextui-org/react';
export default function Navbar() {
  return (
    <div>
    
    <nav class="navbar">
    <div style={{ width:"90%", margin:"auto" }} class="flex items-center justify-between">
      <div className="text-2xl font-bold">KIFT</div>

      <input type="checkbox" id="menu-toggle" class="menu-toggle" />
      <label for="menu-toggle" class="menu-icon">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </label>

      <ul class="nav">
        <li class="nav-item"><a href="#">Menswear</a></li>
        <li class="nav-item"><a href="#">Menswear</a></li>
        <li class="nav-item"><a href="#">Menswear</a></li>
        <li class="nav-item"><a href="#">Brands</a></li>
        <li class="nav-item"><a href="#">Sale</a></li>
      </ul>

      <div className="flex space-x-4">
    
          <div className="text-lg"><Image alt='alt' height={20} width={20} src='/srch.svg' /></div>
          <div className="text-lg"><Image alt='alt' height={20} width={20} src='/noti.svg' /></div>
          <div className="text-lg"><Image alt='alt' height={20} width={20} src='/bg.svg' /></div>
      </div>
      <div className="hidden lg:flex space-x-2 ml-4">
        <Button as={Link} className=' bg-white text-black rounded-full border' href="/auth/signup" variant="flat">
            Signup or sing in
          </Button>
          <Button  as={Link} className=' bg-black text-white rounded-full' href="#" variant="flat">
          Sell Now
          </Button>
      </div>
    </div>
  </nav>
    
    </div>
  )
}

