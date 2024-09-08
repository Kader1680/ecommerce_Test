import { Button, Link } from "@nextui-org/react";
import React from "react";
import { Card, CardBody } from "@nextui-org/react";
import Image from "next/image";
import MegaMenu from "../components/megaMenu";
import WomenSawar from "../components/womenSawar";

import { useTranslation } from "../context/TranslationContext";
import Summary from "../components/summary";

function Bag() {
  const { t } = useTranslation();
  const bagItem = t("bagItem")
  return (
    <div className="bag " style={{ width: "90%", margin: "auto" }}>
      {/* <MegaMenu />
    <WomenSawar />   */}
      <h2 className="myfont font-bold" style={{ fontSize: "48px" }}>
        {t("bag")}
      </h2>
      <div className="embty mr-auto  items-center">
        <Image width={200} height={200} alt="alt" src="/embty.png" />

        <h2 className=" font-bold" style={{ fontSize: "48px" }}>
          {t("bagEmpty")}
        </h2>

        <p style={{ width: "40%", margin: "auto" }}>{t("emptyTextBag")}</p>

        <Button
          as={Link}
          className=" mt-5 mb-5 bg-black text-white rounded-full"
          href="#"
          variant="flat"
        >
          {t("goShopping")}
        </Button>
      </div>

      <div className=" items grid sm:grid-cols-1 md:grid-cols-3 md:gap-4">
        <div className=" col-span-2">
          <div>
            <h3 className=" font-bold mt-6 mb-6">{t("bagInfo")}</h3>

           {
                bagItem.map((it, index) => (
                    <div key={index} className="rounded border p-4">
              <div className="   flex items-center justify-between">
                <div className=" flex justify-center items-center">
                  <Image
                    width={50}
                    height={50}
                    alt="alt"
                    src={it.userImage}
                  />
                  <div className=" ms-3">
                    <h6>{it.name}</h6>
                    <p className=" font-normal">{it.users}</p>
                  </div>
                </div>
                <div className=" me-3">{t('delete')}</div>
              </div>

              <div className="flex items-center mt-3">
                <Image width={200} height={200} alt="alt" src={it.pic} />
                <div>
                  <div className=" ms-3 font-bold">
                  {it.description}
                  </div>
                  <div className="ms-3 flex items-center">
                    <h6>{it.newPrice}</h6>
                    <p className=" line-through">{it.oldPrice}</p>
                  </div>
                </div>
              </div>
            </div>
                ))
           }
          </div>

          
        </div>




        <div className="col-span-1">
          <Card className=" bg-gray-200">
            <CardBody className=" ">
              <p className=" font-bold">{t("alterBag")}</p>
              <p className=" font-bold">{t("alterBag2")}</p>
            </CardBody>
          </Card>

          <div className="summary  pt-5 p-2">
            <Summary />
 
          

            <h3 className=" mb-4">{t("download")}</h3>

            <Image
              style={{ width: "100%" }}
              width={200}
              height={200}
              alt="alt"
              src="/Rectangle 2521.png"
            />

            <p className=" mt-4">{t("textBag")}</p>
            
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bag;
