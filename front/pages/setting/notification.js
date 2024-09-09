import React from 'react'
import {Switch}  from "@nextui-org/react";
import { useTranslation } from "../../context/TranslationContext";

function Notification() {
  const { t } = useTranslation();

  return (
    <div className=' p-6'>
          <h3 className='myfont font-bold'>{t("notifications")}</h3>
          <div className=' flex items-center justify-between mt-4 mb-4'>
              <h5 className=' font-bold'>{t("showCity")}</h5>
              <Switch  color="dark" defaultSelected aria-label="Automatic updates"/>
    
          </div>

        <hr className='w-full  mt-7 mb-7'></hr>
        <h6 className='myfont font-bold'>{t("Profildetails")}</h6>
        <div className=' mt-3 flex items-center justify-between'>
            <div>
              <h5 className=' font-bold'>{t("GoogleAuth")}</h5>
            </div>
            <div className=' flex items-center justify-between'>
               
            <Switch  color="dark" defaultSelected aria-label="Automatic updates"/>

            </div>
        </div>

        <hr className='w-full  mt-7 mb-7'></hr>
        <h4 className=' text-gray-400'>{t("News")}</h4>
        <h6 className='myfont font-bold '>{t("KIFT")}</h6>
        <div className=' mt-3 flex items-center justify-between'>
            <div>
              <h5 className='text-gray-400'>{t("notInfo")}</h5>
            </div>
            <div className=' flex items-center justify-between'>
               
            <Switch  color="dark" defaultSelected aria-label="Automatic updates"/>

            </div>
        </div>

        <h6 className='myfont font-bold'>{t("marketing")}</h6>
        <div className=' mt-3 flex items-center justify-between'>
            <div>
              <h5 className='text-gray-400'>{t("recommendations")}</h5>
            </div>
            <div className=' flex items-center justify-between'>
               
            <Switch  color="dark" defaultSelected aria-label="Automatic updates"/>

            </div>
        </div>

        <hr className='w-full  mt-7 mb-7'></hr>
        <h5 className='text-gray-400'>{t("priority")}</h5>

        <div className=' flex items-center justify-between mt-4 mb-4'>
            <h3 className='myfont font-bold'>{t("newMess")}</h3>  
            <Switch  color="dark" defaultSelected aria-label="Automatic updates"/> 
        </div>

        <div className=' flex items-center justify-between mt-4 mb-4'>
            <h3 className='myfont font-bold'>{t("newFeed")}</h3>  
            <Switch  color="dark" defaultSelected aria-label="Automatic updates"/> 
        </div>
        <div className=' flex items-center justify-between mt-4 mb-4'>
            <h3 className='myfont font-bold'>{t("Discounted")}</h3>  
            <Switch  color="dark" defaultSelected aria-label="Automatic updates"/> 
        </div>
        <hr className='w-full  mt-7 mb-7'></hr>
        <h5 className='text-gray-400'>{t("Other")}</h5>
        <div className=' flex items-center justify-between mt-4 mb-4'>
            <h3 className='myfont font-bold'>{t("Favorited")}</h3>  
            <Switch  color="dark" defaultSelected aria-label="Automatic updates"/> 
        </div>

        <div className=' flex items-center justify-between mt-4 mb-4'>
            <h3 className='myfont font-bold'>{t("newFollow")}</h3>  
            <Switch  color="dark" defaultSelected aria-label="Automatic updates"/> 
        </div>

        <div className=' flex items-center justify-between mt-4 mb-4'>
            <h3 className='myfont font-bold'>{t("newItem")}</h3>  
            <Switch  color="dark" defaultSelected aria-label="Automatic updates"/> 
        </div>
    </div>
  )
}

export default Notification