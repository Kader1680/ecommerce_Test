import { Button, Input } from "@nextui-org/react";
import React from "react";
import Image from "next/image";
import { EyeFilledIcon } from "../../components/Input/EyeFilledIcon";
import { EyeSlashFilledIcon } from "../../components/Input/EyeSlashFilledIcon";

function login() {
  const variants = ["flat", "bordered", "underlined", "faded"];

  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);
  return (

    <div className="Authentication">
      <div className=" loginPart  container  ">
      <div className="leftSideLogin  ">
        <h3 className=" text-center	">Login to KIFT</h3>
        <p className=" dntHaveAccnt text-center	">
          Don't have an account?{" "}
          <a className=" font-bold text-center	" href="/sign">
            Sign up
          </a>
        </p>
        <div className="authO">
          <Button className="googleBtn">
  
            <Image src="/images/googleIcon.png " width={20} height={20} /> 
            Continuez avec Google
          </Button>

          <Button className="facebookBtn">
            <Image src="/images/facebook.png " width={20} height={20} /> 
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


            <p className="btmTxt" >This site is protected by reCAPTCHA Enterprise and the Google <a className=" underline" href="">Privacy Policy</a> and <a className=" underline" >Terms of Service</a> apply.</p>
          </div>
        </div>
      </div>
      <div class="rightSideLogin" >
        <Image width={648} height={819} src="/images/rightImg.png " />
      </div>
    </div>
    </div>
    
  );
}

export default login;
