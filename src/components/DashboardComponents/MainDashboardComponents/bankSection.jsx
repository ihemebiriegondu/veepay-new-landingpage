import React from "react";
import cardDecor from "../../../assets/images/NicePng_wave-png_145581.png";

export default function Bank(props) {
  return (
    <div className="xmd:text-lg text-base relative overflow-hidden xmd:w-fit">
      <div className="flex items-center justify-between xmd:mb-5 mb-2">
        <h5 className="xmd:text-xl text-base font-semibold">Bank</h5>
        <p
          className="text-gray-500 hover:text-black transition duration-200 ease xmd:text-lg text-sm"
          onClick={() => {
            props.activeMainTab("Settings");
            props.activeSettingTab("Accounts");
          }}
        >
          Manage
        </p>
      </div>

      <div
        className={`relative xmd:py-3 md:py-5 py-4 px-4 rounded-xl font-medium overflow-hidden xmd:w-72 ${
          props.accName === ""
            ? "bg-transparent text-black/80"
            : "bg-primary/90 text-white"
        }`}
      >
        {props.accName === "" ? (
          <p className="text-center text-base">No details</p>
        ) : (
          <div
            className={`flex flex-col xl:gap-y-16 xmd:gap-y-28 md:gap-y-24 xs:gap-y-20 gap-y-20 relative z-40 ${
              props.accName && props.accName.length > 12
                ? "xmd:text-sm"
                : "xmd:text-base"
            }`}
          >
            <p className="text-right capitalize">{props.bankName}</p>
            <div className="ps-0.5">
              <p
                className={`capitalize ${
                  props.accName && props.accName.length > 12
                    ? "xmd:text-base text-lg"
                    : "xmd:text-lg"
                }`}
              >
                {props.accName}
              </p>
              <p className="mt-2">{props.accNo}</p>
            </div>
          </div>
        )}
        <div
          className={`absolute left-0 bottom-0 right-0 z-30 opacity-50 ${
            props.accName === "" ? "hidden" : "block"
          }`}
        >
          <img src={cardDecor} alt="" />
        </div>
      </div>
    </div>
  );
}
