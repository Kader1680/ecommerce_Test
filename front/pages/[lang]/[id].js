import { Button, Link } from "@nextui-org/react";
import React, { useState } from "react";
import { User } from "@nextui-org/user";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import Products from "../../components/products";
import GetApp from "../../components/getApp";
import Image from "next/image";
import Comments from "../../components/comments";
import { useRouter } from "next/router";
import ar from "../../locales/ar.json";
import en from "../../locales/en.json";
import SellerProduct from "../../components/sellerProduct";
function Id() {
  const images = ["/singleProduct.png", "/slide2.png", "/slide.png"];
  const [imageProductId, setimageProductId] = useState(images[0]);

  const changeImage1 = () => {
    setimageProductId(images[1]);
  };
  const changeImage2 = () => {
    setimageProductId(images[2]);
  };
  const changeImage3 = () => {
    setimageProductId(images[0]);
  };

  const router = useRouter();
  const { lang } = router.query || "en"; // default to 'en' if lang is undefined

  const translations = {
    en: en,
    ar: ar,
  };

  // Safely access the list of products
  const content = translations[lang];
  console.log(content?.logo)
  const t = translations[lang]?.list || []; // Default to an empty array if not defined

  const isArabic = lang === "ar";
  const directionStyle = isArabic
    ? { direction: "rtl", textAlign: "right" }
    : { direction: "ltr" };

  const { id } = router.query;
  const idProduct = parseInt(id) || "en";
  const productId = t.filter((el) => el.id == parseInt(idProduct));
  const reviewWord = translations[lang]?.reviewWord;


  return (
    <div style={{ width: "90%", margin: "auto" }}>
      <div
        style={directionStyle}
        className="singleProduct grid md:grid-cols-10  "
      >
        <div className=" md:col-span-7 sm:col-span-10 ">
          <div className="relative">
            <Image
              className="productImage relative"
              alt="alt"
              style={{ borderRadius: "30px" }}
              width={759}
              height={674}
              src={imageProductId}
            />
          </div>
          <div className=" absolute   flex items-center gap-3">
            <Image
              onClick={changeImage2}
              className="productImage"
              alt="alt"
              style={{ borderRadius: "10px", width: "2rem" }}
              width={30}
              height={30}
              src="/slide 3.png"
            />
            <Image
              onClick={changeImage3}
              className="productImage"
              alt="alt"
              style={{ borderRadius: "10px", width: "2rem" }}
              width={30}
              height={30}
              src="/slide1.png"
            />
            <Image
              onClick={changeImage1}
              className="productImage"
              alt="alt"
              style={{ borderRadius: "10px", width: "2rem" }}
              width={30}
              height={30}
              src="/slide2.png"
            />
          </div>
          <Comments />
        </div>

        {productId.map((el) => (
          <div key={el.name} className="description md:col-span-3 sm:col-span-10">
            <div className="flex items-center">
              <p
                className=" text-white p-1 rounded-md text-xs"
                style={{ backgroundColor: "#5e5cc6" }}
              >
                
                {el.discont}
              </p>
              <p className=" text-gray-400 text-xs ms-3"> {el.update} </p>
            </div>

            <h2 className=" mt-2 mb-2">{el.name}</h2>
            <div className=" flex items-center">
              <Image
                alt="alt"
                width={80.5}
                height={14}
                src="/Img - Rated 4.00 out of 5.png"
              />
              <p className=" ms-4" style={{ fontSize: "14px" }}>
                {el.review} <span>{reviewWord}</span> 
              </p>
            </div>
            <p>Price</p>
            <div className=" mb-5 flex items-center">
              <h3 className=" font-bold" style={{ fontSize: "24px" }}>
                {el.newPrice} {content.dollars}
              </h3>
              <p className="  line-through ms-2 text-gray-500">
                {el.oldPrice} {content.dollars}
              </p>
            </div>
            <h4 className=" font-bold">Details</h4>
            <div className=" grid grid-cols-5">
              <div className=" col-span-2">
                <ul>
                  <li> {content.satuts}</li>
                  <li> {content.model}</li>
                  <li> {content.branding}</li>
                  <li> {content.category}</li>

                  <li> {content.color}</li>
                  <li> {content.posted}</li>
                </ul>
              </div>
              <div className="col-span-3 font-bold">
                <ul>
                  <li>{el.condition}</li>
                  <li>{el.model}</li>
                  <li>{el.brand}</li>
                  <li>{el.category}</li>
                  <li>{el.color}</li>
                  <li>{el.posted}</li>
                </ul>
              </div>
            </div>

            <div className="adding mt-8 grid ">
              <Button
                as={Link}
                className="font-bold  bg-black text-white rounded-full"
                href="#"
                variant="flat"
              >
                {el.color}
              </Button>
              <div className=" grid grid-cols-2 mt-2 gap-3">
                <Button
                  as={Link}
                  className="font-bold bg-white text-black rounded-full border border-black"
                  href="#"
                  variant="flat"
                >
                  {el.addtobag}
                </Button>
                <Button
                  as={Link}
                  className="font-bold bg-white border-black text-black rounded-full border"
                  href="#"
                  variant="flat"
                >
                  {el.makeoffer}
                </Button>
              </div>
            </div>

            <div className=" detials">
              <h3 className=" font-bold mt-5">{content.details}</h3>
              <div className=" mt-3 mb-3">{el.description}</div>
            </div>
            <div className="payment mt-4">
              <h3 className=" font-bold mb-2">{content.shippID}</h3>
              <Card className=" mb-3">
                <CardBody style={directionStyle} className=" bg-gray-200">
                  <p>{el.shipping}</p>
                </CardBody>
              </Card>
              <Image
                alt="alt"
                width={300}
                height={300}
                src="/Screenshot 2024-04-23 at 12.57 1.png"
              />

              <div className="safe flex items-center mt-3">
                {/* <Image alt='alt'  width={32} height={32} src='/shield.png' /> */}
                <div className=" ms-4">
                  Mercari keeps your payment information secure. Mercari sellers
                  never receive your credit card information.
                </div>
              </div>

              <SellerProduct />
            </div>
          </div>
        ))}
      </div>

      <div style={directionStyle} className="Brands flex items-center ">
        <h3 className=""> {content?.moreSeller} </h3>
        <Button
          as={Link}
          className=" font-bold ms-4 bg-white border-black text-black rounded-full border"
          href="#"
          variant="flat"
        >
         {content?.view}
        </Button>
      </div>




      <Products />
      <GetApp />
    </div>
  );
}

export default Id;
