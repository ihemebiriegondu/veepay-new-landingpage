import React from "react";
import { Link } from "react-router-dom";
import { IoLogOut } from "react-icons/io5";
import { BiSolidMessageDots } from "react-icons/bi";
import { MdSpaceDashboard, MdPerson, MdSettings } from "react-icons/md";
import {
  HiMiniPlus,
  HiMiniInformationCircle,
} from "react-icons/hi2";
import logo from "../../assets/icons/Veepay Logo.png";
import logo2 from "../../assets/icons/Logo (1).png";
import navBg from "../../assets/images/Rectangle 1 (1).png";

export default function DashboardNav(props) {
  const navs = [
    { tab: "Dashboard", tabIcon: <MdSpaceDashboard />, mobile: true },
    { tab: "Profile", tabIcon: <MdPerson />, mobile: true },
    { tab: "Settings", tabIcon: <MdSettings />, mobile: true },
    { tab: "About Us", tabIcon: <HiMiniInformationCircle />, mobile: true },
    { tab: "Contact Us", tabIcon: <BiSolidMessageDots />, mobile: false },
  ];

  return (
    <nav className="1.5xl:w-2/12 md:w-fit w-full md:bg-formBg fixed md:top-0 bottom-0 md:left-0 z-40">
      <div className="md:flex flex-col justify-between 1.5xl:pt-4 md:pb-8 h-full">
        <div className="md:flex flex-col 1.5xl:gap-12 lg:gap-16 md:gap-12 relative">
          <div className="md:block hidden">
            <Link
              to={"/"}
              className="inline-block 1.5xl:py-0 py-4 1.5xl:bg-transparent bg-primary"
            >
              <div className="lg:h-12 h-7 1.5xl:w-40 w-20 inline-block">
                <img
                  src={logo}
                  alt="veepay logo"
                  className="w-full h-full object-contain 1.5xl:inline-block hidden -ms-2"
                />
                <img
                  src={logo2}
                  alt="veepay logo"
                  className="w-full h-full object-scale-down 1.5xl:hidden md:block hidden"
                />
              </div>
            </Link>
          </div>

          <ul className="md:flex flex-col grid grid-cols-5 md:place-items-start place-items-center 1.5xl:text-lg text-2xl md:py-0 py-4 md:px-0 px-5 1.5xl:gap-8 lg:gap-12 md:gap-9 gap-4">
            {navs &&
              navs.map((nav, i) => (
                <li
                  key={nav.tab}
                  onClick={() => {
                    props.activeTab(nav.tab);
                  }}
                  className={`flex-col-reverse items-center font-semibold cursor-pointer md:ps-5 1.5xl:pe-0 md:pe-7 md:border-l md:border-l-4 rounded-sm transition duration-200 ease-in md:text-start text-center w-fit relative z-50 ${
                    props.tabCheck === nav.tab
                      ? "md:text-black text-primary md:border-primary"
                      : "text-black/50 hover:md:text-black hover:text-primary border-formBg"
                  } ${
                    !nav.mobile
                      ? "1.5xl:inline-block md:flex hidden"
                      : "1.5xl:inline-block flex"
                  } ${
                    i + 1 < 3
                      ? `md:order-none order-1`
                      : `md:order-none order-3`
                  }`}
                >
                  <span className="1.5xl:inline hidden 1.5xl:text-lg text-xxs 1.5xl:leading-7 leading-none">
                    {nav.tab}
                  </span>
                  <span className="1.5xl:hidden inline">{nav.tabIcon}</span>
                </li>
              ))}

            <div className="order-2 relative flex justify-center w-full md:hidden block xs:text-4xl text-3xl">
              <div className="absolute bottom-0 text-white p-2 rounded-b-full">
                <div className="bg-primary rounded-full sm:p-3 p-2 w-fit">
                  <HiMiniPlus />
                </div>
              </div>
            </div>
          </ul>
          <div className="absolute top-0 bottom-0 z-40 w-full h-full md:hidden block">
            <img src={navBg} alt="curved bg" className="w-full h-full object-fill" />
          </div>
        </div>

        <p className="md:flex items-center gap-2.5 ps-6 hidden">
          <IoLogOut className="-scale-x-100 w-5 h-5" />
          <span className="text-base 1.5xl:inline hidden">Log out</span>
        </p>
      </div>
    </nav>
  );
}
