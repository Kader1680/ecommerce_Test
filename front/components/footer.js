import React from 'react'
import Image from 'next/image'
import appstore  from '../public/appstore.png'
import playstore from '../public/playstore.png'
import creadiCart from "../public/footer-img.png"
function Footer() {
  return (
   <div>
            <div style={{ width:"90%", margin:"auto", marginTop:"3rem" }} className='footer  grid sm:grid-cols-2 md:grid-cols-4 pb-8'>
        
            <div className='infoContact text-black'>
                <h2>KIFT</h2>
                <ul>
                    <li>Address 451 Wall Street, UK, London</li>
                    <li>Email example@info.com</li>
                    <li>Call (064) 332-1233</li>
                    <li>Subscribe To Our Newsletter</li>
                    
                    <li style={{ fontWeight:"bolder" }}  className=' uppercase'>BUY AND SELL ON APP</li>
                    <div  className=' flex items-center mt-3 mb-3 '>
                        <Image alt='alt' height={30} width={100}  src={appstore} />
                        <Image alt='alt' height={30} className=' ms-5' width={100} src={playstore} />
                    </div>
                    <li style={{ fontWeight:"bolder" }} className='uppercase'>CONNECT WITH US</li>

                </ul>
            </div>
            <div className='itms'>
                <h3>SHOP CATEGORIES</h3>
                <ul>
                    <li>Women </li>
                    <li>Men </li>
                    <li>Kids</li>
                    <li>Home</li>
                    <li>Electronics </li>
                    <li>Pets </li>
                    <li>Handbags </li>
                    <li>Shoes </li>
                    <li>Jewelry & Accessories </li>
                    <li>Makeup </li>
                    <li>Dresses</li>
                </ul>
            </div>
            <div className='itms'>
                <h3>POPULAR BRANDS</h3>
                <ul>
                    <li>Nike  </li>
                    <li>Michael Kors  </li>
                    <li>Louis Vuitton </li>
                    <li>lululemon athletica </li>
                    <li>PINK Victoria &lsquo; s Secret  </li>
                    <li>Coach  </li>
                    <li>Chanel </li>
                    <li>See All Brands » </li>
                    
                </ul>

            </div>
            <div className='itms'>
                <h3>SHOP CATEGORIES</h3>
                <ul>
                    <li>About   </li>
                    <li>Our Community   </li>
                    <li>Blog </li>
                    <li>FAQs </li>
                    <li>Live Shopping </li>
                    <li>Sell on KIFT </li>
                    <li>How it works </li>
                    <li>Gift Cards </li>
                    <li>Careers </li>
                    <li>Press </li>
                    <li>Accessibility</li>
                </ul>

            </div>
        </div>

        <hr style={{ width:"100%" }}></hr>
        <div style={{ width:"90%", margin:"auto" }}  className='btmFooter sm:text-center md:flex items-center justify-between pt-5 mb-5'>
            <div className='sm:text-center'>© 2024 KIFT, Inc. PrivacyTerms </div>
            <Image  alt='alt' height={100} width={150} className='sm:text-center master' src={creadiCart} />
        </div>
   </div>
  )
}

export default Footer