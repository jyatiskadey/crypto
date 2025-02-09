import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Mock login logic
    const isSuccess = true; // Simulate login success or failure

    if (isSuccess) {
      toast.success("Login successful! Redirecting...", {
        position: "top-right",
        autoClose: 3000,
      });
      setTimeout(() => navigate("/"), 3000); // Redirect to home page after 3 seconds
    } else {
      toast.error("Login failed! Please try again.", {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black to-gray-900 px-6 py-12">
      <div className="relative bg-gray-800 bg-opacity-80 p-10 rounded-2xl shadow-2xl max-w-md w-full">
        {/* Glowing Background */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-yellow-500 to-yellow-700 blur-2xl opacity-30 rounded-2xl animate-pulse"></div>

        <h2 className="text-3xl font-bold text-yellow-400 text-center mb-6">
          Login to CryptoCoin
        </h2>

        {/* Back Button */}
        <Link
          to="/"
          className="absolute top-4 left-4 bg-gray-700 text-gray-300 px-3 py-1 rounded-lg text-sm hover:bg-yellow-400 hover:text-black transition duration-300"
        >
          Back
        </Link>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label htmlFor="email" className="text-gray-300 block mb-2">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-lg bg-gray-900 text-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="text-gray-300 block mb-2">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-3 rounded-lg bg-gray-900 text-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-400 text-black font-semibold py-3 rounded-lg shadow-lg hover:bg-yellow-500 transition duration-300"
          >
            Log In
          </button>
        </form>
      </div>

      {/* Toast Notifications */}
      <ToastContainer />
    </div>
  );
}

export default Login;
