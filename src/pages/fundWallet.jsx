import React, { useState } from "react";
import LogoNav from "../components/login&signupComponents/logoNav";
import { Link } from "react-router-dom";
import { IoArrowBackOutline } from "react-icons/io5";
import FormInputs from "../components/allServicesComponents/formInputs";
import { HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi";
import Footer from "../components/footer";

export default function FundWallet(props) {
  const [passwordType, setPasswordType] = useState("password");

  //const [cardSelected, setCardSelected] = useState([]);
  console.log(props.cards);

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

          <form className="lg:py-16 md:py-11 py-6 lg:px-20 md:px-12 xs:px-6 px-4 bg-white xl:mx-32 lg:mx-16 mx-0 lg:rounded-t-4xl md:rounded-t-3xl rounded-t-xl lg:rounded-br-4xl md:rounded-br-3xl rounded-br-xl flex flex-col lg:gap-y-12 md:gap-y-8 gap-y-4">
            <h1 className="mont text-4xl font-bold text-primary lg:-mb-9 md:-mb-5 -mb-1">
              Fund Wallet
            </h1>

            <div>
              <select
                name="selectCard"
                id="selectCard"
                className="outline-none border-none"
              >
                {props.cards &&
                  props.cards.map((card) => (
                    <option key={card.number} value="">
                      <div>
                        <img src="" alt="banklogo" />
                      </div>
                      <div>
                        <p></p>
                        <p></p>
                      </div>
                      <div>
                        <p>Change</p>
                      </div>
                    </option>
                  ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="fundamount"
                className="lg:ps-2.5 ps-2 ps-1.5 lg:text-2xl md:text-xl text-lg"
              >
                Amount (₦)
              </label>
              <FormInputs
                type={"tel"}
                id={"fundamount"}
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
                htmlFor="fundpassword"
                className="lg:ps-2.5 ps-2 ps-1.5 lg:text-2xl md:text-xl text-lg"
              >
                Password
              </label>
              <div
                className={`lg:my-3 md:my-1.5 my-0.5 lg:border-4 md:border-3 border-2 border-servicesInput lg:rounded-xl md:rounded-lg rounded-md lg:px-10 md:px-6 px-2 lg:text-2xl md:text-lg text-base flex items-center justify-between`}
              >
                <input
                  type={passwordType}
                  name="fundpassword"
                  id="fundpassword"
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
          </form>
        </section>

        <div className="bottom-0 w-full">
          <Footer />
        </div>
      </main>
    </div>
  );
}
