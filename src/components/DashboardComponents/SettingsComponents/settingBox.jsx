import React from "react";

export default function SettingBox({ tabName, tabIcon, tabText, tabClickFunction }) {
  return (
    <div className="p-4 bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 ease-in-out cursor-pointer" onClick={() => {tabClickFunction()}}>
      <h2 className="text-2xl mb-7">{tabIcon}</h2>
      <h4 className="text-base font-semibold mb-2">{tabName}</h4>
      <p className="text-sm text-gray-500">{tabText}</p>
    </div>
  );
}
