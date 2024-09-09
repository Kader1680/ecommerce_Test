import React from 'react'
import { Button } from '@nextui-org/react'
import Link from 'next/link'
import { useTranslation } from "../../context/TranslationContext";

function Security() {
  const { t } = useTranslation();
  
  return (
    <div className=' p-6'>
        <h3 className='myfont font-bold'>{t("Security")}</h3>
        <div className=' mt-3 md:flex items-center justify-between'>
            <div>
              <h5 className=' font-bold'>{t("Email")}</h5>
              <p>{t("secure")}</p>
            </div>
            <div className=' flex items-center justify-between'>
               
                <Button as={Link} className=' bg-white text-black     rounded-full        border' href='#' variant="flat">
                {t("deleteAcc")}
                </Button>
            </div>
        </div>

        <hr className='w-full mt-7 mb-7'></hr>

        <div className=' mt-3 md:flex items-center justify-between'>
            <div>
              <h5 className=' font-bold'>{t("changePass")}</h5>
              <p>{t("protect")}</p>
            </div>
            <div className=' flex items-center justify-between'>
               
                <Button as={Link} className=' bg-white text-black     rounded-full        border' href='#' variant="flat">
                {t("changePass")}
                </Button>
            </div>
        </div>

        <hr className='w-full  mt-7 mb-7'></hr>


        <div className=' mt-3 md:flex items-center justify-between'>
            <div>
              <h5 className=' font-bold'>{t("stepVerification")}</h5>
              <p>{t("extralayer")}</p>
            </div>
            <div className=' flex items-center justify-between'>
               
                <Button as={Link} className=' mr-auto bg-white text-black     rounded-full        border' href='#' variant="flat">
                {t("2factor")}
                </Button>
            </div>
        </div>

        <hr className='w-full mt-7 mb-7'></hr>

        <div className='mb-10 mt-3 md:flex items-center justify-between'>
            <div>
              <h5 className=' font-bold'>{t("deleteAcc")}</h5>
              <p>{t("deletePermanent")}</p>
            </div>
            <div className=' flex items-center justify-between'>
               
                <Button style={{ border:"1px solid #fa586c", color:"#fa586c" }} as={Link} className=' bg-white      rounded-full        border' href='#' variant="flat">
                {t("deleteAcc")}
                </Button>
            </div>
        </div>

    </div>
  )
}

export default Security