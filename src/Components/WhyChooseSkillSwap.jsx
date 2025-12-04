import React from "react";
import {
  FaUserTie,
  FaDollarSign,
  FaUsers,
  FaCalendarCheck,
} from "react-icons/fa";

const WhyChooseSkillSwap = () => {
  return (
    <div className="w-full bg-base-100 py-16">
      <h2 className="text-4xl font-bold mb-12 text-center text-[#f96c1f]">
        Why Choose SkillSwap
      </h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="flex items-start gap-4 p-6 rounded-lg bg-gradient-to-r from-[#045c90]/10 to-[#f96c1f]/10 shadow hover:shadow-xl transition">
          <FaUserTie className="text-4xl text-[#f96c1f]" />
          <div>
            <h3 className="text-xl font-semibold text-[#045c90]">
              Expert Mentors
            </h3>
            <p className="text-gray-700">
              Learn from experienced professionals across diverse industries.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4 p-6 rounded-lg bg-gradient-to-r from-[#f96c1f]/10 to-[#045c90]/10 shadow hover:shadow-xl transition">
          <FaDollarSign className="text-4xl text-[#f96c1f]" />
          <div>
            <h3 className="text-xl font-semibold text-[#045c90]">
              Affordable Sessions
            </h3>
            <p className="text-gray-700">
              Flexible pricing to make learning accessible for everyone.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4 p-6 rounded-lg bg-gradient-to-r from-[#045c90]/10 to-[#f96c1f]/10 shadow hover:shadow-xl transition">
          <FaUsers className="text-4xl text-[#f96c1f]" />
          <div>
            <h3 className="text-xl font-semibold text-[#045c90]">
              Supportive Community
            </h3>
            <p className="text-gray-700">
              Connect with learners and mentors in a collaborative environment.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4 p-6 rounded-lg bg-gradient-to-r from-[#f96c1f]/10 to-[#045c90]/10 shadow hover:shadow-xl transition">
          <FaCalendarCheck className="text-4xl text-[#f96c1f]" />
          <div>
            <h3 className="text-xl font-semibold text-[#045c90]">
              Easy Booking
            </h3>
            <p className="text-gray-700">
              Simple and secure system to schedule your sessions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseSkillSwap;
