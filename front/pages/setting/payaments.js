import React from 'react'
import { Button } from '@nextui-org/react'
import Link from 'next/link'
import {Textarea, Switch}  from "@nextui-org/react";
import { useTranslation } from "../../context/TranslationContext";


function Payaments() {
  const { t } = useTranslation();

  return (
    <div className=' p-6'>
     <h3 className='myfont font-bold'>{t("Payments")}</h3>
         <div className=' mt-3 flex items-center justify-between'>
            <div>
              <h5 className=' font-bold'>{t("saved")}</h5>
              <p style={{ width:"70%" }}>{t("currently")}</p>
            </div>
            <div className=' flex items-center justify-between'>
               
                <Button as={Link} className=' bg-black text-white rounded-full border' href='#' variant="flat">
                {t("addPayment")}
          </Button>
            </div>
        </div>
    </div>
  )
}

export default Payaments