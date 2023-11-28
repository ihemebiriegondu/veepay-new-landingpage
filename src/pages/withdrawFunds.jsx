import React, { useState } from "react";
import LogoNav from "../components/login&signupComponents/logoNav";
import { Link } from "react-router-dom";
import { IoArrowBackOutline } from "react-icons/io5";
import { HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi";
import FormInputs from "../components/allServicesComponents/formInputs";
import SettingInputs from "../components/DashboardComponents/SettingsComponents/settingInputs";
import FormButtons from "../components/login&signupComponents/formButtons";

export default function WithdrawFunds(props) {
  const [passwordType, setPasswordType] = useState("password");

  return (
    <div className="lg:bg-servicesBg bg-mobileFormBg">
      <main className="absolute top-0 bottom-0 w-full z-20 lg:bg-servicesBg bg-mobileFormBg flex flex-col justify-between">
        <LogoNav background={"bg-white"} />

        <section className="lg:pt-10 pt-5 md:px-10 xs:px-6 px-4 pb-16 lg:bg-servicesBg bg-mobileFormBg grow">
          <div className="mb-12 mont">
            <Link
              to={"/dashboard"}
              className="lg:flex hidden items-center w-fit text-base font-medium"
            >
              <IoArrowBackOutline className="inline cursor-pointer" />
              <p className="ms-2.5">Back to Dashboard</p>
            </Link>
          </div>

          <h1 className="mont lg:text-4xl md:text-3xl text-2xl font-bold text-primary lg:mb-8 md:mb-6 mb-4 text-center">
            Withdraw Funds
          </h1>

          <form className="bg-white flex flex-col lg:gap-y-16 md:gap-y-14 gap-y-12 lg:rounded-t-4xl md:rounded-t-3xl sm:rounded-t-xl lg:rounded-br-4xl md:rounded-br-3xl sm:rounded-br-xl lg:py-14 md:py-9 py-6 lg:px-20 md:px-12 xs:px-6 px-4 xl:mx-32 lg:mx-16 mx-0">
            <div>
              <p className="lg:mb-7 md:mb-4 mb-2 lg:text-2xl md:text-xl sm:text-lg text-base font-medium ">
                Confirm Bank Details
              </p>
              <div className="grid md:grid-cols-2 grid-cols-1 2xl:gap-x-40 xl:gap-x-32 lg:gap-x-28 md:gap-x-12 gap-x-8 lg:gap-y-12 gap-y-6 md:pe-0 sm:pe-20 xs:pe-10 pe-8">
                <SettingInputs
                  label={"Bank Name"}
                  value={props.bankDetails.bankName}
                  inputEvent={""}
                  inputType={"viewOnly"}
                />
                <SettingInputs
                  label={"Account Name"}
                  value={props.bankDetails.accName}
                  inputEvent={""}
                  inputType={"viewOnly"}
                />
                <SettingInputs
                  label={"Account No"}
                  value={props.bankDetails.accNo}
                  inputEvent={""}
                  inputType={"viewOnly"}
                />
              </div>
            </div>

            <div className="flex flex-col lg:gap-y-12 md:gap-y-8 gap-y-4">
              <div>
                <label
                  htmlFor="withdrawAmount"
                  className="lg:ps-2.5 ps-2 ps-1.5 lg:text-xl md:text-lg text-base"
                >
                  Amount (₦)
                </label>
                <FormInputs
                  type={"tel"}
                  id={"withdrawAmount"}
                  placeholder={"Enter Amount"}
                  disabled={false}
                  value={""}
                  inputChanged={(value) => {
                    console.log(value);
                  }}
                />
              </div>
              <div>
                <label
                  htmlFor="withdrawPassword"
                  className="lg:ps-2.5 ps-2 ps-1.5 lg:text-xl md:text-lg text-base"
                >
                  Password
                </label>
                <div
                  className={`lg:my-3 md:my-1.5 my-0.5 lg:border-4 md:border-3 border-2 border-servicesInput lg:rounded-xl md:rounded-lg rounded-md lg:px-10 md:px-6 px-2 lg:text-2xl md:text-lg text-base flex items-center justify-between`}
                >
                  <input
                    type={passwordType}
                    name="withdrawPassword"
                    id="withdrawPassword"
                    placeholder="********"
                    className="lg:py-5 md:py-3.5 py-2 outline-none bg-transparent w-full me-4 text-black"
                    onChange={(e) => {
                      console.log(e.target.value);
                    }}
                  />
                  <button type="button" className="outline-none border-none">
                    <HiOutlineEye
                      className={`${
                        passwordType === "password" ? "block" : "hidden"
                      }`}
                      onClick={() => setPasswordType("text")}
                    />
                    <HiOutlineEyeOff
                      className={`${
                        passwordType === "password" ? "hidden" : "block"
                      }`}
                      onClick={() => setPasswordType("password")}
                    />
                  </button>
                </div>
              </div>
            </div>
            <div className="mx-auto sm:w-1/2 w-4/5">
              <FormButtons
                type={"submit"}
                text={"Withdraw"}
                buttonType={"submit"}
                font={"font-bold mont lg:text-3xl md:text-xl text-base"}
              />
            </div>
          </form>
        </section>
      </main>
    </div>
  );
}
