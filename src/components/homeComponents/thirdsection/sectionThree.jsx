import React from "react";
import sec3Img from "../../../assets/images/Group 15.png";

import { Link } from "react-router-dom";

export default function SectionThree() {
  return (
    <section className="flex lg:flex-row flex-col-reverse 2xl:justify-evenly justify-between lg:items-center lg:gap-28 gap-2.5 bg-light/10 lg:p-14 p-5 lg:pb-0 pb-0 lg:mb-28 md:mb-16 mb-10">
      <div className="mx-auto lg:h-auto sm:h-64 sm:w-auto w-full">
        <img
          src={sec3Img}
          alt="man img"
          className="w-full h-full object-contain"
        />
      </div>

      <div className="lg:-mt-8">
        <h1 className="xl:text-4xl md:text-3xl sm:text-2xl text-xl font-bold xl:mb-9 lg:mb-6 mb-4 lg:text-start text-center">
          Why use our Plartform
        </h1>
        <ul className="list-disc px-6 font-medium leading-normal lg:mb-9 xl:text-xl md:text-base text-sm">
          <li>Roll out Subscriptions in minutes</li>
          <li>24/7 Availability</li>
          <li>
            Ease of adding contact(flexibility to add a mobile contact directly
            from phone)
          </li>
          <li>Enjoy cheaper rates.</li>
          <li>Stress free Recharge and subscriptions</li>
          <li>Prompt support </li>
          <li>Secure and convenient.</li>
        </ul>
        <Link
          to={"/"}
          className="text-primary text-sm italic font-medium underline lg:block hidden"
        >
          Explore more
        </Link>
      </div>
    </section>
  );
}
