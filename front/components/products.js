"use client";

import Image from 'next/image';
import React from 'react';
import { useTranslation } from '../context/TranslationContext';

function Products() {
    const { t } = useTranslation();

    const products = t("list")
     
    return (
        <div   className='products md:gap-4 grid sm:grid-cols-4 md:grid-cols-4'>
             
            {products.map(item => (
                <div   key={item.id} className='relative car mb-5'>
                    <div className='discount absolute'>{item.discount} $</div>
                    <div style={{ top: "3rem", width: "fit-content", backgroundColor: "#cc0d39" }} className='discount absolute'>
                        {item.featured}
                    </div>
                    <Image alt='alt' src={item.image} width={300} height={460.03} />
                    <div className='price flex justify-between'>
                       <p style={{ width:"70%" }}> {item.name}</p>
                        <div className='block'>
                            <div style={{ fontSize: "18px" }} className='font-bold'>{item.newPrice} $</div>
                            <div className=' line-through' style={{ fontSize: "12px" }}>{item.oldPrice} $</div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Products;
