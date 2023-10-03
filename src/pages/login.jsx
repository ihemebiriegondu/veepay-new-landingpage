import React, { useState } from "react";
import SideInfo from "../components/login&signupComponents/sideInfo";
import LoginForm from "../components/login&signupComponents/loginForm";
import LogoNav from "../components/login&signupComponents/logoNav";
import Feedbacks from "../components/login&signupComponents/feedbacks";

export default function Login() {
  const [sucessForm, setSucessForm] = useState(false);

  return (
    <div className="">
      <main className="absolute top-0 bottom-0 w-full z-20 md:bg-transparent bg-mobileFormBg">
        <LogoNav />
        <section className="xl:px-20 md:px-12 px-6 pt-10 pb-10 flex flex-row justify-between items-center xl:gap-x-52 gap-x-44 h-full lg:bg-white bg-mobileFormBg formSection">
          <SideInfo page={'login'} sideText={'Don’t have an Account?'} sideActionText={'Sign Up'} sideStep={'Fill up some informations and start journey with us.'} sideButton={'Sign up'}sideLink={'/signUp'} />
          <LoginForm sucessType={setSucessForm} />
        </section>
      </main>

      {sucessForm && <Feedbacks text={'Login Successful'} subtext={'Enjoy!'} />}
    </div>
  );
}
