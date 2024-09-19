import React, { useRef, useState } from "react";
import {
  Breadcrumbs,
  BreadcrumbItem,
  Button,
  Link,
  Input,
  Image,
} from "@nextui-org/react";

import point from "../public/point.png";
import upload from "../public/upload.png";
import add from "../public/add.png";
import { Radio } from "@nextui-org/react";
import { useTranslation } from "../context/TranslationContext";
import axios from "axios";

function SelItems() {
  const { t } = useTranslation();

  const [text, settext] = useState();

  const hiddenBrowseButton = useRef(null);

  const [bold, setbold] = useState(false);
  const [italic, setitalic] = useState();

  const changeBold = () => {
    setbold(!bold);
  };
  const changeItalic = () => {
    setitalic(!italic);
  };
  const AddProduct = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(true);

    const toggleItem = () => {
      setIsOpen(!isOpen);
    };
    return (
      <div>
        <div onClick={toggleItem}>{title}</div>
        {isOpen && <div>{children}</div>}
      </div>
    );
  };

  const [title, settitle] = useState("");
  const [condition, setcondition] = useState("");
  const [color, setcolor] = useState("");
  const [brand, setbrand] = useState("");
  const [size, setsize] = useState("");
  
  const [newPrice, setnewPrice] = useState("");
  const [discount, setdiscount] = useState("");
  const [category, setcategory] = useState();
  const [quantity, setquantity] = useState("");
  const [description, setdescription] = useState("");
