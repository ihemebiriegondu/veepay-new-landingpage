import React from "react";
import { Link } from "react-router-dom";
import { IoArrowBackOutline } from "react-icons/io5";

import LogoNav from "../components/login&signupComponents/logoNav";
import FormDropdowns from "../components/allServicesComponents/formDropdowns";

export default function SmeData() {
  return (
    <div className="">
      <main className="absolute top-0 bottom-0 w-full z-20 bg-servicesBg">
        <LogoNav background={"bg-white"} />
        <section className="lg:pt-24 px-10 pb-16">
          <div className="mb-6">
            <Link
              to={"/dashboard"}
              className="lg:flex hidden items-center w-fit text-base font-medium"
            >
              <IoArrowBackOutline className="inline cursor-pointer" />
              <p className="ms-2.5">Back to Homepage</p>
            </Link>
          </div>

          <h1 className="mb-3 text-primary font-bold text-4xl text-center mont">
            BUY SME DATA
          </h1>

          <form className="py-16 px-20 bg-white mx-32 rounded-t-4xl rounded-br-4xl text-2xl">
            <div>
              <label htmlFor="datanetwork" className="">
                Network
              </label>
              <FormDropdowns />
            </div>
          </form>
        </section>
      </main>
    </div>
  );
}
