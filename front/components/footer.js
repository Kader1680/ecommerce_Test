"use client";
import { useIntl } from "react-intl";


import React from 'react'
import Image from 'next/image'
import appstore  from '../public/appstore.png'
import playstore from '../public/playstore.png'
import creadiCart from "../public/footer-img.png"
function Footer() {
//   const intl = useIntl();

  return (
   <div>
            {/* <div  style={{ width:"90%", margin:"auto", marginTop:"3rem" }} className='footer font-poppins  grid sm:grid-cols-2 md:grid-cols-4 pb-8'>
        
            <div className='infoContact text-black'>
                <h2>KIFT</h2>
                <ul>
                    <li>{intl.formatMessage({ id: "footer.intro.address" })}</li>
                    <li>{intl.formatMessage({ id: "footer.intro.email" })}</li>
                    <li>{intl.formatMessage({ id: "footer.intro.number" })}</li>
                    <li>{intl.formatMessage({ id: "footer.intro.subscribe" })}</li>
                    
                    <li style={{ fontWeight:"bolder" }}  className=' uppercase'>{intl.formatMessage({ id: "footer.intro.bySell" })}</li>
                    <div  className=' flex items-center mt-3 mb-3 '>
                        <Image alt='alt' height={30} width={100}  src={appstore} />
                        <Image alt='alt' height={30} className=' ms-5' width={100} src={playstore} />
                    </div>
                    <li style={{ fontWeight:"bolder" }} className='uppercase'>CONNECT WITH US</li>

                </ul>
            </div>
            <div className='itms font-poppins'>
                <h3 className='font-poppins'>{intl.formatMessage({ id: "footer.category" })}</h3>
                <ul>
                    <li>{intl.formatMessage({ id: "footer.category.Women" })}</li>
                    <li>{intl.formatMessage({ id: "footer.category.Men" })}</li>
                    <li>{intl.formatMessage({ id: "footer.category.Kids" })}</li>
                    <li>{intl.formatMessage({ id: "footer.category.Home" })}</li>
                    <li>{intl.formatMessage({ id: "footer.category.Electronics" })} </li>
                    <li>{intl.formatMessage({ id: "footer.category.Pets" })}</li>
                    <li>{intl.formatMessage({ id: "footer.category.Handbags" })}</li>
                    <li>{intl.formatMessage({ id: "footer.category.Shoes" })}</li>
                    <li>{intl.formatMessage({ id: "footer.category.Jewelry" })}</li>
                    <li>{intl.formatMessage({ id: "footer.category.Makeup" })}</li>
                    <li>{intl.formatMessage({ id: "footer.category.Dresses" })}</li>
                </ul>
            </div>
            <div className='itms'>
                <h3>{intl.formatMessage({ id: "brand" })}</h3>
                <ul>
                    <li>{intl.formatMessage({ id: "brand.Nike" })}  </li>
                    <li>{intl.formatMessage({ id: "brand.Michael" })}  </li>
                    <li>{intl.formatMessage({ id: "brand.Louis" })} </li>
                    <li>{intl.formatMessage({ id: "brand.lululemon" })} </li>
                    <li>{intl.formatMessage({ id: "brand.PINK" })}  </li>
                    <li>{intl.formatMessage({ id: "brand.Coach" })}  </li>
                    <li>{intl.formatMessage({ id: "brand.Chanel" })} </li>
                    <li>{intl.formatMessage({ id: "brand.See" })}</li>
                    
                </ul>

            </div>
            <div className='itms'>
                <h3>{intl.formatMessage({ id: "shop" })}</h3>
                <ul>
                    <li>{intl.formatMessage({ id: "shop.About" })}</li>
                    <li>{intl.formatMessage({ id: "shop.Community" })}</li>
                    <li>{intl.formatMessage({ id: "shop.Blog" })} </li>
                    <li>{intl.formatMessage({ id: "shop.FAQs" })} </li>
                    <li>{intl.formatMessage({ id: "shop.Live" })} </li>
                    <li>{intl.formatMessage({ id: "shop.Sell" })} </li>
                    <li>{intl.formatMessage({ id: "shop.How" })} </li>
                    <li>{intl.formatMessage({ id: "shop.Gift" })} </li>
                    <li>{intl.formatMessage({ id: "shop.Careers" })} </li>
                    <li>{intl.formatMessage({ id: "shop.Press" })} </li>
                    <li>{intl.formatMessage({ id: "shop.Accessibility" })}</li>
                </ul>

            </div>
        </div>

        <hr style={{ width:"100%" }}></hr>
        <div style={{ width:"90%", margin:"auto" }}  className='btmFooter sm:text-center md:flex items-center justify-between pt-5 pb-5'>
            <div className='sm:text-center copy'>© 2024 KIFT, Inc. PrivacyTerms </div>
            <Image  alt='alt' height={100} width={150} className='sm:text-center master' src={creadiCart} />
        </div> */}
   </div>
  )
}

export default Footer