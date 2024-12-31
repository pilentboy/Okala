import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function CustomSlider() {
  return (
    <div className="w-full h-[220px] sm:h-[300px] flex  rounded-lg  overflow-hidden items-center justify-center ">
      <Swiper
        // Install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        loop
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        className="w-full h-full"
      >
        <SwiperSlide className="h-full w-full">
          <img
            src="https://asset.okala.com/unsigned/rs:fill/size:0:0/plain/s3://cdn/slider/eb9c9d29-9983-44a4-849d-d52ddf0096f7.jpg"
            alt="slider img"
            className=" object-cover  w-full  h-full "
          />
        </SwiperSlide>
        <SwiperSlide className="h-full w-full">
          <img
            src="https://asset.okala.com/unsigned/rs:fill/size:0:0/plain/s3://cdn/slider/e683fa84-8cb1-40ce-85ed-f292cc7c27aa.jpg"
            alt="slider img"
            className=" object-cover  w-full  h-full "
          />
        </SwiperSlide>
        <SwiperSlide className="h-full w-full">
          <img
            src="https://asset.okala.com/unsigned/rs:fill/size:0:0/plain/s3://cdn/slider/64831501-0e98-44ae-a7ee-0f7d19bdd2c1.jpg"
            alt="slider img"
            className=" object-cover  w-full  h-full "
          />
        </SwiperSlide>
        <SwiperSlide className="h-full w-full">
          <img
            src="https://asset.okala.com/unsigned/rs:fill/size:0:0/plain/s3://cdn/slider/dfc7cda9-20d7-4d38-954a-c07f31839e10.jpg"
            className=" object-cover  w-full  h-full "
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
