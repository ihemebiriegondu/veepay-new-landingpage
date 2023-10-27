import React, { useState } from "react";
import SettingInputs from "./settingInputs";
import FeedBackModal from "./feedBackModal";
import masterCardLogo from "../../../assets/icons/MasterCard.png";
import visaLogo from "../../../assets/icons/Type=Default.png";
import maestraLogo from "../../../assets/icons/Type=Color, showText=False, showSymbol=True.png";
import jbcLogo from "../../../assets/icons/Style=Gradient, Flat=False.png";

import CarouselSwipperButtons from "../MainDashboardComponents/carouselSwipperButtons";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y } from "swiper/modules";

export default function AccountSetting(props) {
  const [bankName, setBankName] = useState(props.bankDetails.bankName);
  const [accName, setAccName] = useState(props.bankDetails.accName);
  const [accNo, setAccNo] = useState(props.bankDetails.accNo);

  const [error, setError] = useState(false);
  const [succes, setSucess] = useState(false);

  const [activeSlide, setActiveSlide] = useState(0);

  const changeBankDetails = (e) => {
    e.preventDefault();

    const newDetails = { bankName: bankName, accName: accName, accNo: accNo };
    if (bankName !== "" && accName !== "" && accNo !== "") {
      props.updateBankDetails(newDetails);
      setSucess(true);
      setTimeout(() => {
        setSucess(false);
      }, 2000);
    } else if (bankName === "" || accName === "" || accNo === "") {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 2000);
    }
  };

  const removeCardFunction = (e) => {
    const cardsArray = props.cards;

    const newCardsArray = cardsArray.filter(
      (card) => card.number !== e.target.id
    );
    props.setCards(newCardsArray);
  };

  return (
    <article className="lg:py-14 py-6 lg:px-12 px-4 bg-white">
      <h1 className="text-2xl text-primary font-semibold mb-8">Account</h1>
      <h6 className="text-base font-medium mb-4">Bank Details</h6>

      <form
        className="mt-5 grid md:grid-cols-2 grid-cols-1 lg:gap-x-16 gap-x-8 lg:gap-y-8 gap-y-6"
        onSubmit={(e) => changeBankDetails(e)}
      >
        <SettingInputs
          label={"Bank Name"}
          value={bankName}
          inputEvent={(e) => setBankName(e.target.value)}
        />
        <SettingInputs
          label={"Account Name"}
          value={accName}
          inputEvent={(e) => setAccName(e.target.value)}
        />
        <SettingInputs
          label={"Account No"}
          value={accNo}
          inputEvent={(e) => setAccNo(e.target.value)}
        />

        <button
          type="submit"
          className="w-3/4 inline-block py-2 px-7 text-sm font-medium italic text-white rounded-md bg-primary outline-none transition ease-in-out duration-500"
        >
          Update
        </button>
      </form>

      <div className="pt-16">
        <h6 className="text-base font-medium mb-4">Cards</h6>

        <Swiper
          modules={[A11y]}
          spaceBetween={28}
          onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            900: {
              slidesPerView: 2,
            },
            1300: {
              slidesPerView: 3,
            },
          }}
        >
          <CarouselSwipperButtons active={activeSlide} />
          {props.cards &&
            props.cards.map((card) => (
              <SwiperSlide key={card.number}>
                <div>
                  <div className="flex justify-end">
                    <p
                      className="text-right text-sm text-gray-500 pe-3 w-fit"
                      id={card.number}
                      onClick={(e) => removeCardFunction(e)}
                    >
                      Remove
                    </p>
                  </div>

                  <div
                    className={`pb-3 px-5 rounded-xl overflow-hidden relative cards ${card.bankColor}`}
                  >
                    <div className="relative z-30">
                      <div
                        className={`flex justify-end xs:pt-10 pt-8 ${
                          card.cardType === "mastercard" ||
                          card.cardType === "visa"
                            ? "xs:mb-10 mb-8"
                            : "mb-7"
                        }`}
                      >
                        <div className="xs:w-16 w-12 xs:h-12 h-8">
                          <img src={card.bankLogo} alt="bank logo" />
                        </div>
                      </div>
                      <p className="xs:mb-8 mb-6 xs:text-2xl text-lg font-semibold">
                        {card.number}
                      </p>
                      <div className="flex items-center justify-between xs:gap-1 gap-1.5">
                        <div>
                          <p className="xs:text-xs text-xxs">
                            Card Holder Name
                          </p>
                          <p className="xs:text-sm text-xs font-semibold uppercase">
                            {card.name}
                          </p>
                        </div>
                        <div>
                          <p className="xs:text-xs text-xxs">Expired Date</p>
                          <p className="xs:text-sm text-xs font-semibold">
                            {(card.expDate.month.length < 2
                              ? `0${card.expDate.month}`
                              : card.expDate.month) +
                              "/" +
                              card.expDate.year}
                          </p>
                        </div>
                        <div
                          className={`${
                            card.cardType === "mastercard"
                              ? "xs:w-12 w-7 xs:h-7 h-4"
                              : "xs:w-12 w-7 xs:h-12 h-8"
                          }`}
                        >
                          {card.cardType === "mastercard" && (
                            <img
                              src={masterCardLogo}
                              alt="master card logo"
                              className="w-full h-full"
                            />
                          )}
                          {card.cardType === "visa" && (
                            <img
                              src={visaLogo}
                              alt="visa logo"
                              className="w-full h-full"
                            />
                          )}
                          {card.cardType === "maestro" && (
                            <img
                              src={maestraLogo}
                              alt="maestro card logo"
                              className="w-full h-full"
                            />
                          )}
                          {card.cardType === "jcb" && (
                            <img
                              src={jbcLogo}
                              alt="jbc logo"
                              className="w-full h-full object-scale-down"
                            />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>

        <button
          type="button"
          className="mt-6 inline-block py-2 px-7 text-sm font-medium italic text-white rounded-md bg-primary outline-none transition ease-in-out duration-500"
          onClick={() => props.setShowAddCard(true)}
        >
          {props.cards.length > 0 ? "Add new card" : "Add card"}
        </button>
      </div>

      {error && <FeedBackModal error={error} />}
      {succes && <FeedBackModal error={error} />}
    </article>
  );
}
