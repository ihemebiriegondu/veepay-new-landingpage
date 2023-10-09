import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoArrowBackOutline } from "react-icons/io5";
import logo from "../../assets/icons/Veepay Logo.png";

export default function LogoNav({background}) {
  const navigate = useNavigate();

  return (
    <nav className={`lg:pt-2 pt-5 lg:pb-0 pb-5 lg:fixed relative w-full top-0 z-30 lg:px-0 px-7 lg:shadow-none shadow-lg ${background}`}>
      <div className="lg:inline-block hidden">
        <Link to={"/"} className="inline-block">
          <div className="lg:w-40 lg:h-12 w-24 h-7 inline-block">
            <img
              src={logo}
              alt="veepay logo"
              className="w-full h-full object-contain"
            />
          </div>
        </Link>
      </div>

      <IoArrowBackOutline
        className="w-4 h-4 lg:hidden inline cursor-pointer"
        onClick={() => {
          navigate(-1);
        }}
      />
    </nav>
  );
}
