import React, { useState } from "react";
import {
  Breadcrumbs,
  BreadcrumbItem,
  Button,
  Link,
  Input,
} from "@nextui-org/react";
import Summary from "../components/summary";
import Image from "next/image";
import { useTranslation } from "../context/TranslationContext";
import DeliveryOption from "../components/deliveryOption";

function Chekout() {
  const { t } = useTranslation();

  const FilterItem = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(true);

    const toggleItem = () => {
      setIsOpen(!isOpen);
    };

    return (
      <div className="filter-item">
        <div
          className="filter-header flex items-center justify-between"
          onClick={toggleItem}
        >
          <div>{title}</div>
          <div>
            {isOpen ? (
              <Image alt="alt" width={20} height={20} src="/bellow.png" />
            ) : (
              <Image alt="alt" width={20} height={20} src="/bellow.png" />
            )}
          </div>
        </div>
        {isOpen && <div className="filter-content">{children}</div>}
      </div>
    );
  };
  return (
    <div style={{ width: "90%", margin: "auto" }}>
      <Breadcrumbs>
        <BreadcrumbItem>Home</BreadcrumbItem>
        <BreadcrumbItem>bag</BreadcrumbItem>
        <BreadcrumbItem className=" font-bold">{t("Checkout")}</BreadcrumbItem>
      </Breadcrumbs>

      <h3 style={{ fontSize: "48px" }} className="textDecor">
        {t("Checkout")}
      </h3>
      {/* style={{ backgroundColor:"#635bff" }} */}
      <div className=" md:grid grid:cols-2 lg:grid-cols-3 gap-5 ">
        <div className="buying lg:col-span-2">
          <div className="   border p-4">
            <h3 className="textDecor" style={{ fontSize: "24px" }}>
              {t("Faster")}
            </h3>
            <div className=" gap-2 flex items-center">
              <Button
                style={{ backgroundColor: "#635bff", width: "50%" }}
                as={Link}
                className=" font-bold text-medium mt-5 mb-5   text-white rounded-full"
                href="#"
                variant="flat"
              >
                Stripe
              </Button>
              <Button
                style={{ width: "50%" }}
                as={Link}
                className=" mt-5 mb-5 bg-white text-white rounded-full border"
                href="#"
                variant="flat"
              >
                <Image width={100} height={30} alt="alt" src="/PayPal 1.png" />
              </Button>
            </div>
            <p style={{ fontSize: "12px", color: "#b0b0b0" }}>
              {t("textChkout")}
            </p>
          </div>

          <div className=" mt-6 mb-6 flex items-center justify-center gap-2">
            <hr></hr> <p>Or</p> <hr></hr>
          </div>

          <div className="border p-2 mt-3">
            <h3 className="textDecor" style={{ fontSize: "24px" }}>
              {t("Contact")}
            </h3>

            <div className="data grid grid-cols-3 gap-4">
              <Input
                className=" border-none col-span-2"
                style={{ width: "40%", backgroundColor: "white" }}
                type="email"
                placeholder={t("email")}
                variant="bordered"
              />

              <p className="col-span-1 mt-1">
                Have an account?{" "}
                <Link className=" font-bold text-black">Log in</Link>{" "}
              </p>
            </div>
          </div>

          <div className=" border p-2 mt-3">
            <h3 className="textDecor" style={{ fontSize: "24px" }}>
              {t("ShippingAddress")}
            </h3>

            <div className="data flex items-center gap-3">
              <Input
                style={{ width: "50%" }}
                size="md"
                type="text"
                placeholder={t("f_name")}
                variant="bordered"
              />

              <Input
                style={{ width: "50%" }}
                size="md"
                type="email"
                placeholder={t("l_name")}
                variant="bordered"
              />
            </div>
            <Input
              className=" mt-4"
              style={{ width: "100%" }}
              size="md"
              type="text"
              placeholder={t("address")}
              variant="bordered"
            />
            <p
              style={{ fontSize: "10px", Color: "#b0b0b0" }}
              className=" pt-2 pb-2 underline"
            >
              <Link>Enter address manually</Link>
            </p>
            <div className="data flex items-center gap-3">
              <Input
                style={{ width: "50%" }}
                size="md"
                type="email"
                placeholder={t("email")}
                variant="bordered"
              />

              <Input
                style={{ width: "50%" }}
                size="md"
                type="email"
                placeholder={t("phone")}
                variant="bordered"
              />
            </div>

            <Button
              disabled
              style={{ color: "#b0b0b0" }}
              as={Link}
              className=" float-right  text-normal mt-5 mb-5   text-white rounded-full"
              href="#"
              variant="flat"
            >
              {t("save")}
            </Button>
          </div>

          <div style={{ marginTop: "4rem" }}>
            <hr style={{ width: "100%" }} className=" mt-5 mb-5"></hr>

            <FilterItem title={t("Delivery")}>
              <div className=" mt-3 mb-3">

                <DeliveryOption />
              </div>
            </FilterItem>

            <hr style={{ width: "100%" }} className=" mt-5 mb-5 textDecor"></hr>

            <FilterItem title={t("Payment")}>
              <div className=" mt-3 mb-3">
                <div>
                  <div className=" flex items-center mb-2">
                  <input type="radio" />
                   <p className=" ms-2">{t("creadit")}</p>
                  </div>
                  <div className=" border-1 rounded- p-3">
                    <h3 className=" font-semibold mt-2 mb-2">{t("SelectMethods")}</h3>
                    <div className=" bg-slate-200 grid grid-cols-6 gap-3">
                      <input className=" col-span-4 border border-gray-400 outline-none ps-2 pt-3 pb-3 rounded-md" />
                      <input className=" col-span-1 border border-gray-400 outline-none ps-2 pt-3 pb-3 rounded-md" />
                      <input className=" col-span-1 border border-gray-400 outline-none ps-2 pt-3 pb-3 rounded-md" />
                    </div>
                  </div>
                </div>
                <div className=" flex items-center mt-3">
                  <input type="radio" />
                  <Image alt="alt" className="ms-2" width={80} height={80} src="/PayPal 1.png" />
                </div>
                <div className=" flex items-center mt-3">
                  <input type="radio" />
                  <p className=" ms-2 font-extrabold" style={{ color: "#635bff" }}>Stripe</p>
                 
                  
                </div>
                <Button
                style={{ backgroundColor: "black" }}
                as={Link}
                className=" float-end font-semibold text-medium mt-5 mb-5   text-white rounded-full"
                href="#"
                variant="flat"
              >
                {t("pay")}
              </Button>
              </div>
            </FilterItem>
          </div>
        </div>

        <div className="lg:col-span-1">
          <Summary />
          <div
            className=" mt-3 p-4 rounded-lg "
            style={{ backgroundColor: "#f2f2f2" }}
          >
            <h3 style={{ fontSize: "24px" }} className="textDecor">
              {t("Voucher")}
            </h3>
            <div className=" flex items-center gap-3">
              <Input
                className=" mt-4"
                style={{ width: "100%" }}
                size="md"
                type="text"
                placeholder={t("code")}
                variant="bordered"
              />
              <Button
                disabled
                style={{ color: "#b0b0b0" }}
                as={Link}
                className=" mt-3 text-medium      text-white rounded-full"
                href="#"
                variant="flat"
              >
                {t("Apply")}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chekout;
