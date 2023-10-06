import React, { useState } from "react";

export default function NewsLetter() {
  const [email, setEmail] = useState("");
  const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;

  const submitEmail = (e) => {
    e.preventDefault();

    if (email !== "" && emailRegex.test(email)) {
      //email to use for newsletter
      console.log(email);
    }
  };

  return (
    <article className="lg:mt-3.5 mt-2 lg:mb-10 md:mb-5 mb-2 2xl:w-5/12 xl:w-1/2 lg:w-7/12 md:w-3/4 sm:w-5/6 w-full mx-auto">
      <h2 className="font-bold lg:text-2xl md:text-lg text-base lg:mb-3.5 md:mb-1.5 mb-1">
        Subscribe to our Newsletter!
      </h2>
      <p className="font-medium lg:text-base md:text-sm text-xs">
        Be the first to get exclusive offers ands the latest product, news and
        trends
      </p>
      <form className="mt-4" onSubmit={(e) => submitEmail(e)} noValidate>
        <div className="border border-primary flex items-center sm:justify-center rounded">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email Address"
            className="bg-transparent outline-none grow md:px-2.5 px-2 md:text-base xs:text-sm text-xs md:py-2 py-1"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <button
            type="submit"
            className="outline-none bg-gradient-to-r from-primary to-darkPrimary md:px-3.5 px-2.5 md:py-2 py-1 rounded-tr rounded-br uppercase font-bold text-white md:text-base xs:text-sm text-xs"
          >
            Subscribe
          </button>
        </div>
      </form>
    </article>
  );
}
