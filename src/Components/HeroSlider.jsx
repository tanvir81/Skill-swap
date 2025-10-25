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
    image: "https://i.ibb.co/0vvNyYc/growtika-58-K6-WZiwd0g-unsplash.jpg",
  },
  {
    title: "Become a UI UX Designer",
    subtitle: "UI,UX Design and branding skills",
    image: "https://i.ibb.co/8g0Q97TG/ux-store-j-JT2r2n7l-YA-unsplash.jpg",
  },
  {
    title: "Become a Graphic Designer",
    subtitle: "Photoshop, Illustrator, and branding skills",
    image: "https://i.ibb.co/jkt37nb0/emily-bernal-v9v-II5g-V8-Lw-unsplash.jpg",
  },
  {
    title: "Master English Language",
    subtitle: "Learn client communication",
    image: "https://i.ibb.co/RpRnGwSs/tim-mossholder-WE-Kv-ZB1l0-unsplash.jpg",
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
              className="relative flex flex-col items-center justify-center text-white h-[32rem] w-full rounded-lg bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="bg-black/35 p-8 rounded-lg text-center max-w-xl">
                <h2 className="text-4xl font-bold">{slide.title}</h2>
                <p className="mt-2 text-lg text-[#f96c1f]">{slide.subtitle}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;
