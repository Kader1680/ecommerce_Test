import { Button, Image } from '@nextui-org/react'
import React from 'react'
import { useTranslation } from '../context/TranslationContext';

function DeleteAccount() {

  const { t } = useTranslation();
  

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm">
    
    
    <div className=' flex items-center justify-between mb-3'>
                <h2 className="text-xl font-bold mt-3 mb-3">{t("deleteAcc")}</h2>
                 
                <div className=' bg-slate-200 p-2 rounded-full'>
                    <Image  width={18} height={18} alt='close' src='/close.png' />

                </div>
    </div>
    <p className="text-gray-600 mb-4">
    {t("deletePermanent")}
    </p>
    <form>
      <div className="mb-4">
         
        <input
          type="password"
          placeholder={t("Confirm Password")}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <Button  className=' bg-white text-black rounded-full border' href="/auth/signup" variant="flat">
            {t("cancel")}
          </Button>
          <Button     className=' bg-black text-white rounded-full' href="#" variant="flat">
          {t("deleteAcc")}
          </Button>
    </form>
  </div>
  )
}

export default DeleteAccount