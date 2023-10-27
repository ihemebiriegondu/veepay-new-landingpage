import React from "react";
import { useSwiper } from "swiper/react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function CarouselSwipperButtons() {
  const swiper = useSwiper();

  return (
    <div className="">
      {swiper.realIndex !== 0 && (
        <div
          className={`absolute left-0.5 bottom-1/2 z-50 text-xl text-black bg-white hover:text-primary p-1 rounded-full shadow-md transition duration-200 ease-in cursor-pointer`}
          onClick={() => {
            swiper.slidePrev();
          }}
        >
          <FiChevronLeft />
        </div>
      )}

      {swiper.realIndex === swiper.snapGrid.length - 1 ? (
        ""
      ) : (
        <div
          className={`absolute bottom-1/2 right-0.5 z-50 text-xl text-black bg-white hover:text-primary p-1 rounded-full shadow-md transition duration-200 ease-in cursor-pointer`}
          onClick={() => {
            swiper.slideNext();
          }}
        >
          <FiChevronRight />
        </div>
      )}
    </div>
  );
}
