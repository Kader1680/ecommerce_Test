import React from 'react'
 
import { useTranslation } from "../context/TranslationContext";
import { Image } from '@nextui-org/react';

function UserProfil({mobileProps}) {
   const { t } = useTranslation();

  return (
    <div  className=" md:flex  ">
        <div style={{  display:mobileProps  }} className="img sm:mr-auto  md:flex items-center   ">
          <Image style={{ width:"10rem" }} width={120} height={110} alt="alt" src="/Ellipse 1178.png" />

          <div className="name items-center ms-3   " >
          <div  className=" flex items-center ">
            <h3 className=" myfont">{t("profileUser")}</h3>
            <Image     width={30} height={30} alt="alt" src="/Frame.png" />
          </div>
          <div  style={{  display:mobileProps, textAlign:"center" }} className=" flex items-center">
            <Image

            className=' mr-auto text-center'
            style={{ width:"12rem" }} 
              alt="alt"
              width={100}
              height={28}
              src="/Frame 1000005481.png"
            />
            <p className=" ms-2" style={{ fontSize: "15px" }}>
              (137) {t("reviewWord")}
            </p>
          </div>
        </div>   
        
        
        
        </div>

             
      </div>
  )
}

export default UserProfil