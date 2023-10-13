import React, { useState } from "react";
import { IoChevronDownOutline } from "react-icons/io5";
import { GiPaperClip } from "react-icons/gi";

export default function BulkSmsRecipientsOptionsDropdown(props) {
  const [placeholder, setPlaceholder] = useState(
    "Input Numbers or select other options"
  );

  return (
    <div className="relative">
      <div
        className={`flex items-center justify-between overflow-hidden transition duration-100 ease-in-out lg:my-3 md:my-1.5 my-0.5 lg:border-2 border ${
          props.showDropdown
            ? "border-servicesInputFocused"
            : "border-servicesInput"
        } text-black lg:rounded-md md:rounded rounded-sm xl:text-2xl lg:text-xl md:text-lg sm:text-base xs:text-sm text-xs`}
      >
        <input
          name={"recipientOptions"}
          id={"recipientOptions"}
          type="tel"
          placeholder={placeholder}
          disabled={props.showDropdown}
          className={`outline-none border-none inline-block grow lg:py-4 md:py-3 py-2.5 lg:ps-2 md:ps-1.5 ps-1 ${
            props.showDropdown && "placeholder:text-black"
          }`}
          onChange={(e) => {
            props.inputChanged(e.target.value);
          }}
        />
        <button className="lg:px-4 md:px-3 px-2 lg:py-4 md:py-3 py-2.5 relative outline-none">
          <IoChevronDownOutline className="relative z-20" />
          <p
            className="absolute top-0 bottom-0 w-full left-0 z-30"
            onClick={() => {
              props.setShowDropdown(!props.showDropdown);
              setPlaceholder(
                !props.showDropdown
                  ? "Select options"
                  : "Input Numbers or select other options"
              );
            }}
          ></p>
        </button>
      </div>

      <ul
        className={`dropdownElement absolute z-30 w-full lg:border-2 border border-servicesInput lg:rounded-xl md:rounded-md rounded flex flex-col lg:divide-y divide-y-0.3 divide-primary transition-all duration-100 ease bg-white overflow-hidden ${
          !props.showDropdown && "invisible"
        }`}
      >
        {props.formOptions &&
          props.formOptions.map((options, i) => (
            <li
              key={options}
              className="flex items-center gap-x-2.5 lg:px-10 md:px-6 xs:px-3 px-2 py-px transition duration-100 ease-in-out hover:bg-primary/10 cursor-pointer lg:text-xl md:text-lg sm:text-base xs:text-sm text-xs"
            >
              {options}
              {i === 2 && <GiPaperClip />}
            </li>
          ))}
      </ul>
    </div>
  );
}
