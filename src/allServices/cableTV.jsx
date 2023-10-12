import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoArrowBackOutline } from "react-icons/io5";

import LogoNav from "../components/login&signupComponents/logoNav";
import FormDropdowns from "../components/allServicesComponents/formDropdowns";
import FormInputs from "../components/allServicesComponents/formInputs";
import FormButtons from "../components/login&signupComponents/formButtons";
import Footer from "../components/footer";

import TvSubsLists from "../components/allServicesComponents/tvSubsLists";

export default function CableTV() {
  const [paymentItems, setPaymentItems] = useState([]);

  const [biller, setBiller] = useState("Select biller");
  const [paymentItem, setPaymentItem] = useState("Payment item");
  const [decoderNo, setDecoderNo] = useState("");
  const [subAmount, setSubAmount] = useState("");

  const setPaymentItemsFunction = (value) => {
    setBiller(value);

    TvSubsLists.forEach((list) => {
      if (list.biller === value) {
        setPaymentItems(list.paymentItems);
      }
    });
    setPaymentItem("Payment item");
  };

  const cableTvSubFunction = (e) => {
    e.preventDefault();
  };

  console.log(subAmount);

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

          <h1 className="font-bold xl:text-4xl lg:text-3xl md:text-2xl text-xl uppercase xl:mb-10 lg:mb-8 md:mb-6 mb-5 text-primary text-center mont">
            CABLE TV SUBSCRIPTION
          </h1>

          <form
            onSubmit={(e) => {
              cableTvSubFunction(e);
            }}
            className="lg:py-16 md:py-11 py-6 lg:px-20 md:px-12 xs:px-6 px-4 bg-white xl:mx-32 lg:mx-16 mx-0 lg:rounded-t-4xl md:rounded-t-3xl rounded-t-xl lg:rounded-br-4xl md:rounded-br-3xl rounded-br-xl flex flex-col lg:gap-y-12 md:gap-y-8 gap-y-4"
          >
            <div>
              <FormDropdowns
                id={"billerInput"}
                formOptions={TvSubsLists}
                value={biller}
                optionClickFunction={(value) => {
                  setPaymentItemsFunction(value);
                }}
              />
            </div>

            <div>
              <FormDropdowns
                id={"paymentItemInput"}
                formOptions={paymentItems}
                value={paymentItem}
                optionClickFunction={(value) => {
                  setPaymentItem(value);
                }}
                setSubAmount={setSubAmount}
              />
            </div>

            <div>
              <FormInputs
                type={"tel"}
                id={"decoderNumber"}
                placeholder={"Smart card number/Decoder number"}
                disabled={false}
                value={""}
                inputChanged={(value) => {
                  setDecoderNo(value);
                }}
              />
            </div>

            <div>
              <FormInputs
                type={"tel"}
                id={"subamount"}
                placeholder={
                  subAmount === "Fill Amount" ? "Fill Amount" : "Amount"
                }
                disabled={subAmount !== "Fill Amount"}
                value={subAmount === "Fill Amount" ? "" : subAmount}
                inputChanged={(value) => {
                  setSubAmount(value);
                }}
              />
            </div>

            <div className="mx-auto sm:w-1/2 w-4/5 pt-6">
              <FormButtons
                type={"submit"}
                text={"Pay"}
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
