import React from "react";
import SettingBox from "./SettingsComponents/settingBox";
import UserInfoSetting from "./SettingsComponents/userInfoSetting";
import AccountSetting from "./SettingsComponents/accountSettings";

import {
  GrContactInfo,
  GrAnnounce,
  GrCircleQuestion,
  GrSecure,
} from "react-icons/gr";
import {
  MdOutlineAccountBalance,
  MdOutlineHistory,
  MdKeyboardArrowRight,
} from "react-icons/md";

export default function Setting(props) {

  const settingTabs = [
    {
      tabName: "User Info",
      tabIcon: <GrContactInfo />,
      tabText: "Provide personal details and how we can reach you",
    },
    {
      tabName: "Login & security",
      tabIcon: <GrSecure />,
      tabText: "Provide personal details and how we can reach you",
    },
    {
      tabName: "Accounts",
      tabIcon: <MdOutlineAccountBalance />,
      tabText: "Provide personal details and how we can reach you",
    },
    {
      tabName: "Transactions History",
      tabIcon: <MdOutlineHistory />,
      tabText: "Provide personal details and how we can reach you",
    },
    {
      tabName: "Notifications",
      tabIcon: <GrAnnounce />,
      tabText: "Provide personal details and how we can reach you",
    },
    {
      tabName: "FAQs",
      tabIcon: <GrCircleQuestion />,
      tabText: "Provide personal details and how we can reach you",
    },
  ];

  return (
    <section className="relative">
      <div className="flex items-center gap-4 mb-6">
        <h1
          className={`${
            props.currentSettingTab === "genSetting"
              ? "text-3xl font-bold text-primary md:mb-10 sm:mb-8 xs:mb-6"
              : "text-sm font-semibold text-black hover:text-primary hover:underline cursor-pointer"
          } w-fit ps-4`}
          onClick={() => props.setCurrentSettingTab("genSetting")}
        >
          Settings
        </h1>
        {props.currentSettingTab !== "genSetting" && (
          <div className="flex items-center gap-4 text-sm font-medium">
            <MdKeyboardArrowRight />
            <p>{props.currentSettingTab}</p>
          </div>
        )}
      </div>

      {props.currentSettingTab === "User Info" ? (
        <UserInfoSetting
          displayPic={props.profilePic}
          updateImg={props.setProfilePic}
        />
      ) : props.currentSettingTab === "Accounts" ? (
        <AccountSetting
          bankDetails={props.bankDetails}
          updateBankDetails={props.updateBankDetails}
        />
      ) : (
        <article className="grid sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-4">
          {settingTabs &&
            settingTabs.map((nav) => (
              <SettingBox
                key={nav.tabName}
                tabName={nav.tabName}
                tabIcon={nav.tabIcon}
                tabText={nav.tabText}
                tabClickFunction={() => {
                  props.setCurrentSettingTab(nav.tabName);
                }}
              />
            ))}
        </article>
      )}
    </section>
  );
}
