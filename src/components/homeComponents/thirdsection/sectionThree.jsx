import React from "react";
import sec3Img from "../../../assets/images/Group 15.png";
import { Link } from "react-router-dom";

export default function SectionThree() {
  return (
    <section className="flex flex-row justify-between items-center gap-28 bg-light/10 p-14 pb-0 mb-28">
      <div className="w-150 h-130">
        <img src={sec3Img} alt="man img" className="w-full h-full object-contain" />
      </div>

      <div className="-mt-8">
        <h1 className="text-4xl font-bold mb-9">Why use our Plartform</h1>
        <ul className="list-disc px-6 text-xl font-medium leading-normal mb-9">
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
        <Link to={'/'} className="text-primary text-sm italic font-medium underline">Explore more</Link>
      </div>
    </section>
  );
}
