import React, { useState } from "react";
import DashboardNav from "../components/DashboardComponents/dashboardNav";
import Profile from "../components/DashboardComponents/profile";
import About from "../components/DashboardComponents/about";
import Faqs from "../components/DashboardComponents/faqs";
import Setting from "../components/DashboardComponents/setting";
import Contact from "../components/DashboardComponents/contact";
import MainDashboard from "../components/DashboardComponents/mainDashboard";

import avatar from "../assets/images/Vector.png";

export default function Dashboard() {
  const [currentTab, setCurrentTab] = useState("Dashboard");
  const [userPhoto, setUserPhoto] = useState(avatar);

  return (
    <main className="bg-[#F5F4F7] relative top-0 bottom-0 w-full">
      <DashboardNav activeTab={setCurrentTab} tabCheck={currentTab} />

      <section className="1.5xl:w-10/12 w-full ms-auto 1.5xl:pt-14 lg:pt-5 pt-4 1.5xl:pb-14 md:pb-5 pb-24 1.5xl:ps-12 md:ps-24 ps-4 ps-4 1.5xl:pe-12 pe-4">
        {currentTab === "Profile" ? (
          <Profile />
        ) : currentTab === "About Us" ? (
          <About />
        ) : currentTab === "FAQs" ? (
          <Faqs />
        ) : currentTab === "Settings" ? (
          <Setting profilePic={userPhoto} setProfilePic={setUserPhoto} />
        ) : currentTab === "Contact Us" ? (
          <Contact />
        ) : (
          <MainDashboard activeTab={setCurrentTab} profilePic={userPhoto} />
        )}
      </section>
    </main>
  );
}
