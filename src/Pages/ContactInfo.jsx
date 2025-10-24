import React from "react";

const ContactInfo = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-100 px-4">
      <div
        className="p-8 rounded-xl border border-[#045c90] bg-base-200 w-full max-w-xl text-center space-y-5"
        style={{ boxShadow: "0 8px 24px #045c90" }}
      >
        <h2 className="text-3xl font-bold text-[#045c90]">Contact SkillSwap</h2>
        <p className="text-[#f96c1f] text-lg font-medium">
          Email: support@skillswap.io
        </p>
        <p className="text-[#f96c1f] text-lg font-medium">
          Phone: +880 1234 567890
        </p>
        <p className="text-gray-700 text-base">
          We are here to help with anything related to your learning journey.
          Reach out anytime!
        </p>
      </div>
    </div>
  );
};

export default ContactInfo;
