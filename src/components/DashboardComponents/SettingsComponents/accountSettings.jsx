import React, { useState } from "react";
import SettingInputs from "./settingInputs";
import FeedBackModal from "./feedBackModal";
import masterCardLogo from "../../../assets/icons/MasterCard.png";
import cardBg from "../../../assets/images/01.png";

import CarouselSwipperButtons from "../MainDashboardComponents/carouselSwipperButtons";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y } from "swiper/modules";

export default function AccountSetting(props) {
  const [bankName, setBankName] = useState(props.bankDetails.bankName);
  const [accName, setAccName] = useState(props.bankDetails.accName);
  const [accNo, setAccNo] = useState(props.bankDetails.accNo);

  const [error, setError] = useState(false);
  const [succes, setSucess] = useState(false);

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
    console.log(e.target.id);
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
          <CarouselSwipperButtons />
          {props.cards &&
            props.cards.map((card) => (
              <SwiperSlide key={card.number}>
                <div>
                  <p
                    className="text-right text-sm text-gray-500 pe-3"
                    id={card.number}
                    onClick={(e) => removeCardFunction(e)}
                  >
                    Remove
                  </p>
                  <div className="pb-3 xs:pt-20 pt-16 px-5 rounded-xl overflow-hidden relative">
                    <div className="relative z-30">
                      <p className="xs:mb-8 mb-6 xs:text-2xl text-lg font-semibold">
                        {card.number}
                      </p>
                      <div className="flex items-center justify-between xs:gap-1 gap-1.5">
                        <div>
                          <p className="xs:text-xs text-xxs">Card Holder Name</p>
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
                        <div className="xs:w-12 w-7 xs:h-7 h-4">
                          <img
                            src={masterCardLogo}
                            alt="master card logo"
                            className="w-full h-full"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="absolute top-0 bottom-0 w-full left-0 z-20">
                      <img
                        src={cardBg}
                        alt="card background"
                        className="w-full h-full object-cover"
                      />
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
