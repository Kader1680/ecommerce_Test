import React, { useEffect, useState } from "react";
import { useTranslation } from '../context/TranslationContext';
import { useThemeContext } from '../context/ThemeContext';
 
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
  Image,
} from "@nextui-org/react";
 

export default function Mynavbar() {

  const {theme, changeTheme}  = useThemeContext();
   
  const style = {
    backgroundColor: theme === "white" ? "#ffffff" : "#000000",
    color: theme === "white" ? "#000000" : "#ffffff",
  }
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "عربي",
    "English",
    "Log Out",
  ];

  const [searchBar, setsearchBar] = useState(false);

  const addSearchBar = () => {
    setsearchBar(!searchBar);
  };

  const [menswear, setmenswear] = useState(false);
  const [womenSawar, setwomenSawar] = useState(false);
  const displayMenswear = () => {
    setmenswear(!menswear);
  };
 

  const displayWomenSawar = () => {
    setwomenSawar(!womenSawar);
  };
 
  const { t, changeLanguage } = useTranslation();

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Simulated authentication check (replace this with an actual API call)
  const checkAuth = () => {
    // Example: if a token exists in localStorage or cookies
    const token = localStorage.getItem('auth_token');
    if (token) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  return ( 
    <Navbar style={style}   onMenuOpenChange={setIsMenuOpen}>
   
 
      <div 
        className="menswear"
        style={{ display: menswear ? "block" : "none" }}
      >
        {/* <MegaMenu /> */}
      </div>
      <div
        className="womenSawar"
        style={{ display: womenSawar ? "block" : "none" }}
      >
        {/* <WomenSawar /> */}
      </div>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <h2
            style={{ fontSize: "30px" }}
            className="font-bold 
          "
          >
             {t('logo')} 
          </h2>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4 font-bold" justify="start">
        <NavbarItem>
          <div onClick={displayMenswear} color="foreground">
           
          {t('menswear')}
          </div>
        </NavbarItem>

        <NavbarItem>
          <div onClick={displayWomenSawar} color="foreground">
       
          {t('womenswear')}

          </div>
        </NavbarItem>

        <NavbarItem>
          <Link color="foreground" href="#">
        
          {t('Brands')}


          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className=" text-red-600" href="#">
           
          {t('Sale')}


          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <div className="flex space-x-4">
            <div
              className="displaySeach"
              style={{ display: searchBar ? "block" : "none" }}
            >
              {/* <Search /> */}
            </div>
            <div
              onClick={addSearchBar}
              style={{ width: "40px" }}
              className="text-lg"
            >
              <Image
                alt="alt"
                style={{ width: "40px" }}
                height={50}
                width={50}
                src="/srch.svg"
              />
            </div>
            <div className="text-lg">
              <Image
                alt="alt"
                style={{ width: "40px" }}
                height={50}
                width={50}
                src="/noti.svg"
              />
            </div>
            <div className="text-lg">
              <Image
                alt="alt"
                style={{ width: "40px" }}
                height={50}
                width={50}
                src="/bg.svg"
              />
            </div>
          </div>
        </NavbarItem>
        <NavbarItem>

        <button onClick={()=>{changeTheme(theme)}}>Change Theme</button>
          

          {/* <Button
            as={Link}
            className=" bg-white text-black rounded-full border"
            href="/auth/login"
            variant="flat"

            style={{ display : isAuthenticated ? "block" : "none" }}
          >
             login
          </Button>
          
          <Button
            as={Link}
            className=" bg-white text-black rounded-full border"
            href="/auth/signup"
            variant="flat"
          >
            {t('sign')}
          </Button>
          <Button
            as={Link}
            className=" bg-black text-white rounded-full"
            href="#"
            variant="flat"
          >
      
            {t('sell')}
          </Button>


          <Button
            as={Link}
            className=" bg-black text-white rounded-full"
            href="#"
            variant="flat"
          >
      
            logout
          </Button> */}





          
      {isAuthenticated ? (
          <>
            <Button
              as={Link}
              className="bg-black text-white rounded-full"
              href="/profile"
              variant="flat"
            >
              {t('Profile')}
            </Button>
            <Button
              as={Link}
              className="bg-black text-white rounded-full"
              href="/sell"
              variant="flat"
            >
              {t('sell')}
            </Button>
            <Button
              as={Link}
              className="bg-black text-white rounded-full"
              href="/logout"
              variant="flat"
            >
              {t('logout')}
            </Button>
          </>
        ) : (
          <>
            <Button
              as={Link}
              className="bg-white text-black rounded-full border"
              href="/auth/login"
              variant="flat"
            >
              {t('login')}
            </Button>
            <Button
              as={Link}
              className="bg-white text-black rounded-full border"
              href="/auth/signup"
              variant="flat"
            >
              {t('sign')}
            </Button>
          </>
        )}
        </NavbarItem>
       

      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
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


      <div className=" translateButton   ">
       <button  className=" text-center"  onClick={() => changeLanguage('en')}> 
        
     
        <p>English</p>
        
        </button>
        <button   onClick={() => changeLanguage('ar')}>
         
         <p>العربية</p>
        
        </button>
       </div>
    </Navbar>
  );
}
