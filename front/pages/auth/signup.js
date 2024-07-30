import { Button, Input } from "@nextui-org/react";
import React from "react";
import Image from "next/image";
 
import Link from "next/link";

function SignUp() {
  const variants = ["flat", "bordered", "underlined", "faded"];

  return (
    <div className=" loginPart  sm:block md:flex md:items-center md:justify-center   ">
      <div className="leftSideLogin  ">
        <h3 className="">Sign up to continue</h3>
        <p style={{ fontSize:"13px" }} className="dntHaveAccnt">
        To like or purchase an item, or to chat with the seller, please create your account.
           
        </p>
        <div className="authO" style={{ marginTop: "2rem" }}>
          <Button className="googleBtn">
  
            <Image alt="alt" src="/images/googleIcon.png " width={20} height={20} />{" "}
            Continuez avec Google
          </Button>

          <Button className="facebookBtn">
            <Image alt="alt" src="/images/facebook.png " width={20} height={20} />{" "}
            Continuez avec Facebook
          </Button>
          <Button className="appleBtn">
            <Image alt="alt" src="/images/Apple.png " width={20} height={20} /> Continuez
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

             
              <Link className="mt-4 float-end" to="/">forget password</Link>

              <Button className="LoginIcon" style={{ backgroundColor:"black", margin: "30px 0px" }}>
                 Log in
              </Button>
            </form>


            <p className="btmTxt" >Already have an account? <Link className=" underline" to="">Log in</Link></p>
          </div>
        </div>
      </div>
      <div class="rightSideLogin" >
        <Image alt="alt" width={648} height={819} src="/images/leftimg.png " />
      </div>
    </div>
  );
}

export default SignUp;
