import React from "react";
import { FaTwitter, FaYoutube, FaFacebookF } from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bottom-0 w-full bg-[#045c90] text-white p-10 rounded footer footer-horizontal footer-center">
      {/* Navigation Links */}

      <nav className="grid grid-flow-col gap-4 text-sm">
        <Link to="/contact" className="hover:underline">
          Contact info
        </Link>
        <Link to="/privacy" className="hover:underline">
          Privacy policy
        </Link>
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
