import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation logic
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match!", { position: "top-right" });
      return;
    }
    if (!formData.name || !formData.email || !formData.password) {
      toast.error("All fields are required!", { position: "top-right" });
      return;
    }

    // Success Toast
    toast.success("Sign-up successful!", { position: "top-right" });

    // Mock backend call or navigate to another page
    console.log("Form Data:", formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="w-full max-w-md bg-gray-800 rounded-lg shadow-lg p-8">
        {/* Glowing Background */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-yellow-500 to-yellow-700 blur-2xl opacity-30 rounded-2xl"></div>

        <h2 className="text-3xl font-bold text-yellow-400 text-center mb-6">
          Sign Up
        </h2>

        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-gray-300 mb-2">
              Full Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-2 text-gray-900 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-gray-300 mb-2">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 text-gray-900 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          {/* Password Field */}
          <div>
            <label htmlFor="password" className="block text-gray-300 mb-2">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Create a password"
              className="w-full px-4 py-2 text-gray-900 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          {/* Confirm Password Field */}
          <div>
            <label htmlFor="confirmPassword" className="block text-gray-300 mb-2">
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              type="password"
              placeholder="Confirm your password"
              className="w-full px-4 py-2 text-gray-900 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </div>
          {/* Sign-Up Button */}
          <button
            type="submit"
            className="w-full px-4 py-2 bg-yellow-400 text-black font-semibold rounded-lg shadow-md hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          >
            Sign Up
          </button>
        </form>
        {/* Already Have an Account */}
        <p className="text-gray-300 text-center mt-4">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-yellow-400 hover:text-yellow-500 underline"
          >
            Log in
          </Link>
        </p>
      </div>
      {/* Toast Notifications */}
      <ToastContainer />
    </div>
  );
}

export default SignUp;
