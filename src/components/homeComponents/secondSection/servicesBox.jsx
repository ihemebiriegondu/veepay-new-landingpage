import React from "react";
import MyButtons from "../myButtons";
import { Link } from "react-router-dom";

export default function ServicesBox({ icon, heading, visible }) {
  return (
    <div className={`flex flex-col items-center bg-light/20 w-full md:pt-12 pt-4 md:pb-3.5 pb-2 px-2 shadow-md hover:shadow-xl transition ease-in-out duration-500 ${visible ? "" : "md:pb-16 pb-10"} lg:text-base text-sm`}>
      <div className="bg-zinc-300 sm:py-4 py-2 sm:px-3.5 px-1.5 rounded-full md:mb-5 mb-1.5">
        <img src={icon} alt="" className="sm:h-7 h-3 sm:w-8 w-4" />
      </div>
      <h3 className="md:mb-5 mb-1.5 font-bold lg:text-2xl md:text-xl sm:text-base">{heading}</h3>
      <MyButtons link={"/"} text={"BUY NOW"} />
      <Link
        to={"/"}
        className={`mt-1.5 md:py-3 py-2 px-6 border border-primary rounded hover:bg-primary hover:text-white transition ease-in-out duration-500 lg:text-sm text-xs ${
          visible ? "block" : "hidden"
        }`}
      >
        SELL TO US
      </Link>
    </div>
  );
}
