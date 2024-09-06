  import React, { useState } from 'react'
  import {Input} from "@nextui-org/react";
  import Image from 'next/image';
  import products from "../pages/product.json"
import { useTranslation } from "../context/TranslationContext";

import Category from '../pages/category';
  function Search() {
  const { t } = useTranslation();

    const names = [
      "Embellished Flare Leg Jeans 90s",
      "Daisy Romantic Sweet Flower",
      "women's crocs flats",
      "nike women shoes",
      "Maurice's shorts",
      "prodcut",
      "Watermelon Soda Plus Size 1X Utility Skirt",
      "Boxed Large Slim Card Holder",
      "Pink FashionNova Set",
      "Casual Corner Vintage Linen Blazer Chartreuse",
    
    ]
    const [filtProduct, setfiltProduct] = useState(products);

    function targerInput(e) {

      for (let index = 0; index < names.length; index++) {
        const element = names[index];
          if(e === element){
            setfiltProduct(products.filter(e => e.name === element))
        }
      }
        
    }  
    return (


      <div>

        <Input
        style={{ backgroundColor:"transparent" }}
        className='searchBar bg-transparent'
          onChange={(e)=>{targerInput(e.target.value)}}
          radius="lg"
          placeholder={t("searchItemsBar")}
          startContent={
            <Image alt='alt' width={20} height={20} src='/searchicon.png' />
          }
        />

         
      
    </div>
    )
  }

  export default Search