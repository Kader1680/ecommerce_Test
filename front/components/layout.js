// components/Layout.js
import App from './navbar';
import Footer from './footer';
import { useRouter } from 'next/router';
import { isRtl } from '../utils/directions';


import {useTranslation} from "../context/TranslationContext"
import { useState } from 'react';

const Layout = ({ children }) => {
 
  const localLang = useTranslation().locale
 
  console.log(localLang)  

  let newDir = "";
  if (localLang === "en") {
    newDir = "ltr"
  }else{
    newDir = "rtl"
  }

 

  return (
    
    <div style={{ direction: newDir  }} >
      <App />
      <main>{children}</main>
      <Footer />
    </div>
    
  );
};

export default Layout;
