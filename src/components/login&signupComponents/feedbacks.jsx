import React from "react";
import successIcon from "../../assets/icons/Vector success.png";
import { IoMdThumbsUp } from "react-icons/io";
import { Link } from "react-router-dom";

export default function Feedbacks({ text, subtext }) {
  return (
    <section className="absolute top-0 bottom-0 w-full z-40 bg-feedbackBg flex flex-col items-center justify-center">
      <img
        src={successIcon}
        alt="sucess iicon"
        className="md:w-20 w-14 md:h-20 w-14"
      />
      <h1 className="md:mt-9 mt-6 md:mb-10 mb-7 text-primary font-bold md:text-4xl text-3xl">
        {text}
      </h1>

      <p
        className={`flex items-stretch gap-1 ${
          subtext === "Login" ? "hidden" : "block"
        }`}
      >
        <span className="md:text-base text-sm font-medium">{subtext}</span>
        <IoMdThumbsUp className={`md:w-5 w-4 md:h-5 h-4`} />
      </p>

      <Link
        to={"/login"}
        className={`md:text-xl text-sm font-medium italic text-primary underline ${
          subtext === "Login" ? "inline" : "hidden"
        }`}
      >
        {subtext}
      </Link>
    </section>
  );
}
