import React, { useState } from "react";
import LogoNav from "../components/login&signupComponents/logoNav";
import SideInfo from "../components/login&signupComponents/sideInfo";
import SignUpForm from "../components/login&signupComponents/signUpForm";
import Feedbacks from "../components/login&signupComponents/feedbacks";

export default function SignUp() {
  const [sucessForm, setSucessForm] = useState(false)

  return (
    <div>
      <main className="absolute top-0 bottom-0 w-full z-20 md:bg-transparent bg-mobileFormBg">
        <LogoNav />
        <section className="xl:px-20 md:px-12 px-6 lg:pt-40 pt-10 pb-20 flex flex-row justify-between items-center xl:gap-x-52 gap-x-44 h-full lg:bg-transparent bg-mobileFormBg formSection">
          <SignUpForm sucessType={setSucessForm} />
          <SideInfo sideText={'Already Signed Up?'} sideActionText={''} sideStep={'then proceed to login to your account'} sideButton={'Login'} sideLink={'/login'} />
        </section>
      </main>
      <div className="bg-formBg fixed top-0 bottom-0 2xl:-right-28 xl:-right-20 -right-28 xl:w-5/12 lg:w-1/2 w-5/12 z-10 skew-x-8 lg:block hidden"></div>

      {sucessForm && <Feedbacks text={"Sign Up Successful"} subtext={'Explore!'} />}
    </div>
  );
}
