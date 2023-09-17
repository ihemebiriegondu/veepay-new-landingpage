import React, { useState } from "react";
import SideInfo from "../components/login&sugnupComponents/sideInfo";
import LoginForm from "../components/login&sugnupComponents/loginForm";
import LogoNav from "../components/login&sugnupComponents/logoNav";
import Feedbacks from "../components/login&sugnupComponents/feedbacks";

export default function Login() {
  const [sucessForm, setSucessForm] = useState("");

  return (
    <div>
      <main className="absolute top-0 bottom-0 w-full z-20 md:bg-transparent bg-mobileFormBg">
        <LogoNav />
        <section className="xl:px-20 md:px-12 px-6 pt-10 pb-10 flex flex-row justify-between items-center xl:gap-x-52 gap-x-44 h-full md:bg-transparent bg-mobileFormBg formSection">
          <SideInfo />
          <LoginForm sucessType={setSucessForm} />
        </section>
      </main>
      <div className="bg-formBg absolute top-0 bottom-0 2xl:-left-28 xl:-left-20 -left-20 xl:w-5/12 lg:w-1/2 w-5/12 z-10 -skew-x-8 md:block hidden"></div>

      {sucessForm !== "" && <Feedbacks text={sucessForm === "login" ? 'Login Successful' : 'Sign Up Successful'} />}
    </div>
  );
}
