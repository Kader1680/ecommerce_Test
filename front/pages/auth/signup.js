import { Button, Input } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import Link from "next/link";
import googleIcon from "../../public/googleIcon.png";
import facebook from "../../public/facebook.png";
import Apple from "../../public/Apple.png";
import { useRouter } from "next/router";

function SignUp() {

  
  const [name, setName] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const router = useRouter();
  const handelInput = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("email", email);
    formData.append("name", name);
    formData.append("password", password);

    try {
      const response = await axios.post("http://127.0.0.1:8000/api/register", formData);
      console.log(response.data.message);
      router.push('/profile')

    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="loginPart sm:block md:flex md:items-center md:justify-center">
      <div className="leftSideLogin">
        <h3>Sign up to continue</h3>
        <p style={{ fontSize: "13px" }} className="dntHaveAccnt">
          To like or purchase an item, or to chat with the seller, please create your account.
        </p>
        <div className="authO" style={{ marginTop: "2rem" }}>
          <Button className="googleBtn">
            <Image alt="alt" src={googleIcon} width={20} height={20} />
            Continuez avec Google
          </Button>

          <Button className="facebookBtn">
            <Image alt="alt" src={facebook} width={20} height={20} />
            Continuez avec Facebook
          </Button>
          <Button className="appleBtn">
            <Image alt="alt" src={Apple} width={20} height={20} />
            Continuez avec Apple
          </Button>
          <div className="flex items-center justify-between">
            <hr /> <p>Or</p> <hr />
          </div>
          <div className="loginInput">
            <form className="formLogin" method="POST" onSubmit={handelInput}>
              <div>
                <Input
                  className=" mt-4 mb-2"
                  value={name}
                  isClearable
                  type="text"
                  variant="bordered"
                  placeholder="Enter Name"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <Input
                  className=" mt-2 mb-2"

                  value={email}
                  isClearable
                  type="email"
                  variant="bordered"
                  placeholder="Enter Email"
                  onChange={(e) => setemail(e.target.value)}
                />
              </div>
              <Input
                className=" mt-2 mb-2"

                value={password}
                type="password"
                placeholder="Enter Password"
                variant="bordered"
                css={{ margin: "20px" }}
                onChange={(e) => setpassword(e.target.value)}
              />
              <div style={{ fontSize:"12px" }}  className=" items-center justify-around flex text-black">
                  <input style={{ width:"12px" }} type="checkbox" />
                  <p>I agree to the KIFT <span className=" underline">Terms of Service</span> and <span  className=" underline">Privacy Policy</span></p>
              </div>
               <Button className=" w-full mt-4 mb-4" type="submit">Register</Button><br></br>
              
            </form>
            <p className="btmTxt float-enb">
              Already have an account? <Link className=" bolder underline to-black" href="/auth/login">Log in</Link>
      
            </p>
          </div>
        </div>
        
      </div>
      <div className="rightSideLogin" >
        <Image alt="alt" width={648} height={819} src='/rightImg.png' />
      </div>
    </div>
  );
}

export default SignUp;
