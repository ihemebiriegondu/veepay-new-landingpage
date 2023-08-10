import React from "react";
import MyButtons from "../myButtons";
import { Link } from "react-router-dom";

export default function ServicesBox({ icon, heading, visible }) {
  return (
    <div className="flex flex-col items-center bg-light/20 w-full pt-12 pb-3.5 px-2 shadow-md">
      <div className="bg-zinc-300 py-4 px-3.5 rounded-full mb-5">
        <img src={icon} alt="" className="h-7 w-8" />
      </div>
      <h3 className="mb-5">{heading}</h3>
      <MyButtons link={"/"} text={"BUY NOW"} />
      <Link
        to={"/"}
        className={`mt-1.5 py-3 px-6 border border-primary rounded hover:bg-primary hover:text-white transition ease-in-out duration-500 ${visible ? 'block' : 'hidden'}`}
      >
        SELL TO US
      </Link>
    </div>
  );
}
