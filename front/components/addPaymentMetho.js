import { Button, Input } from '@nextui-org/react'
import React from 'react'
import { useTranslation } from '../context/TranslationContext';

function AddPaymentMethod() {
  const { t } = useTranslation();

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm mb-4">
      <h2 className="text-xl font-semibold mb-4">{t("Add Payment Method")}</h2>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">{t("Card Number")}</label>
          <Input
            variant="bordered"
            type="text"
            placeholder={t("Card Number")}
            className=" appearance-none  rounded w-full   text-gray-700  "
          />
        </div>


        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">{t("MM/YY")}</label>
          <Input
            variant="bordered"
            type="text"
            placeholder={t("MM/YY")}
            className=" appearance-none  rounded w-full   text-gray-700  "
          />
        </div>


        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">{t("CVV")}</label>
          <Input
            variant="bordered"
            type="text"
            placeholder={t("CVV")}
            className=" appearance-none  rounded w-full   text-gray-700  "
          />
        </div>

        
        
        <Button  className='me-1 bg-white text-black rounded-full border' href="/auth/signup" variant="flat">
        {t("cancel")}
          </Button>
          <Button  className='bg-black text-white rounded-full' href="#" variant="flat">
          {t("Confirm")}
        </Button>
      </form>
    </div>
  )
}

export default AddPaymentMethod