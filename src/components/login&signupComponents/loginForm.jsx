import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi";
import FormButtons from "./formButtons";
import FormsFooter from "./formsFooter";

export default function LoginForm(props) {
  const navigate = useNavigate();

  const [validityButton, setValidityButton] = useState("submit");
  const [passwordType, setPasswordType] = useState("password");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;


  const submitForm = (e) => {
    e.preventDefault();

    if (email === "" && password === "") {
      setEmailError(true);
      setPasswordError(true);
      setValidityButton("invalid");
    } else if (email === "" || password === "" || !emailRegex.test(email)) {
      if (email === "" || !emailRegex.test(email)) {
        setEmailError(true);
        setValidityButton("invalid");
      } else if (password === "") {
        setPasswordError(true);
        setValidityButton("invalid");
      }
    } else {
      props.sucessType(true)
      setTimeout(() => {
        props.sucessType(false)
        navigate('/dashboard')
      }, 2000);
    }
  };

  return (
    <form className="w-full lg:h-auto h-full lg:pt-16 pt-2" noValidate onSubmit={(e) => submitForm(e)}>
      <h1 className="text-primary lg:text-3xl text-2xl font-bold text-center lg:mb-5 mb-4">
        Log in to Account
      </h1>
      <hr className="mx-auto lg:w-1/12 w-14 border-t border-primary" />
      <div className="lg:mt-20 mt-16 lg:mb-7 mb-6">
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email/Phone No"
          className={`outline-none lg:py-4 py-3 lg:px-6 px-4 w-full border lg:rounded-xl rounded-lg lg:text-xl text-lg bg-transparent ${
            emailError ? "border-warning" : "border-black"
          }`}
          onChange={(e) => {
            setEmail(e.target.value);
            setEmailError(false);
            setPasswordError(false);
            setValidityButton("button");
          }}
        />
        {emailError && (
          <span className="mt-3 mb-4 inline-block text-warning md:text-base text-sm">
            invalid email
          </span>
        )}
      </div>
      <div className="mb-4">
        <div
          className={`lg:px-6 px-4 w-full border lg:rounded-xl rounded-lg lg:text-xl text-lg flex items-center justify-between ${
            passwordError ? "border-warning" : "border-black"
          }`}
        >
          <input
            type={passwordType}
            name="password"
            id="password"
            placeholder="Password"
            className="lg:py-4 py-3 outline-none bg-transparent w-full me-4"
            onChange={(e) => {
              setPassword(e.target.value);
              setEmailError(false);
              setPasswordError(false);
              setValidityButton("button");
            }}
          />
          <button type="button" className="outline-none border-none">
            <HiOutlineEye
              className={`${passwordType === "password" ? "block" : "hidden"}`}
              onClick={() => setPasswordType("text")}
            />
            <HiOutlineEyeOff
              className={`${passwordType === "password" ? "hidden" : "block"}`}
              onClick={() => setPasswordType("password")}
            />
          </button>
        </div>
        {passwordError && (
          <span className="mt-3 mb-1.5 inline-block text-warning md:text-base text-sm">
            Incorrect Password?
          </span>
        )}
      </div>
      <div className="flex justify-between items-center md:text-base text-sm mb-11">
        <div
          className={`flex ${
            emailError || passwordError ? "invisible" : "visible"
          }`}
        >
          <input
            type="checkbox"
            name="remember"
            id="remember"
            className="cursor-pointer"
          />
          <label htmlFor="remember" className="ms-3 cursor-pointer">
            Remember me
          </label>
        </div>{" "}
        <Link
          to={"/passwordreset"}
          className={`${passwordError ? "text-warning" : "text-black"}`}
        >
          Forgot Password?
        </Link>
      </div>
      <FormButtons
        type={validityButton}
        text={"Login"}
        font={"font-bold lg:text-xl"}
        buttonType={"submit"}
      />
      <FormsFooter text={'Don’t have an Account?'} link={'Sign Up'} linkto={'/signUp'} />
    </form>
  );
}
