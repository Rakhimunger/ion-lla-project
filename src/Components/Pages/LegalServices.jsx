import React from "react";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaRegCommentDots,
  FaHandshake,
  FaHeart,
} from "react-icons/fa";

const LegalServices = () => {
  return (
    <div className="bg-white text-black px-4 md:px-16 py-12 max-w-screen-xl mx-auto">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl text-green-800 mx-auto mb-2" />
        <h2 className="text-3xl md:text-5xl font-bold text-black">
          Our Legal Services
        </h2>
      </div>

      {/* Legal Services Section */}
      <div className="grid md:grid-cols-2 gap-10 text-justify">
        {/* Column 1 */}
        <div className="space-y-6">
          {[
            {
              title: "1. Divorce Consultation & Legal Support",
              desc: "We assist clients in understanding the legal process of divorce, ensuring their rights and interests are protected. Our team handles mutual consent divorces and other family matters with sensitivity and professionalism.",
            },
            {
              title: "2. Trademark Registration",
              desc: "Secure your brand identity with our end-to-end trademark registration services. We handle search, documentation, filing, and follow-up.",
            },
            {
              title: "3. Sales & Lease Agreements",
              desc: "Draft and register legally binding sale or lease agreements. We ensure every detail is clearly documented to avoid future disputes.",
            },
            {
              title: "4. Power of Attorney",
              desc: "Empower a trusted individual with a valid Power of Attorney. We help draft and notarize documents for property, finance, or personal matters.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-4 rounded-lg hover:bg-gray-50 transition"
            >
              <h3 className="text-lg md:text-xl font-bold text-green-800 mb-1">
                {item.title}
              </h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Column 2 */}
        <div className="space-y-6">
          {[
            {
              title: "5. Business Agreements",
              desc: "Agreements for startups, partnerships, and firms including service contracts, joint ventures, partnership deeds, and more.",
            },
            {
              title: "6. Contract Writing",
              desc: "Professionally written contracts like employment contracts, vendor agreements, NDAs, MOUs, and more.",
            },
            {
              title: "7. Will Drafting & Registration",
              desc: "Ensure your wishes are legally documented with a properly drafted will and registered under legal supervision.",
            },
            {
              title: "8. Challan Disposal Services",
              desc: "Got a traffic challan? We help resolve legal penalties through court representation and disposal services.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-4 rounded-lg hover:bg-gray-50 transition"
            >
              <h3 className="text-lg md:text-xl font-bold text-green-800 mb-1">
                {item.title}
              </h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Court Marriage Section */}
      <div className="mt-20">
        <div className="flex items-center gap-2 mb-4">
          <FaHeart className="text-pink-600 text-2xl" />
          <h3 className="text-2xl md:text-3xl font-bold text-black">
            Court Marriage Assistance
          </h3>
        </div>
        <p className="mb-6">
          We offer complete court marriage assistance across multiple states,
          helping couples with lawful registration and documentation.
        </p>

        <div className="space-y-4">
          {[
            {
              title: "Court Marriage in Delhi",
              desc: "End-to-end assistance for court marriage under the Special Marriage Act. We guide you through document preparation, application submission, verification, and final registration..",
            },
            {
              title: "Court Marriage in Haryana",
              desc: "From inter-caste to inter-religion marriages, we simplify the process of court marriage in Haryana with step-by-step legal support..",
            },
            {
              title: "Court Marriage in Uttar Pradesh",
              desc: "Our experts make the court marriage process in Uttar Pradesh smooth and transparent by handling all necessary paperwork and appointments..",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-4 border border-gray-200 rounded-lg bg-gray-50"
            >
              <h4 className="text-lg font-semibold text-green-700 mb-1">
                {item.title}
              </h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Form */}
      <div className="mt-20">
        <div className="text-center mb-8">
          <FaHandshake className="text-4xl text-green-800 mx-auto mb-2" />
          <h3 className="text-2xl md:text-3xl font-bold text-black mb-2">
            Get In Touch
          </h3>
          <p className="text-gray-700">
            Have questions or need legal support? Fill out the form below:
          </p>
        </div>

        <div className="bg-gray-50 p-8 rounded-xl shadow-lg max-w-xl mx-auto">
          <form className="space-y-5">
            {/* Name */}
            <div className="relative">
              <FaUser className="absolute top-3.5 left-4 text-gray-500" />
              <input
                type="text"
                placeholder="Your Name"
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-700 text-black"
              />
            </div>

            {/* Email */}
            <div className="relative">
              <FaEnvelope className="absolute top-3.5 left-4 text-gray-500" />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-700 text-black"
              />
            </div>

            {/* Phone */}
            <div className="relative">
              <FaPhone className="absolute top-3.5 left-4 text-gray-500" />
              <input
                type="text"
                placeholder="Contact Number"
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-700 text-black"
              />
            </div>

            {/* Message */}
            <div className="relative">
              <FaRegCommentDots className="absolute top-3.5 left-4 text-gray-500" />
              <textarea
                placeholder="Your Message"
                rows="4"
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-700 text-black resize-none"
              ></textarea>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-green-900 text-white font-bold py-3 rounded-full hover:bg-green-800 transition duration-200"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LegalServices;
