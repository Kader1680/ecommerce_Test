 

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from "next/image" 

 
import { useTranslation } from '../context/TranslationContext';

const ImageSlider = () => {

  const { t } = useTranslation();
   

 
  


  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="relative gap-3" style={{ margin:"auto", width:"100%" }} >
      <Slider {...settings}>
       
        <div className="font-bold rounded-full">
        
          <Image width={28} height={28} style={{ width:"5rem" }} className="rounded-full" src="/cat (1).png" alt="Skirts" />
          <p className="mt-2">{t("Sweaters")}</p>
        </div>
        <div className="font-bold"  >
          <Image width={28} height={28} style={{ width:"5rem" }}  className="rounded-full"  src="/cat (2).png" alt="Pants" />
          <p className="mt-2">{t("Sweaters")}</p>
        </div>
        <div  className="font-bold" >
          <Image width={28} height={28} style={{ width:"5rem" }}  className="rounded-full" src="/cat (3).png" alt="Sportswear" />
          <p className=" mt-2">{t("Skirts")}</p>
        </div>
        <div  className="font-bold" >
          <Image width={28} height={28} style={{ width:"5rem" }}  className="rounded-full" src="/cat (4).png" alt="Tuxedo" />
          <p className="mt-2"> {t("Dresses")}</p>
        </div>

        <div className="font-bold"  >
          <Image width={28} height={28} style={{ width:"5rem" }}  className="rounded-full" src="/cat (7).png" alt="Tuxedo" />
          <p className="mt-2"> {t("Shoes")}</p>
        </div>


        <div  className="font-bold"  >
          <Image width={28} height={28} style={{ width:"5rem" }}  className="rounded-full" src="/cat (8).png" alt="Tuxedo" />
          <p className="mt-2">{t("Handbags")}</p>
        </div>


        <div  className="font-bold" >
          <Image width={28} height={28} style={{ width:"5rem" }}  className="rounded-full" src="/cat (9).png" alt="Tuxedo" />
          <p className=" mt-2">{t("Sweaters")}</p>
        </div>


        <div  className="font-bold" >
          <Image width={28} height={28} style={{ width:"5rem" }}  className="rounded-full"   src="/cat (10).png" alt="Tuxedo"  />
          <p className=" mt-2">{t("Handbags")}</p>
        </div>

        <div  className="font-bold" >
          <Image width={28} height={28} style={{ width:"5rem" }}  className="rounded-full" src="/cat (11).png" alt="Tuxedo"    />
          <p className="mt-2">{t("Handbags")}</p>
        </div>

      </Slider>
    </div>
  );
};

const SampleNextArrow = (props) => {
  const {  onClick } = props;
  return (
   <div style={{ border:"1px solid black", top:"-60px", right:"-15px" }}  onClick={onClick} className=" w-fit rounded-full p-3 absolute z-40">
      <Image width={20} height={20} src="/right-arrow.png"  alt="alt" />
   </div>
  );
};

const SamplePrevArrow = (props) => {
  const {  onClick } = props;
  return (
   <div style={{ border:"1px solid black", top:"-60px", right:"45px"  }}  onClick={onClick} className=" w-fit rounded-full p-3 absolute z-40">
      <Image width={20} height={20} src="/left-arrow.png" alt="alt" />
   </div>
  );
};

export default ImageSlider;
