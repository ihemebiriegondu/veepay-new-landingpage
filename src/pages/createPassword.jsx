import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LogoNav from "../components/login&signupComponents/logoNav";
import { IoArrowBackOutline } from "react-icons/io5";
import { HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi";
import FormButtons from "../components/login&signupComponents/formButtons";
import Footer from "../components/footer";
import Feedbacks from "../components/login&signupComponents/feedbacks";

export default function CreatePassword() {
  const navigate = useNavigate();

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

          <form
            className="flex flex-col justify-center items-center grow text-center mx-auto w-1/4"
            onSubmit={(e) => {
              submitForm(e);
            }}
          >
            <h1 className="mb-4 text-4xl font-bold text-primary">
              Create Password
            </h1>
            <p className="text-xl font-medium">Kindly create new password</p>

            <div
              className={`mt-5 lg:px-5 px-4 w-full border lg:rounded-xl rounded-lg lg:text-xl text-lg bg-transparent flex items-center justify-between ${
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
              className={`mt-5 lg:px-5 px-4 w-full border lg:rounded-xl rounded-lg lg:text-xl text-lg bg-transparent flex items-center justify-between ${
                passwordError ? "border-warning mb-2.5" : "border-black mb-8"
              }`}
            >
              <input
                type={passwordType2}
                name="password1"
                id="password1"
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
              font={"font-bold lg:text-xl"}
              buttonType={"submit"}
            />
          </form>
        </section>
        <Footer />
      </div>
      <Feedbacks text={'Password reset successfully'}subtext={'Login'} />
    </main>
  );
}
