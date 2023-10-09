import React from "react";

export default function FormButtons({ type, text, font, buttonType }) {
  return (
    <button
      type={buttonType}
      disabled={type === "invalid"}
      className={`lg:py-4 py-3 w-full outline-none transition ease-in-out duration-500 ${
        type === "info"
          ? "bg-transparent hover:bg-primary/90 hover:text-white border border-black"
          : type === "invalid"
          ? "bg-invalid text-white"
          : "bg-primary hover:bg-primary/90 text-white"
      } ${font}`}
    >
      {text}
    </button>
  );
}
