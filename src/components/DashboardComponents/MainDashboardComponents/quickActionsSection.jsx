import React from "react";
import { TbMobiledata } from "react-icons/tb";
import { HiDevicePhoneMobile } from "react-icons/hi2";
import { MdOutlineTextsms } from "react-icons/md";
import { CgScreen } from "react-icons/cg";

export default function QuickActions() {
  return (
    <div className="p-5 bg-white rounded-xl shadow-sm grow mb-9">
      <h5 className="mb-5 text-xl font-semibold">Quick Actions</h5>
      <div className="flex items-center justify-around gap-x-2.5">
        <div className="flex flex-col items-center rounded-md px-2 py-3 bg-purple-100">
          <TbMobiledata className="text-xl mb-2.5" />
          <p className="text-base font-semibold">SME Data</p>
        </div>
        <div className="flex flex-col items-center rounded-md px-2 py-3 bg-green-100">
          <HiDevicePhoneMobile className="text-xl mb-2.5" />
          <p className="text-base font-semibold">Buy Airtime</p>
        </div>
        <div className="flex flex-col items-center rounded-md px-2 py-3 bg-red-100">
          <MdOutlineTextsms className="text-xl mb-2.5" />
          <p className="text-base font-semibold">Bulk SMS</p>
        </div>
        <div className="flex flex-col items-center rounded-md px-2 py-3 bg-blue-100">
          <CgScreen className="text-xl mb-2.5" />
          <p className="text-base font-semibold">Cable TV</p>
        </div>
      </div>
    </div>
  );
}
