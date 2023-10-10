import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoArrowBackOutline } from "react-icons/io5";

import LogoNav from "../components/login&signupComponents/logoNav";
import FormDropdowns from "../components/allServicesComponents/formDropdowns";
import FormInputs from "../components/allServicesComponents/formInputs";

import smeDatas from "../components/allServicesComponents/smeDatas";
import FormButtons from "../components/login&signupComponents/formButtons";
import Footer from "../components/footer";

export default function SmeData() {
  const [error, setError] = useState(false);

  const [dataValues, setDataValues] = useState([]);

  const [networkValue, setNetworkValue] = useState("Select Network");
  const [dataValue, setDataValue] = useState("");
  const [dataAmount, setDataAmount] = useState("");

  const setNetworkFunction = (netWorkOption) => {
    setNetworkValue(netWorkOption);

    smeDatas.forEach((datas) => {
      if (datas.network === netWorkOption) {
        setDataValues(datas.dataValue);
        //set datavalue to the first elemnt in the dataValues array
        setDataValue(
          `${datas.dataValue[0].value}- ${datas.dataValue[0].days} Days`
        );
        setDataAmount("₦ " + datas.dataValue[0].price);
      }
    });
  };

  const buySmeDataFunction = (e) => {
    e.preventDefault();

    setError(false)
  };

  return (
    <div className="lg:bg-servicesBg bg-mobileFormBg">
      <main className="absolute top-0 bottom-0 w-full z-20 lg:bg-servicesBg bg-mobileFormBg flex flex-col justify-between">
        <LogoNav background={"bg-white"} />
        <section className="pt-10 md:px-10 px-6 pb-16 lg:bg-servicesBg bg-mobileFormBg grow">
          <div className="mb-6 mont">
            <Link
              to={"/dashboard"}
              className="lg:flex hidden items-center w-fit text-base font-medium"
            >
              <IoArrowBackOutline className="inline cursor-pointer" />
              <p className="ms-2.5">Back to Homepage</p>
            </Link>
          </div>

          <h1 className="lg:mb-3 md:mb-5 mb-7 text-primary font-bold lg:text-4xl md:text-3xl text-2xl text-center mont lg:uppercase capitalize">
            Buy <span>SME</span> Data
          </h1>

          <form
            onSubmit={(e) => {
              buySmeDataFunction(e);
            }}
            className="lg:py-16 md:py-11 py-6 lg:px-20 md:px-12 px-6 bg-white xl:mx-32 lg:mx-16 mx-0 lg:rounded-t-4xl md:rounded-t-3xl rounded-t-xl lg:rounded-br-4xl md:rounded-br-3xl rounded-br-xl flex flex-col lg:gap-y-12 md:gap-y-8 gap-y-4"
          >
            <div>
              <label
                htmlFor="datanetwork"
                className="lg:ps-2.5 ps-2 ps-1.5 lg:text-2xl md:text-xl text-lg"
              >
                Network
              </label>
              <FormDropdowns
                id={"datanetwork"}
                formOptions={smeDatas}
                value={networkValue}
                optionClickFunction={setNetworkFunction}
              />
            </div>

            <div>
              <label
                htmlFor="datanumber"
                className="lg:ps-2.5 ps-2 ps-1.5 lg:text-2xl md:text-xl text-lg"
              >
                Phone Number
              </label>
              <FormInputs
                type={"tel"}
                id={"datanumber"}
                placeholder={"Enter number"}
                disabled={false}
                value={""}
              />
              {
                error && <p className="ps-1 lg:text-base md:text-sm text-xs text-warning lg:font-normal font-light lg:not-italic italic mont">
                Incorrect Network Number
              </p>
              }
            </div>

            <div>
              <label
                htmlFor="datavalue"
                className="lg:ps-2.5 ps-2 ps-1.5 lg:text-2xl md:text-xl text-lg"
              >
                Data Value
              </label>
              <FormDropdowns
                id={"datavalue"}
                formOptions={dataValues}
                value={dataValue}
                optionClickFunction={setDataValue}
                setDataAmount={setDataAmount}
              />
            </div>

            <div>
              <label
                htmlFor="dataamount"
                className="lg:ps-2.5 ps-2 ps-1.5 lg:text-2xl md:text-xl text-lg"
              >
                Amount
              </label>
              <FormInputs
                type={"text"}
                id={"dataamount"}
                placeholder={""}
                disabled={true}
                value={dataAmount}
              />
            </div>

            <div className="mx-auto sm:w-1/2 w-4/5 pt-6">
              <FormButtons
                type={"submit"}
                text={"Buy"}
                buttonType={"submit"}
                font={
                  "font-bold mont lg:text-3xl md:text-xl text-base md:rounded-t-2xl md:rounded-br-2xl"
                }
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
