import React from "react";
import { Link } from "react-router-dom";

export default function MyButtons({ link, text }) {
  return (
    <Link
      to={link}
      className="md:py-3.5 py-2 md:px-7 px-6 text-white rounded bg-primary hover:bg-primary/80 transition ease-in-out duration-500"
    >
      {text}
    </Link>
  );
}
