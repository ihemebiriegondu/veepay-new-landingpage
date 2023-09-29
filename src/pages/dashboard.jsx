import React, { useState } from "react";
import DashboardNav from "../components/DashboardComponents/dashboardNav";
import Profile from "../components/DashboardComponents/profile";
import About from "../components/DashboardComponents/about";
import Faqs from "../components/DashboardComponents/faqs";
import Setting from "../components/DashboardComponents/setting";
import Contact from "../components/DashboardComponents/contact";
import MainDashboard from "../components/DashboardComponents/mainDashboard";

export default function Dashboard() {
  const [currentTab, setCurrentTab] = useState("Dashboard");

  return (
    <main className="bg-[#F5F4F7] tvScreen:relative top-0 bottom-0 w-full">
      <DashboardNav activeTab={setCurrentTab} tabCheck={currentTab} />

      <section className="w-10/12 ms-auto py-14 px-12">
        {currentTab === "Profile" ? (
          <Profile />
        ) : currentTab === "About Us" ? (
          <About />
        ) : currentTab === "FAQs" ? (
          <Faqs />
        ) : currentTab === "Settings" ? (
          <Setting />
        ) : currentTab === "Contact Us" ? (
          <Contact />
        ) : (
          <MainDashboard activeTab={setCurrentTab} />
        )}
      </section>
    </main>
  );
}
