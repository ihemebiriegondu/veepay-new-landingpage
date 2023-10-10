import React, { useState } from "react";
import { IoChevronDownOutline } from "react-icons/io5";

export default function FormDropdowns(props) {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = (e) => {
    const allButtons = document.querySelectorAll(".dropdownButton");
    const allDropdowns = document.querySelectorAll(".dropdownElement");
    const targetElement = e.target;
    const targetDropdown = document.querySelector(
      `[data-target-option="${e.target.id}"]`
    );

    allButtons.forEach((button) => {
      if (button.id !== targetElement.id) {
        button.classList.remove("border-servicesInputFocused");
      }
    });

    if (targetElement.classList.contains("border-servicesInputFocused")) {
      targetElement.classList.remove("border-servicesInputFocused");
    } else {
      targetElement.classList.add("border-servicesInputFocused");
    }

    allDropdowns.forEach((dropdown) => {
      if (dropdown.getAttribute("data-target-option") !== targetElement.id) {
        dropdown.classList.add("invisible");
      }
    });

    if (targetDropdown.classList.contains("invisible")) {
      targetDropdown.classList.remove("invisible");
    } else {
      targetDropdown.classList.add("invisible");
    }
  };

  const secondOptionClickFunction = (e) => {
    e.target.parentElement.classList.add("invisible");
    document
      .getElementById(e.target.parentElement.getAttribute("data-target-option"))
      .classList.remove("border-servicesInputFocused");
  };

  return (
    <div className="relative">
      <button
        id={props.id}
        type="button"
        className={`my-3 flex items-center justify-between outline-none border-4 border-servicesInput text-black rounded-xl px-10 py-5 w-full dropdownButton`}
        onClick={(e) => {
          toggleDropdown(e);
        }}
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
        className={`dropdownElement absolute w-full border-2 border-servicesInput rounded-xl text-xl flex flex-col divide-y divide-primary transition-all duration-100 ease bg-white overflow-hidden invisible`}
        data-target-option={props.id}
      >
        {props.formOptions &&
          props.formOptions.map((options, i) => (
            <li
              key={props.id + i}
              className={`px-10 py-px transition duration-200 ease-in-out hover:bg-primary/10 cursor-pointer ${
                props.id === "datanetwork" && "uppercase"
              }`}
              onClick={(e) => {
                props.optionClickFunction(
                  props.id === "datanetwork"
                    ? options.network
                    : props.id === "datavalue"
                    ? options.value + "- " + options.days + " Days"
                    : ""
                );
                props.id === "datavalue" &&
                  props.setDataAmount("₦ " + options.price);

                secondOptionClickFunction(e);
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
