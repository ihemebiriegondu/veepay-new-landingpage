import React from "react";
import { FcGoogle } from "react-icons/fc";
import { GrFacebookOption, GrApple } from "react-icons/gr";
import { Link } from "react-router-dom";

export default function FormsFooter() {
  return (
    <article>
      <div className="lg:mt-11 mt-9 lg:mb-11 mb-9 flex justify-center items-center">
        <span className="border border-primary md:w-16 w-14"></span>
        <p className="mx-2.5 lg:text-base text-sm font-medium">
          Or sign in with{" "}
        </p>
        <span className="border border-primary md:w-16 w-14"></span>
      </div>
      <div className="flex items-center justify-center md:gap-10 gap-8">
        <Link to={"/login"}>
          <div className="md:px-5 px-4 md:py-1 py-0.5 border border-primary/30 md:rounded-md rounded">
            <FcGoogle />
          </div>
        </Link>
        <Link to={"/login"}>
          <div className="md:px-5 px-4 md:py-1 py-0.5 border border-primary/30 md:rounded-md rounded">
            <GrFacebookOption />
          </div>
        </Link>
        <Link to={"/login"}>
          <div className="md:px-5 px-4 md:py-1 py-0.5 border border-primary/30 md:rounded-md rounded">
            <GrApple />
          </div>
        </Link>
      </div>

      <p className="pt-16 pb-10 mb-6 text-center text-sm font-medium lg:hidden block">
        <span>
          Don’t have an Account?{" "}
          <Link to={"/signUp"} className="text-primary">
            Sign Up
          </Link>
        </span>
      </p>
    </article>
  );
}
