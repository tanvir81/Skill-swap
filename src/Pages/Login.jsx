import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link, useNavigate } from "react-router";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then(() => {
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
        onSubmit={handleLogin}
        className="card bg-base-100 w-full max-w-sm shadow-2xl"
      >
        <div className="card-body">
          <h2 className="text-2xl font-semibold text-center">Login</h2>
          {error && <div className="alert alert-error text-sm">{error}</div>}
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
          <div className="mt-2">
            <a className="link link-hover text-sm">Forgot password?</a>
          </div>
          <button type="submit" className="btn btn-neutral mt-4">
            Login
          </button>
          <p className="text-center font-semibold pt-5">
            Dont’t Have An Account ?{" "}
            <Link to="/auth/signup" className="text-secondary font-semibold">
              SignUp
            </Link>{" "}
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
