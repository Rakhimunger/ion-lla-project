import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#1E2B4D] text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-[#E2FFAD] border-2 border-[#E2FFAD] px-3 py-1 rounded-full">
          ION LLA
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center font-semibold">
          <Link
            to="/"
            className="hover:text-yellow-400 border-b-2 border-yellow-400"
          >
            Home
          </Link>
          <Link to="/about" className="hover:text-yellow-400">
            About
          </Link>
          <Link to="/services" className="hover:text-yellow-400">
            Services
          </Link>
          <Link to="/why-us" className="hover:text-yellow-400">
            Why Us?
          </Link>
          <Link to="/contact" className="hover:text-yellow-400">
            Contact
          </Link>
        </div>

        {/* WhatsApp Button - Desktop */}
        <div className="hidden md:block">
          <a
            href="https://wa.me/9188151927604"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded-full text-sm"
          >
            WhatsApp
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#1E2B4D] px-6 py-4 space-y-3 font-semibold">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="block hover:text-yellow-400"
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={() => setIsOpen(false)}
            className="block hover:text-yellow-400"
          >
            About
          </Link>
          <Link
            to="/services"
            onClick={() => setIsOpen(false)}
            className="block hover:text-yellow-400"
          >
            Services
          </Link>
          <Link
            to="/why-us"
            onClick={() => setIsOpen(false)}
            className="block hover:text-yellow-400"
          >
            Why Us?
          </Link>
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="block hover:text-yellow-400"
          >
            Contact
          </Link>
          <div className="flex justify-start">
            <a
              href="https://wa.me/9188151927604"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded-full text-sm"
            >
              WhatsApp
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
