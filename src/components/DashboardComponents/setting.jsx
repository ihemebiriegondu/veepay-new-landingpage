import React, { useState } from "react";
import SettingBox from "./SettingsComponents/settingBox";

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
import UserInfoSetting from "./SettingsComponents/userInfoSetting";

export default function Setting(props) {
  const [currentTab, setCurrentTab] = useState("genSetting");

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
      tabName: "Account",
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
    <section>
      <div className="flex items-center gap-4 mb-6">
        <h1
          className={`${
            currentTab === "genSetting"
              ? "text-3xl font-bold text-primary mb-10"
              : "text-sm font-semibold text-black hover:text-primary hover:underline cursor-pointer"
          } w-fit`}
          onClick={() => setCurrentTab("genSetting")}
        >
          Settings
        </h1>
        {currentTab !== "genSetting" && (
          <div className="flex items-center gap-4 text-sm font-semibold">
            <MdKeyboardArrowRight />
            <p>{currentTab}</p>
          </div>
        )}
      </div>

      {currentTab === "User Info" ? (
        <UserInfoSetting displayPic={props.profilePic} />
      ) : (
        <article className="grid grid-cols-3 gap-4">
          {settingTabs &&
            settingTabs.map((nav) => (
              <SettingBox
                key={nav.tabName}
                tabName={nav.tabName}
                tabIcon={nav.tabIcon}
                tabText={nav.tabText}
                tabClickFunction={() => {
                  setCurrentTab(nav.tabName);
                }}
              />
            ))}
        </article>
      )}
    </section>
  );
}
