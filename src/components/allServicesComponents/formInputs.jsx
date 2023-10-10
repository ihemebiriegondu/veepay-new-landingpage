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
      className="my-3 outline-none lg:border-4 md:border-3 border-2 border-servicesInput text-black lg:rounded-xl md:rounded-lg rounded-md lg:px-10 md:px-6 px-2 lg:py-5 md:py-3.5 py-2 w-full lg:text-2xl md:text-lg text-base"
    />
  );
}
