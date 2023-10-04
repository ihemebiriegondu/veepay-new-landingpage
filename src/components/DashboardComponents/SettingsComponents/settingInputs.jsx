import React from "react";
import { LuPencilLine } from "react-icons/lu";

export default function SettingInputs({ label, value, inputEvent }) {
  return (
    <div className="flex items-center gap-x-2.5 w-full">
      <div className="relative grow">
        <input
          type="text"
          id={label}
          className="settingInputs block px-3 pb-2 pt-3.5 w-full xs:text-sm text-xs text-neutral-600 bg-transparent rounded-md border border-black/80 appearance-none outline-none peer"
          placeholder=" "
          defaultValue={value}
          disabled={true}
          onChange={(e) => {
            inputEvent(e);
          }}
        />
        <label
          htmlFor={label}
          className="absolute xs:text-sm text-xs text-neutral-600 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
        >
          {label}
        </label>
      </div>

      <button
        type="button"
        className="text-base"
        data-target-input={label}
        onClick={(e) => {
          const allInputs = document.querySelectorAll(".settingInputs");
          const targetElement = e.target.getAttribute("data-target-input");

          allInputs.forEach((input) => {
            if (input.disabled === false) {
              input.disabled = true;
            }
          });

          if (targetElement !== null) {
            document.getElementById(targetElement).disabled = false;
            document.getElementById(targetElement).focus();
          }
        }}
      >
        <LuPencilLine data-target-input={label} />
      </button>
    </div>
  );
}