// const [model, setmodel] = useState();
  const handelInput = async (event) => {
     event.preventDefault();

    const formData = new FormData();

    // apppend with key, value(from the state)
    formData.append("title", title);
    formData.append("description", description);
    formData.append("condition", condition);
    formData.append("color", color);
    formData.append("brand", brand);
   
    formData.append("newPrice", newPrice);
    formData.append("size", size);
    formData.append("discount", discount);
    formData.append("category", category);
    formData.append("quantity", quantity);
    formData.append("id_user", 1);
 // formData.append("model", model);
     

    try {
      const response = await axios.post("http://127.0.0.1:8000/api/prodcuts/",formData);
      if (response.data.true === true) {
        console.log("product add sucessfuly");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handelCategotyOption = (element) => {
     
     
    setcategory(element.target.value)
}

const handelBrandOption = (element) => {
setbrand(element.target.value)
}

const handelColordOption = (element) => {
setcolor(element.target.value)
}

const handelSizeOption = (element) => {
setsize(element.target.value)
}
const handelConditionOption = (element) => {
setcondition(element.target.value)
}
  
  return (
    <div style={{ width: "90%", margin: "auto" }}>
      <Breadcrumbs style={{ width: "90%", margin: "auto" }}>
        <BreadcrumbItem>Home</BreadcrumbItem>
        <BreadcrumbItem className=" font-bold">{t("sellItem")}</BreadcrumbItem>
      </Breadcrumbs>

      <h3 style={{ fontSize: "48px" }} className="textDecor myfont">
        {t("sellItem")}
      </h3>

      
        <div className=" grid md:grid-cols-6 gap-2 mt-4 mb-4">
          <div
            style={{ backgroundColor: "#f3f3f3", height: "fit-content" }}
            className="rounded-lg p-3 col-span-4 "
          >
              <form method="POST" onSubmit={handelInput}>
            
                  <div
                    style={{ border: "1.5px solid" }}
                    className=" rounded-lg bg-white p-3"
                  >
                    <div className="">
                      <AddProduct title={t("Product information")}>
                        <div className="bg-white rounded-md p-3 mb-3">
                          <div
                            className="rounded-lg p-6 upload mt-3"
                            style={{
                              backgroundColor: "#f3f3f3",
                              width: "100%",
                              margin: "auto",
                            }}
                          >

                            <Image alt="alt" width={40} height={40} src={upload} />

                            <div className="blabla">
                              <p>{t("Drop your image here or")} </p>
                              <p className=" font-bold">
                                {t("Add click Upload Photos")}
                              </p>
                            </div>

                            <input

                              ref={hiddenBrowseButton}
                              type="file"
                              style={{ display: "none" }}
                            />

                            <div>
                              <Button
                                onClick={() => hiddenBrowseButton.current.click()}
                                as={Link}
                                className=" add text-black rounded-full border"
                                href="#"
                                variant="flat"
                              >
                                <Image alt="alt" width={20} height={20} src={add} />
                                <p>{t("Upload Photos")}</p>
                              </Button>
                            </div>
                          </div>

                          <div className=" mt-4 mb-4 flex justify-center items-center">
                            <Image alt="alt" width={20} height={20} src={point} />
                            <p className=" ms-2" style={{ fontSize: "14px" }}>
                              {t("add minimum")}
                            </p>
                          </div>
                         
                          <Input
                           
                            className=" mb-2"
                            value={title}
                            type="text"
                            variant="bordered"
                            onChange={(e) => settitle(e.target.value)}
                            placeholder={t("The item title")}
                          />
                          
                         <form onSubmit={handelInput}>

                         <select 
                           onChange={handelCategotyOption}
                          class=" mb-4 w-full ow-start-1 col-start-1 bg-slate-50">
                            <option 
                            value=""
                             
                            >{t("Select Category")}</option>
                            <option 
                              value="Sweaters"
                               
                             >
                              Sweaters
                            </option>
                            <option value="Shoes" >
                              Shoes
                            </option>
                            <option value="Dresses">
                              Dresses
                            </option>
                            <option  value="Handbags">
                              Handbags
                            </option>
                            <option  value="Skirts">
                              Skirts
                            </option>
                            <option value="Accessories">
                              Accessories
                            </option>
                          </select>

                         </form>

                          <Button
                            style={{ backgroundColor: "#dcdcdc" }}
                            as={Link}
                            className=" text-gray-600  add rounded-full border"
                            href="#"
                            variant="flat"
                          >
                            {t("Continue")}
                          </Button>
                        </div>
                      </AddProduct>
                    </div>
                  </div>

                  <div
                    style={{ border: "1.5px solid" }}
                    className=" rounded-lg bg-white p-3 mt-2"
                  >
                    <AddProduct title={t("Products Details")}>
                      <div className="bg-white rounded-md p-3 mb-3">
                        <p>{t("Your phone number")}</p>
                      </div>
                      <div
                        style={{ border: "2px solid rgb(210,210,210)" }}
                        className="relative rounded-lg"
                      >
                        <textarea
                        value={description}
                          onChange={(e) => setdescription(e.target.value)}
                          placeholder={t("Describe your item")}
                          className=" rounded-t-lg outline-none p-3 rounded-b-lg h-40 w-full"
                          style={{
                            border: "1px solid rgb(243,243,243)",
                            fontWeight: bold ? "bolder" : "",
                            fontStyle: italic ? "italic" : "",
                          }}
                        />

                        <div
                          style={{ backgroundColor: "#f3f3f3" }}
                          className=" rounded-b-lg absolute bottom-1 w-full h-10 flex items-center ps-4"
                        >
                          <Image
                            onClick={changeBold}
                            alt="alt"
                            src="/bold.png"
                            width={20}
                            height={20}
                          />
                          <Image
                            onClick={changeItalic}
                            className=" ms-3"
                            alt="alt"
                            src="/italic.png"
                            width={20}
                            height={20}
                          />
                        </div>
                      </div>

                      <div className=" grid grid-cols-2 gap-3  mt-4 ">
                        <div className="">
                          <select 
                           onChange={handelConditionOption}
                           class=" mb-4 w-full appearance-none row-start-1 col-start-1 bg-slate-50 dark:bg-slate-800 ...">
                            <option value="">{t("Select Condition")} </option>
                        
                        <option value="Excellent">
                              Excellent
                            </option>
                            <option value="Very Good">
                              Very Good
                            </option>
                            <option value="Good" >
                              Good
                            </option>
                          </select>

                          <select
                           onChange={handelBrandOption}
                          
                          
                           class="mb-4   w-full appearance-none row-start-1 col-start-1 bg-slate-50 dark:bg-slate-800 ...">
                            <option value='' style={{ border: "5px solid red" }}>
                              {t("Select Brand")}
                            </option>
                            <option value='Brandy Melville'>Brandy Melville</option>
                            <option value='Forever 21'>Forever 21</option>
                            <option value='Caddis'>Caddis</option>
                            <option value='Nike'>Nike</option>
                            <option value='New Balance'>New Balance</option>
                            <option value='Aragona'>Aragona</option>
                          </select>
                        </div>
                        <div className="">
                          <select
                          onChange={handelColordOption}
                           class="mb-4  w-full appearance-none row-start-1 col-start-1 bg-slate-50 dark:bg-slate-800 ...">
                            <option value="">{t("Select Color")}</option>
                            <option value="Red">Red</option>
                            <option value="Black">Black</option>
                            <option value="White">White</option>
                            <option value="Blue">Blue</option>
                            <option value="Green">Green</option>
                            <option value="Yellow">Yellow</option>
                            <option value="Green">Green</option>
                          </select>

                          <select
                          
                          onChange={handelSizeOption}
                          
                           class="mb-4  w-full appearance-none row-start-1 col-start-1 bg-slate-50 dark:bg-slate-800 ...">
                            <option value="">{t("Select Model")}</option>
                            <option value="XXL">XXL</option>
                            <option value="S">S</option>
                            <option value="XL">XL</option>
                            <option value="M">M</option>
                            <option value="L">L</option>
                            <option value="3XL">3XL</option>
                          </select>
                        </div>
                      </div>
                    </AddProduct>
                  </div>

                  <div
                    style={{ border: "1.5px solid" }}
                    className=" rounded-lg bg-white p-3 mt-2"
                  >
                    <AddProduct title="Price & Stock">
                      <div className="bg-white rounded-md p-3 mb-3">
                        <p>{t("Your phone number")}</p>
                        <div className=" grid grid-cols-2 gap-2 mt-4 mb-4  ">
                          <div className="w-full">
                            <Input
                            value={newPrice}
                            onChange={(e)=>setnewPrice(e.target.value)}
                              className=" w-full"
                              type="text"
                              label={t("item's price")}
                            />
                            <Input type="text" label={t("SKU")} className=" mt-2" />
                          </div>
                          <div className="">
                        
                            <Input value={discount}  onChange={(e) => setdiscount(e.target.value)}  type="text" label={t("Discount / Sales")} />
                            <Input
                            value={quantity}
                            onChange={(e) => setquantity(e.target.value)} 
                              className=" mt-2"
                              type="text"
                              label={t("Stock / Quantity")}
                            />
                          </div>
                        </div>
                      </div>
                    </AddProduct>
                  </div>

                  <div
                    style={{ border: "1.5px solid", height: "auto" }}
                    className=" rounded-lg bg-white p-3 mt-2"
                  >
                    <AddProduct title="Shipping">
                      <div className="bg-white rounded-md p-3 mb-3">
                        <p>{t("Your phone number")}</p>
                        <div className=" grid grid-cols-2 gap-1 mt-3">
                          <div>
                            <p className=" fw-bolder">{t("Item weight")}</p>
                            <p>{t("Key Facts and Tips")}</p>
                          </div>
                          <Input
                            type="text"
                            label={t("Weight")}
                            style={{ backgroundColor: "transparent" }}
                          />
                        </div>
                        <div className=" grid grid-cols-3 gap-2 mt-3">
                          <Input type="text" label={t("Length")} />
                          <Input type="text" label={t("Wide")} />
                          <Input type="text" label={t("Height")} />
                        </div>
                        <div>
                          <div>
                            <div class="flex items-center justify-between mt-3 mb-3">
                              <div>
                                <h4>{t("Insurance")}</h4>
                                <p>{t("Essential")} </p>
                              </div>
                              <div>
                                <input
                                  id="default-radio-2"
                                  type="radio"
                                  value=""
                                  name="default-radio"
                                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                />
                                <label
                                  for="default-radio-2"
                                  class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                >
                                  {t("Reauired")}
                                </label>

                                <input
                                  id="default-radio-2"
                                  type="radio"
                                  value=""
                                  name="default-radio"
                                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600  ms-3 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                />
                                <label
                                  for="default-radio-2"
                                  class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                >
                                  {t("Optional")}
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                      </div>
                    </AddProduct>
                  </div>

                  <div className=" float-end">
                          <Button
                            as={Link}
                            className=" me-3 bg-white text-black rounded-full border"
                            href="/auth/signup"
                            variant="flat"
                          >
                            {t("save as draf")}
                          </Button>
                          <Button
                            type="submit"
                             
                            className=" bg-black text-white rounded-full"
                           
                            variant="flat"
                          >
                            {t("sell")}
                          </Button>
                  </div>
              </form>

          </div>
          <div
            style={{ height: "auto" }}
            className=" md:col-span-2 border p-4 rounded-lg"
          >
            <h3 className=" font-bold mb-4">{t("Review Product")}</h3>
            <div
              className=" rounded-md"
              style={{
                backgroundColor: "#f3f3f3",
                width: "100%",
                height: "281px",
              }}
            ></div>
          </div>
        </div>
      
    </div>
  );
}

export default SelItems;
