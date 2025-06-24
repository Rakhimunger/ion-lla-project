import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const ChoosePage = () => {
  const points = [
    {
      title: "Trusted Legal Experts",
      desc: "Work with professionals who understand Indian law and practice with integrity.",
    },
    {
      title: "Transparent Process",
      desc: "We explain everything upfront — no hidden charges, no surprises.",
    },
    {
      title: "Affordable & Efficient",
      desc: "Quality legal services that are timely, professional, and cost-effective.",
    },
    {
      title: "Pan-State Support",
      desc: "Serving clients across Delhi, Haryana, and Uttar Pradesh.",
    },
    {
      title: "Confidentiality Guaranteed",
      desc: "Your privacy and legal concerns are always handled discreetly.",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-white to-green-50 py-20 px-4 md:px-10 max-w-screen-xl mx-auto">
      <div className="md:flex md:gap-10">
        {/* Left Box */}
        <div className="flex-1 bg-white rounded-xl shadow p-8 md:p-10">
          <h2 className="text-3xl font-bold text-green-800 mb-6">
            Why Choose ION LLA?
          </h2>
          <ul className="space-y-5">
            {points.map((point, index) => (
              <li key={index} className="flex gap-4 items-start">
                <FaCheckCircle className="text-green-600 mt-1" />
                <div>
                  <p className="text-lg font-semibold text-gray-900">
                    {point.title}
                  </p>
                  <p className="text-sm text-gray-600">{point.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Box (slightly lower than left) */}
        <div className="flex-1 bg-white rounded-xl shadow p-8 md:p-10 mb-16 md:mt-24">
          <h3 className="text-3xl font-bold text-green-800 mb-6 text-center">
            Benefits at a Glance
          </h3>
          <ul className="space-y-4">
            {points.map((point, index) => (
              <li key={index} className="flex gap-3 items-center">
                <FaCheckCircle className="text-green-600" />
                <span className="text-lg font-semibold text-gray-900">
                  {point.title}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ChoosePage;
