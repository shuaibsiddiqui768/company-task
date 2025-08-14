import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { FaStar } from "react-icons/fa";

// import playIcon from "../assets/play.png";
import client1 from "../assets/client1.png";
import client2 from "../assets/client2.png";
import client3 from "../assets/client3.png";
import client4 from "../assets/client4.png";

const testimonials = [
  
  {
    name: "Krish Bruynson",
    role: "Director, Storloft",
    image: client1,
    rating: 5,
  },
  {
    name: "Amelia Carter",
    role: "CTO, FinEdge Solutions",
    image: client2,
    rating: 5,
  },
  {
    name: "Rohan Mehta",
    role: "Founder, HealthBridge",
    image: client3,
    rating: 5,
  },
  {
    name: "Sophia Martinez",
    role: "VP Technology, EduSmart",
    image: client4,
    rating: 5,
  },
  {
    name: "Daniel Kim",
    role: "CEO, CloudNova",
    image: client2,
    rating: 5,
  },
  {
    name: "Emma Johnson",
    role: "Product Manager, RetailX",
    image: client4,
    rating: 5,
  },
  {
    name: "Mohammed Khan",
    role: "CTO, AutoLink",
    image: client1,
    rating: 5,
  },
  {
    name: "Olivia Brown",
    role: "Head of Innovation, GreenTech",
    image: client3,
    rating: 5,
  },
];

const About = () => {
  return (
    <section className="bg-gradient-to-r from-[#FCE4E6] to-[#E6FAF4] py-16 px-4">
      <div className="text-center max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-semibold text-[#253B3E]">
          What Our Clients Have To Say About Us
        </h2>
        <p className="text-sm md:text-base text-gray-500 mt-3">
          Take A Look At Our Simple And Straightforward Process To Hire Software
        </p>
      </div>

      <div className="mt-10 max-w-6xl mx-auto">
        <Swiper
          modules={[Navigation, Autoplay]}
          slidesPerView={4}
          spaceBetween={28}
          loop
          autoplay={{ delay: 2800, disableOnInteraction: false }}
          navigation
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          className="[&_.swiper-button-next]:!text-gray-700 [&_.swiper-button-prev]:!text-gray-700 [&_.swiper-button-next]:!w-8 [&_.swiper-button-prev]:!w-8 [&_.swiper-button-next]:!h-8 [&_.swiper-button-prev]:!h-8"
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <div className="group">
                <div
                  className="relative rounded-xl overflow-hidden shadow-sm"
                  style={{
                    clipPath:
                      "polygon(0 0,100% 0,100% calc(100% - 28px),calc(100% - 28px) 100%,0 100%)",
                  }}
                >
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-full h-64 object-cover"
                  />

                </div>

                <div className="pt-4">
                  <h3 className="text-lg md:text-xl font-semibold text-[#1F2E2F]">
                    {t.name}
                  </h3>
                  <p className="text-gray-500 text-sm">Director, Storloft</p>
                  <div className="flex items-center gap-1 text-[#22C55E] mt-2">
                    {Array.from({ length: t.rating }).map((_, idx) => (
                      <FaStar key={idx} className="w-4 h-4" />
                    ))}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default About;
