import React, { useState } from "react";
import DashboardNav from "../components/DashboardComponents/dashboardNav";
import Profile from "../components/DashboardComponents/profile";
import About from "../components/DashboardComponents/about";
import Setting from "../components/DashboardComponents/setting";
import MainDashboard from "../components/DashboardComponents/mainDashboard";

import avatar from "../assets/images/Vector.png";

export default function Dashboard() {
  const [currentTab, setCurrentTab] = useState("Dashboard");
  const [currentSettingTab, setCurrentSettingTab] = useState("genSetting");

  const [userPhoto, setUserPhoto] = useState(avatar);
  const [bankDetails, setBankDetails] = useState({
    bankName: "",
    accName: "",
    accNo: "",
  });
  const [cards, setCards] = useState([]);

  return (
    <main className="bg-[#F5F4F7] relative top-0 bottom-0 w-full">
      <DashboardNav
        activeTab={setCurrentTab}
        tabCheck={currentTab}
        setCurrentSettingTab={setCurrentSettingTab}
      />

      <section className="1.5xl:w-10/12 w-full ms-auto 1.5xl:pt-14 lg:pt-5 pt-4 1.5xl:pb-14 md:pb-5 pb-24 1.5xl:ps-12 md:ps-24 ps-4 ps-4 1.5xl:pe-12 pe-4">
        {currentTab === "Profile" ? (
          <Profile />
        ) : currentTab === "About Us" ? (
          <About />
        ) : currentTab === "Settings" ? (
          <Setting
            currentSettingTab={currentSettingTab}
            setCurrentSettingTab={setCurrentSettingTab}
            profilePic={userPhoto}
            setProfilePic={setUserPhoto}
            bankDetails={bankDetails}
            updateBankDetails={setBankDetails}
            cards={cards}
            setCards={setCards}
          />
        ) : (
          <MainDashboard
            activeTab={setCurrentTab}
            setCurrentSettingTab={setCurrentSettingTab}
            profilePic={userPhoto}
            bankDetails={bankDetails}
          />
        )}
      </section>
    </main>
  );
}
