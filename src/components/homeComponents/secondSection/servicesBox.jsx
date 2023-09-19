import React from "react";
import MyButtons from "../myButtons";
import { Link } from "react-router-dom";

export default function ServicesBox({
  icon,
  heading,
  visibleLinkTo,
  visibleText,
  mbView,
}) {
  return (
    <div
      className={`flex flex-col items-center bg-light/20 w-full md:pt-12 pt-4 px-2 shadow-md hover:shadow-xl transition ease-in-out duration-500 ${
        mbView === "both" ? "md:pb-3.5 pb-2" : "md:pb-16 pb-10"
      } lg:text-base text-sm`}
    >
      <div className="bg-zinc-300 sm:py-4 py-2 sm:px-3.5 px-1.5 rounded-full md:mb-5 mb-1.5">
        <img src={icon} alt="" className="sm:h-7 h-3 sm:w-8 w-4" />
      </div>
      <h3 className="md:mb-5 mb-1.5 font-bold lg:text-2xl md:text-xl sm:text-base">
        {heading}
      </h3>
      <MyButtons link={"/login"} text={"BUY NOW"} />
      <Link
        to={visibleLinkTo}
        className={`mt-1.5 md:py-3 py-2 lg:px-7 px-6 border border-primary rounded hover:bg-primary hover:text-white transition ease-in-out duration-500 lg:text-sm text-xs ${
          mbView === "mobile"
            ? "xs:hidden block"
            : mbView === "both"
            ? "block"
            : "hidden"
        }`}
      >
        {visibleText}
      </Link>
    </div>
  );
}
