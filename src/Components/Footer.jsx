import React from "react";
import { FaTwitter, FaYoutube, FaFacebookF } from "react-icons/fa";
import { Link } from "react-router";
import logo from "../assets/SkillSwap.png";

const Footer = () => {
  return (
    <footer className="w-full bg-[#045c90] text-white px-6 py-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-8">
        {/* Left: Logo */}
        <div className="flex justify-center md:justify-start">
          <img
            src={logo}
            alt="SkillSwap Logo"
            className="h-16 md:h-24 w-auto"
          />
        </div>

        {/* Middle: Links */}
        <nav className="flex flex-col md:flex-row items-center gap-4 text-sm">
          <Link to="/contact" className="hover:underline">
            Contact info
          </Link>
          <Link to="/privacy" className="hover:underline">
            Privacy policy
          </Link>
        </nav>

        {/* Right: Social Icons */}
        <nav className="flex justify-center md:justify-end">
          <div className="flex gap-6 text-xl">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#f96c1f] transition-colors"
            >
              <FaTwitter className="text-2xl md:text-3xl" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#f96c1f] transition-colors"
            >
              <FaYoutube className="text-2xl md:text-3xl" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#f96c1f] transition-colors"
            >
              <FaFacebookF className="text-2xl md:text-3xl" />
            </a>
          </div>
        </nav>
      </div>

      {/*  Copyright */}
      <aside className="text-sm text-center mt-6 md:mt-4">
        <p>Copyright ©2025 - All rights reserved by SkillSwap Ltd</p>
      </aside>
    </footer>
  );
};

export default Footer;
