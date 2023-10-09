import React, { useState } from "react";
import { IoChevronDownOutline } from "react-icons/io5";

import smeDatas from "./smeDatas";

export default function FormDropdowns() {
  const [selectValue, setSelectValue] = useState("Select Network");
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="relative">
      <button
        type="button"
        className={`my-3 flex items-center justify-between outline-none border-4 border-servicesInput text-black rounded-xl px-10 py-5 w-full ${
          showDropdown && "border-servicesInputFocused"
        }`}
        onClick={() => setShowDropdown(!showDropdown)}
      >
        <p className="capitalize">{selectValue}</p>
        <IoChevronDownOutline />
      </button>

      <ul
        className={`absolute w-full border-2 border-servicesInput rounded-xl text-xl flex flex-col divide-y divide-primary transition-all duration-100 ease bg-white overflow-hidden ${
          showDropdown ? "visible" : "invisible"
        }`}
      >
        {smeDatas &&
          smeDatas.map((plans) => (
            <li
              key={plans.network}
              className="uppercase px-10 py-px transition duration-200 ease-in-out hover:bg-primary/10 cursor-pointer"
              onClick={() => setSelectValue(plans.network)}
            >
              {plans.network}
            </li>
          ))}
      </ul>
    </div>
  );
}
