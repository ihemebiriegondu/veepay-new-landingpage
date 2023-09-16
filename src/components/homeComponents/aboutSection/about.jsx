import React from "react";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { IoIosMail, IoIosCall } from "react-icons/io";
import { GrFacebookOption } from "react-icons/gr";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <section className="text-center pb-14 pt-8 px-20 bg-light/10">
      <article className="w-7/12 mx-auto mb-10">
        <h2 className="font-bold text-2xl mb-6">About Us</h2>
        <p className="font-semibold">
          Veepay is a three in one telecommunication platform that provides its
          users with hassle-free experience anytime they use its product. Veepay
          intends to connect individuals in ways to pay for their favorite
          services by providing easier, faster and secure ways to recharge your
          favorite brands.
        </p>
      </article>
      <hr className="bg-primary/20 w-1/6 mx-auto" />
      <article className="mt-8">
        <h2 className="font-bold text-2xl mb-12">Contacts</h2>
        <div className="flex md:flex-row flex-col items-center gap-10 justify-center text-white">
          <Link className="bg-neutral-600 p-4 rounded-full">
            <IoIosCall className="w-6 h-6" />
          </Link>
          <Link className="bg-[#4267B2] p-4 rounded-full">
            <GrFacebookOption className="w-6 h-6" />
          </Link>
          <Link className="bg-[#0072B1] p-4 rounded-full">
            <FaLinkedinIn className="w-6 h-6" />
          </Link>
          <Link className="bg-[#BC2A8D] p-4 rounded-full">
            <BsInstagram className="w-6 h-6" />
          </Link>
          <Link className="bg-[#00ACEE] p-4 rounded-full">
            <FaTwitter className="w-6 h-6" />
          </Link>
          <Link className="bg-[#BB001B] p-4 rounded-full">
            <IoIosMail className="w-6 h-6" />
          </Link>
        </div>
      </article>
    </section>
  );
}
