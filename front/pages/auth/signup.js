import { Button, Input } from "@nextui-org/react";
import React from "react";
import Image from "next/image";
import { EyeFilledIcon } from "../../components/Input/EyeFilledIcon";
import { EyeSlashFilledIcon } from "../../components/Input/EyeSlashFilledIcon";

function SignUp() {
  const variants = ["flat", "bordered", "underlined", "faded"];

  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);
  return (
    <div className=" loginPart  sm:block md:flex md:items-center md:justify-center   ">
      <div className="leftSideLogin  ">
        <h3 className="">Sign up to continue</h3>
        <p style={{ fontSize:"13px" }} className="dntHaveAccnt">
        To like or purchase an item, or to chat with the seller, please create your account.
           
        </p>
        <div className="authO" style={{ marginTop: "2rem" }}>
          <Button className="googleBtn">
  
            <Image src="/images/googleIcon.png " width={20} height={20} />{" "}
            Continuez avec Google
          </Button>

          <Button className="facebookBtn">
            <Image src="/images/facebook.png " width={20} height={20} />{" "}
            Continuez avec Facebook
          </Button>
          <Button className="appleBtn">
            <Image src="/images/Apple.png " width={20} height={20} /> Continuez
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

             
              <a className="mt-4 float-end" href="/">forget password</a>

              <Button className="LoginIcon" style={{ backgroundColor:"black", margin: "30px 0px" }}>
                 Log in
              </Button>
            </form>


            <p className="btmTxt" >Already have an account? <a className=" underline" href="">Log in</a></p>
          </div>
        </div>
      </div>
      <div class="rightSideLogin" >
        <Image width={648} height={819} src="/images/leftimg.png " />
      </div>
    </div>
  );
}

export default SignUp;
