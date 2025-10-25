import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  {
    title: "Learn Web Development",
    subtitle: "Master HTML, CSS, JavaScript & React",
    image: "https://i.ibb.co/fzKjKVhH/WebDev.jpg",
  },
  {
    title: "Become a UI UX Designer",
    subtitle: "UI,UX Design and branding skills",
    image: "https://i.ibb.co/8g0Q97TG/ux-store-j-JT2r2n7l-YA-unsplash.jpg",
  },
  {
    title: "Become a Graphic Designer",
    subtitle: "Photoshop, Illustrator, and branding skills",
    image: "https://i.ibb.co/N2GS45Bk/Graphic.jpg",
  },
  {
    title: "Master English Language",
    subtitle: "Learn client communication",
    image: "https://i.ibb.co/hzC48RH/Language.jpg",
  },
];

const HeroSlider = () => {
  return (
    <div className="w-full max-w-[1200px] mx-auto my-10">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="rounded-lg"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative h-[32rem] w-full rounded-lg bg-cover bg-center text-white"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-black/35 p-6 rounded-lg text-center max-w-xl">
                <h2 className="text-4xl font-bold">{slide.title}</h2>
                <p className="mt-2 text-xl font-semibold text-accent">
                  {slide.subtitle}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;
