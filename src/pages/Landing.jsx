import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import about from "@/image/about.png"
import logo from "@/image/logo.png"
import { Link } from 'react-router-dom';

const miningPackages = [
  { title: 'Package 01', range: '$10 - $200', bonus: '1%' },
  { title: 'Package 02', range: '$201 - $500', bonus: '2%' },
  { title: 'Package 03', range: '$501 - $1000', bonus: '2.5%' },
  { title: 'Package 04', range: '$1001 - $3000', bonus: '3%' },
  { title: 'Package 05', range: '$3001 - $5000', bonus: '5%' },
  { title: 'Package 06', range: '$5001 - $20000', bonus: '10%' },
  { title: 'Package 07', range: '$20001+', bonus: '30%' }
];

const Landing = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-blue-900 text-white font-sans">
      {/* Navbar */}
      <nav className="bg-blue-900 bg-opacity-80 fixed top-0 w-full z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo and Title */}
            <div className="flex items-center">
              <img
                src="/crypto-logo.png"
                alt="Sky Wallet Logo"
                className="h-10 w-10 mr-3"
              />
              <span className="text-yellow-400 text-2xl font-bold">Sky Wallet</span>
            </div>

            {/* Desktop Links */}
            <div className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-300 hover:text-yellow-400">
                Home
              </a>
              <a href="#about" className="text-gray-300 hover:text-yellow-400">
                About
              </a>
              <a href="#forum" className="text-gray-300 hover:text-yellow-400">
                VIP Wallet
              </a>
              <a href="#mining" className="text-gray-300 hover:text-yellow-400">
                Mining Rewards
              </a>
              <a href="#contact" className="text-gray-300 hover:text-yellow-400">
                Contact
              </a>
            </div>

            {/* Login and Sign-Up Buttons */}
            <div className="hidden md:flex space-x-4">
              <Link to="/login">
                <button className="px-4 py-2 bg-yellow-400 text-blue-900 hover:bg-yellow-300 rounded">
                  Log In
                </button>
              </Link>
              <Link to="/signup">
                <button className="px-4 py-2 bg-yellow-400 text-blue-900 hover:bg-yellow-300 rounded">
                  Sign Up
                </button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-300 hover:text-yellow-400 focus:outline-none"
              >
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-blue-900 bg-opacity-90 text-gray-300 transform transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col space-y-6 px-6 py-8">
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="self-end text-gray-300 hover:text-yellow-400 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <a href="#" className="block hover:text-yellow-400">
              Home
            </a>
            <a href="#about" className="block hover:text-yellow-400">
              About
            </a>
            <a href="#forum" className="block hover:text-yellow-400">
              VIP Wallet
            </a>
            <a href="#mining" className="block hover:text-yellow-400">
              Mining Rewards
            </a>
            <a href="#contact" className="block hover:text-yellow-400">
              Contact
            </a>
            <Link to="/login">
              <button className="w-full px-4 py-2 bg-gray-800 text-gray-300 hover:bg-yellow-400 hover:text-blue-900 rounded">
                Login
              </button>
            </Link>
            <Link to="/signup">
              <button className="w-full px-4 py-2 bg-yellow-400 text-blue-900 hover:bg-yellow-300 rounded">
                Sign Up
              </button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header
        className="relative h-screen flex flex-col md:flex-row items-center justify-between px-10 md:px-20 pt-16"
      >
        {/* Content Section */}
        <motion.div
          className="space-y-6 max-w-lg text-center md:text-left order-2 md:order-1"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Discover the Future of Crypto with{" "}
            <span className="text-yellow-400">CryptoCoin</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300">
            Join millions of users worldwide and embrace the digital revolution. Secure, fast, and transparent.
          </p>
          <Link to="/signup">
            <button className="bg-yellow-400 text-blue-900 px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-yellow-500">
              Sign Up To Join
            </button>
          </Link>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="relative w-64 h-64 md:w-96 md:h-96 order-1 md:order-2 flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Glowing Sun Background */}
          <div className="absolute w-80 h-80 md:w-96 md:h-96 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 blur-xl animate-pulse"></div>

          {/* Logo */}
          <motion.img
            src={logo}
            alt="Crypto Logo"
            className="w-32 h-32 md:w-48 md:h-48 object-cover rounded-full z-10 shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.div>
      </header>

      {/* About Section */}
      <section id="about" className="py-20 px-10 md:px-20 bg-blue-900 text-gray-200">
        <h2 className="text-4xl font-bold text-center mb-8">
          About <span className="text-yellow-400">Sky Wallet</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-semibold">Why Choose Sky Wallet?</h3>
            <p>
              Sky Wallet is designed to bring financial freedom and innovation to your fingertips. We provide secure
              transactions, low fees, and instant transfers, ensuring your assets are always safe and accessible.
            </p>
            <p>
              Whether you're a beginner or a seasoned trader, our platform is easy to use and packed with features to
              enhance your experience.
            </p>
          </motion.div>
          <motion.img
            src={about}
            alt="About CryptoCoin"
            className="rounded-lg shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          />
        </div>
      </section>

      {/* VIP Wallet Trading Forum Section */}
      <section id="forum" className="py-20 px-6 md:px-16 bg-gradient-to-b from-blue-900 to-gray-900 text-gray-200">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="text-yellow-400">Sky Wallet</span> Trading Forum
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {["Instant Transfers", "Low Transaction Fees", "Enhanced Security"].map((title, index) => (
            <Card
              key={index}
              className="bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105"
            >
              <CardContent className="p-8 space-y-6">
                <h3 className="text-2xl font-semibold text-yellow-400">{title}</h3>
                <p className="text-gray-300 leading-relaxed">
                  Discover how <span className="text-yellow-400 font-medium">Sky Wallet</span> empowers you with unmatched convenience, safety, and affordability for your trading needs.
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Mining Rewards Section */}
      <section id="mining" className="py-20 px-10 md:px-20 bg-blue-900 text-gray-200">
        <h2 className="text-4xl font-bold text-center mb-8">
          <span className="text-yellow-400">Mining Rewards</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {miningPackages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Card className="bg-gray-800 shadow-lg hover:shadow-xl">
                <CardContent className="p-6 space-y-4 text-center">
                  <h3 className="text-xl font-semibold text-yellow-400">{pkg.title}</h3>
                  <p className="text-lg text-gray-300">{pkg.range}</p>
                  <p className="text-sm text-gray-400">Get Daily Mining Bonus {pkg.bonus}</p>
                  <Button className="bg-yellow-400 text-blue-900 hover:bg-yellow-500 w-full">Buy Now</Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer Section */}
      <footer id="contact" className="py-10 bg-blue-900 text-gray-400 text-center">
        <p>&copy; {new Date().getFullYear()} Sky Wallet. All Rights Reserved.</p>
        
        {/* Links */}
        <div className="mt-4 space-x-4">
          <a href="#" className="hover:text-yellow-400">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-yellow-400">
            Terms of Service
          </a>
          <a href="#" className="hover:text-yellow-400">
            Contact Us
          </a>
        </div>
        
        {/* Send mail */}
        <div className="mt-4">
          <p className="text-gray-400">
            Have questions? Email us at: 
            <a href="mailto:support@skywallet.com" className="text-yellow-400 hover:underline ml-1">
              support@skywallet.com
            </a>
          </p>
        </div>
        
        {/* Social Media Icons */}
        <div className="mt-6 flex justify-center space-x-6">
          <a href="#" aria-label="Facebook" className="hover:text-yellow-400">
            <i className="fab fa-facebook fa-lg"></i>
          </a>
          <a href="#" aria-label="Twitter" className="hover:text-yellow-400">
            <i className="fab fa-twitter fa-lg"></i>
          </a>
          <a href="#" aria-label="Telegram" className="hover:text-yellow-400">
            <i className="fab fa-telegram fa-lg"></i>
          </a>
          <a href="#" aria-label="Bitcoin" className="hover:text-yellow-400">
            <i className="fab fa-bitcoin fa-lg"></i>
          </a>
          <a href="#" aria-label="YouTube" className="hover:text-yellow-400">
            <i className="fab fa-youtube fa-lg"></i>
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Landing;