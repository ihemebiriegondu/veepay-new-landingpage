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
      <div className="flex items-baseline justify-between mb-5">
        <h5 className="md:text-xl text-lg font-semibold">Recent Transactions</h5>
        <Link
          className="md:text-base text-sm text-gray-500 hover:text-black transition duration-200 ease"
          to={"/dashboard"}
        >
          View all
        </Link>
      </div>

      <div className="bg-white md:rounded-xl rounded-lg md:py-5 py-4 md:pe-4 pe-1">
        <div className="md:h-64 h-44 overflow-y-scroll snap-mandatory snap-y scroll-my-4 recentScroll outline-none">
          {history &&
            history.map((hist, i) => (
              <div key={i} className="md:py-5 md:ps-10 ps-4 md:pe-6 pe-3 snap-start">
                <div className={`${hist.type === 'cabletv' ? 'md:text-2xl sm:text-xl text-lg' : 'md:text-2xl text-xl'} flex items-center md:gap-2.5 gap-2 md:mb-3 mb-2.5`}>
                  <div
                    className={`rounded-lg md:p-3 p-2 ${
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
                <div className="md:mb-4 mb-3">
                  <p className="md:text-base text-sm text-gray-400 md:mb-2.5 mb-2">Amount</p>
                  <div className="flex items-center gap-1">
                    <h2 className="md:text-3xl text-2xl font-bold">₦{hist.amount}</h2>
                    {hist.type === "cabletv" && (
                      <span className="md:text-base text-sm">
                        {" (" + hist.item + ")"}
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex justify-between items-end md:mb-0 mb-4">
                  <div>
                    {hist.type === "cabletv" ? (
                      <p className="md:text-base text-sm text-gray-400 md:mb-1.5 mb-1">
                        Decoder number:
                      </p>
                    ) : (
                      <p className="md:text-base text-sm text-gray-400 md:mb-1.5 mb-1">To</p>
                    )}

                    <h6 className="md:text-lg text-base text-gray-500">{hist.number}</h6>
                  </div>
                  <p className="md:text-base text-sm text-gray-400">{hist.date}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
