import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { FaStar } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Ravi Mehta",
    location: "Noida",
    text: "I had some confusion about trademark registration for my startup. Their legal expert explained everything clearly and helped me get it done without any hassle.",
  },
  {
    name: "Neha Bansal",
    location: "Gurgaon",
    text: "We needed quick help with a rental lease agreement, and ION LLA delivered exactly what we needed, on time. Great experience with a very knowledgeable legal team.",
  },
  {
    name: "Amit Sharma",
    location: "Delhi",
    text: "ION LLA made the entire court marriage process stress-free. The team was helpful, clear about the documents needed, and everything was handled professionally. Highly recommend!",
  },
  {
    name: "Swati Chauhan",
    location: "Ghaziabad",
    text: "ION LLA helped me draft and register my will with ease. Their team was respectful, clear, and made a sensitive matter very smooth. I trust them completely.",
  },
  {
    name: "Manish Kapoor",
    location: "Faridabad",
    text: "I was struggling with a property legal dispute. ION LLA’s timely guidance saved me a lot of time and stress. Their legal knowledge is top-notch and very approachable.",
  },
];

const TestimonialCards = () => {
  return (
    <div className="bg-white py-12 px-4 sm:px-6 md:px-8 lg:px-10 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <p className="text-[#0b5529] font-semibold text-lg sm:text-xl mb-2 italic">
          Testimonials
        </p>
        <h2 className="text-lg sm:text-3xl md:text-4xl font-bold text-[#0b5529] whitespace-nowrap">
          What Our Clients Say About ION LLA
        </h2>
      </div>

      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{ delay: 4500, disableOnInteraction: false }}
        slidesPerView={3}
        pagination={{ clickable: true }}
        modules={[Pagination, Autoplay]}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 1.2 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="px-2 sm:px-0">
              <div className="border border-gray-200 rounded-lg p-6 bg-white shadow-sm h-full flex flex-col justify-between">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-base font-semibold text-gray-800">
                      {item.name}
                    </h3>
                    <div className="flex text-orange-400 text-sm mt-1">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} />
                      ))}
                    </div>
                    <p className="text-sm text-gray-500 mt-1">
                      {item.location}
                    </p>
                  </div>
                  <FcGoogle className="text-2xl" />
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {item.text}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx>{`
        .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: #ccc;
          opacity: 0.5;
          margin: 0 6px !important;
        }

        .swiper-pagination-bullet-active {
          background: #3b4b96;
          opacity: 1;
        }

        .swiper-pagination {
          margin-top: 30px;
          position: relative;
        }
      `}</style>
    </div>
  );
};

export default TestimonialCards;
