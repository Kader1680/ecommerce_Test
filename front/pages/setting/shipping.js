import React from 'react'
import { Button } from '@nextui-org/react'
import Link from 'next/link'
import { useTranslation } from "../../context/TranslationContext";

function Shipping() {
  const { t } = useTranslation();

  return (
    <div className=' p-6'>
          <h3 className='myfont font-bold'>{t("Accountsettings")}</h3>
         <div className=' mt-3 flex items-center justify-between'>
            <div>
              <h5 className=' font-bold'>{t("SavedDelivery")}</h5>
              <p style={{ width:"70%" }}>{t("shippingCont")}</p>
            </div>
            <div className=' flex items-center justify-between'>
               
                <Button as={Link} className=' bg-black text-white rounded-full border' href='#' variant="flat">
                {t("changeEmail")}
          </Button>
            </div>
        </div>
    </div>
  )
}

export default Shipping