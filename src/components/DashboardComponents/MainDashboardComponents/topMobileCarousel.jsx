import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import Wallet from "./walletSection";
import Bank from "./bankSection";
import SingleDashCard from "./singleDashCard";
import CarouselSwipperButtons from "./carouselSwipperButtons";

export default function TopMobileCarousel(props) {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <div className="">
      {props.bankDetails.bankName === "" && props.cards.length === 0 ? (
        <Swiper
          modules={[A11y]}
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
        >
          <CarouselSwipperButtons active={activeSlide} />
          <SwiperSlide>
            <Wallet />
          </SwiperSlide>

          <SwiperSlide>
            <div className="xmd:w-72 text-center h-full flex flex-col justify-center bg-white rounded-xl shadow xmd:py-0 md:py-24 py-20">
              <p className="text-black/70">No bank/card details added</p>
              <div className="mx-auto w-1/2">
                <button
                  type="button"
                  className={`lg:py-2 py-1 lg:text-lg md:text-base sm:text-sm font-medium rounded mt-3 w-full outline-none transition ease-in-out duration-500 bg-primary hover:bg-primary/90 text-white`}
                  onClick={() => {
                    props.activeMainTab("Settings");
                    props.activeSettingTab("Accounts");
                  }}
                >
                  Add
                </button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      ) : (
        <Swiper
          modules={[A11y]}
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
        >
          <CarouselSwipperButtons active={activeSlide} />
          <SwiperSlide>
            <Wallet />
          </SwiperSlide>

          {props.bankDetails.bankName && (
            <SwiperSlide>
              <Bank
                bankName={props.bankDetails.bankName}
                accName={props.bankDetails.accName}
                accNo={props.bankDetails.accNo}
                activeMainTab={props.activeMainTab}
                activeSettingTab={props.activeSettingTab}
              />
            </SwiperSlide>
          )}
          {props.cards &&
            props.cards.map((card) => (
              <SwiperSlide key={card.number}>
                <SingleDashCard
                  cardType={card.cardType}
                  cardNumber={card.number}
                  cardName={card.name}
                  cardMonth={card.expDate.month}
                  cardYear={card.expDate.year}
                  activeMainTab={props.activeMainTab}
                  activeSettingTab={props.activeSettingTab}
                />
              </SwiperSlide>
            ))}
        </Swiper>
      )}
    </div>
  );
}
