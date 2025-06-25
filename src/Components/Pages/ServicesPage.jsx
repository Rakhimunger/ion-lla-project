import React from "react";

const ServicesPage = () => {
  return (
    <div className="px-4 py-10 sm:px-6 md:px-12 lg:px-20 bg-gradient-to-br from-white via-slate-100 to-slate-200 text-gray-800 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-5xl font-bold text-black mb-2">
            Services
          </h1>
          <h2 className="text-xl sm:text-4xl font-extrabold text-green-900 mb-3">
            Our Legal Services
          </h2>
          <p className="italic text-gray-600">
            Professional | Transparent | Reliable
          </p>
          <p className="mt-4 text-base sm:text-lg max-w-3xl mx-auto">
            At <strong>ION LLA</strong>, we offer a comprehensive range of legal
            services tailored to individuals, families, and businesses. Our
            experienced legal team provides clear, step-by-step assistance to
            ensure your rights are protected and your documents are accurate and
            legally compliant.
          </p>
        </div>

        {/* Services List */}
        <div className="space-y-8">
          {[
            {
              title: "Court Marriage Assistance",
              badge: "🔷",
              subtitle: "Legally Valid | Hassle-Free Process",
              content:
                "We assist couples in completing the court marriage process under the Special Marriage Act. From document preparation to registration, we make the procedure simple and smooth across Delhi, Haryana, and Uttar Pradesh.",
            },
            {
              title: "Divorce Legal Support",
              badge: "🔷",
              subtitle: "Confidential Guidance | Peaceful Solutions",
              content:
                "We offer professional assistance for mutual consent divorce, legal separation, alimony, child custody, and other related matters. Our team handles every case with sensitivity and privacy.",
            },
            {
              title: "Matrimonial Case Advisory",
              badge: "🔷",
              subtitle: "Family Law Experts | Clear Legal Pathways",
              content:
                "From filing petitions to responding to notices, we help clients with accurate legal advice in matrimonial matters such as maintenance, dowry protection, and reconciliation support.",
            },
            {
              title: "Trademark Registration",
              badge: "🔷",
              subtitle: "Secure Your Brand | Complete Documentation",
              content:
                "Protect your business identity with our trademark registration services. We handle trademark search, application filing, response to objections, and renewals with complete guidance.",
            },
            {
              title: "Power of Attorney",
              badge: "🔷",
              subtitle: "Delegate Authority Legally",
              content:
                "Whether general or specific, we help draft and register Power of Attorney documents for property, banking, or representation purposes, with legal precision and official notarization.",
            },
            {
              title: "Sales & Lease Agreements",
              badge: "🔷",
              subtitle: "Legally Binding | Custom Drafting",
              content:
                "We draft clear, legally valid sale deeds, lease agreements, and rental agreements to avoid future disputes. Service includes document preparation and registration.",
            },
            {
              title: "Business Agreements",
              badge: "🔷",
              subtitle: "For Startups & Enterprises",
              content:
                "Get your MOUs, partnership deeds, vendor contracts, and service agreements drafted and reviewed by experts. We help safeguard your business legally at every stage.",
            },
            {
              title: "Contract Writing",
              badge: "🔷",
              subtitle: "Detailed | Legally Compliant",
              content:
                "We write customized contracts for employment, freelancing, services, or commercial use — keeping all terms and obligations clear and enforceable.",
            },
            {
              title: "Will Drafting & Registration",
              badge: "🔷",
              subtitle: "Protect Your Legacy",
              content:
                "Secure your family’s future with a professionally drafted will. We assist in creating, notarizing, and registering your will, ensuring it is legally valid and respected.",
            },
            {
              title: "Challan Disposal Assistance",
              badge: "🔷",
              subtitle: "Quick Legal Resolution",
              content:
                "Received a traffic or legal challan? We offer complete guidance and representation to help you clear or contest challans in municipal or traffic courts.",
            },
          ].map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 sm:p-8 hover:shadow-lg transition"
            >
              <h3 className="text-lg sm:text-2xl font-bold text-green-900 mb-1">
                {service.badge} {service.title}
              </h3>
              <p className="font-semibold mb-1">{service.subtitle}</p>
              <p className="text-sm sm:text-base text-black">
                {service.content}
              </p>
            </div>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="mt-16 bg-green-50 border-l-4 border-green-600 p-6 rounded-xl shadow-sm">
          <h3 className="text-xl sm:text-2xl font-bold text-green-700 mb-4">
            ✅ Why Choose ION LLA?
          </h3>
          <ul className="list-disc list-inside space-y-1 text-sm sm:text-base text-black font-bold">
            <li>Transparent Process</li>
            <li>Experienced Legal Advisors</li>
            <li>Fast Turnaround Time</li>
            <li>Multistate Support: Delhi, Haryana, UP</li>
            <li>Affordable and Confidential Service</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
