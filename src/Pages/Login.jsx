import { useState, useContext } from "react";
import { Link, useNavigate, useLocation } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const { signIn, signInWithGoogle, setUser } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const res = await signIn(email, password);
      setUser(res.user);
      toast.success("Login successful");
      navigate(from, { replace: true });
    } catch (err) {
      setError(err.message);
      toast.error("Login failed");
    }
  };

  const handleGoogleLogin = async () => {
    setError("");
    try {
      const res = await signInWithGoogle();
      console.log(res);
      // setUser(res.user);
      toast.success("Logged in with Google");
      navigate(from, { replace: true });
    } catch (err) {
      setError(err.message);
      toast.error("Google login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-base-100 p-8 rounded shadow">
        <h2 className="text-2xl font-bold text-center mb-6">
          Login to SkillSwap
        </h2>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="label">Email</label>
            <input
              type="email"
              className="input input-bordered w-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="label">Password</label>
            <div className="relative">
              <input
                type={showPass ? "text" : "password"}
                className="input input-bordered w-full pr-10"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <span
                className="absolute right-3 top-3 cursor-pointer text-gray-500"
                onClick={() => setShowPass(!showPass)}
              >
                {showPass ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button type="submit" className="btn btn-primary w-full">
            Login
          </button>
        </form>

        <div className="text-sm text-center mt-4">
          <Link
            to="/auth/forgot-password"
            state={{ email }}
            className="link link-hover text-blue-500"
          >
            Forgot Password?
          </Link>
        </div>

        <div className="divider">OR</div>

        <button onClick={handleGoogleLogin} className="btn btn-outline w-full">
          Continue with Google
        </button>

        <p className="text-sm text-center mt-4">
          Don’t have an account?{" "}
          <Link to="/auth/signup" className="link link-hover text-blue-500">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
