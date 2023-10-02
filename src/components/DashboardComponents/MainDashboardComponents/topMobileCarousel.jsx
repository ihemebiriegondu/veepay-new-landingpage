import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y, Keyboard } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/parallax";

import Wallet from "./walletSection";
import Bank from "./bankSection";
import CarouselSwipperButtons from "./carouselSwipperButtons";

export default function TopMobileCarousel() {
  return (
    <div>
      <Swiper
        modules={[Pagination, A11y, Keyboard]}
        spaceBetween={50}
        slidesPerView={1}
        Keyboard={true}
        pagination={{ clickable: true }}
      >
        <CarouselSwipperButtons />
        <SwiperSlide>
          <Wallet />
        </SwiperSlide>
        <SwiperSlide>
          <Bank />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
