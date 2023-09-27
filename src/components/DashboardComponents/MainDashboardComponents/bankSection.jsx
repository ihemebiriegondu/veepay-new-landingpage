import React from "react";
import cardDecor from "../../../assets/images/NicePng_wave-png_145581.png";

export default function Bank() {
  return (
    <div className="bg-white p-5 rounded-xl text-lg">
      <div className="flex items-center justify-between mb-5">
        <h5 className="mb-5 text-xl font-semibold">Bank</h5>
        <a
          className="text-gray-500 hover:text-black transition duration-200 ease mb-5"
          href="/"
        >
          Manage
        </a>
      </div>

      <div className="relative py-3 px-4 bg-primary/90 text-white rounded-xl font-medium overflow-hidden">
        <div className="flex flex-col gap-y-16 relative z-40">
          <p className="text-right">Access</p>
          <div className="ps-0.5 pe-32">
            <p className="text-xl">Oyetunji Peter</p>
            <p className="mt-2">13****1131</p>
          </div>
        </div>
        <div className="absolute left-0 bottom-0 right-0 z-30 opacity-50">
          <img src={cardDecor} alt="" />
        </div>
      </div>
    </div>
  );
}
