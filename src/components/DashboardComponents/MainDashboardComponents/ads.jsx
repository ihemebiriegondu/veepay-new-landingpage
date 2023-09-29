import React from "react";
import megaphone from "../../../assets/icons/pngegg.png";

export default function Ads() {
  return (
    <div className="bg-secondary text-black p-4 rounded-lg flex overflow-hidden">
      <div className="basis-1/6 w-full relative">
        <img src={megaphone} alt="megaphone icon" className="absolute -bottom-6 -left-6 w-full h-full -rotate-12" />
      </div>
      <p className="basis-5/6 text-base font-semibold">Refer a friend and earn up to $1,000 airtime!</p>
    </div>
  );
}
