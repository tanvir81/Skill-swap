import React from "react";
import { FaTwitter, FaYoutube, FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bottom-0 w-full bg-[#045c90] text-white p-10 rounded footer footer-horizontal footer-center">
      {/* Navigation Links */}
      <nav className="grid grid-flow-col gap-4 text-sm">
        <a href="/contact" className="hover:underline">
          Contact info
        </a>
        <a href="/privacy" className="hover:underline">
          Privacy policy
        </a>
      </nav>

      {/* Social Icons */}
      <nav>
        <div className="grid grid-flow-col gap-4 text-xl">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#f96c1f] transition-colors"
          >
            <FaTwitter className="text-3xl" />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#f96c1f] transition-colors"
          >
            <FaYoutube className="text-3xl" />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#f96c1f] transition-colors"
          >
            <FaFacebookF className="text-3xl" />
          </a>
        </div>
      </nav>

      {/* Footer Note */}
      <aside className="text-sm mt-4">
        <p>Copyright ©2025 - All rights reserved by SkillSwap Ltd</p>
      </aside>
    </footer>
  );
};

export default Footer;
