import React from "react";

const ContactForm = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-slate-100 to-slate-200 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-lg bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-gray-800 mb-6 sm:mb-8">
          Contact Us
        </h2>
        <form className="space-y-4 sm:space-y-5">
          <div>
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-3 sm:px-5 sm:py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-600 transition duration-300 text-sm sm:text-base"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-3 sm:px-5 sm:py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-600 transition duration-300 text-sm sm:text-base"
            />
          </div>
          <div>
            <input
              type="tel"
              placeholder="Contact Number"
              className="w-full px-4 py-3 sm:px-5 sm:py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-600 transition duration-300 text-sm sm:text-base"
            />
          </div>
          <div>
            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full px-4 py-3 sm:px-5 sm:py-3 border border-gray-300 rounded-xl shadow-sm resize-none focus:outline-none focus:ring-2 focus:ring-green-600 transition duration-300 text-sm sm:text-base"
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-green-700 hover:bg-green-800 text-white font-semibold py-3 px-6 sm:px-8 rounded-full shadow-lg transition-transform transform hover:scale-105 duration-300 text-sm sm:text-base"
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
