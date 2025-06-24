import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import Logo from "../assets/Images/Logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#1E2B4D] text-white shadow-md border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={Logo} alt="ION LLA Logo" className="h-15 rounded-full" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center font-medium text-sm">
          {["Home", "About", "Services", "Why Us?", "Contact"].map(
            (item, idx) => (
              <Link
                key={idx}
                to={`/${
                  item === "Home" ? "" : item.toLowerCase().replace(" ", "-")
                }`}
                className="relative group"
              >
                <span className="hover:text-yellow-400 transition">{item}</span>
                <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            )
          )}
        </div>

        {/* WhatsApp Button - Desktop */}
        <div className="hidden md:block">
          <a
            href="https://wa.me/9188151927604"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-green-500 hover:bg-green-600 transition text-white font-semibold px-4 py-2 rounded-full text-sm"
          >
            <FaWhatsapp className="text-lg" /> WhatsApp
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none transition"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#1E2B4D] px-6 py-4 space-y-4 font-medium text-sm">
          {["Home", "About", "Services", "Why Us?", "Contact"].map(
            (item, idx) => (
              <Link
                key={idx}
                to={`/${
                  item === "Home" ? "" : item.toLowerCase().replace(" ", "-")
                }`}
                onClick={() => setIsOpen(false)}
                className="block hover:text-yellow-400 transition"
              >
                {item}
              </Link>
            )
          )}
          <a
            href="https://wa.me/9188151927604"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 transition text-white font-semibold px-4 py-2 rounded-full text-sm"
          >
            <FaWhatsapp className="text-lg" /> WhatsApp
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
