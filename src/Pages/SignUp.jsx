// import React, { useContext, useState } from "react";
// import { AuthContext } from "../context/AuthContext";
// import { useNavigate, Link } from "react-router";
// import { toast } from "react-hot-toast";

// const SignUp = () => {
//   const { createUser, updateUser } = useContext(AuthContext);
//   const navigate = useNavigate();
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleSignUp = async (e) => {
//     e.preventDefault();
//     setError("");
//     setLoading(true);

//     const form = e.target;
//     const name = form.name.value;
//     const photo = form.photo.value;
//     const email = form.email.value;
//     const password = form.password.value;

//     try {
//       const result = await createUser(email, password);
//       await updateUser({ displayName: name, photoURL: photo });
//       toast.success("Signup successful!");
//       navigate("/");
//     } catch (err) {
//       setError(err.message);
//       toast.error("Signup failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-base-200">
//       <form
//         onSubmit={handleSignUp}
//         className="card bg-base-100 w-full max-w-sm shadow-2xl py-5"
//       >
//         <h2 className="font-semibold text-2xl text-center">Sign Up</h2>
//         <div className="card-body">
//           {error && <div className="alert alert-error text-sm">{error}</div>}
//           <label className="label">Name</label>
//           <input
//             name="name"
//             type="text"
//             className="input"
//             placeholder="Name"
//             required
//           />
//           <label className="label">Photo URL</label>
//           <input
//             name="photo"
//             type="text"
//             className="input"
//             placeholder="Photo URL"
//             required
//           />
//           <label className="label">Email</label>
//           <input
//             name="email"
//             type="email"
//             className="input"
//             placeholder="Email"
//             required
//           />
//           <label className="label">Password</label>
//           <input
//             name="password"
//             type="password"
//             className="input"
//             placeholder="Password"
//             required
//           />
//           <button
//             type="submit"
//             className="btn btn-neutral mt-4 flex items-center justify-center"
//             disabled={loading}
//           >
//             {loading ? (
//               <>
//                 <span className="loading loading-spinner loading-sm mr-2"></span>
//                 Registering...
//               </>
//             ) : (
//               "Register"
//             )}
//           </button>
//           <p className="text-center pt-5 text-sm">
//             Already have an account?{" "}
//             <Link className="text-secondary font-semibold" to="/auth/login">
//               Login
//             </Link>
//           </p>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default SignUp;
import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate, Link } from "react-router";
import { toast } from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const SignUp = () => {
  const { createUser, updateUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const isValidPassword = (password) => {
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const isLongEnough = password.length >= 6;
    return hasUppercase && hasLowercase && isLongEnough;
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    if (!isValidPassword(password)) {
      setError(
        "Password must contain uppercase, lowercase, and be at least 6 characters."
      );
      setLoading(false);
      return;
    }

    try {
      const result = await createUser(email, password);
      await updateUser({ displayName: name, photoURL: photo });
      toast.success("Signup successful!");
      navigate("/");
    } catch (err) {
      setError(err.message);
      toast.error("Signup failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-base-200">
      <form
        onSubmit={handleSignUp}
        className="card bg-base-100 w-full max-w-sm shadow-2xl py-5"
      >
        <h2 className="font-semibold text-2xl text-center">Sign Up</h2>
        <div className="card-body">
          {error && <div className="alert alert-error text-sm">{error}</div>}
          <label className="label">Name</label>
          <input
            name="name"
            type="text"
            className="input"
            placeholder="Name"
            required
          />
          <label className="label">Photo URL</label>
          <input
            name="photo"
            type="text"
            className="input"
            placeholder="Photo URL"
            required
          />
          <label className="label">Email</label>
          <input
            name="email"
            type="email"
            className="input"
            placeholder="Email"
            required
          />
          <label className="label">Password</label>
          <div className="relative">
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              className="input w-full pr-10"
              placeholder="Password"
              required
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3 cursor-pointer text-gray-500"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          <button
            type="submit"
            className="btn btn-neutral mt-4 flex items-center justify-center"
            disabled={loading}
          >
            {loading ? (
              <>
                <span className="loading loading-spinner loading-sm mr-2"></span>
                Registering...
              </>
            ) : (
              "Register"
            )}
          </button>
          <p className="text-center pt-5 text-sm">
            Already have an account?{" "}
            <Link className="text-secondary font-semibold" to="/auth/login">
              Login
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
