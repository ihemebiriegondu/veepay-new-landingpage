import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import Wallet from "./walletSection";
import Bank from "./bankSection";
import CarouselSwipperButtons from "./carouselSwipperButtons";

export default function TopMobileCarousel(props) {
  return (
    <div className="">
      <Swiper
        modules={[A11y]}
        spaceBetween={50}
        slidesPerView={1}
      >
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
      </Swiper>
    </div>
  );
}
