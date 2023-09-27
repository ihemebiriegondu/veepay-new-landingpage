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
    <section>
      <div className="flex flex-row justify-end items-center gap-3">
        <Link
          to={"/dashboard"}
          className="p-2 rounded-lg bg-white shadow-sm relative"
        >
          <GoBellFill className="text-xl" />
          <span class="absolute top-2 right-3 flex h-1.5 w-1.5">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-warning opacity-75"></span>
            <span class="relative inline-flex rounded-full h-1.5 w-1.5 bg-warning"></span>
          </span>
        </Link>
        <div
          className="bg-white p-0.5 w-fit h-fit rounded-full cursor-pointer"
          onClick={() => props.activeTab("Profile")}
        >
          <img
            src={avatar}
            alt="avatar img"
            className="w-10 h-10 rounded-full"
          />
        </div>
      </div>

      <section className="flex gap-12 mt-10">
        <article className="grow">
          <Wallet />
          <div className="w-full mt-8 flex gap-x-5">
            <div className="grow">
              <QuickActions />
              <Recent />
            </div>
            <Bank />
          </div>
        </article>

        <aside className="flex-none flex flex-col">
          <Ads />
          <AppAside />
        </aside>
      </section>
    </section>
  );
}
