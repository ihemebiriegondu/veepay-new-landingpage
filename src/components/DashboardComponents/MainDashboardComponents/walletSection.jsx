import React, { useState } from "react";
import { RiEyeLine, RiEyeCloseLine } from "react-icons/ri";
import { Link } from "react-router-dom";

export default function Wallet() {
  const [showAmount, setShowAmount] = useState(true);

  return (
    <div className="bg-primary text-white p-5 rounded-xl relative overflow-hidden">
      <div className="relative z-40">
        <h3 className="text-2xl text-tableRow mb-8 font-semibold">Wallet</h3>
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
        <div className="mb-8 flex items-center gap-8">
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
        <div className="flex items-center gap-8 italic font-medium">
          <Link
            to={"/dashboard"}
            className="inline-block md:py-3.5 py-2 md:px-7 px-6 text-primary rounded-md bg-white outline-none transition ease-in-out duration-500"
          >
            Fund Wallet
          </Link>
          <Link
            to={"/dashboard"}
            className="inline-block md:py-3.5 py-2 md:px-7 px-6 text-white hover:text-primary rounded-md border border-white hover:bg-white outline-none transition ease-in-out duration-500"
          >
            Withdraw Cash
          </Link>
        </div>
      </div>

      <div>
        <div className="absolute -top-8 -left-8 w-40 h-40 rounded-full bg-secondary/90"></div>
        <div className="absolute -bottom-8 -right-8 w-48 h-48 rounded-full bg-secondary/90"></div>
        <div className="absolute bottom-2 left-2 w-10 h-10 rounded-full bg-secondary/90"></div>
        <div className="absolute top-8 right-64 w-20 h-20 rounded-full bg-secondary/90"></div>
      </div>
    </div>
  );
}
