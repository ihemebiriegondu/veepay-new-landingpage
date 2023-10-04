import React from "react";
import cardDecor from "../../../assets/images/NicePng_wave-png_145581.png";

export default function Bank({bankName, accName, accNo}) {
  return (
    <div className="text-lg relative overflow-hidden">
      <div className="flex items-center xmd:justify-between justify-end xmd:mb-5">
        <h5 className="xmd:mb-5 text-xl font-semibold xmd:inline-block hidden">Bank</h5>
        <a
          className="text-gray-500 hover:text-black transition duration-200 ease xmd:mb-5 mb-2 xmd:text-lg text-sm"
          href="/"
        >
          Manage
        </a>
      </div>

      <div className="relative xmd:py-3 md:py-5 py-4 px-4 bg-primary/90 text-white rounded-xl font-medium overflow-hidden">
        <div className="flex flex-col xmd:gap-y-16 xs:gap-y-24 gap-y-20 relative z-40">
          <p className="text-right capitalize">{bankName}</p>
          <div className="ps-0.5 md:pe-32">
            <p className="text-xl capitalize">{accName}</p>
            <p className="mt-2">{accNo}</p>
          </div>
        </div>
        <div className="absolute left-0 bottom-0 right-0 z-30 opacity-50">
          <img src={cardDecor} alt="" />
        </div>
      </div>
    </div>
  );
}
