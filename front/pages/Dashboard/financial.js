import React, { useState } from "react";
import {DateInput} from "@nextui-org/react";
import {CalendarDate, parseDate} from "@internationalized/date";
import { Image } from "@nextui-org/react";
import CustomerSegement from "./finance/customerSegement";
import CustomerList from "./finance/customerList";
import GroupeCustomer from "./finance/groupeCustomer";

function Financial() {
  const staticData = [
    { name: "Total revenue", it2: "AED 5,343.35", up: "21.01" },
    { name: "Expenses", it2: "AED 5,343.35", up: "21.01" },
    { name: "Profits", it2: "AED 5,343.35", up: "21.01" },
    { name: "Losses", it2: "AED 5,343.35", up: "21.01" },
  ];

  const itemCustomer = [
    { name: "Payments and Transactions", pic: "/transf.png" },
    { name: "Invoices and Billing", pic: "/transf.png" },
    { name: "Payouts to Sellers", pic: "/transf.png" },
  ];

  const [item, setitem] = useState("Payments and Transactions");
  const handelCustomerItem = () => {
    switch (item) {
      case "Payments and Transactions":
        return <CustomerList />;

      case "Invoices and Billing":
        return <GroupeCustomer />;
      case "Payouts to Sellers":
        return <CustomerSegement />;
    }
  };
  return (
    <div className="overflow-x-auto  p-3">
      <h4 className="fontLg">Financial Management</h4>

      <div className=" flex rounded-xl mt-4 mb-4  w-fit p-1">
        <div className="p-2 flex items-center bg-white gap-2 rounded-xl">
          {staticData.map((el) => (
            <div
              key={el}
              className="rounded-lg  w-fit bg-white  fontmd flex items-center pt-1 pb-1 ps-2 pe-2  gap-1 "
            >
              <div
                style={{ backgroundColor: "#e9dcff" }}
                className=" rounded-lg p-4"
              >
                <Image alt="alt" width={20} height={20} src="/histo.png" />
              </div>
              <div>
                <p style={{ color: "#8b8c8c" }}> {el.name} </p>
                <p className=" font-bold"> {el.it2} </p>
                <div className="flex items-center" style={{ color: "#2db180" }}>
                  <Image className=" me-1" alt="alt" src="/Arrow.png" />
                  <p>+{el.up}%</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className=" flex rounded-xl mt-4 mb-4  w-fit p-1">
        <div className="p-2 flex items-center bg-white gap-2 rounded-xl">
          {itemCustomer.map((it) => (
            <div
              key={it}
              onClick={() => setitem(it.name)}
              className="rounded-lg  w-fit border p-2 fontmd flex items-center hover:bg-black hover:text-white gap-1 "
            >
              <Image alt="alt" width={20} height={20} src={it.pic} />
              <span className="fontmd">{it.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-start gap-2">
        <div>
          <form class="max-w-sm mx-auto">
            <select
              style={{ border: "1px solid #e8e8e8" }}
              id="countries"
              class="bg-white border   text-gray-900 text-sm rounded-md   block w-full p-2.5 "
            >
              <option selected>Status</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
          </form>
        </div>

        <div>
          <form class="max-w-sm mx-auto">
            <select
              style={{ border: "1px solid #e8e8e8" }}
              id="countries"
              class="bg-white border   text-gray-900 text-sm rounded-md   block w-full p-2.5 "
            >
              <option selected>Brand</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
          </form>
        </div>

        {/* <div>
        <DateInput
          label="Date Input"
          defaultValue={parseDate("2024-04-04")}
          placeholderValue={new CalendarDate(1995, 11, 6)}
          labelPlacement="outside"
          startContent={
            <CalendarDate className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
          }
        />

        </div> */}
        <form class="max-w-md float-end ">
          <label
            for="default-search"
            class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>

          <div class="relative">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <Image alt="alt" width={15} height={15} src="/searchicon.png" />
            </div>
            <input
              type="search"
              id="default-search"
              class="block  p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white outline-none "
              placeholder="Search orders,buyer,seller"
              required
            />
          </div>
        </form>
      </div>

      {handelCustomerItem()}

      <nav
        aria-label="Page navigation example"
        className=" float-end mt-2 mb-2"
      >
        <ul class="inline-flex -space-x-px text-base h-10">
          <li>
            <a
              href="#"
              class="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-black hover:text-white "
            >
              First
            </a>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300   hover:bg-black hover:text-white"
            >
              1
            </a>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300   hover:bg-black hover:text-white"
            >
              2
            </a>
          </li>
          <li>
            <a
              href="#"
              aria-current="page"
              class="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300   hover:bg-black hover:text-white"
            >
              3
            </a>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300   hover:bg-black hover:text-white"
            >
              4
            </a>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300  hover:bg-black hover:text-white"
            >
              5
            </a>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-e-lg hover:bg-black hover:text-white"
            >
              Last
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Financial;
