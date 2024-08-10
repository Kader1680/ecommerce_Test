"use client";
import React from 'react'

import { Html, Head, Main, NextScript } from "next/document";
 

export default function Document() {
  return (
    <Html >
      <Head>
      <link
          href="https://example.com/path-to-at-pinko-font.css"
          rel="stylesheet"
        />
      </Head>
     
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
