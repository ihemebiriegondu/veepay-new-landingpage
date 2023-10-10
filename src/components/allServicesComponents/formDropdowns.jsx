import React, { useState } from "react";
import { IoChevronDownOutline } from "react-icons/io5";

export default function FormDropdowns(props) {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="relative">
      <button
        id={props.id}
        type="button"
        className={`my-3 flex items-center justify-between outline-none border-4 border-servicesInput text-black rounded-xl px-10 py-5 w-full ${
          showDropdown && "border-servicesInputFocused"
        }`}
        onClick={() => setShowDropdown(!showDropdown)}
      >
        <p
          className={`${
            props.id === "datanetwork"
              ? props.value === "Select Network"
                ? "capitalize"
                : "uppercase"
              : "normal-case"
          }`}
        >
          {props.value}
        </p>
        <IoChevronDownOutline />
      </button>

      <ul
        className={`absolute w-full border-2 border-servicesInput rounded-xl text-xl flex flex-col divide-y divide-primary transition-all duration-100 ease bg-white overflow-hidden ${
          showDropdown ? "visible" : "invisible"
        }`}
      >
        {props.formOptions &&
          props.formOptions.map((options, i) => (
            <li
              key={props.id + i}
              className={`px-10 py-px transition duration-200 ease-in-out hover:bg-primary/10 cursor-pointer ${
                props.id === "datanetwork" && "uppercase"
              }`}
              onClick={() => {
                props.optionClickFunction(
                  props.id === "datanetwork"
                    ? options.network
                    : props.id === "datavalue"
                    ? options.value + "- " + options.days + " Days"
                    : ""
                );
                props.id === "datavalue" &&
                  props.setDataAmount("₦ " + options.price);
                setShowDropdown(false);
              }}
            >
              {props.id === "datanetwork"
                ? options.network
                : props.id === "datavalue"
                ? options.value + "- " + options.days + " Days"
                : ""}
            </li>
          ))}
      </ul>
    </div>
  );
}
