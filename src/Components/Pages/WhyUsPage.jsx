import React from "react";
import {
  FaUserTie,
  FaHandsHelping,
  FaShieldAlt,
  FaMoneyBillWave,
  FaMapMarkerAlt,
  FaClock,
  FaLock,
  FaSmileBeam,
} from "react-icons/fa";

const points = [
  {
    title: "1. Experienced Legal Professionals",
    description:
      "Our team includes qualified legal advisors, drafters, and documentation experts with deep knowledge of Indian law. We handle your case with care, accuracy, and integrity.",
    icon: <FaUserTie />,
  },
  {
    title: "2. End-to-End Legal Assistance",
    description:
      "We manage everything from document preparation and filing to legal consultation and representation. You get a one-stop solution for all your legal needs — personal or business-related.",
    icon: <FaHandsHelping />,
  },
  {
    title: "3. Transparent and Honest Process",
    description:
      "No hidden charges. No misleading promises. We explain every step and cost upfront, so you know exactly what to expect — with full clarity.",
    icon: <FaShieldAlt />,
  },
  {
    title: "4. Affordable Legal Services",
    description:
      "Our goal is to make legal services accessible to everyone. We offer cost-effective plans without compromising on quality or professionalism.",
    icon: <FaMoneyBillWave />,
  },
  {
    title: "5. Multi-State Legal Support",
    description:
      "We provide legal services across Delhi, Haryana, and Uttar Pradesh. Whether you need court marriage assistance in Noida or document registration in Gurgaon, we’ve got you covered.",
    icon: <FaMapMarkerAlt />,
  },
  {
    title: "6. Fast Turnaround Time",
    description:
      "Time matters. That’s why we ensure speedy document drafting, court appointments, and legal updates. We respect your time and handle your work efficiently.",
    icon: <FaClock />,
  },
  {
    title: "7. 100% Confidentiality",
    description:
      "Your legal matters remain private and secure with us. We handle every case with complete discretion and professionalism.",
    icon: <FaLock />,
  },
  {
    title: "8. Client-Centric Approach",
    description:
      "You’re not just a file number. We listen, we respond, and we personalize our service based on your unique needs. Your satisfaction is our top priority.",
    icon: <FaSmileBeam />,
  },
  {
    title: "9. Affordable Legal Services",
    description:
      "Our goal is to make legal services accessible to everyone. We offer cost-effective plans without compromising on quality or professionalism.",
    icon: <FaMoneyBillWave />,
  },
];

const WhyUsPage = () => {
  return (
    <div className="bg-gradient-to-b from-white to-[#f8fafc] text-[#1f2d3d] px-6 py-12 sm:px-10 md:px-20 lg:px-32">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold mb-2">Why Us</h2>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0b132b] mb-4">
          Why Choose ION LLA?
        </h3>
        <p className="italic text-black mb-4 text-sm sm:text-base">
          Trusted Legal Support for Life’s Important Decisions
        </p>
        <p className="text-black mb-4 max-w-4xl mx-auto">
          At <strong>ION LLA</strong>, we understand that legal matters can be
          overwhelming. Whether you're planning a court marriage, registering a
          will, resolving a family issue, or protecting your business interests,
          you deserve clarity, confidence, and professional guidance.
        </p>
        <p className="text-black font-medium max-w-3xl mx-auto">
          Here's why hundreds of clients choose us as their legal partner across{" "}
          <strong>Delhi, Haryana, and Uttar Pradesh</strong>:
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {points.map((point, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-6 flex flex-col gap-3"
          >
            <div className="flex items-center gap-3 text-green-700 text-2xl">
              <span>{point.icon}</span>
              <h4 className="font-semibold text-lg text-black">
                {point.title}
              </h4>
            </div>
            <p className="text-sm text-black">{point.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyUsPage;
