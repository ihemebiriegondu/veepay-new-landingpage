import React from "react";
import { useSwiper } from "swiper/react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function CarouselSwipperButtons() {
  const swiper = useSwiper();

  return (
    <div className="">
      <div
        className={`absolute top-1/2 left-0.5 z-50 text-xl text-black bg-white hover:text-primary p-1 rounded-full shadow-sm transition duration-200 ease-in cursor-pointer`}
        onClick={() => {
          swiper.slidePrev();
        }}
      >
        <FiChevronLeft />
      </div>

      <div
        className={`absolute bottom-1/2 right-0.5 z-50 text-xl text-black bg-white hover:text-primary p-1 rounded-full shadow-sm transition duration-200 ease-in cursor-pointer`}
        onClick={() => {
          swiper.slideNext();
        }}
      >
        <FiChevronRight />
      </div>
    </div>
  );
}
