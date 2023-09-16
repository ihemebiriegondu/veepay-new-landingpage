import React from "react";

export default function FormButtons({ type, text, font }) {
  return (
    <button
      className={`py-4 border border-black rounded-md w-full outline-none transition ease-in-out duration-500 ${
       type === 'info' ?  "bg-transparent hover:bg-primary hover:text-white" : type === 'invalid' ? 'bg-invalid text-white' : 'bg-primary text-white' 
      } ${font}`}
    >
      {text}
    </button>
  );
}
