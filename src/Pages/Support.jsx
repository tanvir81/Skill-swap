import React from "react";
import { FaEnvelope, FaPhoneAlt, FaQuestionCircle } from "react-icons/fa";

const Support = () => {
  return (
    <div className="w-full max-w-7xl mx-auto mt-25 px-4 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#045c90]">Support Center</h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Need help? We’re here to assist you with any questions, issues, or
          feedback. Reach out through the options below and our team will get
          back to you quickly.
        </p>
      </div>

      {/* Support Options */}
      <div className="grid md:grid-cols-3 gap-8">
        {/* FAQ */}
        <div className="bg-base-100 shadow-md rounded-lg p-6 text-center border border-[#045c90] hover:shadow-xl transition">
          <FaQuestionCircle className="text-4xl text-[#f96c1f] mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-[#045c90] mb-2">FAQs</h2>
          <p className="text-gray-600 mb-4">
            Find answers to common questions about SkillSwap, accounts, and
            sessions.
          </p>
          <a href="#" className="text-[#f96c1f] font-medium hover:underline">
            Browse FAQs
          </a>
        </div>

        {/* Email Support */}
        <div className="bg-base-100 shadow-md rounded-lg p-6 text-center border border-[#045c90] hover:shadow-xl transition">
          <FaEnvelope className="text-4xl text-[#f96c1f] mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-[#045c90] mb-2">
            Email Us
          </h2>
          <p className="text-gray-600 mb-4">
            Send us an email and our support team will respond within 24 hours.
          </p>
          <a
            href="mailto:support@skillswap.com"
            className="text-[#f96c1f] font-medium hover:underline"
          >
            support@skillswap.com
          </a>
        </div>

        {/* Phone Support */}
        <div className="bg-base-100 shadow-md rounded-lg p-6 text-center border border-[#045c90] hover:shadow-xl transition">
          <FaPhoneAlt className="text-4xl text-[#f96c1f] mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-[#045c90] mb-2">Call Us</h2>
          <p className="text-gray-600 mb-4">
            Prefer to talk directly? Our support line is available during
            business hours.
          </p>
          <p className="text-[#f96c1f] font-medium">+880-1234-567890</p>
        </div>
      </div>

      {/* Footer Note */}
      <div className="text-center mt-12">
        <p className="text-gray-600">
          We value your feedback and strive to make SkillSwap better every day.
        </p>
      </div>
    </div>
  );
};

export default Support;
