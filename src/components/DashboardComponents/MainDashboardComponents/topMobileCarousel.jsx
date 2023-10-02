import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y} from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import Wallet from "./walletSection";
import Bank from "./bankSection";
import CarouselSwipperButtons from "./carouselSwipperButtons";

export default function TopMobileCarousel() {
  return (
    <div>
      <Swiper
        modules={[Pagination, A11y]}
        spaceBetween={50}
        slidesPerView={1}
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
