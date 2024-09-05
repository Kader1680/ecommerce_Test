import React, { useState } from "react";

import { useTranslation } from '../context/TranslationContext';

// import { FormattedMessage, useIntl } from "react-intl";
import Image from "next/image";
import { Button, Link } from "@nextui-org/react";
import GetApp from "../components/getApp";
import Products from "../components/products";
import white from "../public/white.png";
import sll from "../public/sll.png";
import picwomen from "../public/picwomen.png";

import ans from "../public/ans.png";
import maj from "../public/maj.png";
import coste from "../public/coste.png";
import bl from "../public/bl.png";
import rebok from "../public/rebok.png";
import kb from "../public/kb.png";
import nike from "../public/nike.png";

import g1 from "../public/g1.png";
import g2 from "../public/g2.png";
import g3 from "../public/g3.png";
import g4 from "../public/g4.png";
 
function Index() {
    const { t, changeLanguage } = useTranslation();
    
  return (
    <div  >
     
 <div
    
    className="homePub font-poppins "
    style={{ width: "90%", margin: "auto" }}
  >
    <div className="Selling md:flex md:items-center md:justify-between container">
      <div className=" ">
        <div className="intro">
        {/* <p className=" text-red-700"> {t?.list.map(e => (
          <p> {e.name} </p>
        ))}</p> */}

     
          <h3 className="font-poppins">
          
            {t('title')}
          </h3>
          <p>
          {t('description')}
          
          </p>
        </div>
        <div style={{ position: "relative" }} className="field2">


          <Image
            alt="alt"
            style={{
              position: "absolute",
              top: "0px",
              right: "2%",
              zIndex: "2",
            }}
            className="direction women"
            src={white}
            width={71}
            height={70}
          />

          <Image
            alt="alt"
            className="direction"
            src={sll}
            width={648}
            height={258}
          />
        </div>
      </div>

      <div className="field2 relative">
        <Image
          alt="alt"
          style={{
            position: "absolute",
            top: "3%",
            right: "4%",
            zIndex: "2",
          }}
          className="direction"
          src={white}
          width={71}
          height={70}
        />
        <Image
          alt="alt"
          className="women"
          src={picwomen}
          width={663}
          height={757}
        />
      </div>
    </div>

    <div className="Brands mb-4 ">
       
      <h3 className=" sm:text-center md:text-start">
      {t('market')}
     
      </h3>
      <div className="md:flex md:items-cente md:justify-between markes sm:grid sm:grid-cols-2">
        <Image width={100} height={100} alt="alt" src={ans} />
        <Image width={100} height={100} alt="alt" src={maj} />
        <Image width={100} height={100} alt="alt" src={coste} />
        <Image width={100} height={100} alt="alt" src={bl} />
        <Image width={100} height={100} alt="alt" src={rebok} />
        <Image width={100} height={100} alt="alt" src={kb} />
        <Image width={100} height={100} alt="alt" src={nike} />
      </div>
    </div>

    <div className="clothes   mt-9 md:gap-3     ">
      <div className=" grid md:grid-cols-2 gap-2">
        <Image
          style={{ width: "100%" }}
          width={100}
          height={100}
          alt="alt"
          className=" sm:mt-3"
          src={g1}
        />
        <Image
          style={{ width: "100%" }}
          width={100}
          height={100}
          alt="alt"
          className=" sm:mt-3"
          src={g2}
        />
      </div>
      <div className=" md:flex justify-between imgBtom">
        <Image
          width={100}
          height={100}
          alt="alt"
          className=" sm:mt-3"
          src={g3}
        />
        <Image
          width={100}
          height={100}
          alt="alt"
          className=" sm:mt-3"
          src={g4}
        />
      </div>
    </div>

    <div className="filter Brands : md:flex md:items-center  md:justify-between">
      <h3 className="font-poppins">
    
      {t('popular')}
      </h3>
      <div className="filterBar ">
        <Button
          as={Link}
          className=" me-1 bg-black text-white rounded-full"
          href="#"
          variant="flat"
        >
        {t('Popularfilterall')}
         
        </Button>

        <Button
          as={Link}
          className=" me-1  text-black bg-white rounded-full"
          href="#"
          variant="flat"
        >
         {t('PopularfilterChiffon')}
           (21)
        </Button>
        <Button
          as={Link}
          className=" me-1 text-black bg-white rounded-full"
          href="#"
          variant="flat"
        >
        {t('PopularfilterCasual')}
          (21)
        </Button>
        <Button
          as={Link}
          className=" me-1 text-black bg-white rounded-full"
          href="#"
          variant="flat"
        >

{t('PopularfilterBlazer')}
          (21)
        </Button>
        <Button
          as={Link}
          className=" me-1 text-black bg-white rounded-full"
          href="#"
          variant="flat"
        >
{t('PopularfilterView')}

          
        </Button>
      </div>
    </div>

      <Products />

      <GetApp />  
  </div>
    </div>
   
  );
}

export default Index;

