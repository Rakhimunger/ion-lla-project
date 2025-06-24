import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";

import image2 from "../../assets/Images/image2.jpg";
import image4 from "../../assets/Images/image4.jpg";
import image5 from "../../assets/Images/image5.jpg";
import image6 from "../../assets/Images/image6.jpg";
import image3 from "../../assets/Images/image3.jpg"; // Correct path

const slides = [
  {
    image: image5,
    title: "Legal Help You Can Trust",
    subtitle:
      "Get expert legal guidance for your personal and professional matters. From contracts to court procedures, ION LLA is your reliable legal partner.",
  },
  {
    image: image2,
    title: "Court Marriage Made Easy",
    subtitle:
      "We simplify the court marriage process across Delhi, Haryana, and Uttar Pradesh. Complete assistance from documentation to registration.",
  },
  {
    image: image4,
    title: "Strong Legal Foundation for Your Business",
    subtitle:
      "From business agreements to trademark registration, we ensure your company’s legal protection is complete and compliant.",
  },
  {
    image: image6,
    title: "Compassionate Legal Support for Family Matters",
    subtitle:
      "Need help with divorce, alimony, or custody? Our experienced legal team handles sensitive matters with care and confidentiality.",
  },
  {
    image: image3,
    title: "Legal Documents, Drafted Right",
    subtitle:
      "From power of attorney to will registration and lease agreements, we draft and register your legal documents professionally and promptly.",
  },
];

const ImageSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        modules={[Autoplay, Pagination]}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full">
              <img
                src={slide.image}
                alt={`Slide ${index + 1}`}
                className="w-full h-[220px] sm:h-[350px] md:h-[500px] object-cover"
              />

              {activeIndex === index && (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="absolute inset-0 flex flex-col justify-center px-4 sm:px-10 md:px-20 text-left"
                >
                  <h2 className="text-base sm:text-lg md:text-5xl font-bold text-green-900 max-w-full whitespace-nowrap overflow-hidden text-ellipsis">
                    {slide.title}
                  </h2>
                  <p className="mt-2 text-sm sm:text-base md:text-lg text-green-900 font-semibold max-w-2xl">
                    {slide.subtitle}
                  </p>
                  <a
                    href="tel:+9188151927604"
                    className="mt-4 bg-yellow-400 text-black font-semibold px-5 py-2 rounded-full w-fit hover:bg-yellow-500 transition"
                  >
                    Call Now
                  </a>
                </motion.div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageSlider;
