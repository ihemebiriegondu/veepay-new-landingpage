import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LogoNav from "../components/login&signupComponents/logoNav";
import { IoArrowBackOutline } from "react-icons/io5";
import FormButtons from "../components/login&signupComponents/formButtons";
import Footer from "../components/footer";

export default function PasswordResetCode() {
  const navigate = useNavigate();

  const [validationCode, setValidationCode] = useState([])
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
    setValidationCode(codeValues)
  };

  const submitForm = (e) => {
    e.preventDefault();

    if (validationCode.length !== 0) {
        navigate('/createpassword')
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
              Confirm Code
            </h1>
            <p className="text-xl font-medium">
              Enter the code sent to your phone
            </p>

            <div className="mt-5 mb-12 w-full font-bold text-2xl flex items-center gap-x-4">
              {completeCode &&
                completeCode.map((code, index) => (
                  <input
                    key={index}
                    type="tel"
                    placeholder="-"
                    maxLength={"1"}
                    disabled={index !== 0}
                    autoFocus={index === 0}
                    className="outline-none bg-white rounded-lg border-2 border-neutral-500/50 px-px text-center py-px w-full placeholder:text-black disabled:bg-gray-300 codeInput"
                    onChange={(e) => {
                      checkCodeFunction(e, index);
                    }}
                  />
                ))}
            </div>

            <FormButtons
              type={""}
              text={"Submit"}
              font={"font-bold lg:text-xl"}
              buttonType={"submit"}
            />
          </form>
        </section>
        <Footer />
      </div>
    </main>
  );
}
