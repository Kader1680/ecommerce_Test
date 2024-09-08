import React from 'react'
import { useTranslation } from "../context/TranslationContext";
import { Image } from '@nextui-org/react';

function DeliveryOption() {
  const { t } = useTranslation();

  const deliveryOption = t("deliveryOption")
  return (
    <div>
        {
            deliveryOption.map(el => (

                <div key={el.standar} className=' md:flex items-center justify-between'>
                    <div className=' md:flex items-center '>
                        <Image alt='alt' width={90} height={90} src={el.pic} />
                        <div className=' ms-2   '>
                            <p className=' text-sm text-gray-500'>{el.description}</p>
                            <p>{el.standar}</p>
                        </div>
                    </div>
                    <div>
                        <p className=' font-semibold'>{el.price} {t("dollars")}   </p>
                        <p className=' text-gray-400 text-xs'>{el.timeDelivery} </p>
                    </div>
                    <div><Image alt='alt' width={20} height={20} src={el.edit} /> </div>

                </div>
            ))
        }
    </div>
  )
}

export default DeliveryOption