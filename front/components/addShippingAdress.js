import { Button, Input } from '@nextui-org/react'
import React from 'react'
import {Select, SelectItem} from "@nextui-org/react";
import {country} from "./country";
import { useTranslation } from '../context/TranslationContext';

function AddShippingAdress() {
  const { t } = useTranslation();

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm mb-5 h-fit ">
      <h2 className="text-xl font-semibold mb-4">{t("Add your shipping address")}</h2>
      <form>
        <div className="mb-4">
           
          <Select 
            className="text-gray-700 w-full text-sm  mb-2"
            variant="bordered"

            label={t("Country")}
            
            >
            {country.map((count) => (
            <SelectItem key={count.key}>
                {count.label}
            </SelectItem>
            ))}
        </Select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">{t("Fullname")}</label>
          <Input
            variant="bordered"
            type="text"
            placeholder={t("Fullname")}
            className=" appearance-none  rounded w-full   text-gray-700  "
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">{t("Address line 1")}</label>
          <Input
            variant="bordered"
            type="text"
            placeholder={t("Address line 1")}
            className=" appearance-none  rounded w-full   text-gray-700  "
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">{t("Address line 2 (optional)")}</label>
          <Input
            variant="bordered"
            type="text"
            placeholder={t("Address line 2 (optional)")}
            className=" appearance-none  rounded w-full   text-gray-700  "
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">{t("Zip code")}</label>
          <Input
            variant="bordered"
            type="text"
            placeholder={t("Zip code")}
            className=" appearance-none  rounded w-full   text-gray-700  "
          />
        </div>
         
          <Button  className='me-1 bg-white text-black rounded-full border' href="/auth/signup" variant="flat">
          {t("cancel")}
          </Button>
          <Button  className='bg-black text-white rounded-full' href="#" variant="flat">
          {t("save")}
          </Button>
          
      </form>
    </div>
  )
}

export default AddShippingAdress