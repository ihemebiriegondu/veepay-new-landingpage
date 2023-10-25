import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y } from "swiper/modules";

import CarouselSwipperButtons from "./carouselSwipperButtons";
import SingleDashCard from "./singleDashCard";

export default function DashCards(props) {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <div className="xmd:text-lg text-base relative overflow-hidden xmd:w-72 xl:pt-10">
      <div className="flex items-center justify-between xmd:mb-5 mb-2">
        <h5 className="xmd:text-xl text-base font-semibold">Cards</h5>
        <p
          className="text-gray-500 hover:text-black transition duration-200 ease xmd:text-lg text-sm"
          onClick={() => {
            props.activeMainTab("Settings");
            props.activeSettingTab("Accounts");
          }}
        >
          Manage
        </p>
      </div>

      <Swiper
        modules={[A11y]}
        spaceBetween={28}
        slidesPerView={1}
        className=""
        onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
      >
        <CarouselSwipperButtons active={activeSlide} />
        {props.cards &&
          props.cards.map((card) => (
            <SwiperSlide key={card.number}>
              <SingleDashCard
                cardType={card.cardType}
                cardNumber={card.number}
                cardName={card.name}
                cardMonth={card.expDate.month}
                cardYear={card.expDate.year}
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}
