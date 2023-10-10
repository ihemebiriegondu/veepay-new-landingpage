import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LogoNav from "../components/login&signupComponents/logoNav";
import { IoArrowBackOutline } from "react-icons/io5";
import FormButtons from "../components/login&signupComponents/formButtons";
import Footer from "../components/footer";

export default function PasswordReset() {
  const navigate = useNavigate();
  const [input, setInput] = useState("");

  const submitForm = (e) => {
    e.preventDefault();

    if (input !== "") {
      navigate("/confirmcode");
    }
  };

  return (
    <main className="bg-primary/10 absolute top-0 bottom-0 w-full">
      <div className="h-full flex flex-col">
        <div className="bg-white">
          <LogoNav background={'lg:bg-transparent bg-white lg:fixed relative'} />
        </div>
        <section className="lg:pt-20 pt-11 sm:px-20 xs:px-16 px-4 grow flex flex-col">
          <Link to={"/"} className="lg:flex hidden items-center w-fit">
            <IoArrowBackOutline className="w-4 h-4 inline cursor-pointer" />
            <p className="text-base font-medium ms-2.5">Back to Homepage</p>
          </Link>

          <form
            className="flex flex-col justify-center items-center grow text-center mx-auto 2xl:w-1/3 lg:w-1/2 md:w-2/3 w-full"
            onSubmit={(e) => {
              submitForm(e);
            }}
          >
            <h1 className="mb-4 lg:text-4xl md:text-3xl text-2xl font-bold text-primary">
              Password Reset
            </h1>
            <p className="lg:text-xl md:text-base text-sm font-medium">
              A code will be sent to your phone number
            </p>

            <div className="mt-5 mb-12 w-full">
              <input
                type="text"
                name="mail/no"
                id="mail/no"
                placeholder="Enter phone/email"
                className="outline-none lg:py-4 py-3 lg:px-6 px-4 w-full border border-primary lg:rounded-xl rounded-lg lg:text-xl md:text-lg text-base bg-transparent"
                onChange={(e) => setInput(e.target.value)}
              />
            </div>

            <FormButtons
              type={""}
              text={"Send Code"}
              font={"font-medium lg:text-xl"}
              buttonType={"submit"}
            />
          </form>
        </section>
        <Footer />
      </div>
    </main>
  );
}
