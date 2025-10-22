import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const HeroSlider = () => {
  return (
    <div className="w-full max-w-6xl mx-auto my-10">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="rounded-lg"
      >
        <SwiperSlide>
          <div className="bg-primary text-white p-10 rounded-lg flex flex-col items-center justify-center h-64">
            <h2 className="text-3xl font-bold">Learn Web Development</h2>
            <p className="mt-2">Master HTML, CSS, JavaScript & React</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-secondary text-white p-10 rounded-lg flex flex-col items-center justify-center h-64">
            <h2 className="text-3xl font-bold">Become a Graphic Designer</h2>
            <p className="mt-2">Photoshop, Illustrator, and branding skills</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-accent text-white p-10 rounded-lg flex flex-col items-center justify-center h-64">
            <h2 className="text-3xl font-bold">Master Freelancing</h2>
            <p className="mt-2">Upwork, Fiverr, and client communication</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroSlider;
