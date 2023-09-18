import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi";
import FormButtons from "./formButtons";
import FormsFooter from "./formsFooter";

export default function SignUpForm(props) {
  const navigate = useNavigate();
  const [validityButton, setValidityButton] = useState("submit");

  const [fname, setFname] = useState("");
  const [fnameError, setFnameError] = useState(false);
  const [lname, setLname] = useState("");
  const [lnameError, setLnameError] = useState(false);
  const [phoneNo, setPhoneNo] = useState("");
  const [phoneNoError, setPhoneNoError] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
  const [passwordType, setPasswordType] = useState("password");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);

  const submitForm = (e) => {
    e.preventDefault();

    if (
      fname === "" &&
      lname === "" &&
      phoneNo === "" &&
      email === "" &&
      password === ""
    ) {
      setFnameError(true);
      setLnameError(true);
      setPhoneNoError(true);
      setEmailError(true);
      setPasswordError(true);
      setValidityButton("invalid");
    } else if (
      fname === "" ||
      lname === "" ||
      phoneNo === "" ||
      email === "" ||
      password === ""
    ) {
      setValidityButton("invalid");
      if (fname === "") {
        setFnameError(true);
      } else if (lname === "") {
        setLnameError(true);
      } else if (email === "" || !emailRegex.test(email)) {
        setEmailError(true);
      } else if (phoneNo === "") {
        setPhoneNoError(true);
      } else if (password === "") {
        setPasswordError(true);
      }
    } else {
      props.sucessType(true);
      setTimeout(() => {
        props.sucessType(false);
        navigate("/login");
      }, 2000);
    }
  };

  return (
    <form
      className="w-full lg:h-auto h-full lg:py-0 py-16"
      noValidate
      onSubmit={(e) => submitForm(e)}
    >
      <h1 className="text-primary lg:text-3xl text-2xl font-bold text-center mt-6 lg:mb-5 mb-4">
        Sign up for an Account
      </h1>
      <hr className="mx-auto lg:w-1/12 w-14 border-t border-primary" />

      <div className="lg:mt-20 mt-16 lg:mb-7 mb-6">
        <input
          type="text"
          name="fname"
          id="fname"
          placeholder="First name"
          className={`outline-none lg:py-4 py-3 lg:px-6 px-4 w-full border lg:rounded-xl rounded-lg lg:text-xl text-lg bg-transparent ${
            fnameError ? "border-warning" : "border-black"
          }`}
          onChange={(e) => {
            setFname(e.target.value);
            setFnameError(false);
            setLnameError(false);
            setEmailError(false);
            setPhoneNoError(false);
            setPasswordError(false);
            setValidityButton("button");
          }}
        />
        {fnameError && (
          <span className="mt-3 mb-4 inline-block text-warning md:text-base text-sm">
            Firstname field cannot be empty
          </span>
        )}
      </div>

      <div className="lg:mb-7 mb-6">
        <input
          type="text"
          name="lname"
          id="lname"
          placeholder="Last name"
          className={`outline-none lg:py-4 py-3 lg:px-6 px-4 w-full border lg:rounded-xl rounded-lg lg:text-xl text-lg bg-transparent ${
            lnameError ? "border-warning" : "border-black"
          }`}
          onChange={(e) => {
            setLname(e.target.value);
            setFnameError(false);
            setLnameError(false);
            setEmailError(false);
            setPhoneNoError(false);
            setPasswordError(false);
            setValidityButton("button");
          }}
        />
        {lnameError && (
          <span className="mt-3 mb-4 inline-block text-warning md:text-base text-sm">
            Lastname input field cannot be empty
          </span>
        )}
      </div>

      <div className="lg:mb-7 mb-6">
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          className={`outline-none lg:py-4 py-3 lg:px-6 px-4 w-full border lg:rounded-xl rounded-lg lg:text-xl text-lg bg-transparent ${
            emailError ? "border-warning" : "border-black"
          }`}
          onChange={(e) => {
            setEmail(e.target.value);
            setFnameError(false);
            setLnameError(false);
            setEmailError(false);
            setPhoneNoError(false);
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

      <div className="lg:mb-7 mb-6">
        <input
          type="tel"
          name="phoneNo"
          id="phoneNo"
          placeholder="Phone Number"
          className={`outline-none lg:py-4 py-3 lg:px-6 px-4 w-full border lg:rounded-xl rounded-lg lg:text-xl text-lg bg-transparent ${
            phoneNoError ? "border-warning" : "border-black"
          }`}
          onChange={(e) => {
            setPhoneNo(e.target.value);
            setFnameError(false);
            setLnameError(false);
            setEmailError(false);
            setPhoneNoError(false);
            setPasswordError(false);
            setValidityButton("button");
          }}
        />
        {phoneNoError && (
          <span className="mt-3 mb-4 inline-block text-warning md:text-base text-sm">
            Phone number field cannot be empty
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
              setFnameError(false);
              setLnameError(false);
              setEmailError(false);
              setPhoneNoError(false);
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
      <FormButtons
        type={validityButton}
        text={"Login"}
        font={"font-bold lg:text-xl"}
        buttonType={"submit"}
      />

      <FormsFooter />
    </form>
  );
}
