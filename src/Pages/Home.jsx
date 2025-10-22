import React from "react";
import HeroSlider from "../Components/HeroSlider";
import PopularSkills from "../Components/PopularSkills";
import TopRatedProviders from "../Components/TopRatedProviders";
import HowItWorks from "../Components/HowItWorks";
import Testimonials from "../Components/Testimonials";

const Home = () => {
  return (
    <div>
      <HeroSlider />
      <PopularSkills />
      <TopRatedProviders />
      <HowItWorks />
      <Testimonials />
    </div>
  );
};

export default Home;
