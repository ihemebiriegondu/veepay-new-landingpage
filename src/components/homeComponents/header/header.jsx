import React from "react";
import Nav from "./nav";

import logo from "../../../assets/icons/Veepay Logo (2).png";
import heroImage from "../../../assets/images/Group 14.png";
import MyButtons from "../myButtons";

export default function Header() {
  return (
    <header className="bg-primary/20">
      <Nav />
      <div className="px-4 flex items-center justify-between">
        <div className="basis-2/5">
          <div className="w-140 h-44 mb-3">
            <img
              src={logo}
              alt="veepay logo"
              className="h-full w-full object-contain"
            />
          </div>
          <div className="ps-20 text-sm">
            <p className="font-medium pb-6 text-base">
              Veepay is a three in one telecommunication platform that provides
              its users with hassle-free experience anytime they use its
              product. Veepay intends to connect individuals in ways to pay for
              their favorite services by providing easier, faster and secure
              ways to recharge your favorite brands.
            </p>
            <MyButtons link={'/'} text={'See plans'}/>
          </div>
        </div>
        <div className="">
          <img src={heroImage} alt="hero pic" />
        </div>
      </div>
    </header>
  );
}
