import React from "react";
import { GoBellFill } from "react-icons/go";
import { Link } from "react-router-dom";
import Wallet from "./MainDashboardComponents/walletSection";
import QuickActions from "./MainDashboardComponents/quickActionsSection";
import Bank from "./MainDashboardComponents/bankSection";
import DashCards from "./MainDashboardComponents/dashCards";
import Recent from "./MainDashboardComponents/recentSection";
import AppAside from "./MainDashboardComponents/appAside";
import Ads from "./MainDashboardComponents/ads";
import TopMobileCarousel from "./MainDashboardComponents/topMobileCarousel";

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
            src={props.profilePic}
            alt="avatar img"
            className="md:w-10 w-8 md:h-10 h-8 rounded-full"
          />
        </div>
      </div>

      <section className="xmd:flex 1.5xl:gap-12 md:gap-4 1.5xl:mt-10 lg:mt-6 mt-5">
        <article className="xl:basis-4/5 basis-full">
          <div className="xmd:block hidden">
            <Wallet />
          </div>
          <div className="xmd:hidden block relative">
            <TopMobileCarousel
              bankDetails={props.bankDetails}
              cards={props.cards}
              activeMainTab={props.activeTab}
              activeSettingTab={props.setCurrentSettingTab}
            />
          </div>

          <div className="w-full md:mt-8 mt-5 md:flex 1.5xl:gap-x-5 xl:gap-x-1.5 lg:gap-x-5 gap-x-1.5">
            <div className="md:grow">
              <QuickActions />
              <div className="xl:hidden block">
                <Ads />
              </div>
              <Recent />
            </div>
            <div className="bg-white p-5 rounded-xl xmd:flex flex-col justify-between hidden">
              {props.bankDetails.accName === "" && props.cards.length === 0 ? (
                <div className="xmd:w-72 text-center h-full flex flex-col justify-center">
                  <p className="text-black/70">No bank/card details added</p>
                  <div className="mx-auto w-2/3">
                    <button
                      type="button"
                      className={`lg:py-2 py-1 lg:text-lg md:text-base sm:text-sm font-medium rounded mt-3 w-full outline-none transition ease-in-out duration-500 bg-primary hover:bg-primary/90 text-white`}
                      onClick={() => {
                        props.activeTab("Settings");
                        props.setCurrentSettingTab("Accounts");
                      }}
                    >
                      Add
                    </button>
                  </div>
                </div>
              ) : (
                <div>
                  {props.bankDetails.accName !== "" && (
                    <Bank
                      bankName={props.bankDetails.bankName}
                      accName={props.bankDetails.accName}
                      accNo={props.bankDetails.accNo}
                      activeMainTab={props.activeTab}
                      activeSettingTab={props.setCurrentSettingTab}
                    />
                  )}
                  {props.cards.length > 0 && (
                    <DashCards
                      cards={props.cards}
                      activeMainTab={props.activeTab}
                      activeSettingTab={props.setCurrentSettingTab}
                    />
                  )}
                </div>
              )}
            </div>
          </div>
        </article>

        <aside className="tvScreen:basis-1/5 basis-1/4 flex-none xl:flex hidden flex-col">
          <Ads />
          <AppAside />
        </aside>
      </section>
    </section>
  );
}
