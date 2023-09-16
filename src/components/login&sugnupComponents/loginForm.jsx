import React from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { GrFacebookOption, GrApple } from "react-icons/gr";
import { HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi";
import FormButtons from "./formButtons";

export default function LoginForm() {
  return (
    <form className="w-full">
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
          className="outline-none lg:py-4 py-3 lg:px-6 px-4 w-full border border-black lg:rounded-xl rounded-lg lg:text-xl text-lg bg-transparent"
        />
        <span className="mt-3 mb-4 inline-block text-warning text-base hidden">
          invalid email
        </span>
      </div>
      <div className="mb-4">
        <div className="lg:py-4 py-3 lg:px-6 px-4 w-full border border-black lg:rounded-xl rounded-lg lg:text-xl text-lg flex items-center justify-between">
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            className="outline-none bg-transparent"
          />
          <HiOutlineEye />
          <HiOutlineEyeOff className="hidden" />
        </div>
        <span className="mt-3 mb-1.5 inline-block text-warning text-base hidden">
          Incorrect Password?
        </span>
      </div>
      <div className="flex justify-between items-center md:text-base text-sm mb-11">
        <div className="flex">
          <input type="checkbox" name="remember" id="remember" className="" />
          <p className="ms-3">Remember me</p>
        </div>{" "}
        <Link to={"/login"}>Forgot Password?</Link>
      </div>
      <FormButtons type={"submit"} text={"Login"} font={"font-bold lg:text-xl"} />
      <div className="lg:mt-11 mt-9 lg:mb-11 mb-9 flex justify-center items-center">
        <span className="border border-primary md:w-16 w-14"></span>
        <p className="mx-2.5 lg:text-base text-sm font-medium">Or sign in with </p>
        <span className="border border-primary md:w-16 w-14"></span>
      </div>
      <div className="flex items-center justify-center md:gap-10 gap-8">
        <div className="md:px-5 px-4 md:py-1 py-0.5 border border-primary/30 md:rounded-md rounded">
          <FcGoogle />
        </div>
        <div className="md:px-5 px-4 md:py-1 py-0.5 border border-primary/30 md:rounded-md rounded">
          <GrFacebookOption />
        </div>
        <div className="md:px-5 px-4 md:py-1 py-0.5 border border-primary/30 md:rounded-md rounded">
          <GrApple />
        </div>
      </div>
    </form>
  );
}
