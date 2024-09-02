"use client";
import { NextUIProvider } from '@nextui-org/react';
import '../styles/globals.css';
import React from 'react'
import Layout from '../components/layout';


import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // You can include other weights as needed
  style: ['normal', 'italic'], // Include styles if needed
});

 
 
function MyApp({ Component, pageProps }) {
 

  return (
      <NextUIProvider> 
          <Layout>
          <div className={poppins.className}>
          
                <Component {...pageProps} />

          </div>
          </Layout>
      </NextUIProvider>
   
  );
}

export default MyApp;




