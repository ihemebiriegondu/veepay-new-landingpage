import React, { useState } from "react";
import { IoChevronDownOutline } from "react-icons/io5";

export default function FormDropdowns() {
  const [selectValue, setSelectValue] = useState("Select Network");
  const [showDropdown, setShowDropdown] = useState(false);

  const smeDatas = [
    {
      network: "mtn",
      dataValue: [
        { value: "500 mb", days: "30", price: "150" },
        { value: "1 gb", days: "30", price: "290" },
        { value: "2 gb", days: "30", price: "585" },
        { value: "3 gb", days: "30", price: "870" },
        { value: "5 gb", days: "30", price: "1450" },
        { value: "6 gb", days: "7", price: "1500" },
        { value: "10 gb", days: "30", price: "2900" },
        { value: "20 gb", days: "30", price: "5000" },
        { value: "40 gb", days: "30", price: "10000" },
        { value: "75 gb", days: "30", price: "15000" },
        { value: "120 gb", days: "60", price: "30000" },
      ],
    },
    {
      network: "glo",
      dataValue: [
        { value: "1.3 gb", days: "14", price: "500" },
        { value: "2.9 gb", days: "30", price: "1000" },
        { value: "4.1 gb", days: "30", price: "1500" },
        { value: "5.8 gb", days: "30", price: "2000" },
        { value: "7.7 gb", days: "30", price: "2500" },
        { value: "11 gb", days: "30", price: "3000" },
        { value: "12 gb", days: "30", price: "5000" },
        { value: "29.5 gb", days: "30", price: "8000" },
        { value: "50 gb", days: "30", price: "10000" },
        { value: "93 gb", days: "60", price: "15000" },
      ],
    },
    {
      network: "airtel",
      dataValue: [
        { value: "500 mb", days: "30", price: "225" },
        { value: "1 gb", days: "30", price: "400" },
        { value: "2 gb", days: "30", price: "800" },
        { value: "3 gb", days: "30", price: "1200" },
        { value: "5 gb", days: "30", price: "2000" },
        { value: "6 gb", days: "7", price: "1500" },
        { value: "10 gb", days: "30", price: "3000" },
        { value: "20 gb", days: "30", price: "4999" },
        { value: "40 gb", days: "30", price: "9999" },
        { value: "75 gb", days: "30", price: "14999" },
        { value: "120 gb", days: "60", price: "20000" },
      ],
    },
    {
      network: "9mobile",
      dataValue: [
        { value: "500 mb", days: "30", price: "450" },
        { value: "1.5 gb", days: "30", price: "950" },
        { value: "4.5 gb", days: "30", price: "2000" },
        { value: "11 gb", days: "30", price: "3999" },
        { value: "15 gb", days: "30", price: "4999" },
        { value: "40 gb", days: "30", price: "10000" },
        { value: "75 gb", days: "30", price: "15000" },
      ],
    },
  ];

  return (
    <div className="relative">
      <button
        type="button"
        className={`my-3 flex items-center justify-between outline-none border-4 border-servicesInput text-black rounded-xl px-10 py-5 w-full ${
          showDropdown && "border-servicesInputFocused"
        }`}
        onClick={() => setShowDropdown(!showDropdown)}
      >
        <p>{selectValue}</p>
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
            >
              {plans.network}
            </li>
          ))}
      </ul>
    </div>
  );
}
