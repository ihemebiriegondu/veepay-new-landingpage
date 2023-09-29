import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LogoNav from "../components/login&signupComponents/logoNav";
import { IoArrowBackOutline } from "react-icons/io5";
import FormButtons from "../components/login&signupComponents/formButtons";
import Footer from "../components/footer";

export default function PasswordResetCode() {
  const navigate = useNavigate();

  const [validationCode, setValidationCode] = useState([]);
  const completeCode = ["", "", "", "", "", ""];

  const checkCodeFunction = (e, index) => {
    const inputBoxes = document.querySelectorAll(".codeInput");

    let entry = e.target.value;
    let codeValues = [];

    if (entry.length <= 1 && isNaN(parseInt(entry)) === false) {
      inputBoxes[index].value = entry;

      inputBoxes.forEach((input) => {
        codeValues.push(input.value);
      });

      if (entry.length === 1) {
        if (index < inputBoxes.length - 1) {
          if (inputBoxes[index + 1].value === "") {
            inputBoxes[index + 1].disabled = false;
            inputBoxes[index + 1].focus();
            inputBoxes[index].disabled = true;
          }
        }
      }
    } else if (entry === "") {
      if (inputBoxes[index - 1] !== undefined) {
        inputBoxes[index - 1].disabled = false;
        inputBoxes[index - 1].focus();
        inputBoxes[index].disabled = true;
      }
    }
    setValidationCode(codeValues);
  };

  const submitForm = (e) => {
    e.preventDefault();

    if (validationCode.length !== 0) {
      navigate("/createpassword");
    }
  };

  return (
    <main className="bg-primary/10 absolute top-0 bottom-0 w-full">
      <div className="h-full flex flex-col">
        <div className="bg-white">
          <LogoNav />
        </div>
        <section className="xl:pt-11 pt-8 md:px-20 px-10 grow flex flex-col">
          <Link to={"/"} className="lg:flex hidden items-center w-fit">
            <IoArrowBackOutline className="w-4 h-4 inline cursor-pointer" />
            <p className="text-base font-medium ms-2.5">Back to Homepage</p>
          </Link>

          <form
            className="flex flex-col justify-center items-center grow text-center mx-auto 2xl:w-1/3 lg:w-1/2 sm:w-2/3 w-full"
            onSubmit={(e) => {
              submitForm(e);
            }}
          >
            <h1 className="mb-4 lg:text-4xl md:text-3xl text-2xl font-bold text-primary">
              Confirm Code
            </h1>
            <p className="lg:text-xl md:text-base text-sm font-medium">
              Enter the code sent to your phone
            </p>

            <div className="mt-5 mb-12 w-full font-bold lg:text-2xl md:text-xl text-lg flex items-center justify-center md:gap-x-4 gap-x-2.5">
              {completeCode &&
                completeCode.map((code, index) => (
                  <input
                    key={index}
                    type="tel"
                    placeholder="-"
                    maxLength={"1"}
                    disabled={index !== 0}
                    autoFocus={index === 0}
                    className="outline-none bg-white rounded-lg border-2 border-neutral-500/50 px-px text-center py-px md:w-14 w-10 placeholder:text-black disabled:bg-gray-300 codeInput"
                    onChange={(e) => {
                      checkCodeFunction(e, index);
                    }}
                  />
                ))}
            </div>

            <FormButtons
              type={""}
              text={"Submit"}
              font={"font-medium lg:text-xl"}
              buttonType={"submit"}
            />
          </form>
        </section>
        <Footer />
      </div>
    </main>
  );
}
