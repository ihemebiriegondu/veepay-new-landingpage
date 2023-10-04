import React from "react";
import { BiSolidErrorCircle, BiSolidCheckCircle } from "react-icons/bi";

export default function FeedBackModal({ error }) {
  return (
    <div
      className={`absolute top-4 right-4 flex items-center gap-2 lg:p-4 md:p-3 p-2 rounded-lg transition duration-500 ease ${
        error ? "bg-warning text-white" : "bg-green-400 text-white"
      }`}
    >
      <div className="md:text-3xl sm:text-2xl text-xl">
        {error ? <BiSolidErrorCircle /> : <BiSolidCheckCircle />}
      </div>
      <div className="md:text-base text-sm">
        {error ? <p>Input fields cannot be empty</p> : <p>Update sucessful</p>}
      </div>
    </div>
  );
}
