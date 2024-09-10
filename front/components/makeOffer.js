import { Button } from '@nextui-org/react'
import Image from 'next/image'
import React from 'react'
import time from '../public/time-quarter past.png'
import { useTranslation } from '../context/TranslationContext';
import { off } from 'process';

function MakeOffer() {
  const { t } = useTranslation();

  const offers = [
    {'discount' : 20, 'price' : 24.00},
    {'discount' : 4, 'price' : 15.00},
    {'discount' : 7, 'price' : 29.00},
    ]

    
  const offerItem = t("offerItem")
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm mb-4">
    
    
    <div className=' flex items-center justify-between mb-3'>
                <h2 className="text-xl font-bold mt-3 mb-3">{t("Make An Offer")}</h2>
        
                <div className=' bg-slate-200 p-2 rounded-full'>
                    <Image  width={18} height={18} alt='close' src='/close.png' />

                </div>
    </div>

    {
        offerItem.map((offer, index)=>{
            <div key={index} className="flex items-center space-x-4 mb-5 mt-5">
            <Image
                src={offer.pic}
                alt="product"
                width={90}
                height={90}
                className="object-cover rounded"
            />
            <div>
                <h3 className="text-md font-bold">{offer.description}</h3>
                <div className="flex items-center space-x-2">
                    <span className="text-lg font-semibold">$20.36</span>
                    <span className="text-gray-500 line-through">$25.00</span>
                </div>
                

                

            </div>
    </div>
        })
    }
    



    <p className="text-gray-600 mb-4 text-sm">
    {t("An offer is not a purchase. If the seller accepts, you’ll have 24 hours to buy the item at your offer price.")}
    </p>

    <Button className=' mt-3 mb-3 bg-white border-1 border-gray-300 text-gray-300 w-full rounded-full' href="#" variant="flat">
    {t("Enter your offer") }
    </Button>
    <h3 className=' text-lg mt-3 mb-2 font-bold'>{t("Recommend")} </h3>
    <div className=' flex items-center justify-between gap-2 text-center mb-5'>
        {
            offers.map(offer => (
                <div key={offer.price}  className=' w-full  p-2 border-1 border-gray-200 rounded-lg'>
                    <p>{offer.discount}%OFF</p>
                    <div className=' font-bold'>US$ {offer.price}.00</div>
                </div>
            ))
        }
    </div>
    <form>
       <div className=' flex items-center gap-2 justify-between'>
       <Button  className='  w-full  bg-white text-black rounded-full border' href="/auth/signup" variant="flat">
            Cancel
          </Button>
    <Button     className='  w-full  bg-black text-white rounded-full' href="#" variant="flat">
    {t("Submit Offer")}
    </Button>
       </div>
     
    </form>
    <div className=' flex items-center justify-between mt-5'>
        <Image src={time} height={45} width={45} alt='alt' />
        <p className=' ms-3 text-sm text-gray-500'>{t("An offer is not a purchase. If the seller accepts, you’ll have 24 hours to buy the item at your offer price.")}</p>
    </div>
  </div>
  )
}

export default MakeOffer