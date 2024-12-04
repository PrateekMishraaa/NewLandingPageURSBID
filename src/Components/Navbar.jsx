import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import { FaRegUserCircle, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  // State for handling the toggle of the mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div>
        <nav className="text-white py-4 bg-[#191246]">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
            {/* Logo */}
            <div className="text-2xl font-bold flex justify-center md:justify-start w-full md:w-auto">
              <img src={Logo} alt="logo" className="h-16" />
            </div>

            {/* Hamburger Icon */}
            <div className="flex md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} style={{backgroundColor:"black"}}>
                {isMenuOpen ? (
                  <FaTimes size={24} className="text-white" />
                ) : (
                  <FaBars size={24} className="text-white" />
                )}
              </button>
            </div>

            {/* Navigation Links */}
            <div
              className={`flex flex-col md:flex-row md:space-x-6 text-slate-950 font-semibold ${
                isMenuOpen ? "block" : "hidden"
              } md:block`}
            >
              <Link className="text-white py-2" to="/about">About</Link>
              <Link className="text-white py-2" to="/services">Services</Link>
              <Link className="text-white py-2" to="/contact">Contact</Link>
              <Link className="text-white py-2" to="/product">Product</Link>
            </div>

            {/* Login Button
            {!isMenuOpen && (
              <div className="flex items-center justify-center md:block">
                <Link className="text-xl flex items-center mt-4 md:mt-0" to="#login">
                  <FaRegUserCircle className="mr-2" />
                  Login
                </Link>
              </div>
            )} */}
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
