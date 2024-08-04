"use client";
import { NextUIProvider } from '@nextui-org/react';
import '../styles/globals.css';
 

function MyApp({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <div >
      <Component {...pageProps} />
      </div>
    </NextUIProvider>
  );
}

export default MyApp;





