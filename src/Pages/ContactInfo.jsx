import React from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import logo from "../assets/SkillSwap.png";

const ContactInfo = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-100 px-6 py-16">
      <div className="w-full max-w-5xl bg-base-200 rounded-xl shadow-lg  overflow-hidden">
        {/* Header */}
        <div className=" text-[#045c90] py-6 px-8">
          <h2 className="text-3xl font-bold text-center">Contact SkillSwap</h2>
          <p className="text-center mt-2 text-sm">
            We’re here to help with anything related to your learning journey.
          </p>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-8 p-8">
          {/* Left: Logo + Intro */}
          <div className="flex flex-col items-center text-center space-y-4">
            <img src={logo} alt="SkillSwap Logo" className="h-28 w-auto" />
            <p className="text-gray-700 leading-relaxed max-w-sm">
              SkillSwap connects learners with experts across diverse fields.
              Reach out anytime and let us support your growth.
            </p>
          </div>

          {/* Right: Contact Details */}
          <div className="space-y-6">
            {/* Email */}
            <div className="flex items-center gap-4 p-4 rounded-lg bg-white shadow cursor-pointer transform transition duration-300 hover:scale-105 hover:bg-[#f96c1f]/10">
              <FaEnvelope className="text-[#f96c1f] text-2xl transition-colors duration-300 group-hover:text-[#045c90]" />
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="text-lg font-medium text-[#045c90]">
                  support@skillswap.io
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-4 p-4 rounded-lg bg-white shadow cursor-pointer transform transition duration-300 hover:scale-105 hover:bg-[#f96c1f]/10">
              <FaPhoneAlt className="text-[#f96c1f] text-2xl transition-colors duration-300 group-hover:text-[#045c90]" />
              <div>
                <p className="text-sm text-gray-500">Phone</p>
                <p className="text-lg font-medium text-[#045c90]">
                  +880 1234 567890
                </p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-4 p-4 rounded-lg bg-white shadow cursor-pointer transform transition duration-300 hover:scale-105 hover:bg-[#f96c1f]/10">
              <FaMapMarkerAlt className="text-[#f96c1f] text-2xl transition-colors duration-300 group-hover:text-[#045c90]" />
              <div>
                <p className="text-sm text-gray-500">Location</p>
                <p className="text-lg font-medium text-[#045c90]">
                  Barisal, Bangladesh
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
