import React from "react";

export default function FormButtons({ type, text, font, formButtonEvent }) {
  return (
    <button
      className={`lg:py-4 py-3 border border-black rounded-md w-full outline-none transition ease-in-out duration-500 ${
       type === 'info' ?  "bg-transparent hover:bg-primary hover:text-white" : type === 'invalid' ? 'bg-invalid text-white' : 'bg-primary text-white' 
      } ${font}`}
      onClick={() => {formButtonEvent()}}
    >
      {text}
    </button>
  );
}
