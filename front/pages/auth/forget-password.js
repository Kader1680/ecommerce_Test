import React, { useState } from "react";
import { Button, Image, Input } from "@nextui-org/react";
import axios from "axios";
import { useRouter } from "next/router";

function ForgetPassword() {
  const router = useRouter()
  const [email, setemail] = useState("");

  const handelInput = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("email", email);

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/forget-password",
        formData
      );

      if (response.data.message === "Email Sended Successfuly !") {
        console.log("email was sended");
        router.push("/auth/reset-password/")
      }
    } catch (error) {
       console.log(error)
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm">
      <div className=" flex items-center justify-between mb-3">
        <h2 className="text-xl font-bold mt-3 mb-3">{"Froget Password"}</h2>

        <div className=" bg-slate-200 p-2 rounded-full">
          <Image width={18} height={18} alt="close" src="/close.png" />
        </div>
      </div>

      <form method="POST" onSubmit={handelInput}>
        <div className="mb-4">
          <Input
            value={email}
            isClearable
            type="eamil"
            variant="bordered"
            placeholder="Enter Email"
            onChange={(e) => setemail(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <Button
         
          className=" bg-white text-black rounded-full border"
          href="/auth/signup"
          variant="flat"
        >
          {"cancel"}
        </Button>
        <Button
         type="submit"
          className=" ms-2 bg-black text-white rounded-full"
          href="#"
          variant="flat"
        >
          {"Submit"}
        </Button>
      </form>
    </div>
  );
}

export default ForgetPassword;
