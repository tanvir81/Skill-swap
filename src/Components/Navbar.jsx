// import { Link } from "react-router";
// import { useContext } from "react";
// import { AuthContext } from "../context/AuthContext";
// import { FaUserCircle } from "react-icons/fa";

// const Navbar = () => {
//   const { user, logOut } = useContext(AuthContext);

//   //   const handleLogout = () => {
//   //     logOut().catch((err) => console.error(err));
//   //   };

//   const navLinks = (
//     <>
//       <li>
//         <Link to="/">Home</Link>
//       </li>
//       <li>
//         <Link to="/profile">My Profile</Link>
//       </li>
//     </>
//   );

//   return (
//     <div className="navbar bg-base-100 shadow-md px-4">
//       <div className="navbar-start">
//         <Link to="/" className="text-xl font-bold text-primary">
//           SkillSwap
//         </Link>
//       </div>

//       <div className="navbar-center hidden lg:flex">
//         <ul className="menu menu-horizontal px-1 space-x-2">{navLinks}</ul>
//       </div>

//       <div className="navbar-end space-x-2">
//         {user ? (
//           <div className="flex items-center gap-3">
//             {/* Profile image with hover name */}
//             <div className="relative group">
//               <img
//                 src={user.photoURL || "/default-avatar.png"}
//                 alt="User"
//                 className="w-10 h-10 rounded-full border-2 border-neutral"
//               />
//               <span className="absolute left-1/2 -translate-x-1/2 top-full mt-1 px-2 py-1 text-sm bg-base-100 border rounded shadow opacity-0 group-hover:opacity-100 transition">
//                 {user.displayName || "Anonymous"}
//               </span>
//             </div>

//             {/* Logout button */}
//             <button onClick={logOut} className="btn btn-sm btn-outline">
//               Logout
//             </button>
//           </div>
//         ) : (
//           <Link to="/auth/login" className="btn btn-sm btn-neutral">
//             Login
//           </Link>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Navbar;

import { Link } from "react-router";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { FaUserCircle } from "react-icons/fa";
import logo from "../assets/SkillSwap.png";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const navLinks = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/profile">My Profile</Link>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-md px-4">
      {/* Left: Brand */}
      <div className="navbar-start">
        <Link to="/">
          <img src={logo} alt="SkillSwap Logo" className="h-24 w-auto" />
        </Link>
      </div>

      {/* Center: Navigation */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-2">{navLinks}</ul>
      </div>

      {/* Right: Auth Controls */}
      <div className="navbar-end space-x-2">
        {user ? (
          <div className="flex items-center gap-3">
            {/* Profile image with hover name */}
            <div className="relative group">
              <img
                src={user.photoURL || "/default-avatar.png"}
                alt="User"
                className="w-10 h-10 rounded-full border-2 border-neutral"
              />
              <span className="absolute left-1/2 -translate-x-1/2 top-full mt-1 px-2 py-1 text-sm bg-base-100 border rounded shadow opacity-0 group-hover:opacity-100 transition">
                {user.displayName || "Anonymous"}
              </span>
            </div>

            {/* Logout button */}
            <button onClick={logOut} className="btn btn-sm btn-outline">
              Logout
            </button>
          </div>
        ) : (
          <div className="flex gap-2">
            <Link to="/auth/login" className="btn btn-sm btn-neutral">
              Login
            </Link>
            <Link to="/auth/signup" className="btn btn-sm btn-outline">
              Sign Up
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
