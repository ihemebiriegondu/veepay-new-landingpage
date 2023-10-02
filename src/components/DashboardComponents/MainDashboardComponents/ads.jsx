import React from "react";
import megaphone from "../../../assets/icons/pngegg.png";

export default function Ads() {
  return (
    <div className="bg-secondary text-black xl:p-4 md:rounded-lg rounded-md flex overflow-hidden xl:mb-0 mb-8">
      <div className="basis-1/6 w-full relative">
        <img src={megaphone} alt="megaphone icon" className="absolute xl:-bottom-6 xs:-bottom-3 -bottom-4 xl:-left-6 lg:-left-5 xmd:-left-3 md:-left-7 sm:-left-7 xs:-left-3 left-0 w-full h-full -rotate-12 object-scale-down" />
      </div>
      <p className="basis-5/6 md:text-base text-sm font-semibold xl:p-0 p-4">Refer a friend and earn up to $1,000 airtime!</p>
    </div>
  );
}
