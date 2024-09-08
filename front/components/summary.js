import { Button, Link } from '@nextui-org/react'
import React from 'react'
import { useTranslation } from "../context/TranslationContext";

function Summary() {
  const { t } = useTranslation();

  return (
    <div style={{ backgroundColor:"#f2f2f2" }} className='summary pt-5 p-2 rounded-lg'>
    <h3 style={{ fontSize:"24px" }} className='textDecor mt-2'>Summary</h3>
 
    <div className="summary  pt-5 p-2">
            <h3 className=" mt-2">{t("summury")}</h3>
            <div className="price mt-3">
              <div className=" flex items-center justify-between">
                <div>
                  <ul>
                    <li>{t("Subtotal")}</li>
                    <li>{t("Estimated")}</li>
                    <li>{t("Tax")}</li>
                    <li>{t("Discount")}</li>
                    <li>{t("Total")}</li>
                  </ul>
                </div>
                <div>
                  <ul>
                    <li>$120.00</li>
                    <li>$8.00</li>
                    <li>—</li>
                    <li>$12.00</li>
                    <li>$116.00</li>
                  </ul>
                </div>
              </div>
            </div>

            <Button
              style={{ width: "100%" }}
              as={Link}
              className=" mt-5 mb-5 bg-black text-white rounded-full"
              href="#"
              variant="flat"
            >
              {t("chekout")}
            </Button>

           
           
          </div>

    
 
</div>
  )
}

export default Summary