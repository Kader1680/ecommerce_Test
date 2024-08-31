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



import { useRouter } from 'next/router'
import { IntlProvider } from 'react-intl'
import en from '../locales/ar.json'
import ar from '../locales/en.json';
 
const messages = {
  ar: ar,
  en: en,
}

 
function getDirection() {
  return "Itr";
}

function MyApp({ Component, pageProps }) {
const {locale} = useRouter();

  return (
    <IntlProvider locale={locale}  messages={messages [locale]}>
      <NextUIProvider> 
          <Layout>
          <div className={poppins.className}>
                <Component {...pageProps} dir={getDirection(locale)} />

          </div>
          </Layout>
      </NextUIProvider>
    </IntlProvider>
   
  );
}

export default MyApp;





