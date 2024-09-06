import React, { useState } from 'react'
import {Breadcrumbs, BreadcrumbItem, Button, Link, Input} from "@nextui-org/react";
import GetApp from '../components/getApp';
import Image from 'next/image';
import UserProfil from '../components/userProfil';

import { useTranslation } from "../context/TranslationContext";

function Review() {
  const { t } = useTranslation();

   
  const reviewsClients =  t("reviewsClients");
  console.log(reviewsClients.map(el => el.users))
  return (
    <div style={{ width:"90%", margin:"auto" }}> 
        <Breadcrumbs>
            <BreadcrumbItem>Home</BreadcrumbItem>
            <BreadcrumbItem>Leslie Alexander</BreadcrumbItem>
            <BreadcrumbItem className=' font-bold' >Reviews</BreadcrumbItem> 
        </Breadcrumbs>
 
        <UserProfil />
        
        <h3 className='myfont mt-4 mb-4 font-bold'> 
        {t('compliment')}
       
        </h3>

        <div  className=' reviews mb-4'>
            <div className=' md:flex items-center justify-start gap-2'>
                <div className='  rounded-md font-bold text-center p-2' style={{ width: "fils-content", backgroundColor:"#e5e5e5" }}>
                    7
                    <p style={{ fontSize:"16px" }} className=' font-normal'>{t('QuickShipper ')}</p>
                </div>
                <div className='rounded-md font-bold text-center p-2' style={{ width:"fils-content", backgroundColor:"#e5e5e5" }}>
                    8
                    <p style={{ fontSize:"16px" }}  className=' font-normal'>{t('GreatPackaging')}</p>
                </div>
                <div className='rounded-md font-bold text-center p-2' style={{ width:"fils-content", backgroundColor:"#e5e5e5" }}>
                    12
                    <p style={{ fontSize:"16px" }}  className='  font-normal'>{t('ItemDescription')}</p>
                </div>
                <div className= 'rounded-md font-bold text-center p-2' style={{ width:"fils-content", backgroundColor:"#e5e5e5" }}>
                    3
                    <p style={{ fontSize:"16px" }}  className=' font-normal'>{t('Friendly')}</p>
                </div>
                <div className='rounded-md font-bold text-center p-2' style={{ width:"fils-content", backgroundColor:"#e5e5e5" }}>
                    9
                    <p style={{ fontSize:"16px" }}  className=' font-normal'>{t('Communication')}</p>
                </div>
            </div> 
            <div className=" md:flex mt-3 mb-3 gap-2 ">
                <Button  as={Link} className=' bg-black text-white rounded-full' href="#" variant="flat">
                {t('sold')} (103) 
                    </Button>
                <Button as={Link} className=' bg-white text-black rounded-full border' href="#" variant="flat">
                {t('Purchased')} (34)
                    </Button>
                    
                <Button as={Link} className=' float-right  bg-white text-black rounded-full border' href="#" variant="flat">
                Most recent
                </Button>
            </div>
            <div>
            {
                reviewsClients.map(review => (

                    <div key={review.users} className=' mb-4 md:flex items-center justify-start gap-3'>
                    <Image alt='alt' className='reviewImg' width={200} height={20} src={review.pics} />
                    <div className=' flex align-center gap-2'>
                 
                        <Image alt='alt' className='reviewUser' width={80} height={80} src='/Ellipse 1178.png' />
                        <div >
                            <h3 className=' font-bold'>{review.name}</h3>
                            <p style={{ fontSize:"14px" }}>{review.users}</p>
                            <div>
                                <p>{review.contentReview}</p>
                                <p>{review.time}</p>
                            </div>
                        </div>

                    </div>
                    <Image alt='alt' width={100} height={100} className='stars' src={review.feedback} />
                </div>

                ))
            }
                

 
            </div>

            
        </div>
    
        <GetApp />
    </div>
  )
}

export default Review