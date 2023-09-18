import React, { useState } from "react";
import DataTable from "./dataTable";
import SmsTable from "./smsTable";

export default function PlansTable() {
  const [activeTable, setActiveTable] = useState("data");

  return (
    <section className="pt-12 pb-40 xl:px-20 xs:px-6 px-3">
      <h1 className="text-center xlg:text-4xl lg:text-3xl md:text-2xl text-xl font-bold xlg:mb-4 md:mb-2.5 mb-1.5">
        Rates and Pricing Table
      </h1>
      <div className="flex items-center justify-center xlg:mb-10 mb-8">
        <span className="bg-[#54535399] xlg:w-14 lg:w-10 w-6 py-px"></span>
        <span className="bg-primary w-1.5 h-1.5 rounded-full"></span>
        <span className="bg-[#54535399] xlg:w-14 lg:w-10 w-6 py-px"></span>
      </div>
      <div className="flex items-center justify-center mb-6">
        <h4
          className={`xlg:text-xl lg:text-lg md:text-base sm:text-sm text-xs cursor-pointer me-5 ${
            activeTable === "data"
              ? "font-bold border-b border-[#545353]"
              : "font-normal"
          }`}
          onClick={() => setActiveTable("data")}
        >
          SME Data
        </h4>
        <span className="h-5 w-px bg-black"></span>
        <h4
          className={`xlg:text-xl lg:text-lg md:text-base sm:text-sm text-xs cursor-pointer ms-5 ${
            activeTable === "sms"
              ? "font-bold border-b border-[#545353]"
              : "font-normal"
          }`}
          onClick={() => setActiveTable("sms")}
        >
          Bulk SMS
        </h4>
      </div>

      <article className="shadow-table border border-tableBorder/20">
        {activeTable === "data" ? <DataTable /> : <SmsTable />}
        <div>
          <div className="xlg:pt-20 lg:pt-10 pt-4 pb-3">
            <h6 className="xlg:text-xl lg:text-base md:text-xs text-xxxs font-bold ps-5 lg:block hidden">
              Other Services
            </h6>
          </div>

          <div className="bg-tableRow/60 flex items-center lg:gap-x-32 gap-x-20">
            <p className="md:ps-5 xs:ps-3 ps-2 xlg:py-4 lg:py-3 md:py-2 py-1 xlg:text-2xl lg:text-lg md:text-sm text-xxs">Airtime Recharge</p>
            <p className="xlg:text-xl lg:text-base md:text-xs text-xxxs font-medium">&#8226; 2% Discount</p>
          </div>
          <div className="flex items-center xlg:gap-x-56 lg:gap-x-48 md:gap-x-32 gap-x-24">
            <p className="md:ps-5 xs:ps-3 ps-2 xlg:py-4 lg:py-3 md:py-2 py-1 xlg:text-2xl lg:text-lg md:text-sm text-xxs">Cable Tv</p>
            <p className="xlg:text-xl lg:text-base md:text-xs text-xxxs font-medium xlg:ms-1.5 md:ms-3 ms-3.5">
              &#8226; Normal Subscription Price
            </p>
          </div>
        </div>
      </article>
    </section>
  );
}
