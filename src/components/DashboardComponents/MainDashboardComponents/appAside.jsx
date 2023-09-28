import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/icons/Veepay Logo.png";
import mobileApp from "../../../assets/images/Group 18.png";
import notIcon from '../../../assets/icons/notification 3d 1 (1).png'
import AirplanePath from "./airplanePath";

export default function AppAside() {
  return (
    <div className="mt-8 bg-white p-4 rounded-xl grow relative">
      <div>
        <Link to={"/"} className="inline-block">
          <div className="lg:w-32 lg:h-10 w-20 h-5 inline-block">
            <img
              src={logo}
              alt="veepay logo"
              className="w-full h-full object-contain"
            />
          </div>
        </Link>
      </div>
      <div>
        <h1 className="mt-9 text-3xl ps-10 font-normal">
          Our <br /> <span className="font-semibold">mobile app</span>
        </h1>
      </div>
      <div className="bg-primary mt-5 ms-10 text-white p-3 w-fit rounded-tl-3xl rounded-br-3xl rounded-tr-lg rounded-bl-lg shadow-lg skew-x-6 skew-y-6 mb-28">
        <h1 className="text-3xl font-extrabold">Coming Soon</h1>
      </div>
      <div className="relative">
        <img src={mobileApp} alt="mobile app img" />
        <div className="absolute top-0 right-0">
            <img src={notIcon} alt="notofication icon" />
        </div>
      </div>

      <AirplanePath />
    </div>
  );
}
