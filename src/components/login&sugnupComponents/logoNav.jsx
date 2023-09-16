import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoArrowBackOutline } from "react-icons/io5";
import logo from "../../assets/icons/Veepay Logo.png";

export default function LogoNav() {
  const navigate = useNavigate();

  return (
    <nav className="md:pt-2 pt-5 md:pb-0 pb-5 fixed w-full top-0 z-30 md:px-0 px-7 md:bg-transparent bg-white md:shadow-none shadow-md">
      <div className="md:block hidden">
        <Link to={"/"} className="">
          <div className="md:w-40 md:h-12 w-24 h-7">
            <img
              src={logo}
              alt="veepay logo"
              className="w-full h-full object-contain"
            />
          </div>
        </Link>
      </div>
      <IoArrowBackOutline
        className="w-4 h-4 md:hidden inline"
        onClick={() => {
          navigate(-1);
        }}
      />
    </nav>
  );
}
