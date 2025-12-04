import React from "react";
import logo from "../assets/SkillSwap.png";

const AboutUs = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 mt-20 py-16">
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-12">
        <img src={logo} alt="SkillSwap Logo" className="h-24 w-auto mb-6" />
        <h1 className="text-4xl font-bold text-[#045c90]">About SkillSwap</h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl">
          SkillSwap is a platform designed to connect learners with experts
          across diverse fields. Whether you want to master web development,
          improve your design skills, or learn a new language, SkillSwap makes
          it easy to find the right mentor and grow your expertise.
        </p>
      </div>

      {/* Mission Section */}
      <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
        <div>
          <h2 className="text-2xl font-semibold text-[#f96c1f] mb-4">
            Our Mission
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We believe learning should be accessible, engaging, and tailored to
            your goals. Our mission is to empower individuals by providing
            high-quality skill-sharing opportunities, fostering collaboration,
            and building a community where knowledge flows freely.
          </p>
        </div>
        <div className="bg-[#045c90]/10 p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold text-[#045c90] mb-3">
            Why Choose Us?
          </h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Expert mentors across multiple industries</li>
            <li>Flexible learning sessions tailored to your schedule</li>
            <li>Secure and easy booking system</li>
            <li>Supportive community for continuous growth</li>
          </ul>
        </div>
      </div>

      {/* Values Section */}
      <div className="text-center">
        <h2 className="text-2xl font-semibold text-[#f96c1f] mb-4">
          Our Values
        </h2>
        <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed">
          At SkillSwap, we value collaboration, innovation, and inclusivity. We
          strive to create a space where learners and mentors can connect, share
          ideas, and inspire each other to achieve their full potential.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
