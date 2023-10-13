import React from "react";
import { RxCross2 } from "react-icons/rx";

export default function ContactSelectedToast({ amount }) {
  return (
    <div className="absolute top-0 bottom-0 w-full lg:px-4 md:px-2.5 px-1 py-2 bg-white">
      <div className="h-full flex items-center lg:gap-x-6 md:gap-x-3 gap-x-1 lg:border-2 border border-gray-400 w-fit rounded-full lg:px-3 md:px-1.5 px-0.5">
        <p className="">
          Contacts selected <span className="text-black/50">({amount})</span>
        </p>
        <RxCross2 className="text-black/50 cursor-pointer" />
      </div>
    </div>
  );
}
