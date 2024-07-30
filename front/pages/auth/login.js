import { Button, Input } from "@nextui-org/react";
import React from "react";
import Image from "next/image";
import Link from "next/link";

function login() {

  return (

    <div className="Authentication">
      <div className=" loginPart  container  ">
      <div className="leftSideLogin  ">
        <h3 className=" text-center	">Login to KIFT</h3>
        <p className=" dntHaveAccnt text-center	">
          Don&lsquo;t have an account?
          <Link className=" font-bold text-center	" href="/sign">
            Sign up
          </Link>
        </p>
        <div className="authO">
          <Button className="googleBtn">
  
            <Image alt="alt"   src="/images/googleIcon.png " width={20} height={20} /> 
            Continuez avec Google
          </Button>

          <Button className="facebookBtn">
            <Image alt="alt"    src="/images/facebook.png " width={20} height={20} /> 
            Continuez avec Facebook
          </Button>
          <Button className="appleBtn">
            <Image alt="alt"  src="/images/Apple.png " width={20} height={20} /> Continuez
            avec Appel
          </Button>
          <div className=" flex items-center	  justify-between">
            <hr></hr> <p>Or</p> <hr></hr>
          </div>
          <div className="loginInput">
            <form className="formLogin" method="POST" action="">
              <div>
                  <Input
                    
                    isClearable
                    type="email"
                    variant="bordered"
                    placeholder="Enter your email"
                    onClear={() => console.log("input cleared")}
                  />

              </div>
             
                  <Input
                    type="password"
                    placeholder="Enter your password"
                    variant="bordered"
                    css={{ margin: "20px" }}
                  />

             
              <Link className="mt-4 float-end" href="/">forget password</Link>

              <Button className="LoginIcon" style={{ backgroundColor:"black", margin: "30px 0px" }}>
                 Log in
              </Button>
            </form>


            <p className="btmTxt" >This site is protected by reCAPTCHA Enterprise and the Google <Link className=" underline" href="">Privacy Policy</Link> and <Link href="/" className=" underline" >Terms of Service</Link> apply.</p>
          </div>
        </div>
      </div>
      <div class="rightSideLogin" >
        <Image alt="alt" width={648} height={819} src="/images/rightImg.png " />
      </div>
    </div>
    </div>
    
  );
}

export default login;
