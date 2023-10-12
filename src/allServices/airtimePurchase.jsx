import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoArrowBackOutline } from "react-icons/io5";

import LogoNav from "../components/login&signupComponents/logoNav";
import FormDropdowns from "../components/allServicesComponents/formDropdowns";
import FormInputs from "../components/allServicesComponents/formInputs";

import smeDatas from "../components/allServicesComponents/smeDatas";
import FormButtons from "../components/login&signupComponents/formButtons";
import Footer from "../components/footer";

export default function AirtimePurchase() {
  const [error, setError] = useState("none");
  const [phoneNoError, setPhoneNoError] = useState(false);
  const [airtimeError, setAirtimeError] = useState(false);

  const [networkValue, setNetworkValue] = useState("Select Network");
  const [airtimeAmount, setAirtimeAmount] = useState("");
  const [phoneNo, setPhoneNo] = useState("");

  const buyAirtimeFunction = (e) => {
    e.preventDefault();

    if (
      networkValue === "Select Network" ||
      phoneNo === "" ||
      airtimeAmount === ""
    ) {
      setError("all");
      if (phoneNo === "" || phoneNo.length !== 11) {
        setPhoneNoError(true);
      }
    } else {
      if (phoneNo === "" || phoneNo.length !== 11) {
        setPhoneNoError(true);
      }
      if (parseInt(airtimeAmount) < 50) {
        setAirtimeError(true);
      }
      setError("none");
    }
  };

  return (
    <div className="lg:bg-servicesBg bg-mobileFormBg">
      <main className="absolute top-0 bottom-0 w-full z-20 lg:bg-servicesBg bg-mobileFormBg flex flex-col justify-between">
        <LogoNav background={"bg-white"} />
        <section className="lg:pt-10 pt-5 md:px-10 xs:px-6 px-4 pb-16 lg:bg-servicesBg bg-mobileFormBg grow">
          <div className="mb-6 mont">
            <Link
              to={"/dashboard"}
              className="lg:flex hidden items-center w-fit text-base font-medium"
            >
              <IoArrowBackOutline className="inline cursor-pointer" />
              <p className="ms-2.5">Back to Homepage</p>
            </Link>
          </div>

          <div className="lg:mb-10 md:mb-7 mb-4 text-primary text-center mont">
            <h1 className="font-bold lg:text-4xl md:text-3xl text-2xl uppercase lg:mb-4 md:mb-2 mb-1">
              BUY AIRTIME
            </h1>
            <p className="lg:text-xl md:text-lg text-sm font-medium">
              Top up your airtime instantly
            </p>
          </div>

          <form
            onSubmit={(e) => {
              buyAirtimeFunction(e);
            }}
            className="lg:py-16 md:py-11 py-6 lg:px-20 md:px-12 xs:px-6 px-4 bg-white xl:mx-32 lg:mx-16 mx-0 lg:rounded-t-4xl md:rounded-t-3xl rounded-t-xl lg:rounded-br-4xl md:rounded-br-3xl rounded-br-xl flex flex-col lg:gap-y-12 md:gap-y-8 gap-y-4"
          >
            <div>
              <label
                htmlFor="airtimenetwork"
                className="lg:ps-2.5 ps-2 ps-1.5 lg:text-2xl md:text-xl text-lg"
              >
                Network
              </label>
              <FormDropdowns
                id={"airtimenetwork"}
                formOptions={smeDatas}
                value={networkValue}
                optionClickFunction={(value) => {
                  setNetworkValue(value);
                  setError("none");
                }}
              />
            </div>

            <div>
              <label
                htmlFor="airtimenumber"
                className="lg:ps-2.5 ps-2 ps-1.5 lg:text-2xl md:text-xl text-lg"
              >
                Phone Number
              </label>
              <FormInputs
                type={"tel"}
                id={"airtimenumber"}
                placeholder={"Phone Number"}
                disabled={false}
                value={""}
                inputChanged={(value) => {
                  setPhoneNo(value);
                  setError("none");
                  setPhoneNoError(false);
                }}
              />
              <p
                className={`lg:ps-0 ps-1 xl:mt-0 lg:-mt-2 xl:text-lg lg:text-base md:text-sm text-xs lg:font-normal font-light lg:not-italic italic mont ${
                  phoneNoError ? "text-warning" : "text-primary"
                }`}
              >
                {phoneNoError
                  ? "Incorrect Network Number"
                  : "Phone number you wish to recharge"}
              </p>
            </div>

            <div>
              <label
                htmlFor="airtimeamount"
                className="lg:ps-2.5 ps-2 ps-1.5 lg:text-2xl md:text-xl text-lg"
              >
                Amount
              </label>
              <FormInputs
                type={"tel"}
                id={"airtimeamount"}
                placeholder={""}
                disabled={false}
                value={""}
                inputChanged={(value) => {
                  setAirtimeAmount(value);
                  setAirtimeError(false);
                  setError("none");
                }}
              />
              <p
                className={`lg:ps-0 ps-1 xl:mt-0 lg:-mt-2 xl:text-lg lg:text-base md:text-sm text-xs lg:font-normal font-light lg:not-italic italic mont ${
                  airtimeError ? "text-warning" : "text-primary"
                }`}
              >
                minimum airtime of N50.00
              </p>
            </div>

            <div className="mx-auto sm:w-1/2 w-4/5 pt-6">
              <FormButtons
                type={
                  error === "all" || phoneNoError || airtimeError
                    ? "invalid"
                    : "submit"
                }
                text={"Buy"}
                buttonType={"submit"}
                font={"font-bold mont lg:text-3xl md:text-xl text-base"}
              />
            </div>
          </form>
        </section>
        <div className="bottom-0 w-full">
          <Footer />
        </div>
      </main>
    </div>
  );
}
