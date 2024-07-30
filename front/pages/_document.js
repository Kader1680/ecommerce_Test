"use client";
import { Html, Head, Main, NextScript } from "next/document";
import MyNavbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <MyNavbar />
        <Main />
        <NextScript />
        <Footer />
      </body>
    </Html>
  );
}
