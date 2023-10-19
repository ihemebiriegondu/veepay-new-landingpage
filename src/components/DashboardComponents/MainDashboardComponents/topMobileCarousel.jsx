import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import Wallet from "./walletSection";
import Bank from "./bankSection";
import SingleDashCard from "./singleDashCard";
import CarouselSwipperButtons from "./carouselSwipperButtons";

export default function TopMobileCarousel(props) {
  return (
    <div className="">
      <Swiper modules={[A11y]} spaceBetween={50} slidesPerView={1}>
        <CarouselSwipperButtons />
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
    </div>
  );
}
