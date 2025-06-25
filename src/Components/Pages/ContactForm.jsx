import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:3000/api/form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert("Form submitted successfully!");
        setFormData({
          name: "",
          email: "",
          contact: "",
          message: "",
        });
      } else {
        const err = await res.json();
        alert(err.error || "Failed to submit the form.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-slate-100 to-slate-200 px-4">
      <div className="w-full max-w-lg bg-white p-8 rounded-3xl shadow-2xl">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-8">
          Contact Us
        </h2>
        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              required
              className="w-full px-5 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-600 transition duration-300"
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              required
              className="w-full px-5 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-600 transition duration-300"
            />
          </div>
          <div>
            <input
              type="tel"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              placeholder="Contact Number"
              required
              className="w-full px-5 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-600 transition duration-300"
            />
          </div>
          <div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              placeholder="Your Message"
              required
              className="w-full px-5 py-3 border border-gray-300 rounded-xl shadow-sm resize-none focus:outline-none focus:ring-2 focus:ring-green-600 transition duration-300"
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-green-700 hover:bg-green-800 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105 duration-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
