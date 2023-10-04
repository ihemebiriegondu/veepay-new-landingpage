import React from "react";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { IoIosMail, IoIosCall } from "react-icons/io";
import { GrFacebookOption } from "react-icons/gr";
import { Link } from "react-router-dom";
import NewsLetter from "./newsLetter";

export default function About() {
  return (
    <section className="text-center lg:pb-14 md:pb-8 pb-4 lg:pt-8 md:pt-4 pt-2.5 lg:px-20 md:px-12 xs:px-6 px-4 bg-light/10">
      <article className="2xl:w-7/12 xl:w-2/3 lg:w-3/4 md:w-11/12 w-full mx-auto lg:mb-4 mb-2">
        <h2 className="font-bold lg:text-2xl md:text-lg text-base lg:mb-6 md:mb-4 mb-2.5">
          About Us
        </h2>
        <p className="font-semibold lg:text-base md:text-sm text-xs">
          Veepay is a three in one telecommunication platform that provides its
          users with hassle-free experience anytime they use its product. Veepay
          intends to connect individuals in ways to pay for their favorite
          services by providing easier, faster and secure ways to recharge your
          favorite brands.
        </p>
      </article>
      <hr className="bg-primary/20 xl:w-1/6 sm:w-1/4 w-1/3 mx-auto" />
      <NewsLetter />
      <hr className="bg-primary/20 xl:w-1/6 sm:w-1/4 w-1/3 mx-auto" />
      <article className="lg:mt-8 md:mt-4 mt-2.5">
        <h2 className="font-bold lg:text-2xl md:text-lg text-base lg:mb-12 md:mb-8 mb-4">
          Contacts
        </h2>
        <div className="flex items-center lg:gap-10 md:gap-6 gap-3 justify-center text-white">
          <Link className="bg-neutral-600 lg:p-4 p-2 rounded-full">
            <IoIosCall className="lg:w-6 md:w-4 w-3 lg:h-6 md:h-4 h-3" />
          </Link>
          <Link className="bg-[#4267B2] lg:p-4 p-2 rounded-full">
            <GrFacebookOption className="lg:w-6 md:w-4 w-3 lg:h-6 md:h-4 h-3" />
          </Link>
          <Link className="bg-[#0072B1] lg:p-4 p-2 rounded-full">
            <FaLinkedinIn className="lg:w-6 md:w-4 w-3 lg:h-6 md:h-4 h-3" />
          </Link>
          <Link className="bg-[#BC2A8D] lg:p-4 p-2 rounded-full">
            <BsInstagram className="lg:w-6 md:w-4 w-3 lg:h-6 md:h-4 h-3" />
          </Link>
          <Link className="bg-[#00ACEE] lg:p-4 p-2 rounded-full">
            <FaTwitter className="lg:w-6 md:w-4 w-3 lg:h-6 md:h-4 h-3" />
          </Link>
          <Link className="bg-[#BB001B] lg:p-4 p-2 rounded-full">
            <IoIosMail className="lg:w-6 md:w-4 w-3 lg:h-6 md:h-4 h-3" />
          </Link>
        </div>
      </article>
    </section>
  );
}
