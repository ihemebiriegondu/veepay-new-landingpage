import React, { useState } from "react";
import SettingBox from "./SettingsComponents/settingBox";
import UserInfoSetting from "./SettingsComponents/userInfoSetting";
import AccountSetting from "./SettingsComponents/accountSettings";
import SettingFAQs from "./SettingsComponents/settingFAQs";
import Contact from "./SettingsComponents/contact";
import AddCard from "./SettingsComponents/addCard";

import { GrContactInfo, GrAnnounce, GrCircleQuestion } from "react-icons/gr";
import {
  MdOutlineAccountBalance,
  MdOutlineHistory,
  MdKeyboardArrowRight,
  MdOutlineSupportAgent,
} from "react-icons/md";

export default function Setting(props) {
  const [showAddCard, setShowAddCard] = useState(false);

  const settingTabs = [
    {
      tabName: "User Info",
      tabIcon: <GrContactInfo />,
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
    {
      tabName: "Contact Us",
      tabIcon: <MdOutlineSupportAgent />,
      tabText: "Provide personal details and how we can reach you",
    },
  ];

  return (
    <section className="relative">
      <div className="flex items-center md:gap-4 gap-2 mb-6">
        <h1
          className={`${
            props.currentSettingTab === "genSetting"
              ? "text-3xl font-bold text-primary md:mb-10 sm:mb-8 xs:mb-6"
              : "sm:text-sm text-xs font-semibold text-black hover:text-primary hover:underline cursor-pointer"
          } w-fit ps-4`}
          onClick={() => props.setCurrentSettingTab("genSetting")}
        >
          Settings
        </h1>
        {props.currentSettingTab !== "genSetting" && (
          <div className="flex items-center md:gap-4 gap-2 sm:text-sm text-xs font-medium">
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
          cards={props.cards}
          setCards={props.setCards}
          setShowAddCard={setShowAddCard}
        />
      ) : props.currentSettingTab === "FAQs" ? (
        <SettingFAQs />
      ) : props.currentSettingTab === "Contact Us" ? (
        <Contact />
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

      {showAddCard && <AddCard setShowAddCard={setShowAddCard} />}
    </section>
  );
}
