/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  i18n: {
    localeDetection: false, //  
    locales: ["en", "ar"],  //  
    defaultLocale: "en"     //  
  }
};

export default nextConfig;
