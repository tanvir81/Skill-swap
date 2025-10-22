import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate, Link } from "react-router";

const SignUp = () => {
  const { createUser, updateUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then(() => {
        updateUser({ displayName: name, photoURL: photo });
        setError("");
        navigate("/");
      })
      .catch((err) => {
        setError(err.message);
      });
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
          <input
            name="password"
            type="password"
            className="input"
            placeholder="Password"
            required
          />
          <button type="submit" className="btn btn-neutral mt-4">
            Register
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
