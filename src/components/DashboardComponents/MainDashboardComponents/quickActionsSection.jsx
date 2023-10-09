import React from "react";
import { TbMobiledata } from "react-icons/tb";
import { HiDevicePhoneMobile } from "react-icons/hi2";
import { MdOutlineTextsms } from "react-icons/md";
import { CgScreen } from "react-icons/cg";
import { Link } from "react-router-dom";

export default function QuickActions() {
  return (
    <div className="md:p-5 xs:p-4 p-3 bg-white md:rounded-xl rounded-lg shadow-sm xl:mb-9 mb-5">
      <h5 className="md:mb-5 mb-4 md:text-xl text-lg font-semibold">
        Quick Actions
      </h5>
      <div className="flex items-center justify-around gap-x-2.5">
        <Link
          to={"/sme data"}
          className="2.5xl:w-full 1.5xl:w-auto w-full flex flex-col items-center rounded-md px-2 py-3 bg-purple-100"
        >
          <TbMobiledata className="md:text-xl sm:text-lg xs:text-base text-sm mb-2.5" />
          <p className="md:text-base sm:text-sm xs:text-xs text-xxs font-semibold">
            SME Data
          </p>
        </Link>
        <Link
          to={"/airtime purchase"}
          className="2.5xl:w-full 1.5xl:w-auto w-full flex flex-col items-center rounded-md px-2 py-3 bg-green-100"
        >
          <HiDevicePhoneMobile className="md:text-xl sm:text-lg xs:text-base text-sm mb-2.5" />
          <p className="md:text-base sm:text-sm xs:text-xs text-xxs font-semibold">
            Buy Airtime
          </p>
        </Link>
        <Link
          to={"/bulk sms"}
          className="2.5xl:w-full 1.5xl:w-auto w-full flex flex-col items-center rounded-md px-2 py-3 bg-red-100"
        >
          <MdOutlineTextsms className="md:text-xl sm:text-lg xs:text-base text-sm mb-2.5" />
          <p className="md:text-base sm:text-sm xs:text-xs text-xxs font-semibold">
            Bulk SMS
          </p>
        </Link>
        <Link
          to={"/cable tv subscription"}
          className="2.5xl:w-full 1.5xl:w-auto w-full flex flex-col items-center rounded-md px-2 py-3 bg-blue-100"
        >
          <CgScreen className="md:text-xl sm:text-lg xs:text-base text-sm mb-2.5" />
          <p className="md:text-base sm:text-sm xs:text-xs text-xxs font-semibold">
            Cable TV
          </p>
        </Link>
      </div>
    </div>
  );
}
