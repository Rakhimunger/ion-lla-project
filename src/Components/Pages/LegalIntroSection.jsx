import React from "react";
import image3 from "../../assets/Images/image3.jpg";
import { motion } from "framer-motion";

const LegalIntroSection = () => {
  return (
    <section className="bg-gradient-to-b from-white to-green-50 py-12 px-4 sm:px-6 lg:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transform hover:scale-105 transition duration-500 ease-in-out"
        >
          <img
            src={image3}
            alt="Legal Help"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-green-900"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight mb-4 text-gray-800">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-700 via-green-600 to-green-800">
              ION LLA – Trusted Legal
            </span>{" "}
            Assistance for Every Need
          </h2>

          <p className="text-black text-sm sm:text-base leading-relaxed mt-2">
            At ION LLA, we believe that everyone deserves clear, reliable, and
            hassle-free legal support. Our team of experienced legal
            professionals is committed to helping individuals and businesses
            navigate the legal system with confidence. Whether it’s a personal
            matter or a corporate legal requirement, we’re here to provide
            expert guidance every step of the way.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default LegalIntroSection;
