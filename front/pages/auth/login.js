import { Button, Input } from "@nextui-org/react";
import React, { useState } from "react";
import Image from 'next/image';
import Link from "next/link";
import googleIcon from "../../public/googleIcon.png"
import facebook from "../../public/facebook.png"
import Apple from "../../public/Apple.png"
import { useRouter } from "next/router";
import axios from "axios";
import Failed from "../../components/failed";
// import rightImg from "../../public/rightImg.png"
 
function login() {

  
  
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [message, setmessage] = useState(false);


  function alertfunc() {
    setmessage(!message)
  }

  const router = useRouter()
  // const alerts = () => {alert('dfdfd')}
  const handelInput = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);

    try {
      const response = await axios.post("http://127.0.0.1:8000/api/login", formData);
      
      if (response.data.message === "succesfull login information") {
           router.push('/profil')
        
      } 

    
      
    } catch (error) {
      alertfunc('d')

    }
  };



  return (

    <div   className="Authentication">
      <div className=" loginPart  container  ">
      <div className="leftSideLogin  ">


      
         
        <h3 className=" text-start mb-2	">Login to KIFT</h3>
        <p className="mb-3 dntHaveAccnt text-start	">
          Don&lsquo;t have an account?
          <Link className=" font-bold text-center ms-1  	" href="/auth/signup">
            Sign up
          </Link>
        </p>
        <div className="authO">
          <Button className="googleBtn">
  
            <Image alt="alt"   src={googleIcon} width={20} height={20} /> 
            Continuez avec Google
          </Button>

          <Button className="facebookBtn">
            <Image alt="alt"    src={facebook} width={20} height={20} /> 
            Continuez avec Facebook
          </Button>
          <Button className="appleBtn">
            <Image alt="alt"  src={Apple} width={20} height={20} /> Continuez
            avec Appel
          </Button>
          <div className=" flex items-center ms-3 mb-3  justify-between">
            <hr></hr> <p>Or</p> <hr></hr>
          </div>
          <div className="loginInput">

          <div style={{ display: message ? "block" : "none" }} class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
            <strong class="font-bold">Email or Password are Invalid !</strong>
            <span class="block sm:inline">Try Again .</span>
            <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
              <svg class="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
            </span>
          </div>
            <form className="formLogin" method="POST" onSubmit={handelInput}>
             
                  <Input
                  
                  className="mb-2"
                  value={email}
                  isClearable
                  type="text"
                  variant="bordered"
                  placeholder="Enter Email"
                  onChange={(e) => setemail(e.target.value)}
                  />

             
             
                  <Input
                  
                    value={password}
                    isClearable
                    type="password"
                    variant="bordered"
                    placeholder="Enter Password"
                    onChange={(e) => setpassword(e.target.value)}
                  />

             
              <Link className="mt-4 float-end" href="/">forget password</Link>

              <Button type="submit" className="LoginIcon" style={{ backgroundColor:"black", margin: "30px 0px" }}>
                 Log in
              </Button>

            </form>


            <p className="btmTxt" >This site is protected by reCAPTCHA Enterprise and the Google <Link className=" underline" href="">Privacy Policy</Link> and <Link href="/" className=" underline" >Terms of Service</Link> apply.</p>
          </div>
        </div>
      </div>
      <div className="rightSideLogin" >
        <Image alt="alt" width={648} height={819} src='/rightImg.png' />
      </div>
    </div>
    </div>
    
  );
}

export default login;
