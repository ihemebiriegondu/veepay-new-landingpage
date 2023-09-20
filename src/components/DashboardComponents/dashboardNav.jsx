import React from "react";
import { Link } from "react-router-dom";
import { IoLogOut } from "react-icons/io5";
import logo from "../../assets/icons/Veepay Logo.png";

export default function DashboardNav(props) {
  const navs = [
    { tab: "Dashboard" },
    { tab: "Profile" },
    { tab: "About Us" },
    { tab: "Settings" },
    { tab: "FAQs" },
    { tab: "Contact Us" },
  ];

  return (
    <nav className="flex flex-col justify-between w-2/12 bg-formBg fixed top-0 bottom-0 left-0 pt-4 pb-8">
      <div className="flex flex-col gap-12">
        <div>
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

        <ul className="flex flex-col text-lg gap-8">
          {navs &&
            navs.map((nav) => (
              <li
                key={nav.tab}
                onClick={() => {
                  props.activeTab(nav.tab);
                }}
                className={`font-semibold cursor-pointer ps-5 border-l border-l-4 rounded-sm transition duration-200 ease-in ${
                  props.tabCheck === nav.tab
                    ? "text-black border-primary"
                    : "text-black/50 hover:text-black border-formBg"
                }`}
              >
                {nav.tab}
              </li>
            ))}
        </ul>
      </div>

      <p className="flex items-center gap-2.5 ps-6">
        <IoLogOut className="-scale-x-100 w-5 h-5" />
        <span className="text-base">Log out</span>
      </p>
    </nav>
  );
}
