import React from "react";
import HeroSlider from "../Components/HeroSlider";
import PopularSkills from "../Components/PopularSkills";
import TopRatedProviders from "../Components/TopRatedProviders";
import HowItWorks from "../Components/HowItWorks";
import Testimonials from "../Components/Testimonials";
import UpcomingEvents from "../Components/UpcomingEvents";
import WhyChooseSkillSwap from "../Components/WhyChooseSkillSwap";

const Home = () => {
  return (
    <div>
      <HeroSlider />
      <PopularSkills />
      <TopRatedProviders />
      <HowItWorks />
      <Testimonials />
      <UpcomingEvents></UpcomingEvents>
      <WhyChooseSkillSwap></WhyChooseSkillSwap>
    </div>
  );
};

export default Home;
