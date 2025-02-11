import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logo from "@/image/logo.png"

function Login() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [sponsorName, setSponsorName] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const isSuccess = true; // Simulate login success or failure

    if (isSuccess) {
      toast.success("Login successful! Redirecting...", {
        position: "top-right",
        autoClose: 3000,
      });
      setTimeout(() => navigate("/"), 3000);
    } else {
      toast.error("Login failed! Please try again.", {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  const fetchSponsorName = async (userName) => {
    try {
      // Simulate a backend API call
      const response = await fetch(`/api/sponsor?name=${userName}`);
      const data = await response.json();
      setSponsorName(data.sponsorName || "Unknown Sponsor");
    } catch (error) {
      console.error("Error fetching sponsor name:", error);
    }
  };

  useEffect(() => {
    if (name) {
      fetchSponsorName(name);
    } else {
      setSponsorName("");
    }
  }, [name]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900 px-6 py-12">
      <div className="relative bg-gray-800 p-10 rounded-2xl shadow-2xl max-w-md w-full overflow-hidden">
        {/* Glowing Animated Border */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-500 blur-2xl opacity-50 rounded-2xl animate-pulse"></div>

        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img src={logo} alt="Logo" className="w-20 h-20 object-contain" />
        </div>

        {/* Login Header */}
        <h2 className="text-4xl font-extrabold text-yellow-400 text-center mb-8">
          Sky Wallet
        </h2>

        {/* Back Button */}
        <Link
          to="/"
          className="absolute top-4 left-4 bg-gray-700 text-gray-300 px-3 py-1 rounded-lg text-sm hover:bg-yellow-400 hover:text-black transition duration-300 shadow"
        >
          Back
        </Link>

        <form onSubmit={handleLogin} className="space-y-6">
          {/* Sponsor ID Input */}


          <div className="relative">
          <p className="text-red-500">Your Sponser Name:- <span></span> </p>
            <input
              id="sponsor-id"
              type="text"
              placeholder="Sponsor ID"
              className="w-full px-4 py-3 rounded-lg bg-gray-900 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition"
              required
            />
          </div>

          {/* Mobile Number Input */}
          <div className="relative">
            <input
              id="mobile-number"
              type="text"
              placeholder="Your Mobile Number"
              className="w-full px-4 py-3 rounded-lg bg-gray-900 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition"
              required
            />
          </div>

          {/* Name Input */}
          <div className="relative">
            <input
              id="name"
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-lg bg-gray-900 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            {sponsorName && (
              <p className="mt-2 text-sm text-yellow-400">Your sponsor is: {sponsorName}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold py-3 rounded-lg shadow-lg hover:opacity-90 transform hover:scale-105 transition duration-300"
          >
            Sign Up
          </button>
        </form>

        {/* Forgot Password Link */}
        {/* <div className="text-center mt-4">
          <Link
            to="/forgot-password"
            className="text-sm text-gray-400 hover:text-yellow-400 transition duration-300"
          >
            Forgot your password?
          </Link>
        </div> */}
      </div>

      {/* Toast Notifications */}
      <ToastContainer />
    </div>
  );
}

export default Login;