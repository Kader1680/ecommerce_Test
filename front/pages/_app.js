"use client";
import { NextUIProvider } from '@nextui-org/react';
import '../styles/globals.css';
import React, { createContext, useContext } from 'react'
import Layout from '../components/layout';



import { Poppins } from 'next/font/google';
import { useEffect } from 'react';
import i18n from '../i18n';
import { TranslationProvider } from '../context/TranslationContext';
import ThemeContext  from '../context/ThemeContext';
 
 
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], 
  style: ['normal', 'italic'], 
});


function MyApp({ Component, pageProps }) {

  useEffect(() => {
    
    i18n.init();
  }, []);
 
 

  return (


    <ThemeContext>
    <TranslationProvider>
          <NextUIProvider> 
                <Layout>
                  <div   className={poppins.className}>
                        <Component {...pageProps} />
                  </div>
                </Layout>
          </NextUIProvider>
      </TranslationProvider>
    </ThemeContext> 
  
  
  );
}

export default MyApp;




