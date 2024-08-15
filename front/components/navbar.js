import React, { useState } from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button, Image} from "@nextui-org/react";
import Search from "./search";
import MegaMenu from "./megaMenu";
import WomenSawar from "./womenSawar";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];


  

  const [searchBar, setsearchBar] = useState(false);
  
  const addSearchBar = () => {
    setsearchBar(!searchBar)
  }

  const [menswear, setmenswear] = useState(false);
  const [womenSawar, setwomenSawar] = useState(false);
  const displayMenswear = () => {
      setmenswear(!menswear)
  }
  const displayWomenSawar = () => {
    setwomenSawar(!womenSawar)
}
  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>

      <div className="menswear" style={{ display: menswear ? "block" : "none"  }}>
          <MegaMenu />
      </div>
      <div className="womenSawar" style={{ display: womenSawar ? "block" : "none"  }}>
          <WomenSawar />
      </div>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <h2 style={{ fontSize:"30px" }} className="font-bold 
          ">KIFT</h2>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4 font-bold" justify="start">
        <NavbarItem >
          <div onClick={displayMenswear} color="foreground" >
          Menswear
          </div>
        </NavbarItem>
         
        <NavbarItem>
          <div onClick={displayWomenSawar} color="foreground" >
              Womenswear
            </div>
          
        </NavbarItem>

        <NavbarItem>
          <Link color="foreground" href="#">
          Brands
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link  className=" text-red-600" href="#">
          Sale
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
        <div className="flex space-x-4">
    
          <div className="displaySeach" style={{ display: searchBar ? "block" : "none" }}>
              <Search />
          </div>
          <div onClick={addSearchBar} style={{ width:"40px" }}   className="text-lg"><Image alt='alt' style={{ width:"40px" }} height={50} width={50} src='/srch.svg' /></div>
          <div className="text-lg"><Image alt='alt' style={{ width:"40px" }} height={50} width={50} src='/noti.svg' /></div>
          <div className="text-lg"><Image alt='alt' style={{ width:"40px" }} height={50} width={50} src='/bg.svg' /></div>
        </div>  
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} className=' bg-white text-black rounded-full border' href="/auth/signup" variant="flat">
            Signup or sing in
          </Button>
          <Button  as={Link} className=' bg-black text-white rounded-full' href="#" variant="flat">
          Sell Now
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
