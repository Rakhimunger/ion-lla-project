import React, { useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaRegCommentDots,
  FaHandshake,
  FaHeart,
} from "react-icons/fa";

const LegalServices = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMsg("");
    setErrorMsg("");

    try {
      const response = await fetch(
        "https://iotlla-backend.onrender.com/api/contactform",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      let data;
      try {
        data = await response.json(); // Attempt to parse only if response is JSON
      } catch (err) {
        throw new Error("Server did not return valid JSON:", err);
      }

      if (!response.ok) {
        setErrorMsg(data?.error || "Submission failed.");
      } else {
        setSuccessMsg("Form submitted successfully!");
        setFormData({ name: "", email: "", contact: "", message: "" });
      }
    } catch (error) {
      console.error("Submit Error:", error);
      setErrorMsg(error.message || "Unable to submit. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white text-black px-4 md:px-16 py-12 max-w-screen-xl mx-auto">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold text-black">
          Our Legal Services
        </h2>
      </div>

      {/* Legal Services Section */}
      <div className="grid md:grid-cols-2 gap-10 text-justify">
        {[
          {
            title: "1. Divorce Consultation & Legal Support",
            desc: "We assist clients in understanding the legal process of divorce, ensuring their rights and interests are protected.",
          },
          {
            title: "2. Trademark Registration",
            desc: "Secure your brand identity with our trademark registration services — search, documentation, filing, and follow-up.",
          },
          {
            title: "3. Sales & Lease Agreements",
            desc: "Draft and register legally binding sale or lease agreements.",
          },
          {
            title: "4. Power of Attorney",
            desc: "Draft and notarize Power of Attorney documents for property, finance, or personal matters.",
          },
          {
            title: "5. Business Agreements",
            desc: "Agreements for startups, partnerships, joint ventures, and more.",
          },
          {
            title: "6. Contract Writing",
            desc: "Professional contracts like NDAs, MOUs, vendor and employment agreements.",
          },
          {
            title: "7. Will Drafting & Registration",
            desc: "Get a legally valid will drafted and registered.",
          },
          {
            title: "8. Challan Disposal Services",
            desc: "Resolve traffic challans through court representation.",
          },
        ].map((item, idx) => (
          <div key={idx} className="p-4 rounded-lg hover:bg-gray-50 transition">
            <h3 className="text-lg md:text-xl font-bold text-green-800 mb-1">
              {item.title}
            </h3>
            <p>{item.desc}</p>
          </div>
        ))}
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
          We offer complete court marriage assistance across multiple states.
        </p>
        <div className="space-y-4">
          {[
            {
              title: "Court Marriage in Delhi",
              desc: "Special Marriage Act guidance including document prep and registration.",
            },
            {
              title: "Court Marriage in Haryana",
              desc: "Support for inter-caste, inter-religion marriages with legal help.",
            },
            {
              title: "Court Marriage in Uttar Pradesh",
              desc: "We handle appointments, paperwork, and legal compliance.",
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
          <form className="space-y-5" onSubmit={handleSubmit}>
            {/* Name */}
            <div className="relative">
              <FaUser className="absolute top-3.5 left-4 text-gray-500" />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-700 text-black"
                required
              />
            </div>

            {/* Email */}
            <div className="relative">
              <FaEnvelope className="absolute top-3.5 left-4 text-gray-500" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-700 text-black"
                required
              />
            </div>

            {/* Phone */}
            <div className="relative">
              <FaPhone className="absolute top-3.5 left-4 text-gray-500" />
              <input
                type="text"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                placeholder="Contact Number"
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-700 text-black"
                required
              />
            </div>

            {/* Message */}
            <div className="relative">
              <FaRegCommentDots className="absolute top-3.5 left-4 text-gray-500" />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows="4"
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-700 text-black resize-none"
                required
              ></textarea>
            </div>

            {/* Messages */}
            {successMsg && (
              <p className="text-green-700 font-semibold">{successMsg}</p>
            )}
            {errorMsg && <p className="text-red-600">{errorMsg}</p>}

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-green-900 text-white font-bold py-3 rounded-full hover:bg-green-800 transition duration-200"
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LegalServices;
