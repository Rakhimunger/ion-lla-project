import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const AboutUsPage = () => {
  return (
    <div className="bg-white text-[#1f2d3d]">
      {/* Hero Header */}
      <section className="bg-gradient-to-r from-[#f0f4f8] to-white px-5 sm:px-8 md:px-16 lg:px-32 py-12 text-center">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0b132b] mb-4">
          About Us – ION LLA
        </h1>
        <p className="text-gray-700 max-w-4xl mx-auto leading-relaxed text-sm sm:text-base">
          At <strong>ION LLA</strong>, we believe that legal support should be
          simple, accessible, and trustworthy. Our team of experienced legal
          professionals is dedicated to providing reliable assistance across a
          wide range of personal and business legal matters. With a strong
          presence in <strong>Delhi, Haryana, and Uttar Pradesh</strong>, we
          proudly serve individuals, families, and enterprises with honesty and
          professionalism.
        </p>
      </section>

      {/* Vision & Mission */}
      <section className="px-5 sm:px-8 md:px-16 lg:px-32 py-10 space-y-10">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-black mb-2">
            Our Vision
          </h2>
          <p className="text-gray-700 text-sm sm:text-base">
            To become a dependable legal partner for people and businesses
            seeking transparent, affordable, and efficient legal solutions
            across India.
          </p>
        </div>

        <div className="border-t pt-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-black mb-2">
            Our Mission
          </h2>
          <p className="text-gray-700 text-sm sm:text-base">
            To simplify complex legal processes and deliver expert assistance
            with integrity, empathy, and clarity, ensuring that every client
            feels heard, protected, and supported.
          </p>
        </div>
      </section>

      {/* What We Do */}
      <section className="bg-[#f9fafb] px-5 sm:px-8 md:px-16 lg:px-32 py-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4">
          What We Do
        </h2>
        <p className="text-gray-700 mb-4 text-sm sm:text-base">
          We offer comprehensive legal services that include:
        </p>
        <ul className="list-disc pl-6 text-black font-medium space-y-2 text-sm sm:text-base">
          <li>Court Marriage Assistance</li>
          <li>Divorce & Matrimonial Legal Support</li>
          <li>Trademark Registration</li>
          <li>Sales & Lease Agreements</li>
          <li>Business Contracts & Documentation</li>
          <li>Power of Attorney Drafting</li>
          <li>Will Writing & Registration</li>
          <li>Challan Disposal Assistance</li>
          <li>Contract Writing for Individuals & Corporations</li>
        </ul>
        <p className="text-gray-700 mt-4 text-sm sm:text-base">
          Every service is handled with a client-first approach, ensuring
          confidentiality, legal accuracy, and timely execution.
        </p>
      </section>

      {/* Why Choose Us */}
      <section className="px-5 sm:px-8 md:px-16 lg:px-32 py-10">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-black">
          Why Choose ION LLA?
        </h2>
        <ul className="space-y-4 text-sm sm:text-base">
          {[
            "Experienced Legal Experts",
            "Pan-State Support in Delhi, Haryana & UP",
            "Affordable & Transparent Process",
            "Fast Turnaround on Document Drafting & Filing",
            "Dedicated Support Team",
            "Full Confidentiality Assured",
          ].map((item, idx) => (
            <li key={idx} className="flex items-start gap-3 text-[#0b132b]">
              <FaCheckCircle className="text-green-600 mt-1 min-w-[20px]" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Who We Serve */}
      <section className="bg-[#f9fafb] px-5 sm:px-8 md:px-16 lg:px-32 py-10">
        <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-black">
          Who We Serve
        </h2>
        <p className="text-gray-700 text-sm sm:text-base">
          Whether you're an individual looking for personal legal assistance, a
          couple planning a court marriage, or a business needing legally sound
          contracts,
          <strong> ION LLA </strong> is here to help you every step of the way.
        </p>
      </section>
    </div>
  );
};

export default AboutUsPage;
