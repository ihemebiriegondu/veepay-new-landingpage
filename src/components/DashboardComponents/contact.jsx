import React from "react";
import FormButtons from "../login&signupComponents/formButtons";

export default function Contact() {
  const submitMessage = (e) => {
    e.preventDefault();
  };

  return (
    <section className="md:mx-0 mx-auto xl:w-3/4 lg:w-4/5 md:w-5/6 w-full 1.5xl:ps-0 lg:ps-16 md:ps-6">
      <h2 className="text-primary md:text-3xl text-2xl font-bold md:mb-10 mb-6 1.5xl:pt-0 md:pt-10 pt-5 mont md:text-start text-center">
        Get in touch
      </h2>

      <form
        className="lg:text-xl md:text-lg text-base font-medium"
        onSubmit={(e) => submitMessage(e)}
      >
        <div className="flex flex-col lg:mb-8 mb-5">
          <label htmlFor="name" className="lg:mb-2 md:mb-1 mb-0.5 mont">
            Your Name:
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="outline-none border-none bg-white lg:rounded-xl md:rounded-lg rounded-md lg:px-5 md:px-4 px-2 lg:py-6 md:py-4 py-2 lg:text-2xl md:text-xl text-lg"
          />
        </div>

        <div className="flex flex-col lg:mb-8 mb-5">
          <label htmlFor="email" className="lg:mb-2 md:mb-1 mb-0.5 mont">
            Your Email Address:
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="outline-none border-none bg-white lg:rounded-xl md:rounded-lg rounded-md lg:px-5 md:px-4 px-2 lg:py-6 md:py-4 py-2 lg:text-2xl md:text-xl text-lg"
          />
        </div>

        <div className="flex flex-col lg:mb-8 mb-5">
          <label htmlFor="pnumber" className="lg:mb-2 md:mb-1 mb-0.5 mont">
            Your Phone Number:
          </label>
          <input
            type="tel"
            name="pnumber"
            id="pnumber"
            className="outline-none border-none bg-white lg:rounded-xl md:rounded-lg rounded-md lg:px-5 md:px-4 px-2 lg:py-6 md:py-4 py-2 lg:text-2xl md:text-xl text-lg"
          />
        </div>

        <div className="flex flex-col lg:h-96 md:h-72 h-56 lg:mb-4 md:mb-3 mb-2">
          <label htmlFor="messages" className="mb-2 mont">
            Your Message:
          </label>
          <textarea
            name="messages"
            id="messages"
            className="outline-none border-none bg-white lg:rounded-xl md:rounded-lg rounded-md lg:px-5 md:px-4 px-2 lg:py-6 md:py-4 py-2 lg:text-2xl md:text-xl text-lg resize-none w-full grow"
          ></textarea>
        </div>

        <div className="flex items-center md:gap-3 gap-1.5 mb-9">
          <input
            type="checkbox"
            name="humanCheck"
            id="humanCheck"
            className="accent-primary"
          />
          <label
            htmlFor="humanCheck"
            className="md:text-sm text-xs mont font-medium"
          >
            I am not a robot
          </label>
        </div>

        <div className="mx-auto sm:w-1/2 w-4/5">
          <FormButtons
            type={"submit"}
            text={"Send"}
            buttonType={"submit"}
            font={"font-bold lg:text-2xl md:text-lg text-base"}
          />
        </div>
      </form>
    </section>
  );
}
