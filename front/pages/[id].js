import { Button, Link } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { User } from "@nextui-org/user";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import Products from "../components/products";
import GetApp from "../components/getApp";
import Image from "next/image";
import Comments from "../components/comments";
import { useTranslation } from "../context/TranslationContext";
import { useRouter } from "next/router";
import axios from "axios";

function Id() {
  const { t } = useTranslation();

  const router = useRouter();
  const Id = router.query;
  const idProduct = parseInt(Id.id);

  // console.log(typeof idProduct); 

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
  const arr = [];

  const [productID, setproductID] = useState([]);
  //   const singleProdcut = arr.push(productID)

  useEffect(() => {
    const getProdcutId = async () => {
      try {
        const data = await axios.get(
          `http://127.0.0.1:8000/api/prodcuts/${idProduct}`
        );

        setproductID(data.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    getProdcutId();
  });

  const listProduct = t("list");
  //
  const product = listProduct.filter((el) => el.id == idProduct);

 
  const [cart, setCart] = useState([]);
  const addToBag = async (productId) => {
     
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/cart', {
        product_id: productId 
       
      });
      // setCart(response.data.cart);
      console.log(response.data)
      // if (response.data.status === 'added') {
      //   setCart(response.data.cart);
      //   alert('Product added to cart');
      // }
    } catch (error) {
      console.error("Upload failed", error);
    }
  };

  return (
    <div style={{ width: "90%", margin: "auto" }}>
      <div className="singleProduct grid md:grid-cols-10  ">
        <div className=" md:col-span-7 sm:col-span-10 ">
          <div className="relative">
            <Image
              className="productImage relative"
              alt="alt"
              style={{ borderRadius: "30px" }}
              width={759}
              height={674}
              src={productID.image}
            />
          </div>
          {/* <div  className=' absolute   flex items-center gap-3'>
                  <Image onClick={changeImage2}  className='productImage' alt='alt'  style={{ borderRadius:"10px", width:"2rem" }}  width={50} height={50} src= "/slide 3.png" />
                  <Image onClick={changeImage3} className='productImage' alt='alt'  style={{ borderRadius:"10px", width:"2rem" }} width={50} height={50} src= '/slide1.png' />
                  <Image onClick={changeImage1} className='productImage' alt='alt'  style={{ borderRadius:"10px", width:"2rem" }} width={50} height={50} src= '/slide2.png' />
              </div> */}
          {/* <Comments /> */}
        </div>

        <div
          key={productID.index}
          className="description md:col-span-3 sm:col-span-10"
        >
          <h2>{productID.title}</h2>
          <div className=" flex items-center">
            {/* <Image alt='alt'  width={80.5} height={14} src='/Img - Rated 4.00 out of 5.png' /> */}
            <p className=" ms-4" style={{ fontSize: "14px" }}>
              {productID.review} Review
            </p>
          </div>
          <p>Price</p>
          <div className=" mb-5 flex items-center">
            <h3 className=" font-bold" style={{ fontSize: "24px" }}>
              {productID.newPrice} $
            </h3>
            <p className="  line-through ms-2">{productID.oldPrice} $</p>
          </div>
          <h4 className=" font-bold">Details</h4>
          <div className=" grid grid-cols-5">
            <div className=" col-span-2">
              <ul>
                <li>Condition</li>
                <li>{t("model")}</li>
                <li>{t("branding")}</li>
                <li>{t("category")}</li>
                <li>{t("color")}</li>
                <li>{t("posted")}</li>
              </ul>
            </div>
            <div className="col-span-3 font-bold">
              <ul>
                <li>{productID.condition}</li>
                <li>{productID.model}</li>
                <li>{productID.brand}</li>
                <li>{productID.category}</li>
                <li>{productID.color} </li>
                <li>{productID.posted} </li>
              </ul>
            </div>
          </div>

          <div className="adding mt-8 grid ">
            <Button
              className="font-bold  bg-black text-white rounded-full"
              variant="flat"
            >
              {/* {product.buynow} */}
              <a href="/chekout">Buy Now </a>
            </Button>
            <div className=" grid grid-cols-2 mt-2 gap-3">
              <form></form>
              <Button

              onClick={()=> {addToBag(productID.id)}}
                className="font-bold bg-white text-black rounded-full border border-black"
                href="/bag"
                variant="flat"
              >
                {/* {product.addtobag} */}
                Add to Bag
              </Button>
              <Button
                as={Link}
                className="font-bold bg-white border-black text-black rounded-full border"
                href="#"
                variant="flat"
              >
                {product.makeoffer}
                Make Offer
              </Button>
            </div>
          </div>

          <div className=" detials">
            <h3 className=" font-bold mt-5">Description</h3>
            <div className=" mt-3 mb-3">{productID.description}</div>
            <p className=" mt-3 mb-3">Fly More Combo /</p>
            <p></p>
          </div>
          <div className="payment mt-4">
            <h3 className=" font-bold mb-2">{t("shippID")}</h3>
            <Card className=" mb-3">
              <CardBody className=" bg-gray-200">
                <p>{product.shipping}</p>
              </CardBody>
            </Card>
            <Image
              alt="alt"
              width={400}
              height={100}
              src="/Screenshot 2024-04-23 at 12.57 1.png"
            />

            <div className="safe flex items-center mt-3">
              <div className=" ms-4">
                Mercari keeps your payment information secure. Mercari sellers
                never receive your credit card information.
              </div>
            </div>

            <User
              className=" border p-4 mt-5"
              name="Leslie Alexander"
              description="(137) reviews"
              avatarProps={{
                src: "/Ellipse 443.png",
              }}
            />
          </div>
        </div>
      </div>

      <div className="Brands flex items-center ">
        <h3 className="">{t("moreSeller")}</h3>
        <Button
          as={Link}
          className=" font-bold ms-4 bg-white border-black text-black rounded-full border"
          href="#"
          variant="flat"
        >
          {t("All")}
        </Button>
      </div>
      <Products />
      <GetApp />
    </div>
  );
}

export default Id;
