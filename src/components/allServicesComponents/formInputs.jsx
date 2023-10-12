import React from "react";

export default function FormInputs(props) {
  return (
    <input
      type={props.type}
      name={props.id}
      id={props.id}
      placeholder={props.placeholder}
      disabled={props.disabled}
      defaultValue={props.value}
      className={`lg:my-3 md:my-1.5 my-0.5 outline-none border-servicesInput text-black w-full ${
        props.page === "sms"
          ? "lg:border-2 border lg:rounded-md md:rounded rounded-sm lg:ps-2 md:ps-1.5 ps-1 lg:pe-4 md:pe-3 pe-2 lg:py-4 md:py-3 py-2.5 xl:text-2xl lg:text-xl md:text-lg sm:text-base xs:text-sm text-xs"
          : "lg:border-4 md:border-3 border-2 lg:rounded-xl md:rounded-lg rounded-md lg:px-10 md:px-6 px-2 lg:py-5 md:py-3.5 py-2 lg:text-2xl md:text-lg text-base"
      }`}
      onChange={(e) => {
        props.inputChanged(e.target.value);
      }}
    />
  );
}
