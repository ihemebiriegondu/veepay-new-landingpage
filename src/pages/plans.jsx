import React from "react";
import Footer from "../components/footer";
import PlansTable from "../components/plans/plansTable";
import LogoNav from "../components/login&signupComponents/logoNav";

export default function Plans() {
  return (
    <main className="relative">
      <LogoNav background={"lg:bg-transparent bg-white"} />
      <PlansTable />
      <div className="lg:relative fixed bottom-0 w-full">
        <Footer />
      </div>
    </main>
  );
}
