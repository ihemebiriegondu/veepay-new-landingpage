import React from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { GrFacebookOption, GrApple } from "react-icons/gr";
import { HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi";
import FormButtons from "./formButtons";

export default function LoginForm() {
  return (
    <form className="w-full">
      <h1 className="text-primary text-3xl font-bold text-center mb-5">
        Log in to Account
      </h1>
      <hr className="mx-auto w-1/12 border-t border-primary" />
      <div className="mt-20 mb-7">
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email/Phone No"
          className="outline-none py-4 px-6 w-full border border-black rounded-xl text-xl"
        />
        <span className="mt-3 mb-4 inline-block text-warning text-base hidden">
          invalid email
        </span>
      </div>
      <div className="mb-4">
        <div className="py-4 px-6 w-full border border-black rounded-xl text-xl flex items-center justify-between">
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            className="outline-none"
          />
          <HiOutlineEye />
          <HiOutlineEyeOff className="hidden" />
        </div>
        <span className="mt-3 mb-1.5 inline-block text-warning text-base hidden">
          Incorrect Password?
        </span>
      </div>
      <div className="flex justify-between items-center text-base mb-11">
        <div className="flex">
          <input type="checkbox" name="remember" id="remember" className="" />
          <p className="ms-3">Remember me</p>
        </div>{" "}
        <Link to={"/login"}>Forgot Password?</Link>
      </div>
      <FormButtons type={"submit"} text={"Login"} font={"font-bold text-xl"} />
      <div className="mt-11 mb-11 flex justify-center items-center">
        <span className="border border-primary w-16"></span>
        <p className="mx-2.5 text-base font-medium">Or sign in with </p>
        <span className="border border-primary w-16"></span>
      </div>
      <div className="flex items-center justify-center gap-10">
        <div className="px-5 py-1 border border-primary/30 rounded-md">
          <FcGoogle />
        </div>
        <div className="px-5 py-1 border border-primary/30 rounded-md">
          <GrFacebookOption />
        </div>
        <div className="px-5 py-1 border border-primary/30 rounded-md">
          <GrApple />
        </div>
      </div>
    </form>
  );
}
