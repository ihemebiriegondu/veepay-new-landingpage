import React from "react";
import { IoChevronDownOutline } from "react-icons/io5";
import CableTvSearch from "./cableTvSearch";

export default function FormDropdowns(props) {
  const toggleDropdown = (e) => {
    const allButtons = document.querySelectorAll(".dropdownButton");
    const allDropdowns = document.querySelectorAll(".dropdownElement");
    const cableSearch = document.getElementById("searchBar");

    const targetElement = e.target;
    const targetDropdown = document.querySelector(
      `[data-target-option="${e.target.id}"]`
    );

    allButtons.forEach((button) => {
      if (button.children[2].id !== targetElement.id) {
        button.classList.remove("border-servicesInputFocused");
      }
    });

    if (
      targetElement.parentElement.classList.contains(
        "border-servicesInputFocused"
      )
    ) {
      targetElement.parentElement.classList.remove(
        "border-servicesInputFocused"
      );
    } else {
      targetElement.parentElement.classList.add("border-servicesInputFocused");
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

    if (props.id === "paymentItemInput" && props.formOptions.length > 1) {
      if (cableSearch.classList.contains("hidden")) {
        cableSearch.classList.remove("hidden");
        cableSearch.classList.add("flex");
      } else {
        cableSearch.classList.add("hidden");
        cableSearch.classList.remove("flex");
      }
    } else if (props.id === "billerInput") {
      cableSearch.classList.add("hidden");
    }
  };

  const secondOptionClickFunction = (e) => {
    const cableSearch = document.getElementById("searchBar");

    e.target.parentElement.classList.add("invisible");
    document
      .getElementById(e.target.parentElement.getAttribute("data-target-option"))
      .parentElement.classList.remove("border-servicesInputFocused");

    if (props.id === "paymentItemInput") {
      props.setItems(props.allItems);
      document.getElementById("search").value = "";
      cableSearch.classList.add("hidden");
    }
  };

  return (
    <div className="relative">
      <div
        type="button"
        className={`lg:my-3 md:my-1.5 my-0.5 relative flex items-center justify-between outline-none border-servicesInput text-black w-full dropdownButton ${
          props.page === "sms"
            ? "lg:border-2 border lg:rounded-md md:rounded rounded-sm lg:ps-2 md:ps-1.5 ps-1 lg:pe-4 md:pe-3 pe-2 lg:py-4 md:py-3 py-2.5 xl:text-2xl lg:text-xl md:text-lg sm:text-base xs:text-sm text-xs"
            : "lg:border-4 md:border-3 border-2 lg:rounded-xl md:rounded-lg rounded-md lg:px-10 md:px-6 px-2 lg:py-5 md:py-3.5 py-2 lg:text-2xl md:text-lg text-base"
        }`}
      >
        <p
          className={`${
            props.id === "datanetwork" || props.id === "airtimenetwork"
              ? props.value === "Select Network"
                ? "capitalize"
                : "uppercase"
              : "normal-case"
          }`}
        >
          {props.value}
        </p>
        <IoChevronDownOutline />
        <button
          type="button"
          id={props.id}
          className="outline-none absolute top-0 bottom-0 w-full left-0"
          onClick={(e) => {
            toggleDropdown(e);
          }}
        ></button>
      </div>

      <div>
        {props.id === "paymentItemInput" && (
          <CableTvSearch
            items={props.formOptions}
            setItems={props.setItems}
            allItems={props.allItems}
          />
        )}

        <ul
          className={`dropdownElement absolute z-30 w-full lg:border-2 border border-servicesInput lg:rounded-xl md:rounded-md rounded flex flex-col lg:divide-y divide-y-0.3 divide-primary transition-all duration-100 ease bg-white overflow-hidden invisible`}
          data-target-option={props.id}
        >
          {props.formOptions &&
            props.formOptions.map((options, i) => (
              <li
                key={props.id + i}
                className={`lg:px-10 md:px-6 px-3 py-px transition duration-200 ease-in-out hover:bg-primary/10 cursor-pointer lg:text-2xl md:text-lg text-sm ${
                  (props.id === "datanetwork" ||
                    props.id === "airtimenetwork") &&
                  "uppercase"
                }`}
                onClick={(e) => {
                  props.optionClickFunction(
                    props.id === "datanetwork" || props.id === "airtimenetwork"
                      ? options.network
                      : props.id === "datavalue"
                      ? options.value + "- " + options.days + " Days"
                      : props.id === "billerInput"
                      ? options.biller
                      : props.id === "paymentItemInput"
                      ? options.item
                      : ""
                  );
                  props.id === "datavalue" &&
                    props.setDataAmount("₦ " + options.price);
                  props.id === "paymentItemInput" &&
                    props.setSubAmount(
                      options.price === "Fill Amount"
                        ? options.price
                        : "₦ " + options.price
                    );

                  secondOptionClickFunction(e);
                }}
              >
                {props.id === "datanetwork" || props.id === "airtimenetwork" ? (
                  options.network
                ) : props.id === "datavalue" ? (
                  options.value + "- " + options.days + " Days"
                ) : props.id === "billerInput" ? (
                  options.biller
                ) : props.id === "paymentItemInput" ? (
                  <span className="">
                    {options.item}{" "}
                    <span className="text-black/50">
                      (
                      {options.price === "Fill Amount"
                        ? options.price
                        : "N" + options.price}
                      )
                    </span>
                  </span>
                ) : (
                  ""
                )}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
