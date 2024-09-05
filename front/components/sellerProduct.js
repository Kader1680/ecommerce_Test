import { Button, User } from "@nextui-org/react";
import Image from "next/image";
import React from "react";
 
 
function SellerProduct() {
   
    
    // const item = t.filter(el => el.id == idProduct)
    // // convert array seller to json strcutre

    // const selerItem = (item.map(el=>el.seller))
    // console.log(selerItem.map(el => el.reviews))
    
  return (
    <div style={directionStyle} className=" border-1 p-4 mt-5 rounded-lg border-gray-300">
      {
        selerItem.map(el => (
            <div key={el.name} className=" flex items-center ">

<Image width={50} height={50} alt="alt" src={el.pic} />
<div className=" ms-2">
  <h5 className=" font-bold">{el.name}</h5>
  <div className=" flex items-center justify-start">
    <Image width={100} height={100} alt="alt" src="/starSeller.png" />
    <p className=" text-xs ms-3">({el.n}) {el.reviews}</p>
  </div>
  <div className=" flex items-center">
    <p className="font-bold text-sm">{el.n} <span className=" font-normal ">{el.Listed}</span> </p>
    <p className=" ms-2 font-bold text-sm">{el.m} <span className=" font-normal"> {el.Sales} </span> </p>
  </div>
</div>
 
<Button
     
    className=" bg-black text-white rounded-full"
    href="#"
    variant="flat"
  >
    
    {el.Visit}

  </Button>

</div>
        ))
      }
      

    </div>
  );
}

export default SellerProduct;
