import React from "react";
import SideInfo from "../components/login&sugnupComponents/sideInfo";
import LoginForm from "../components/login&sugnupComponents/loginForm";
import LogoNav from "../components/login&sugnupComponents/logoNav";

export default function Login() {
  return (
    <div>
      <main className="absolute top-0 bottom-0 w-full z-20 md:bg-transparent bg-mobileFormBg">
        <LogoNav />
        <section className="lg:px-20 md:px-12 px-6 pt-10 pb-10 flex flex-row justify-between items-center gap-x-52 h-full md:bg-transparent bg-mobileFormBg formSection">
          <SideInfo />
          <LoginForm />
        </section>
      </main>
      <div className="bg-formBg absolute top-0 bottom-0 -left-28 w-5/12 z-10 -skew-x-8 md:block hidden"></div>
    </div>
  );
}
