import React from "react";
import { useNavigate } from "react-router-dom";
import LogoNav from "../components/login&signupComponents/logoNav";
import { IoArrowBackOutline } from "react-icons/io5";
import FormButtons from "../components/login&signupComponents/formButtons";
import Footer from "../components/footer";

export default function PasswordReset() {
  const navigate = useNavigate();

  return (
    <main className="bg-primary/10 absolute top-0 bottom-0 w-full">
      <div className="h-full flex flex-col">
        <div className="bg-white">
          <LogoNav />
        </div>
        <section className="pt-11 px-20 grow flex flex-col">
          <div className="flex items-center">
            <IoArrowBackOutline
              className="w-4 h-4 inline cursor-pointer"
              onClick={() => {
                navigate(-1);
              }}
            />
            <p className="text-base font-medium ms-2.5">Back to Homepage</p>
          </div>

          <form className="flex flex-col justify-center items-center grow text-center mx-auto w-1/4">
            <h1 className="mb-4 text-4xl font-bold text-primary">
              Password Reset
            </h1>
            <p className="text-xl font-medium">
              A code will be sent to your phone number
            </p>

            <div className="mt-5 mb-12 w-full">
              <input
                type="text"
                name="mail/no"
                id="mail/no"
                placeholder="Enter phone/email"
                className="outline-none lg:py-4 py-3 lg:px-6 px-4 w-full border border-primary lg:rounded-xl rounded-lg lg:text-xl text-lg bg-transparent"
              />
            </div>

            <FormButtons
              type={""}
              text={"Send Code"}
              font={"font-bold lg:text-xl"}
              buttonType={"submit"}
            />
          </form>
        </section>
        <Footer />
      </div>
    </main>
  );
}
