import React, { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import { toast } from "react-hot-toast";
import { useLocation } from "react-router";

const ForgotPassword = () => {
  const location = useLocation();
  const passedEmail = location.state?.email || "";
  const [email, setEmail] = useState(passedEmail);
  const [error, setError] = useState("");

  const handleReset = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await sendPasswordResetEmail(auth, email);
      toast.success("Reset link sent to your email");
      setEmail("");
    } catch (err) {
      setError(err.message);
      toast.error("Failed to send reset link");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-base-200">
      <form
        onSubmit={handleReset}
        className="card bg-base-100 w-full max-w-sm shadow-2xl py-5"
      >
        <h2 className="font-semibold text-2xl text-center">Forgot Password</h2>
        <div className="card-body">
          {error && <div className="alert alert-error text-sm">{error}</div>}
          <label className="label">Email</label>
          <input
            type="email"
            className="input"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" className="btn btn-primary mt-4">
            Send Reset Link
          </button>
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;
