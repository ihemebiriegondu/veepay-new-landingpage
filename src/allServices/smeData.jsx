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

  return (
    <div className="bg-servicesBg">
      <main className="absolute top-0 bottom-0 w-full z-20 bg-servicesBg">
        <LogoNav background={"bg-white"} />
        <section className="pt-10 px-10 pb-16 bg-servicesBg">
          <div className="mb-6 mont">
            <Link
              to={"/dashboard"}
              className="lg:flex hidden items-center w-fit text-base font-medium"
            >
              <IoArrowBackOutline className="inline cursor-pointer" />
              <p className="ms-2.5">Back to Homepage</p>
            </Link>
          </div>

          <h1 className="mb-3 text-primary font-bold text-4xl text-center mont">
            BUY SME DATA
          </h1>

          <form className="py-16 px-20 bg-white mx-32 rounded-t-4xl rounded-br-4xl text-2xl flex flex-col gap-y-12">
            <div>
              <label htmlFor="datanetwork" className="ps-2.5">
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
              <label htmlFor="datanumber" className="ps-2.5">
                Phone Number
              </label>
              <FormInputs
                type={"tel"}
                id={"datanumber"}
                placeholder={"Enter number"}
                disabled={false}
                value={""}
              />
            </div>

            <div>
              <label htmlFor="datavalue" className="ps-2.5">
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
              <label htmlFor="dataamount" className="ps-2.5">
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
                font={"font-bold lg:text-3xl mont md:text-lg text-base rounded-t-2xl rounded-br-2xl"}
              />
            </div>
          </form>
        </section>
        <Footer />
      </main>
    </div>
  );
}
