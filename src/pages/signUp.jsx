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
        <section className="xl:px-20 md:px-12 px-6 lg:pt-40 pt-10 pb-20 flex flex-row justify-between items-center xl:gap-x-52 gap-x-44 h-full lg:bg-white bg-mobileFormBg formSection">
          <SignUpForm sucessType={setSucessForm} />
          <SideInfo page={'signup'} sideText={'Already Signed Up?'} sideActionText={''} sideStep={'then proceed to login to your account'} sideButton={'Login'} sideLink={'/login'} />
        </section>
      </main>

      {sucessForm && <Feedbacks text={"Sign Up Successful"} subtext={'Explore!'} />}
    </div>
  );
}
