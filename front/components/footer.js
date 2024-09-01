"use client";


import React from 'react'
import Image from 'next/image'
import appstore  from '../public/appstore.png'
import playstore from '../public/playstore.png'
import creadiCart from "../public/footer-img.png"
import ar from "../locales/ar.json"
import en from "../locales/en.json"
import { useRouter } from "next/router";

function Footer() {
 

    const router = useRouter();
    var { lang } = router.query; 
    
    const translations = {
      "en": en,
      "ar": ar,
  };
  
  
    const t = translations[lang];


    const isArabic = lang === 'ar';
    const directionStyle = isArabic ? { direction: 'rtl', textAlign: 'right' } : { direction: 'ltr' };
  return (
   <div style={directionStyle}>
            <div  style={{ width:"90%", margin:"auto", marginTop:"3rem" }} className='footer font-poppins  grid sm:grid-cols-2 md:grid-cols-4 pb-8'>
        
            <div className='infoContact text-black'>
                <h2>{t?.logo}</h2>
                <ul>
                    <li>{t?.footerAddress}</li>
                    <li>{t?.footerEmail}</li>
                    <li>{t?.footerNumber}</li>
                    <li>{t?.footerSubscribe}</li>
                    
                    <li style={{ fontWeight:"bolder" }}  className=' uppercase'>{t?.footerBySell}</li>
                    <div  className=' flex items-center mt-3 mb-3 '>
                        <Image alt='alt' height={30} width={100}  src={appstore} />
                        <Image alt='alt' height={30} className=' ms-5' width={100} src={playstore} />
                    </div>
                    <li style={{ fontWeight:"bolder" }} className='uppercase'>CONNECT WITH US</li>

                </ul>
            </div>

            <div className='itms font-poppins'>
                <h3 className='font-poppins'>{t?.footerCategory}</h3>
                <ul>
                    <li>{t?.footerCategoryWomen}</li>
                    <li>{t?.footerCategoryMen}</li>
                    <li>{t?.footerCategoryKids}</li>
                    <li>{t?.footerCategoryHome}</li>
                    <li>{t?.footerCategoryElectronics}</li>
                    <li>{t?.footerCategoryPets}</li>
                    <li>{t?.footerCategoryHandbags}</li>
                    <li>{t?.footerCategoryShoes}</li>
                    <li>{t?.logfooterCategoryJewelryo}</li>
                    <li>{t?.footerCategoryMakeup}</li>
                    <li>{t?.footerCategoryDresses}</li>
                </ul>
            </div>
            <div className='itms'>
                <h3>{t?.brand}</h3>
                <ul>
                    <li>{t?.brandNike}</li>
                    <li>{t?.brandMichael}</li>
                    <li>{t?.brandLouis}</li>
                    <li>{t?.brandlululemon} </li>
                    <li>{t?.brandPINK} </li>
                    <li>{t?.brandCoach}  </li>
                    <li>{t?.brandChanel}</li>
                    <li>{t?.brandSee}</li>
                    
                </ul>

            </div>
            <div className='itms'>
                <h3>{t?.shop}</h3>
                <ul>
                    <li>{t?.shopAbout}</li>
                    <li>{t?.shopCommunity}</li>
                    <li>{t?.shopBlog} </li>
                    <li>{t?.shopFAQs} </li>
                    <li>{t?.shopLive}</li>
                    <li>{t?.shopSell} </li>
                    <li>{t?.shopHow}</li>
                    <li>{t?.shopGift}</li>
                    <li>{t?.shopCareers} </li>
                    <li>{t?.shopPress}</li>
                    <li>{t?.shopAccessibility}</li>
                </ul>

            </div>
        </div>

        <hr style={{ width:"100%" }}></hr>
        <div style={{ width:"90%", margin:"auto" }}  className='btmFooter sm:text-center md:flex items-center justify-between pt-5 pb-5'>
            <div className='sm:text-center copy'>© 2024 KIFT, Inc. PrivacyTerms </div>
            <Image  alt='alt' height={100} width={150} className='sm:text-center master' src={creadiCart} />
        </div>
   </div>
  )
}

export default Footer