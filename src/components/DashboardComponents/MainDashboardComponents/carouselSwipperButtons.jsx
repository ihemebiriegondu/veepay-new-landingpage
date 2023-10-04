import React, { useState } from "react";
import { useSwiper } from "swiper/react";
import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";

export default function CarouselSwipperButtons() {
  const swiper = useSwiper();

  const [snapIn, setSnapIn] = useState(swiper.activeIndex);

  return (
    <div>
      <div
        className={`absolute top-1/2 left-2 z-50 text-xl text-white/30 hover:text-white transition duration-200 ease-in cursor-pointer ${
          snapIn === 0 ? "hidden" : "block"
        }`}
      >
        <BiSolidLeftArrow
          onClick={() => {
            swiper.slidePrev();
            setSnapIn(swiper.activeIndex);
          }}
        />
      </div>

      <div
        className={`absolute top-1/2 right-2 z-50 text-xl text-white/30 hover:text-white transition duration-200 ease-in cursor-pointer ${
          snapIn === 1 ? "hidden" : "block"
        }`}
      >
        <BiSolidRightArrow
          onClick={() => {
            swiper.slideNext();
            setSnapIn(swiper.activeIndex);
          }}
        />
      </div>
    </div>
  );
}
