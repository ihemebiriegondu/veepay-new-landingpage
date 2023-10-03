import React from "react";

export default function SettingInputs() {
  return (
    <div>
      <div className="relative">
        <input
          type="text"
          id="fname"
          className="block px-3 pb-2 pt-3.5 w-full text-sm text-neutral-600 bg-transparent rounded-md border border-black/80 appearance-none outline-none peer"
          placeholder=" "
        />
        <label
          htmlFor="fname"
          className="absolute text-sm text-neutral-600 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
        >
          Floating outlined
        </label>
      </div>
    </div>
  );
}
