import React, { useState } from "react";
import { RiEyeLine, RiEyeCloseLine } from "react-icons/ri";
import { Link } from "react-router-dom";

export default function Wallet() {
  const [showAmount, setShowAmount] = useState(true);

  return (
    <div className="bg-primary text-white md:p-5 p-4 md:rounded-xl rounded-lg relative overflow-hidden text-start xmd:mb-0 md:mb-6 sm:mb-0">
      <div className="relative z-40">
        <h3 className="text-2xl text-tableRow md:mb-8 mb-7 font-semibold">Wallet</h3>
        <div className="flex items-center gap-x-10">
          <p className="text-base font-medium text-tableRow">
            Available Amount
          </p>
          <button type="button" className="outline-none border-none">
            <RiEyeCloseLine
              className={`${showAmount ? "hidden" : "block"}`}
              onClick={() => {
                setShowAmount(true);
              }}
            />
            <RiEyeLine
              className={`${showAmount ? "block" : "hidden"}`}
              onClick={() => {
                setShowAmount(false);
              }}
            />
          </button>
        </div>
        <div className="md:mb-8  mb-7">
          <h1
            className={`text-3xl font-semibold ${
              showAmount ? "block" : "hidden"
            }`}
          >
            N 0.00
          </h1>
          <h1
            className={`text-3xl font-semibold ${
              showAmount ? "hidden" : "block"
            }`}
          >
            ****
          </h1>
        </div>
        <div className="flex items-center md:gap-8 sm:gap-7 xs:gap-4 gap-3 italic font-medium md:text-base xs:text-sm text-xs">
          <Link
            to={"/dashboard"}
            className="inline-block md:py-3.5 py-2 md:px-7 xs:px-6 px-3 text-primary rounded-md bg-white outline-none transition ease-in-out duration-500"
          >
            Fund Wallet
          </Link>
          <Link
            to={"/dashboard"}
            className="inline-block md:py-3.5 py-2 md:px-7 xs:px-6 px-3 text-white hover:text-primary rounded-md border border-white hover:bg-white outline-none transition ease-in-out duration-500"
          >
            Withdraw Cash
          </Link>
        </div>
      </div>

      <div>
        <div className="absolute -top-8 -left-8 md:w-40 w-32 md:h-40 h-32 rounded-full bg-secondary/90"></div>
        <div className="absolute -bottom-8 -right-8 md:w-48 w-40 md:h-48 h-40 rounded-full bg-secondary/90"></div>
        <div className="absolute bottom-2 left-2 md:w-10 w-6 md:h-10 h-6 rounded-full bg-secondary/90"></div>
        <div className="absolute xs:top-8 -top-6 xs:right-64 right-0 md:w-20 w-12 md:h-20 h-12 rounded-full bg-secondary/90"></div>
      </div>
    </div>
  );
}
