"use client";
import { NextUIProvider } from '@nextui-org/react';
import '../styles/globals.css';
import React, { useContext } from 'react'
import Layout from '../components/layout';

import { isRtl } from '../utils/directions';

import { Poppins } from 'next/font/google';
import { useEffect } from 'react';
import i18n from '../i18n';
import { TranslationProvider } from '../context/TranslationContext';
import { useRouter } from 'next/router';
 
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // You can include other weights as needed
  style: ['normal', 'italic'], // Include styles if needed
});

 

 
function MyApp({ Component, pageProps }) {

  useEffect(() => {
    
    i18n.init();
  }, []);
 

  return (
    <TranslationProvider >
    <NextUIProvider > 

          
          <Layout>
          <div  className={poppins.className}>
          
                <Component {...pageProps} />

          </div>
          </Layout>
      </NextUIProvider>
    </TranslationProvider>
     
   
  );
}

export default MyApp;




