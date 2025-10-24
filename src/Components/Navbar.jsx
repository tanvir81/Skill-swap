import { Link } from "react-router";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import logo from "../assets/SkillSwap.png";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const navLinks = (
    <>
      <li>
        <Link
          to="/"
          className="hover:underline underline-offset-4 decoration-[#f96c1f] hover:bg-transparent transition duration-200"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          to="/profile"
          className="hover:underline underline-offset-4 decoration-[#f96c1f] hover:bg-transparent transition duration-200"
        >
          My Profile
        </Link>
      </li>
    </>
  );

  return (
    <div className="navbar border-b border-[#f96c1f] bg-base-100 shadow-md px-4">
      {/* 🍔 Hamburger for small screens */}
      <div className="navbar-start">
        <div className="dropdown lg:hidden">
          <label tabIndex={0} className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 `z-[999]` p-4 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>

        {/* 🖼️ Logo always visible, scaled down */}
        <Link to="/">
          <img
            src={logo}
            alt="SkillSwap Logo"
            className="h-16 lg:h-24 w-auto"
          />
        </Link>
      </div>

      {/* 🖥️ Horizontal nav links for large screens */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-2">{navLinks}</ul>
      </div>

      {/* 🔐 Auth buttons or avatar */}
      <div className="navbar-end space-x-2">
        {user ? (
          <div className="flex items-center gap-3">
            <div className="relative group">
              <img
                src={
                  user.photoURL || "https://i.postimg.cc/3x3QzSGq/profile.png"
                }
                alt="User"
                referrerPolicy="no-referrer"
                className="w-10 h-10 rounded-full border-1 border-[#045c90] object-cover"
                onError={(e) => {
                  e.target.src = "https://i.postimg.cc/3x3QzSGq/profile.png";
                }}
              />
              <span className="absolute left-1/2 -translate-x-1/2 top-full mt-1 px-2 py-1 text-sm bg-base-100 border rounded shadow opacity-0 group-hover:opacity-100 transition">
                {user.displayName || "Anonymous"}
              </span>
            </div>

            <button
              onClick={logOut}
              className="btn btn-sm border-[#f96c1f] text- hover:bg-[#f96c1f] hover:text-white transition duration-200"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="flex gap-2">
            <Link
              to="/auth/login"
              className="btn btn-sm border-[#045c90] text-black hover:bg-[#045c90] hover:text-white transition duration-200"
            >
              Login
            </Link>

            <Link
              to="/auth/signup"
              className="btn btn-sm border-[#f96c1f] text- hover:bg-[#f96c1f] hover:text-white transition duration-200"
            >
              Sign Up
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
