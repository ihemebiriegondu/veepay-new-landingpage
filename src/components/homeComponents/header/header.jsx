import React from "react";
import Nav from "./nav";

import logo from "../../../assets/icons/Veepay Logo (2).png";
import heroImage from "../../../assets/images/Group 14.png";
import heroImageMobile from "../../../assets/images/Group 13.png";
import MyButtons from "../myButtons";

export default function Header() {
  return (
    <header className="bg-primary/20">
      <Nav />
      <div className="px-4 flex lg:flex-row flex-col lg:gap-4 gap-8 items-center justify-between">
        <div className="lg:basis-2/5 lg:block flex flex-col items-center">
          <div className="md:w-140 sm:w-52 w-full md:h-44 sm:h-24 mb-3">
            <img
              src={logo}
              alt="veepay logo"
              className="h-full w-full object-contain"
            />
          </div>
          <div className="lg:px-0 lg:ps-20 sm:px-6 text-sm lg:text-start text-center md:text-base text-sm">
            <p className="font-medium md:pb-6 pb-4">
              Veepay is a three in one telecommunication platform that provides
              its users with hassle-free experience anytime they use its
              product. Veepay intends to connect individuals in ways to pay for
              their favorite services by providing easier, faster and secure
              ways to recharge your favorite brands.
            </p>
            <div className="italic underline md:text-base text-xs">
              <MyButtons link={"/"} text={"Start now"} />
            </div>
          </div>
        </div>
        <div className="">
          <img src={heroImage} alt="hero pic"  className="md:block hidden"/>
          <img src={heroImageMobile} alt="hero pic" className="md:hidden block" />
        </div>
      </div>
    </header>
  );
}
