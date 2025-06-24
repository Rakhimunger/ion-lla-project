import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaPinterestP,
  FaRedditAlien,
} from "react-icons/fa";
import image from "../assets/Images/image.png";
import Logo from "../assets/Images/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#2e384f] text-white pt-10">
      {/* Top Support Bar */}
      <div className="bg-[#0b3a12] py-3 text-center">
        <p className="text-[#f4c949] font-semibold text-lg sm:text-xl">
          Need help? Live Chat our award-winning support team Mon - Sat (9am To
          9pm) Support Available
        </p>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo & Description */}
        <div>
          <div className="text-center md:text-left mb-4">
            <img src={Logo} alt="ION LLA Logo" className="h-15 rounded-full" />
          </div>
          <p className="text-sm leading-relaxed">
            We recognize that every case is unique. Our private investigators
            work closely with you to understand your specific needs and tailor
            our services accordingly. We provide regular updates and maintain
            open communication throughout the investigative process.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6">
            <a href="#">
              <FaFacebookF className="text-3xl bg-black p-2 rounded-md" />
            </a>
            <a href="#">
              <FaRedditAlien className="text-3xl bg-black p-2 rounded-md" />
            </a>
            <a href="#">
              <FaYoutube className="text-3xl bg-black p-2 rounded-md" />
            </a>
            <a href="#">
              <FaInstagram className="text-3xl bg-black p-2 rounded-md" />
            </a>
            <a href="#">
              <FaPinterestP className="text-3xl bg-black p-2 rounded-md" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-[#f4c949] text-xl font-semibold mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2 text-white">
            <li>
              <a href="#">Blogs</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms and Conditions</a>
            </li>
            <li>
              <a href="#">Frequently Asked Questions</a>
            </li>
            <li>
              <a href="#">Company Policy</a>
            </li>
            <li>
              <a href="#">Payment Policy</a>
            </li>
          </ul>
        </div>

        {/* Contact Details */}
        <div>
          <h3 className="text-[#f4c949] text-xl font-semibold mb-4">
            Contact Details
          </h3>
          <ul className="space-y-3 text-white ">
            <li>📞 +91 9211369992</li>
            <li>💬 WhatsApp</li>
            <li>📧 info@ionlla.com</li>
            <li>📍 Noida</li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-[#f4c949] text-xl font-semibold mb-4">
            Services
          </h3>
          <ul className="space-y-2 text-white">
            <li>➤ Court Marriage In Delhi</li>
            <li>➤ Court Marriage In Haryana</li>
            <li>➤ Court Marriage In Uttar Pradesh</li>
            <li>➤ Matrimonial Case</li>
            <li>➤ Chalan Disposal</li>
            <li>➤ Will Registration</li>
            <li>➤ Contract Writing</li>
            <li>➤ Business Agreement</li>
            <li>➤ Power Of Attorney</li>
          </ul>
        </div>
      </div>

      {/* Bottom Strip */}
      <div className="bg-[#0b3a12] text-center py-3 flex flex-col md:flex-row items-center justify-between px-6">
        <p className="text-[#f4c949] text-sm">
          © 2025 ION LLA All rights reserved.
        </p>
        <div className="flex gap-2 mt-2 md:mt-0">
          <img src={image} alt="Image" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
