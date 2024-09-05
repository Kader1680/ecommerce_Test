import { Button, Input } from "@nextui-org/react";
import React, { useState } from "react";
import Image from "next/image";
import axios from "axios";
import Link from "next/link";
import googleIcon from "../../public/googleIcon.png";
import facebookIcon from "../../public/facebook.png";
import appleIcon from "../../public/Apple.png";
import { useRouter } from "next/router";
import { useTranslation } from '../../context/TranslationContext';
import { isRtl } from '../../utils/directions';

function SignUp() {
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleInput = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("email", email);
    formData.append("name", name);
    formData.append("password", password);

    try {
      const response = await axios.post("http://127.0.0.1:8000/api/register", formData);
      console.log(response.data.message);
      router.push('/profile');
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const { locale } = useRouter();
  const direction = isRtl(locale) ? 'rtl' : 'ltr';

  return (
    <div style={{ direction }} className="loginPart sm:block md:flex md:items-center md:justify-center">
      <div className="leftSideLogin">
        <h3>{t("regTitle")}</h3>
        <p className="dntHaveAccnt" style={{ fontSize: "13px" }}>
          {t("regcontent")}
        </p>
        <div className="authO" style={{ marginTop: "2rem" }}>
          <Button className="googleBtn">
            <Image alt="Google Icon" src={googleIcon} width={20} height={20} />
            {t("google")}
          </Button>

          <Button className="facebookBtn">
            <Image alt="Facebook Icon" src={facebookIcon} width={20} height={20} />
            {t("facebook")}
          </Button>
          
          <Button className="appleBtn">
            <Image alt="Apple Icon" src={appleIcon} width={20} height={20} />
            {t("apple")}
          </Button>

          <div className="flex items-center justify-between">
            <hr /> <p>Or</p> <hr />
          </div>

          <div className="loginInput">
            <form className="formLogin" method="POST" onSubmit={handleInput}>
              <div>
                <Input
                  className="mt-4 mb-2"
                  value={name}
                  isClearable
                  type="text"
                  variant="bordered"
                  placeholder={t("enterName")}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              
              <div>
                <Input
                  className="mt-2 mb-2"
                  value={email}
                  isClearable
                  type="email"
                  variant="bordered"
                  placeholder={t("enterEmail")}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <Input
                className="mt-2 mb-2"
                value={password}
                type="password"
                variant="bordered"
                placeholder={t("enterPassword")}
                onChange={(e) => setPassword(e.target.value)}
              />

              <div className="items-center justify-around flex text-black" style={{ fontSize: "12px" }}>
                <input type="checkbox" style={{ width: "12px" }} />
                <p>{t("policyRegi")}</p>
              </div>

              <Button className="w-full mt-4 mb-4" type="submit">
                {t("register")}
              </Button>
            </form>

            <p className="btmTxt float-enb">
              {t("dontHvAccount")}{" "}
              <Link href="/auth/login">
                <span className="bolder underline to-black">{t("loginacount")}</span>
              </Link>
            </p>
          </div>
        </div>
      </div>

      <div className="rightSideLogin">
        <Image alt="Right Side Image" src="/rightImg.png" width={648} height={819} />
      </div>
    </div>
  );
}

export default SignUp;
