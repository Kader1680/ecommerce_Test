import GetApp from "../components/getApp";

import Image from "next/image";
import React, { useEffect, useState } from "react";
// import products from "../../pages/product"
import filterIcon from "../public/filterIcon.png";

import ImageSlider from "../components/imageSlider";

import { Input } from "@nextui-org/react";
 
import { useTranslation } from '../context/TranslationContext';
function Category() {
   
  const { t } = useTranslation();

  const sizes = [
    "XXS",
    "XS",
    "S",
    "M",
    "L",
    "XL",
    "XXL",
    "3XL",
    "4XL",
    "5XL",
    "One size",
  ];
  const brand = [
    t("BrandyMelville"),
    t("Forever"),
    t("Caddis"),
    t("Nike"),
    t("NewBalance"),
    t("Aragona"),
  ];

  const prices = [10.0, 30.0, 50.0, 130.0, 200.0];

  const names = [
    "Embellished Flare Leg Jeans 90s",
    "Daisy Romantic Sweet Flower",
    "women's crocs flats",
    "nike women shoes",
    "Maurice's shorts",
    "prodcut",
    "Watermelon Soda Plus Size 1X Utility Skirt",
    "Boxed Large Slim Card Holder",
    "Pink FashionNova Set",
    "Casual Corner Vintage Linen Blazer Chartreuse",
  ];

  const prodcutsItems = t("list")

   

  function targerInput(e) {
    const filteredProducts = prodcutsItems.filter((product) =>
      names.some((name) => product.name === name && e === name)
    ) || [] ;
    setfiltProduct(filteredProducts);
  }

  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const [displayFilterBar, setdisplayFilterBar] = useState(false);

  function setFilterBar() {
    setdisplayFilterBar(!displayFilterBar);
  }

  const [filtProduct, setfiltProduct] = useState(t("list"));

  const filter = () => {
    setfiltProduct(prodcutsItems.filter((el) => el.discount > 40));
  };

  const filterSize = (size) => {
    if (size) {
      setfiltProduct(prodcutsItems.filter((el) => el.size === size));
    }
  };

  function allProduct() {
    setfiltProduct(t("list"));
  }

  useEffect(() => {
    setfiltProduct(filtProduct);
  }, [filtProduct]);

  const filterBrand = (brand) => {
    if (brand) {
      setfiltProduct(prodcutsItems.filter((el) => el.brand === brand));
    }
  };
  const filterPrice = (price) => {
    if (price) {
      setfiltProduct(prodcutsItems.filter((el) => el.newOld > price));
    }
  };

  const shippingFilter = (shipping) => {
    setfiltProduct(prodcutsItems.filter((el) => el.shipping === shipping));
  };
  const filterColor = (color) => {
    if (color) {
      setfiltProduct(prodcutsItems.filter((el) => el.color === color));
    } else {
      setfiltProduct(prodcutsItems);
    }
  };

  const newItems = [];
  // get the items color from each prodcuts
  for (let index = 0; index < prodcutsItems.length; index++) {
    const element = prodcutsItems[index].color;
    newItems.push(element);
  }

  const colors = [...new Set(newItems)];

  const FilterItem = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

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
    <div  >
      <div style={{ width: "90%", margin: "auto" }}>
        <h3 style={{ fontSize: "24px" }} className="myfont font-bold">
          {t("categorTitle")}
        </h3>

        <i className="cil-energy icon icon-xxl"></i>

        <p className=" mt-2 mb-5 font-bold">{t("categories")}</p>

        <div className=" md:hidden">
          <ImageSlider />
        </div>

        <div className="type sm:hidden md:flex justify-center gap-2 ">
          <div>
            <Image width={100} height={100} alt="alt" src="/cat (1).png" />
            <p className=" text-center font-bold mt-2">{t("CoatsJackets")}</p>
          </div>
          <div>
            <Image width={100} height={100} alt="alt" src="/cat (2).png" />
            <p className=" text-center font-bold mt-2">{t("Sweaters")}</p>
          </div>
          <div>
            <Image width={100} height={100} alt="alt" src="/cat (3).png" />
            <p className=" text-center font-bold mt-2">{t("Tops")}</p>
          </div>
          <div>
            <Image width={100} height={100} alt="alt" src="/cat (4).png" />
            <p className=" text-center font-bold mt-2">{t("Accessories")}</p>
          </div>
          <div>
            <Image width={100} height={100} alt="alt" src="/cat (7).png" />
            <p className=" text-center font-bold mt-2">{t("Shoes")}</p>
          </div>
          <div>
            <Image width={100} height={100} alt="alt" src="/cat (8).png" />
            <p className=" text-center font-bold mt-2">{t("Handbags")}</p>
          </div>
          <div>
            <Image width={100} height={100} alt="alt" src="/cat (9).png" />
            <p className=" text-center font-bold mt-2">{t("Dresses")}</p>
          </div>
          <div>
            <Image width={100} height={100} alt="alt" src="/cat (10).png" />
            <p className=" text-center font-bold mt-2">{t("Jeans")}</p>
          </div>
        </div>

        <div className="contentCategorie grid md:grid-cols-10 mt-10 ">
          <div className="0 md:col-span-3">
            <div></div>

            {/* <FilterCategory   /> */}

            <div
              onClick={setFilterBar}
              className=" font-bold flex items-center mt-3 mb-3 "
            >
              <Image width={17} height={17} src={filterIcon} alt="alt" />
              <h4 style={{ fontSize: "20px" }} className=" ms-2 ">
                {t("FILTER")}
              </h4>
            </div>

            <div
              className={`filtring w-64 p-4 border rounded-lg ${
                displayFilterBar ? "" : "show-filter-bar"
              }`}
            >
              <div className="filter">
                {/* Status */}

                <div className="mb-4">
                  <div className="relative w-full   mx-auto max-w-screen-sm">
                    <div id="bouton" className="relative group/bouton w-full">
                      <div className=" flex items-center justify-between">
                        <FilterItem title={t("status")}>
                          <div
                            className={`w-full  z-50  top-full bg-white origine-top  flex-col  `}
                          >
                            <div className=" flex items-center p-2">
                              <input type="radio" />
                              <p className=" ms-3" onClick={allProduct}>
                                {t("any")}
                              </p>
                            </div>
                            <div className=" flex items-center p-2">
                              <input type="radio" />
                              <p className=" ms-3">{t("SatutSell")} </p>
                            </div>
                            <div className=" flex items-center p-2">
                              <input type="radio" />
                              <p
                                className=" ms-3"
                                onClick={() => {
                                  filter();
                                }}
                              >
                                {t("sold")}
                              </p>
                            </div>
                          </div>
                        </FilterItem>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Brands */}
                <div className="mb-4">
                  <div className="relative w-full   mx-auto max-w-screen-sm">
                    <div id="bouton" className="relative group/bouton w-full">
                      <div className=" flex items-center justify-between">
                        <FilterItem title={t("Brand")}>
                          <div className=" mt-3 mb-3">
                            <Input
                              style={{ backgroundColor: "transparent" }}
                              className="searchBar bg-transparent"
                              onChange={(e) => {
                                targerInput(e.target.value);
                              }}
                              radius="lg"
                              placeholder="search items"
                              startContent={
                                <Image
                                  alt="alt"
                                  width={20}
                                  height={20}
                                  src="/searchicon.png"
                                />
                              }
                            />
                          </div>

                          {brand.map((i) => (
                            <div
                              key={i}
                              className={`w-full  z-50  top-full bg-white origine-top  flex-col  `}
                            >
                              <div
                                onClick={() => {
                                  filterBrand(i);
                                }}
                                className=" flex items-center p-2"
                              >
                                <input type="checkbox" />
                                <p className=" ms-3">{i}</p>
                              </div>
                            </div>
                          ))}
                        </FilterItem>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Size */}

                <div className="mb-4">
                  <div className="relative w-full   mx-auto max-w-screen-sm">
                    <div id="bouton" className="relative group/bouton w-full">
                      <div className=" flex items-center justify-between">
                        <FilterItem title={t("size")}>
                          <div
                            className={`w-full  z-50  top-full bg-white origine-top  flex-col  `}
                          >
                            <h5 className=" font-bold mt-3 mb-3">Tops</h5>
                            <div className=" flex flex-wrap gap-1 ">
                              {sizes.map((item) => (
                                <div
                                  onClick={() => {
                                    filterSize(item);
                                  }}
                                  key={item}
                                  className="w-fit p-2 border   text-black hover:bg-black hover:text-white rounded-md gap-2"
                                >
                                  
                                  {item}
                                </div>
                              ))}
                            </div>

                            <h5 className=" font-bold mt-3 mb-3">BOTTOMS</h5>

                            <div className=" flex flex-wrap gap-1 ">
                              {sizes.map((item) => (
                                <div
                                  key={item}
                                  className="w-fit p-2 border   text-black hover:bg-black hover:text-white rounded-md gap-2"
                                >
                                  
                                  {item}
                                </div>
                              ))}
                            </div>
                          </div>
                        </FilterItem>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Conditions */}

                <div className="mb-4">
                  <div clasclassNames="relative w-full   mx-auto max-w-screen-sm">
                    <div id="bouton" className="relative group/bouton w-full">
                      <div className=" flex items-center justify-between  mt-5 mb-5 ">
                        <FilterItem title={t("Condition")}>
                          {/* <Image src={bellow} alt='alt' width={20} height={20}  /> */}

                          <div
                            className={`w-full  z-50  top-full bg-white origine-top  flex-col  `}
                          >
                            <div className=" flex items-center p-2">
                              <input type="checkbox" />
                              <p className=" ms-3">{t("exc")} (243)</p>
                            </div>
                            <div className=" flex items-center p-2">
                              <input type="checkbox" />
                              <p className=" ms-3">{t("vg")} (670)</p>
                            </div>
                          </div>
                        </FilterItem>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Price  */}

                <div className="mb-4">
                  <div className="relative w-full  z-40  mx-auto max-w-screen-sm">
                    <div id="bouton" className="relative group/bouton w-full ">
                      <div className=" flex items-center justify-between  mt-5 mb-5">
                        <FilterItem title={t("price")}>
                          {/* <Image src={bellow} alt='alt' width={20} height={20}  />
                           */}
                          <div
                            className={`w-full  z-50  top-full bg-white origine-top  flex-col  `}
                          >
                            <div className=" flex items-center p-2">
                              <input
                                onClick={() => setfiltProduct(products)}
                                type="radio"
                              />
                              <p className=" ms-3">Any </p>
                            </div>

                            {prices.map((p) => (
                              <div
                                key={p}
                                onClick={() => {
                                  filterPrice(p);
                                }}
                                className=" flex items-center p-2"
                              >
                                <input type="radio" />
                                <p className=" ms-3">{p} $</p>
                              </div>
                            ))}

                            <div className="mt-2 flex space-x-2">
                              <input
                                type="number"
                                placeholder="Min"
                                className="w-full p-2 border rounded-lg"
                                value={minPrice}
                                onChange={(e) => setMinPrice(e.target.value)}
                              />
                              <input
                                type="number"
                                placeholder="Max"
                                className="w-full p-2 border rounded-lg"
                                value={maxPrice}
                                onChange={(e) => setMaxPrice(e.target.value)}
                              />
                            </div>
                          </div>
                        </FilterItem>
                      </div>
                    </div>
                  </div>

                  {/* Color */}
                  <div className="mb-4">
                    <div className="relative w-full   mx-auto max-w-screen-sm">
                      <div id="bouton" className="relative group/bouton w-full">
                        <div className=" mt-5 mb-5 flex items-center justify-between">
                          <FilterItem title={t("colors")}>
                            {/* <Image src={bellow} alt='alt' width={20} height={20}  /> */}
                            <div
                              className={`w-full  z-50  top-full bg-white origine-top  flex-col  `}
                            >
                              <div className="  ">
                                <div className=" flex flex-wrap gap-8 ">
                                  {colors.map((item) => (
                                    <div
                                      onClick={() => filterColor(item)}
                                      key={item}
                                      style={{
                                        backgroundColor: item,
                                        width: "35px",
                                        height: "35px",
                                      }}
                                      className={`    p-2 border ${item}  rounded-full   gap-2`}
                                    ></div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </FilterItem>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* shipping */}

                  <div className="mb-4">
                    <div className="relative w-full   mx-auto max-w-screen-sm">
                      <div id="bouton" className="relative group/bouton w-full">
                        <div className=" flex items-center  mt-5 mb-5 justify-between">
                          <FilterItem title={t("shipping")}>
                            {/* <Image src={bellow} alt='alt' width={20} height={20}  /> */}
                            <div
                              className={`w-full  z-50  top-full bg-white origine-top  flex-col  `}
                            >
                              <div
                                onClick={allProduct}
                                className=" flex items-center p-2"
                              >
                                <input type="checkbox" />
                                <p className=" ms-3">{t("All")} (243)</p>
                              </div>
                              <div
                                onClick={() => {
                                  shippingFilter("free");
                                }}
                                className=" flex items-center p-2"
                              >
                                <input type="checkbox" />
                                <p className=" ms-3">{t('FreeShipping')} (670)</p>
                              </div>
                            </div>
                          </FilterItem>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className=" md:col-span-7">
 
          
            <div className="products  md:gap-4 grid sm:grid-cols-4 md:grid-cols-3">
              { 
                filtProduct.map((item) => (
                  <div key={item.id} className="relative car">
                    <div
                      style={{ backgroundColor: "black" }}
                      className="discount bg-black absolute"
                    >
                      {item.discount} $
                     
                    </div>
                    <div
                      style={{
                        top: "3rem",
                        width: "fit-content",
                        backgroundColor: "#cc0d39",
                      }}
                      className="discount absolute"
                    >
                      {item.featured}
                    </div>
                    <Image
                      alt="alt"
                      src={item.image}
                      width={300}
                      height={460.03}
                    />
                    <div className="price flex justify-between ">
                      <div style={{ fontSize: "13px" }}>{item.name}</div>
                      <div className=" block ">
                        <div
                          style={{ fontSize: "12px" }}
                          className="   line-through"
                        >
                          {item.oldPrice}$
                        </div>
                        <div
                          className=" font-bold"
                          style={{ fontSize: "15px" }}
                        >
                          {item.newPrice}$
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              
              }
            </div>
          </div>
        </div>

        <GetApp />
      </div>
    </div>
  );
}

export default Category;
