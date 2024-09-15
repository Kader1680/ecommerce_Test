import React, { useState } from "react";
import { Button, Image, Input } from "@nextui-org/react";
import axios from "axios";
import { useRouter } from 'next/router'

function RestPassword() {
  const router = useRouter();
  const tocken = (router.query)
  const Tocken = tocken.token
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmPass, setconfirmPass] = useState("");
  const [tockenValue, setTockenValue] = useState(Tocken);
  
  const handelInput = async (e) => {
    e.preventDefault();
  
    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    formData.append("password_confirmation", confirmPass);  
    formData.append("token", Tocken);  
  
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/reset-password",
        formData
      );
  
      if (response.data === "Password Updated Successfuly !") {
        console.log(response.data)
        router.push('/auth/login')
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm">
      <div className=" flex items-center justify-between mb-3">
        <h2 className="text-xl font-bold mt-3 mb-3">{"Reset Password"}</h2>

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


        <div className="mb-4">
          <Input
            value={password}
            isClearable
            type="eamil"
            variant="bordered"
            placeholder="New Password"
            onChange={(e) => setpassword(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>


        <div className="mb-4">
          <Input
            value={confirmPass}
            isClearable
            type="eamil"
            variant="bordered"
            placeholder="Confirm Password"
            onChange={(e) => setconfirmPass(e.target.value)}
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

export default RestPassword;
