import React from "react";
import { GoBellFill } from "react-icons/go";
import avatar from "../../assets/images/Vector.png";
import { Link } from "react-router-dom";
import Wallet from "./MainDashboardComponents/walletSection";
import QuickActions from "./MainDashboardComponents/quickActionsSection";
import Bank from "./MainDashboardComponents/bankSection";
import Recent from "./MainDashboardComponents/recentSection";
import AppAside from "./MainDashboardComponents/appAside";
import Ads from "./MainDashboardComponents/ads";

export default function MainDashboard(props) {
  return (
    <section className="">
      <div className="flex flex-row justify-end items-center md:gap-3 gap-2.5">
        <Link
          to={"/dashboard"}
          className="md:p-2 p-1.5 rounded-lg bg-white shadow-sm relative"
        >
          <GoBellFill className="md:text-xl text-lg" />
          <span className="absolute md:top-2 top-1.5 md:right-3 right-2.5 flex md:h-1.5 h-1 md:w-1.5 w-1">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-warning opacity-75"></span>
            <span className="relative inline-flex rounded-full md:h-1.5 h-1 md:w-1.5 w-1 bg-warning"></span>
          </span>
        </Link>
        <div
          className="bg-white p-0.5 w-fit h-fit rounded-full cursor-pointer"
          onClick={() => props.activeTab("Profile")}
        >
          <img
            src={avatar}
            alt="avatar img"
            className="md:w-10 w-8 md:h-10 h-8 rounded-full"
          />
        </div>
      </div>

      <section className="flex gap-12 md:mt-10 mt-5">
        <article className="md:basis-4/5 basis-full">
          <Wallet />
          <div className="w-full md:mt-8 mt-5 md:flex md:gap-x-5">
            <div className="md:grow">
              <QuickActions />
              <div className="md:hidden block">
                <Ads />
              </div>
              <Recent />
            </div>
            <div className="bg-white p-5 rounded-xl md:block hidden">
              <Bank />
            </div>
          </div>
        </article>

        <aside className="tvScreen:basis-1/5 basis-1/4 flex-none md:flex hidden flex-col">
          <Ads />
          <AppAside />
        </aside>
      </section>
    </section>
  );
}
