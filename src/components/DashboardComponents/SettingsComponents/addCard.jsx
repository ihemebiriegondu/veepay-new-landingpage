import React, { useState } from "react";
import { FiCreditCard, FiX } from "react-icons/fi";
import { BiSolidErrorCircle } from "react-icons/bi";
import FormButtons from "../../login&signupComponents/formButtons";
import bankCardsList from "../SettingsComponents/bankCardsList";

export default function AddCard(props) {
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [cvc, setCvc] = useState("");
  const [expDate, setExpDate] = useState({ month: "", year: "" });

  const [error, setError] = useState([]);

  const currentYear = new Date().getFullYear();
  const maxEllapsedYear = (currentYear + 4).toString().slice(2);

  const valid = require("card-validator");
  const lookup = require("binlookup")();
  const expDateValidation = valid.expirationDate(expDate);

  const cardNoFormat = (value) => {
    const number = value
      .replace(/\s+/g, "")
      .replace(/[^0-9]/gi, "")
      .substr(0, 16);
    const parts = [];

    for (let i = 0; i < number.length; i += 4) {
      parts.push(number.substr(i, 4));
    }

    return parts.length > 1 ? parts.join(" ") : value;
  };

  const inputErrorCheck = (e, validator) => {
    if (validator) {
      let errorArray = error;
      if (!errorArray.includes(e.target.id)) {
        errorArray.push(e.target.id);
      }
      setError(errorArray);
    } else {
      let errorArray = error;
      errorArray = errorArray.filter((error) => error !== e.target.id);
      setError(errorArray);
    }
  };

  const addCardFunction = (e) => {
    e.preventDefault();
    const cardsArray = props.cards;

    if (
      cardNumber !== "" &&
      cardName !== "" &&
      cvc !== "" &&
      expDate.month !== "" &&
      expDate.year !== ""
    ) {
      if (error.length === 0) {
        const cardObj = {};

        let lookUpBank;
        lookup(cardNumber.split(" ").join("")).then((data) => {
          lookUpBank = data.bank.name;
          cardObj.bankName = data.bank.name;
          console.log(data.bank.name);

          if (lookUpBank !== "") {
            const bankCard = bankCardsList.find(
              (card) => card.name === lookUpBank
            );
            cardObj.bankColor = bankCard.cardColor;
            cardObj.bankLogo = bankCard.cardLogo;

            //other fuctions after getting bank name
            cardObj.name = cardName;
            cardObj.number = cardNumber;
            cardObj.cvc = cvc;
            cardObj.expDate = expDate;

            if (cardsArray.length > 0) {
              if (!cardsArray.some((card) => card.number === cardNumber)) {
                cardsArray.push(cardObj);
              }
            } else {
              cardsArray.push(cardObj);
            }
            props.setShowAddCard(false);
            props.setCards(cardsArray);

            const noVal = valid.number(cardNumber);
            if (noVal.card) {
              cardObj.cardType = noVal.card.type;
            }
          }
        });
      }
    }
  };

  return (
    <article className="fixed bg-black/50 top-0 bottom-0 w-full left-0 z-50">
      <div className="absolute top-0 right-0 flex justify-end pt-4 pe-4 sm:text-3xl text-xl text-white">
        <FiX onClick={() => props.setShowAddCard(false)} />
      </div>
      <div className="flex flex-col justify-center h-full">
        <div className="bg-white xl:mx-32 lg:mx-24 md:mx-16 xs:mx-6 mx-3 md:pt-7 pt-6 md:pb-14 pb-7 xl:px-24 lg:px-16 md:px-10 xs:px-5 px-2.5 xl:rounded-4xl lg:rounded-3xl md:rounded-2xl xl:rounded-bl-none lg:rounded-bl-none md:rounded-bl-none">
          <h1 className="mont lg:text-4xl md:text-3xl sm:text-2xl text-xl md:font-bold font-semibold lg:mb-8 md:mb-7 sm:mb-6 mb-5 text-primary">
            Add New Card
          </h1>

          <form
            className="flex flex-col lg:gap-y-10 md:gap-y-8 gap-y-5"
            onSubmit={(e) => {
              addCardFunction(e);
            }}
          >
            <div
              className={`flex items-center rounded-md border xl:px-8 lg:px-6 md:px-4 sm:px-3 px-2 xl:text-2xl lg:text-xl md:text-lg sm:text-base text-sm ${
                error.includes("cardNumber")
                  ? "border-warning"
                  : "border-black/80"
              }`}
            >
              <div className="relative grow">
                <input
                  type="tel"
                  id="cardNumber"
                  autoComplete="cc-number"
                  maxLength="19"
                  value={cardNoFormat(cardNumber)}
                  className="block cardInput lg:pb-2 pb-1.5 lg:pt-3 pt-2.5 w-full bg-transparent appearance-none outline-none placeholder:text-black/50"
                  placeholder="0000 0000 0000 0000"
                  onChange={(e) => {
                    setCardNumber(e.target.value);
                    const numberValidation = valid.number(e.target.value);
                    inputErrorCheck(e, !numberValidation.isValid);
                  }}
                />
                <label
                  htmlFor="cardNumber"
                  className={`absolute xs:text-sm text-xs duration-300 transform -translate-y-4 scale-75 top-1.5 z-10 origin-[0] bg-white px-1 left-1 ${
                    error.includes("cardNumber") ? "text-warning" : "text-black"
                  }`}
                >
                  Card Number
                </label>
              </div>
              <FiCreditCard className="" />
            </div>

            <div className="grid grid-cols-2 lg:gap-4 md:gap-3 gap-2">
              <div
                className={`flex items-center rounded-md border xl:px-8 lg:px-6 md:px-4 sm:px-3 px-2 xl:text-2xl lg:text-xl md:text-lg sm:text-base text-sm ${
                  error.includes("month") || error.includes("year")
                    ? "border-warning"
                    : "border-black/80"
                }`}
              >
                <div className="relative grow flex items-baseline">
                  <input
                    type="number"
                    name="month"
                    id="month"
                    autoComplete="cc-exp-month"
                    min={"1"}
                    max={"12"}
                    placeholder="MM"
                    maxLength={"2"}
                    className="cardInput lg:pb-2 pb-1.5 lg:pt-3 pt-2.5 bg-transparent appearance-none outline-none placeholder:text-black/50 md:w-10 w-6"
                    onChange={(e) => {
                      const expMonthValidation = valid.expirationMonth(
                        e.target.value
                      );
                      inputErrorCheck(e, !expMonthValidation.isValid);

                      setExpDate((prevValue) => ({
                        ...prevValue,
                        month: e.target.value,
                      }));

                      if (e.target.value.length > e.target.maxLength) {
                        e.target.value = e.target.value.slice(
                          0,
                          e.target.maxLength
                        );
                      }
                      document.getElementById("year").value = "";
                    }}
                    onBlur={(e) => {
                      if (
                        e.target.value.length > 0 &&
                        e.target.value.length < e.target.maxLength
                      ) {
                        e.target.value = "0" + e.target.value;
                      }
                    }}
                  />
                  <p className="text-black/50">/</p>
                  <input
                    type="number"
                    name="year"
                    id="year"
                    autoComplete="cc-exp-year"
                    min={"0"}
                    max={"99"}
                    placeholder="YY"
                    maxLength={"2"}
                    className="cardInput lg:pb-2 pb-1.5 lg:pt-3 pt-2.5 bg-transparent appearance-none outline-none placeholder:text-black/50"
                    onChange={(e) => {
                      if (e.target.value > maxEllapsedYear) {
                        let errorArray = error;
                        if (!errorArray.includes(e.target.id)) {
                          errorArray.push(e.target.id);
                        }
                        setError(errorArray);
                      } else {
                        const expDateValidation = valid.expirationDate({
                          month: expDate.month,
                          year: e.target.value,
                        });
                        inputErrorCheck(e, !expDateValidation.isValid);
                      }
                      setExpDate((prevValue) => ({
                        ...prevValue,
                        year: e.target.value,
                      }));

                      if (e.target.value.length > e.target.maxLength) {
                        e.target.value = e.target.value.slice(
                          0,
                          e.target.maxLength
                        );
                      }
                    }}
                    onBlur={(e) => {
                      if (
                        e.target.value.length > 0 &&
                        e.target.value.length < e.target.maxLength
                      ) {
                        e.target.value = "0" + e.target.value;
                      }
                    }}
                  />
                  <label
                    htmlFor="month"
                    className="absolute xs:text-sm text-xs text-black duration-300 transform -translate-y-4 scale-75 top-1.5 z-10 origin-[0] bg-white px-1 left-1"
                  >
                    Expiry Date
                  </label>
                </div>
                <FiCreditCard className="" />
              </div>

              <div
                className={`items-center rounded-md border xl:px-8 lg:px-6 md:px-4 sm:px-3 px-2 xl:text-2xl lg:text-xl md:text-lg sm:text-base text-sm ${
                  error.includes("cvc") ? "border-warning" : "border-black/80"
                } ${expDateValidation.isValid ? "flex" : "hidden"}`}
              >
                <div className="relative grow">
                  <input
                    type="tel"
                    id="cvc"
                    autoComplete="cc-csc"
                    maxLength={"3"}
                    className="block cardInput lg:pb-2 pb-1.5 lg:pt-3 pt-2.5 w-full bg-transparent appearance-none outline-none placeholder:text-black/50"
                    placeholder="***"
                    onChange={(e) => {
                      setCvc(e.target.value);

                      const cvcValidation = valid.cvv(e.target.value);
                      inputErrorCheck(e, !cvcValidation.isValid);
                    }}
                  />
                  <label
                    htmlFor="cvc"
                    className={`absolute xs:text-sm text-xs duration-300 transform -translate-y-4 scale-75 top-1.5 z-10 origin-[0] bg-white px-1 left-1 ${
                      error.includes("cvc") ? "text-warning" : "text-black"
                    }`}
                  >
                    CVC/CVV
                  </label>
                </div>
                <BiSolidErrorCircle
                  className={`lg:text-2xl md:text-xl text-lg ${
                    error.includes("cvc") ? "text-warning" : "text-black/70"
                  }`}
                />
              </div>
            </div>

            <div
              className={`rounded-md border xl:px-8 lg:px-6 md:px-4 sm:px-3 px-2 xl:text-2xl lg:text-xl md:text-lg sm:text-base text-sm ${
                error.includes("cardName")
                  ? "border-warning"
                  : "border-black/80"
              }`}
            >
              <div className="relative grow">
                <input
                  type="tel"
                  id="cardName"
                  autoComplete="cc-name"
                  className={`block cardInput lg:pb-2 pb-1.5 lg:pt-3 pt-2.5 w-full bg-transparent appearance-none outline-none placeholder:text-black/50`}
                  placeholder="Enter Card Holder Name"
                  onChange={(e) => {
                    setCardName(e.target.value);
                    const nameValidation = valid.cardholderName(e.target.value);
                    inputErrorCheck(e, !nameValidation.isValid);
                  }}
                />
                <label
                  htmlFor="cardName"
                  className={`absolute xs:text-sm text-xs duration-300 transform -translate-y-4 scale-75 top-1.5 z-10 origin-[0] bg-white px-1 left-1 ${
                    error.includes("cardName") ? "text-warning" : "text-black"
                  }`}
                >
                  Card Name
                </label>
              </div>
            </div>
            <FormButtons
              type={"submit"}
              text={"Add"}
              font={"font-semibold lg:text-2xl md:text-lg text-base mont"}
              buttonType={"submit"}
            />
          </form>
        </div>
      </div>
    </article>
  );
}
