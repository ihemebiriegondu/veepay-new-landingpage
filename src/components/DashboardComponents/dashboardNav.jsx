import React from "react";
import { Link } from "react-router-dom";
import { IoLogOut } from "react-icons/io5";
import { MdSpaceDashboard, MdPerson, MdSettings } from "react-icons/md";
import { HiMiniQuestionMarkCircle, HiMiniPlus } from "react-icons/hi2";
import logo from "../../assets/icons/Veepay Logo.png";

export default function DashboardNav(props) {
  const navs = [
    { tab: "Dashboard", tabIcon: <MdSpaceDashboard /> },
    { tab: "Profile", tabIcon: <MdPerson /> },
    { tab: "About Us", tabIcon: "" },
    { tab: "Settings", tabIcon: <MdSettings /> },
    { tab: "FAQs", tabIcon: <HiMiniQuestionMarkCircle /> },
    { tab: "Contact Us", tabIcon: "" },
  ];

  return (
    <nav className="md:w-2/12 w-full bg-formBg fixed md:top-0 bottom-0 md:left-0 z-50">
      <div className="md:flex flex-col justify-between md:pt-4 md:pb-8 h-full">
        <div className="md:flex flex-col md:gap-12">
          <div className="md:block hidden">
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

          <ul className="md:flex flex-col grid grid-cols-5 md:place-items-start place-items-center md:text-lg text-3xl md:py-0 py-4 md:px-0 px-5 md:gap-8 gap-4">
            {navs &&
              navs.map((nav, i) => (
                <li
                  key={nav.tab}
                  onClick={() => {
                    props.activeTab(nav.tab);
                  }}
                  className={`font-semibold cursor-pointer md:ps-5 md:border-l md:border-l-4 rounded-sm transition duration-200 ease-in md:text-start text-center w-fit ${
                    props.tabCheck === nav.tab
                      ? "md:text-black text-primary md:border-primary"
                      : "text-black/50 hover:md:text-black hover:text-primary border-formBg"
                  } ${
                    nav.tabIcon === ""
                      ? "md:inline-block hidden"
                      : "inline-block"
                  } ${
                    i + 1 < 3
                      ? `md:order-none order-1`
                      : `md:order-none order-3`
                  }`}
                >
                  <span className="md:inline hidden">{nav.tab}</span>
                  <span className="md:hidden inline">{nav.tabIcon}</span>
                </li>
              ))}

            <div className="order-2 relative flex justify-center w-full">
              <div className="absolute bottom-0 text-white bg-white p-2 rounded-b-full">
                <div className="bg-primary rounded-full p-2 w-fit">
                  <HiMiniPlus />
                </div>
              </div>
            </div>
          </ul>
        </div>

        <p className="md:flex items-center gap-2.5 ps-6 hidden">
          <IoLogOut className="-scale-x-100 w-5 h-5" />
          <span className="text-base">Log out</span>
        </p>
      </div>
    </nav>
  );
}
