// "use client"
// import { useState, useEffect } from "react"

// import image1 from "../public/cat (1).png"
// import image2 from "../public/cat (2).png"
// import image3 from "../public/cat (3).png"
// import image4 from "../public/cat (4).png"
// import image5 from "../public/cat (11).png"
// import image7 from "../public/cat (7).png"
// import image8 from "../public/cat (8).png"
// import image9 from "../public/cat (9).png"
// import image10 from "../public/cat (10).png"


import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from "next/image" 
const ImageSlider = () => {
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
          <p className="mt-2">Skirts</p>
        </div>
        <div className="font-bold"  >
          <Image width={28} height={28} style={{ width:"5rem" }}  className="rounded-full"  src="/cat (2).png" alt="Pants" />
          <p className="mt-2">Pants</p>
        </div>
        <div  className="font-bold" >
          <Image width={28} height={28} style={{ width:"5rem" }}  className="rounded-full" src="/cat (3).png" alt="Sportswear" />
          <p className=" mt-2">Sportswear</p>
        </div>
        <div  className="font-bold" >
          <Image width={28} height={28} style={{ width:"5rem" }}  className="rounded-full" src="/cat (4).png" alt="Tuxedo" />
          <p className="mt-2"> Tuxedo</p>
        </div>

        <div className="font-bold"  >
          <Image width={28} height={28} style={{ width:"5rem" }}  className="rounded-full" src="/cat (7).png" alt="Tuxedo" />
          <p className="mt-2"> Tuxedo</p>
        </div>


        <div  className="font-bold"  >
          <Image width={28} height={28} style={{ width:"5rem" }}  className="rounded-full" src="/cat (8).png" alt="Tuxedo" />
          <p className="mt-2">Tuxedo</p>
        </div>


        <div  className="font-bold" >
          <Image width={28} height={28} style={{ width:"5rem" }}  className="rounded-full" src="/cat (9).png" alt="Tuxedo" />
          <p className=" mt-2">Tuxedo</p>
        </div>


        <div  className="font-bold" >
          <Image width={28} height={28} style={{ width:"5rem" }}  className="rounded-full"   src="/cat (10).png" alt="Tuxedo"  />
          <p className=" mt-2">Tuxedo</p>
        </div>

        <div  className="font-bold" >
          <Image width={28} height={28} style={{ width:"5rem" }}  className="rounded-full" src="/cat (11).png" alt="Tuxedo"    />
          <p className="mt-2">Tuxedo</p>
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
