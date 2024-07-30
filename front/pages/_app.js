"use client";
import { NextUIProvider } from '@nextui-org/react';
import '@/styles/globals.css';
import {Image} from "@nextui-org/image"; 

function MyApp({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}

export default MyApp;





