import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/icons/Veepay Logo.png";

export default function LogoNav() {
  return (
    <nav className="pt-2 fixed w-full top-0">
      <Link to={"/"}>
        <div className="md:w-40 md:h-12 w-24 h-7">
          <img
            src={logo}
            alt="veepay logo"
            className="w-full h-full object-contain"
          />
        </div>
      </Link>
    </nav>
  );
}
