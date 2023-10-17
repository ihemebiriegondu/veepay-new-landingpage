import React, { useState } from "react";
import { FiCreditCard, FiX } from "react-icons/fi";
import { BiSolidErrorCircle } from "react-icons/bi";
import FormButtons from "../../login&signupComponents/formButtons";

export default function AddCard(props) {
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [cvc, setCvc] = useState("");
  const [expDate, setExpDate] = useState({ month: "", year: "" });

  const [error, setError] = useState([]);

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

  const inputErrorCheck = (e, limit) => {
    if (e.target.value.length < limit) {
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

    if (error.length === 0) {
      const cardObj = {};
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
    }
    props.setCards(cardsArray)
    props.setShowAddCard(false);
  };

  return (
    <article className="fixed bg-black/50 top-0 bottom-0 w-full left-0 z-50">
      <div className="flex justify-end pt-4 pe-4 text-3xl text-white">
        <FiX onClick={() => props.setShowAddCard(false)} />
      </div>
      <div className="flex flex-col justify-center h-full">
        <div className="bg-white mx-32 pt-7 pb-14 px-24 rounded-4xl rounded-bl-none">
          <h1 className="mont text-4xl font-bold mb-8 text-primary">
            Add New Card
          </h1>

          <form
            className="flex flex-col gap-y-10"
            onSubmit={(e) => {
              addCardFunction(e);
            }}
          >
            <div
              className={`flex items-center rounded-md border px-8 text-2xl ${
                error.includes("cardNumber")
                  ? "border-warning"
                  : "border-black/80"
              }`}
            >
              <div className="relative grow">
                <input
                  type="tel"
                  id="cardNumber"
                  maxLength="19"
                  value={cardNoFormat(cardNumber)}
                  className="block pb-2 pt-3 w-full bg-transparent appearance-none outline-none placeholder:text-black/50"
                  placeholder="0000 0000 0000 0000"
                  onChange={(e) => {
                    setCardNumber(e.target.value);
                    inputErrorCheck(e, 19);
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

            <div className="grid grid-cols-2 gap-x-4">
              <div
                className={`flex items-center rounded-md border px-8 text-2xl ${
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
                    min={"1"}
                    max={"12"}
                    placeholder="MM"
                    maxLength={"2"}
                    className="pb-2 pt-3.5 bg-transparent appearance-none outline-none placeholder:text-black/50 w-10"
                    onChange={(e) => {
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
                    }}
                    onBlur={(e) => {
                      if (
                        e.target.value.length > 0 &&
                        e.target.value.length < e.target.maxLength
                      ) {
                        e.target.value = "0" + e.target.value;
                      }
                      if (parseInt(e.target.value) > 12) {
                        e.target.value = "";
                      }
                      inputErrorCheck(e, 2);
                    }}
                  />
                  <p className="text-black/50">/</p>
                  <input
                    type="number"
                    name="year"
                    id="year"
                    min={"0"}
                    max={"99"}
                    placeholder="YY"
                    maxLength={"2"}
                    className="pb-2 pt-3.5 bg-transparent appearance-none outline-none placeholder:text-black/50"
                    onChange={(e) => {
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
                      inputErrorCheck(e, 2);
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
                className={`items-center rounded-md border px-8 text-2xl ${
                  error.includes("cvc") ? "border-warning" : "border-black/80"
                } ${expDate.month !== "" ? "flex" : "hidden"}`}
              >
                <div className="relative grow">
                  <input
                    type="tel"
                    id="cvc"
                    maxLength={"3"}
                    className="block pb-2 pt-3 w-full bg-transparent appearance-none outline-none placeholder:text-black/50"
                    placeholder="***"
                    onChange={(e) => {
                      setCvc(e.target.value);
                      inputErrorCheck(e, 3);
                    }}
                  />
                  <label
                    htmlFor="cvc"
                    className={`absolute xs:text-sm text-xs duration-300 transform -translate-y-4 scale-75 top-1.5 z-10 origin-[0] bg-white px-1 left-9 ${
                      error.includes("cvc") ? "text-warning" : "text-black"
                    }`}
                  >
                    CVC/CVV
                  </label>
                </div>
                <BiSolidErrorCircle className="text-black/70" />
              </div>
            </div>

            <div className="relative grow">
              <input
                type="tel"
                id="cardName"
                className={`block pb-2 pt-3 w-full bg-transparent appearance-none outline-none placeholder:text-black/50 rounded-md border px-8 text-2xl ${
                  error.includes("cardName")
                    ? "border-warning"
                    : "border-black/80"
                }`}
                placeholder="Enter Card Holder Name"
                onChange={(e) => {
                  setCardName(e.target.value);
                  inputErrorCheck(e, 2);
                }}
              />
              <label
                htmlFor="cardName"
                className={`absolute xs:text-sm text-xs duration-300 transform -translate-y-4 scale-75 top-1.5 z-10 origin-[0] bg-white px-1 left-9 ${
                  error.includes("cardName") ? "text-warning" : "text-black"
                }`}
              >
                Card Name
              </label>
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
