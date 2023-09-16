import React from "react";
import SideInfo from "../components/login&sugnupComponents/sideInfo";
import LoginForm from "../components/login&sugnupComponents/loginForm";
import LogoNav from "../components/login&sugnupComponents/logoNav";

export default function Login() {
  return (
    <main className="px-20 absolute top-0 bottom-0 w-full">
      <LogoNav />
      <section className="flex flex-row justify-between items-center gap-x-52 h-full formSection">
        <SideInfo />
        <LoginForm />
      </section>
    </main>
  );
}
