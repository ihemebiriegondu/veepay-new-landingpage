import React, { useState } from "react";
import LogoNav from "../components/login&signupComponents/logoNav";
import { Link } from "react-router-dom";
import { IoArrowBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import { AiFillCreditCard } from "react-icons/ai";
import FormInputs from "../components/allServicesComponents/formInputs";
import { HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi";
import Footer from "../components/footer";
import FormDropdowns from "../components/allServicesComponents/formDropdowns";
import FormButtons from "../components/login&signupComponents/formButtons";

export default function FundWallet(props) {
  const [passwordType, setPasswordType] = useState("password");

  const [cardsToDisplay, setCardsToDisplay] = useState(props.cards);
  const [cardSelected, setCardSelected] = useState(props.cards[0]);

  const setCardToUse = (cardOption) => {
    props.cards.forEach((card) => {
      if (card.number === cardOption) {
        setCardSelected(card);
      }
    });
    const newCardList = props.cards.filter(
      (card) => card.number !== cardOption
    );
    setCardsToDisplay(newCardList);
  };

  const fundWalletFunction = (e) => {
    e.preventDefault();

    if (cardSelected === undefined) {
      console.log("No card selected");
    } else {
      console.log(cardSelected);
    }
  };

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

          <article className="lg:rounded-t-4xl md:rounded-t-3xl sm:rounded-t-xl lg:rounded-br-4xl md:rounded-br-3xl sm:rounded-br-xl overflow-hidden sm:bg-white lg:py-14 md:py-9 sm:py-6 lg:px-20 md:px-12 sm:px-6 xl:mx-32 lg:mx-16 mx-0">
            <h1 className="mont lg:text-4xl md:text-3xl text-2xl font-bold text-primary mb-4 sm:block hidden">
              Fund Wallet
            </h1>
            <div className="lg:mb-12 md:mb-8 sm:mb-4">
              {props.cards.length > 0 ? (
                <FormDropdowns
                  id={"cardsList"}
                  formOptions={cardsToDisplay}
                  value={cardSelected}
                  optionClickFunction={setCardToUse}
                />
              ) : (
                <div className="lg:rounded-xl md:rounded-lg rounded-md flex items-center justify-between shadow mb-2 text-black bg-white lg:px-10 md:px-6 sm:px-2 px-3 lg:py-5 md:py-3.5 sm:py-2 py-3">
                  <div className="flex items-center md:gap-x-3 gap-x-1">
                    <span className="text-white bg-darkPrimary md:p-2.5 p-2 rounded-full md:text-2xl text-xl">
                      <AiFillCreditCard />
                    </span>
                    <p className="font-medium md:text-base text-sm">
                      Add Credit/Debit card
                    </p>
                  </div>
                  <span>
                    <IoChevronForwardOutline />
                  </span>
                </div>
              )}
            </div>

            <form
              onSubmit={(e) => {
                fundWalletFunction(e);
              }}
              className="bg-white flex flex-col lg:gap-y-12 md:gap-y-8 gap-y-4 sm:px-0 xs:px-6 px-4 sm:py-0 py-6"
            >
              <h1 className="mont lg:text-4xl md:text-3xl text-2xl font-bold text-primary sm:mb-4 sm:hidden">
                Fund Wallet
              </h1>

              <div>
                <label
                  htmlFor="fundamount"
                  className="lg:ps-2.5 ps-2 ps-1.5 lg:text-2xl md:text-xl sm:text-lg text-base"
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
                  className="lg:ps-2.5 ps-2 ps-1.5 lg:text-2xl md:text-xl sm:text-lg text-base"
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
              <div className="mx-auto sm:w-1/2 w-4/5 pt-6">
                <FormButtons
                  type={"submit"}
                  text={"Fund"}
                  buttonType={"submit"}
                  font={"font-bold mont lg:text-3xl md:text-xl text-base"}
                />
              </div>
            </form>
          </article>
        </section>

        <div className="bottom-0 w-full">
          <Footer />
        </div>
      </main>
    </div>
  );
}
