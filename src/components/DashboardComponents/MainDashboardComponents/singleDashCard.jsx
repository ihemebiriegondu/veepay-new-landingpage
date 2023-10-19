import React from "react";
import masterCardLogo from "../../../assets/icons/MasterCard.png";
import visaLogo from "../../../assets/icons/Type=Default.png";
import maestraLogo from "../../../assets/icons/Type=Color, showText=False, showSymbol=True.png";
import jbcLogo from "../../../assets/icons/Style=Gradient, Flat=False.png";

export default function SingleDashCard(props) {
  return (
    <div className="xmd:w-72 overflow-hidden">
      <div className="xmd:hidden flex items-center justify-between xmd:mb-5 mb-2">
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
        className={`pb-3 px-5 rounded-xl overflow-hidden relative cards ${
          props.cardType && `${props.cardType}`
        }`}
      >
        <div className="relative z-30">
          <div
            className={`flex justify-end xmd:pt-8 md:pt-7 xs:pt-4 pt-7 ${
              props.cardType === "mastercard" || props.cardType === "visa"
                ? "md:mb-10 xs:mb-8 mb-10"
                : "md:mb-6 xs:mb-4 mb-11"
            }`}
          >
            <div className="xmd:w-12 xs:w-16 w-12 xmd:h-8 xs:h-12 h-8">
              {props.cardType === "visa" && (
                <img
                  src={visaLogo}
                  alt="visa logo"
                  className="w-full h-full object-scale-down"
                />
              )}
            </div>
          </div>
          <p className="xs:mb-8 mb-6 text-xl font-semibold">
            {props.cardNumber}
          </p>
          <div className="flex items-center justify-between xs:gap-1 gap-1.5">
            <div className="font-medium text-xs">
              <p className="">
                {(props.cardMonth.length < 2
                  ? `0${props.cardMonth}`
                  : props.cardMonth) +
                  "/" +
                  props.cardYear}
              </p>
              <p className="uppercase">{props.cardName}</p>
            </div>

            <div
              className={`${
                props.cardType === "mastercard"
                  ? "xs:w-12 w-7 xs:h-7 h-4"
                  : props.cardType === "visa"
                  ? "hidden"
                  : "xs:w-12 w-7 xs:h-12 h-8"
              }`}
            >
              {props.cardType === "mastercard" && (
                <img
                  src={masterCardLogo}
                  alt="master card logo"
                  className="w-full h-full"
                />
              )}
              {props.cardType === "maestro" && (
                <img
                  src={maestraLogo}
                  alt="maestro card logo"
                  className="w-full h-full"
                />
              )}
              {props.cardType === "jcb" && (
                <img
                  src={jbcLogo}
                  alt="jbc logo"
                  className="w-full h-full object-scale-down"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
