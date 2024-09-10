import { Button, Image } from '@nextui-org/react'
import React from 'react'
import { useTranslation } from '../context/TranslationContext';
 
function SideBarCart() {

  const { t } = useTranslation();
  const cartItem = t("cartItem")

  return (
    <div className=" py-4 border-gray-300 rounded-md border-1.5   w-fit p-4">


            <div className=' flex items-center justify-between'>
                <h3 className=' text-lg font-bold mt-3 mb-3'>{t("Cart")}</h3>
                <div className=' bg-slate-200 p-2 rounded-full'>
                    <Image  width={18} height={18} alt='close' src='/close.png' />

                </div>
            </div>

            <hr className='line mt-2 mb-5'></hr>

            {
                cartItem.map((cart, index)=>(
                    <div key={index} className="flex items-center space-x-4 mb-3">
                <Image
                    src={cart.pic}
                    alt="product"
                    width={90}
                    height={90}
                    className="object-cover rounded"
                />
                <div>
                    <h3 className="text-md font-bold">{cart.description}</h3>
                    <div className="flex items-center space-x-2">
                    <span className="text-lg font-semibold">{cart.oldPrice}</span>
                    <span className="text-gray-500 line-through">{cart.newPrice}</span>
                    </div>
                    <div className="text-gray-500  flex justify-between items-center" >
                            <span className="text-xs text-black bg-gray-200 rounded-full p-2">{cart.delivery}</span>
                            <button className="text-md  font-medium text-black ">{t("delete")}</button>

                    </div>

                    

                </div>
            </div>
                ))
            }
            

          


  </div>
  )
}

export default SideBarCart