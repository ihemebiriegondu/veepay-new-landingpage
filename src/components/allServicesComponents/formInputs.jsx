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
      className="my-3 outline-none border-4 border-servicesInput text-black rounded-xl px-10 py-5 w-full"
    />
  );
}
