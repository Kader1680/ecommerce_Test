import Image from "next/image";
import React  from "react";
import docs from "../../public/receipt.png";
import user from "../../public/users 01.png";
import statics from "../../public/static.png";
import invoise from "../../public/invoice.png";
import plus from "../../public/add.png";
import gmail from "../../public/gmail.png";
import packagez from "../../public/package box 01.svg";
import { Progress } from "@nextui-org/react";
import UserMangement from "../../components/userMangement";

function Overview() {

  const headerStatic = [
    { number: 235634, pics: docs, total: "Total Listings", bg: "#c4dcff" },
    {
      number: 235634,
      pics: invoise,
      total: "Total Transactions",
      bg: "#cbffec",
    },
    { number: 235634, pics: user, total: "Active Users", bg: "#ffedd8" },
    { number: 235634, pics: statics, total: "Revenue", bg: "#e9dcff" },
  ];

  const CategoryProgress = [
    { progress: 70, category: "Clothing", color: "primary" },
    { progress: 60, category: "Toys and games", color: "secondary" },
    { progress: 50, category: "Home decor", color: "success" },
    { progress: 40, category: "Electronics", color: "warning" },
    { progress: 30, category: "Handbags", color: "danger" },
  ];

  const activities = [
    {
      id: 1,
      user: 'johndoe',
      action: 'listed a new item',
      item: 'Vintage Leather Jacket',
      price: '$250',
      time: 'Today, 11:00 AM',
      profil: '/pro (1).png',
      imageUrl: '/rep (1).png',
      approved: true,
    },
    {
      id: 2,
      user: 'amylong',
      action: 'sold',
      item: 'Headphones WH-1000XM4',
      price: '$250',
      time: 'Today, 11:00 AM',
      profil: '/pro (2).png',

      imageUrl: '/rep (2).png',
    },
    {
      id: 3,
      user: 'Product Update',
      action: 'Samsung Smart TV price updated',
      item: '$600 to $550',
      time: 'Today, 11:00 AM',
      profil: '/pro (3).png',
      imageUrl: '/rep (3).png',
    },
    {
      id: 4,
      user: 'michaelbrown',
      action: 'Can I get a discount on the iPad Air?',
      profil: '/pro (4).png',
      time: '/rep (4).png',
    },
  ];

  return (
    <div className=" md:grid grid-cols-5 gap-3 p-4">
      
      <div className="col-span-3">


            <div className=" text-center md:flex items-center justify-between gap-3">
                {headerStatic.map((it) => (
                <div key={it.number} className="bg-white p-3 rounded-lg w-full">
                    <div
                    className=" m-auto mt-2 mb-2 p-3 rounded-full w-fit"
                    style={{ backgroundColor: "#c4dcff" }}
                    >
                    <Image alt="alt" width={30} height={30} src={it.pics} />
                    </div>
                    <h3 className=" font-bold text-xl"> {it.number} </h3>
                    <p className=" text-sm text-gray-400">{it.total}</p>
                </div>
                ))}
            </div>

            <div className="md:flex items-center gap-4 mt-3 ">
                <div className="topCategory  w-full bg-white rounded-xl p-3">
                <div className=" ">
                    <h3 className=" font-bold mt-3 mb-3 ms-4">Top Categories</h3>
                    {CategoryProgress.map((el) => (
                    <ul key={el.color}>
                        <li className="grid grid-cols-5 items-center">
                        <div className="grid-cols-2 text-xs mb-2">
                            {el.category}
                        </div>
                            <Progress
                                className ="col-span-3 rounded-sm ms-6 "
                                style={{ width: "100%" }}
                                color={el.color}
                                aria-label="Loading..."
                                value={el.progress}
                            />
                        </li>
                    </ul>
                    ))}
                </div>
                </div>
                
                <div className="w-full rounded-xl ">
                <div className="  flex items-center  rounded-xl  justify-between bg-white p-4  mb-3">
                    <div className=" flex items-center gap-2">
                    <Image src={packagez} alt="alt" width={30} height={30} />
                    <div className=" font-bold">New product</div>
                    </div>
                    <div className=" p-2 border-2  rounded-full ">
                    <Image src={plus} alt="alt" width={15} height={15} />
                    </div>
                </div>
                <div className=" flex items-center mb-3 rounded-xl  justify-between bg-white p-4">
                    <div className=" flex items-center gap-2">
                    <Image src={gmail} alt="alt" width={30} height={30} />
                    <div className=" font-bold">Sending a promo </div>
                    </div>
                    <div className=" p-2 border-2  rounded-full ">
                    <Image src={plus} alt="alt" width={15} height={15} />
                    </div>
                </div>
                <div className=" flex items-center mb-3 rounded-xl    justify-between bg-white p-4">
                    <div
                    className=" flex items-center gap-2
                            "
                    >
                    <Image src={invoise} alt="alt" width={30} height={30} />
                    <div className=" font-bold">Generating a report</div>
                    </div>
                    <div className=" p-2 border-2  rounded-full ">
                    <Image src={plus} alt="alt" width={15} height={15} />
                    </div>
                </div>
                </div>

        
                
            </div>

            <div className=" bg-white rounded-xl p-2 ">
                
                <div>
                <h3 style={{ fontSize: "16px" }} className=" ms-3 text-gray-400">
                    User Management
                </h3>
                <div className="md:flex items-center justify-between gap-2 p-2 ">
                    <div className="flex items-center gap-2">
                    <span className="text-4xl font-bold">$12.7k</span>
                    <span className="text-green-500 font-bold">+10%</span>
                    <p className="text-gray-500">VS LAST YEAR</p>
                    </div>
                    <div className="flex gap-4  bg-gray-200 rounded-lg">
                    <button className=" bg-black text-white  p-2 rounded-md">
                        Daily
                    </button>
                    <button className="bg-gray-200 p-2 rounded-md">Weekly</button>
                    <button className="bg-gray-200 p-2 rounded-md">Annually</button>
                    </div>
                </div>
                </div>
                <UserMangement />
            </div>

      </div>

      <div className=" sm:mt-4 col-span-2 w-full max-w-sm p-4 sm:w-full bg-white rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-4">Recent Activity Feed</h2>
      <div className="flex space-x-4 text-sm font-medium text-gray-600 mb-4">
        <a href="#" className="text-black underline">
          All
        </a>
        <a href="#">New item</a>
        <a href="#">Sale</a>
        <a href="#">Update</a>
        <a href="#">Messages</a>
      </div>
      {activities.map((activity) => (
        <div key={activity.id} className="flex items-start py-2">
          <div className="flex-shrink-0">
            <Image
              width={30}
              height={30}
              src={activity.profil}
              alt={activity.user}
              className="w-10 h-10 rounded-full"
            />
          </div>
          <div className="ml-4 flex-grow">
            <div className="flex justify-between">
              <p className="font-semibold">{activity.user}</p>
              {activity.imageUrl && (
                <div className="ml-4">
                  <Image
                   width={30} height={30}
                    src={activity.imageUrl}
                    alt={activity.item}
                    className="w-10 h-10 object-cover rounded"
                  />
                </div>
              )}
            </div>
            <p>{activity.action}</p>
            <p className="text-sm text-gray-500">{activity.item}</p>
            <p className="text-sm text-gray-500">{activity.price}</p>
            <p className="text-xs text-gray-400">{activity.time}</p>
            {activity.approved !== undefined && (
              <div className="mt-2 flex space-x-2">
                <div className="flex items-center justify-center  p-3 h-8 bg-black text-white rounded-full">
                <button >
                  ✓ 
                </button>
                <p style={{ fontWeight:"lighter" }} className="font-extralight">Approved</p>
                </div>
              
                <button className="flex items-center justify-center w-8 h-8 bg-gray-200 text-black rounded-full">
                  ✕
                </button>
              </div>
            )}
          </div>
        </div>
      ))}
      </div>

    </div>
  );
}

export default Overview;
