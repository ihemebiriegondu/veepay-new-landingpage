import React, { useState } from "react";
import { Link } from "react-router-dom";
import LogoNav from "../components/login&signupComponents/logoNav";
import { IoArrowBackOutline } from "react-icons/io5";
import { HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi";
import FormButtons from "../components/login&signupComponents/formButtons";
import Footer from "../components/footer";
import Feedbacks from "../components/login&signupComponents/feedbacks";

export default function CreatePassword() {
  const [validityButton, setValidityButton] = useState("submit");
  const [passwordType, setPasswordType] = useState("password");
  const [passwordType2, setPasswordType2] = useState("password");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [success, setSuccess] = useState(false);

  const submitForm = (e) => {
    e.preventDefault();

    if (password1 !== "" && password1 === password2) {
      setSuccess(true);
    } else {
      setPasswordError(true);
      setValidityButton("invalid");
    }
  };

  return (
    <main className="bg-primary/10 absolute top-0 bottom-0 w-full">
      <div className="h-full flex flex-col">
        <div className="bg-white">
          <LogoNav background={'lg:bg-transparent bg-white'} />
        </div>
        <section className="lg:pt-20 pt-8 sm:px-20 xs:px-16 px-4 grow flex flex-col">
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
              Create Password
            </h1>
            <p className="lg:text-xl md:text-base text-sm font-medium">
              Kindly create new password
            </p>

            <div
              className={`mt-5 lg:px-5 px-4 w-full border lg:rounded-xl rounded-lg lg:text-xl md:text-lg text-base bg-transparent flex items-center justify-between ${
                passwordError ? "border-warning" : "border-black"
              }`}
            >
              <input
                type={passwordType}
                name="password1"
                id="password1"
                placeholder="New password"
                className="lg:py-4 py-3 outline-none bg-transparent w-full me-4"
                onChange={(e) => {
                  setPassword1(e.target.value);
                  setPasswordError(false);
                  setValidityButton("button");
                }}
              />
              <button type="button" className="outline-none border-none">
                <HiOutlineEye
                  className={`${
                    passwordType === "password" ? "block" : "hidden"
                  }`}
                  onClick={() => setPasswordType("text")}
                />
                <HiOutlineEyeOff
                  className={`${
                    passwordType === "password" ? "hidden" : "block"
                  }`}
                  onClick={() => setPasswordType("password")}
                />
              </button>
            </div>

            <div
              className={`mt-5 lg:px-5 px-4 w-full border lg:rounded-xl rounded-lg lg:text-xl md:text-lg text-base bg-transparent flex items-center justify-between ${
                passwordError ? "border-warning mb-2.5" : "border-black mb-8"
              }`}
            >
              <input
                type={passwordType2}
                name="password2"
                id="password2"
                placeholder="Confirm password"
                className="lg:py-4 py-3 outline-none bg-transparent w-full me-4"
                onChange={(e) => {
                  setPassword2(e.target.value);
                  setPasswordError(false);
                  setValidityButton("button");
                }}
              />
              <button type="button" className="outline-none border-none">
                <HiOutlineEye
                  className={`${
                    passwordType2 === "password" ? "block" : "hidden"
                  }`}
                  onClick={() => setPasswordType2("text")}
                />
                <HiOutlineEyeOff
                  className={`${
                    passwordType2 === "password" ? "hidden" : "block"
                  }`}
                  onClick={() => setPasswordType2("password")}
                />
              </button>
            </div>

            <div className="w-full text-start">
              {passwordError && (
                <span className="mb-4 inline-block text-warning md:text-base text-sm">
                  Confirm password incorrect
                </span>
              )}
            </div>

            <FormButtons
              type={validityButton}
              text={"Submit"}
              font={"font-medium lg:text-xl"}
              buttonType={"submit"}
            />
          </form>
        </section>
        <Footer />
      </div>
      {success && (
        <Feedbacks text={"Password reset successfully"} subtext={"Login"} />
      )}
    </main>
  );
}
