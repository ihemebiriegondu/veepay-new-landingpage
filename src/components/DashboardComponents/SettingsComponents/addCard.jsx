import React from "react";
import { FiCreditCard, FiX } from "react-icons/fi";

export default function AddCard(props) {
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

          <form className="flex flex-col gap-y-10">
            <div className="flex items-center rounded-md border border-black/80 px-8 text-2xl">
              <div className="relative grow">
                <input
                  type="tel"
                  id="cardNumber"
                  className="block pb-2 pt-3 w-full bg-transparent appearance-none outline-none placeholder:text-black/50"
                  placeholder="0000 0000 0000 0000"
                  onChange={(e) => {
                    console.log(e.target.value);
                  }}
                />
                <label
                  htmlFor="cardNumber"
                  className="absolute xs:text-sm text-xs text-black duration-300 transform -translate-y-4 scale-75 top-1.5 z-10 origin-[0] bg-white px-1 left-1"
                >
                  Card Number
                </label>
              </div>
              <FiCreditCard className="" />
            </div>

            <div className="grid grid-cols-2">
              <div className="flex items-center rounded-md border border-black/80 px-8 text-2xl">
                <div className="relative grow flex items-baseline">
                  <input
                    type="number"
                    name="month"
                    id="month"
                    min={"0"}
                    max={"12"}
                    placeholder="MM"
                    maxLength={"2"}
                    className="pb-2 pt-3.5 bg-transparent appearance-none outline-none placeholder:text-black/50 w-12"
                    onChange={(e) => {
                      if (e.target.value.length > e.target.maxLength) {
                        e.target.value = e.target.value.slice(
                          0,
                          e.target.maxLength
                        );
                      }
                    }}
                  />
                  <p className="text-black/50 me-2">/</p>
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
                      if (e.target.value.length > e.target.maxLength) {
                        e.target.value = e.target.value.slice(
                          0,
                          e.target.maxLength
                        );
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
            </div>

            <div className="relative grow">
              <input
                type="tel"
                id="cardName"
                className="block pb-2 pt-3 w-full bg-transparent appearance-none outline-none placeholder:text-black/50 rounded-md border border-black/80 px-8 text-2xl"
                placeholder="Enter Card Holder Name"
                onChange={(e) => {
                  console.log(e.target.value);
                }}
              />
              <label
                htmlFor="cardName"
                className="absolute xs:text-sm text-xs text-black duration-300 transform -translate-y-4 scale-75 top-1.5 z-10 origin-[0] bg-white px-1 left-9"
              >
                Card Name
              </label>
            </div>
          </form>
        </div>
      </div>
    </article>
  );
}
