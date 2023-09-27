import React from "react";
import { Link } from "react-router-dom";
import { GiReceiveMoney } from "react-icons/gi";
import { TbMobiledata } from "react-icons/tb";
import { HiDevicePhoneMobile } from "react-icons/hi2";
import { MdOutlineTextsms } from "react-icons/md";
import { CgScreen } from "react-icons/cg";

export default function Recent() {
  const history = [
    {
      type: "airtime",
      name: "Airtime Recharge",
      amount: "500",
      number: "09031771297",
      date: "Today",
    },
    {
      type: "data",
      name: "SME Data",
      amount: "585",
      number: "09031771297",
      date: "Thur, Sept 20 2023",
    },
    {
      type: "cabletv",
      name: "Cable TV Subscription",
      item: "Jinja- Monthly",
      amount: "1,900.00",
      number: "4275767855",
      date: "Mon Aug 10 2023",
    },
  ];

  return (
    <div className="">
      <div className="flex items-center justify-between mb-5">
        <h5 className="text-xl font-semibold">Recent Transactions</h5>
        <Link
          className="text-gray-500 hover:text-black transition duration-200 ease mb-5"
          to={"/dashboard"}
        >
          View all
        </Link>
      </div>

      <div className="bg-white rounded-xl py-5 pe-2.5">
        <div className="h-64 overflow-y-scroll snap-mandatory snap-y scroll-my-5 recentScroll">
          {history &&
            history.map((hist, i) => (
              <div key={i} className="py-5 ps-5 pe-2.5 snap-start">
                <div className="text-2xl flex items-center gap-2.5 mb-3">
                  <div
                    className={`rounded-lg p-3 ${
                      hist.type === "airtime"
                        ? "bg-green-100"
                        : hist.type === "data"
                        ? "bg-purple-100"
                        : hist.type === "cabletv"
                        ? "bg-blue-100"
                        : hist.type === "sms"
                        ? "bg-pink-100"
                        : "bg-yellow-100"
                    }`}
                  >
                    {hist.type === "airtime" ? (
                      <HiDevicePhoneMobile />
                    ) : hist.type === "data" ? (
                      <TbMobiledata />
                    ) : hist.type === "cabletv" ? (
                      <CgScreen />
                    ) : hist.type === "sms" ? (
                      <MdOutlineTextsms />
                    ) : (
                      <GiReceiveMoney />
                    )}
                  </div>
                  <h2 className="font-semibold">{hist.name}</h2>
                </div>
                <div className="mb-4">
                  <p className="text-base text-gray-400 mb-2.5">Amount</p>
                  <div className="flex items-center">
                    <h2 className="text-3xl font-bold">₦{hist.amount}</h2>
                    {hist.type === "cabletv" && (
                      <span className="text-base">
                        {" (" + hist.item + ")"}
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex justify-between items-end">
                  <div>
                    {hist.type === "cabletv" ? (
                      <p className="text-base text-gray-400 mb-1.5">
                        Decoder number:
                      </p>
                    ) : (
                      <p className="text-base text-gray-400 mb-1.5">To</p>
                    )}

                    <h6 className="text-lg text-gray-500">{hist.number}</h6>
                  </div>
                  <p className="text-base text-gray-400">{hist.date}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
