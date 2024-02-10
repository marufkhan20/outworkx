import React, { useState } from "react";
import Heading from "../shared/Heading";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

const Categories = () => {
  const [activeCategory, setActiveCategory] = useState("Offices");
  return (
    <section className="pt-14">
      <div className="container">
        <Heading>Explore the categories</Heading>

        <div className="mt-11">
          <ul className="flex items-center gap-3 flex-wrap">
            <li
              className={`transition-all border cursor-pointer py-3 px-6 rounded-full ${
                activeCategory === "Offices"
                  ? "bg-primary border-primary text-white"
                  : "border-gray text-primary hover:bg-primary hover:border-primary hover:text-white"
              }`}
              onClick={() => setActiveCategory("Offices")}
            >
              Offices
            </li>
            <li
              className={`transition-all border cursor-pointer py-3 px-6 rounded-full ${
                activeCategory === "Homes"
                  ? "bg-primary border-primary text-white"
                  : "border-gray text-primary hover:bg-primary hover:border-primary hover:text-white"
              }`}
              onClick={() => setActiveCategory("Homes")}
            >
              Homes
            </li>
            <li
              className={`transition-all border cursor-pointer py-3 px-6 rounded-full ${
                activeCategory === "Cafe"
                  ? "bg-primary border-primary text-white"
                  : "border-gray text-primary hover:bg-primary hover:border-primary hover:text-white"
              }`}
              onClick={() => setActiveCategory("Cafe")}
            >
              Cafe
            </li>
          </ul>
        </div>

        <div className="mt-9">
          <Swiper
            spaceBetween={20}
            slidesPerView={4}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
            autoplay={{
              delay: 1000,
            }}
            loop={true}
          >
            <SwiperSlide>
              <div className="overflow-hidden w-full rounded-2xl">
                <img
                  src="/images/categories/1.png"
                  alt="category"
                  className="w-full rounded-2xl transition-all hover:scale-125"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="overflow-hidden w-full rounded-2xl">
                <img
                  src="/images/categories/2.png"
                  alt="category"
                  className="w-full rounded-2xl transition-all hover:scale-125"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="overflow-hidden w-full rounded-2xl">
                <img
                  src="/images/categories/3.png"
                  alt="category"
                  className="w-full rounded-2xl transition-all hover:scale-125"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="overflow-hidden w-full rounded-2xl">
                <img
                  src="/images/categories/4.png"
                  alt="category"
                  className="w-full rounded-2xl transition-all hover:scale-125"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="overflow-hidden w-full rounded-2xl">
                <img
                  src="/images/categories/2.png"
                  alt="category"
                  className="w-full rounded-2xl transition-all hover:scale-125"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="overflow-hidden w-full rounded-2xl">
                <img
                  src="/images/categories/1.png"
                  alt="category"
                  className="w-full rounded-2xl transition-all hover:scale-125"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="overflow-hidden w-full rounded-2xl">
                <img
                  src="/images/categories/3.png"
                  alt="category"
                  className="w-full rounded-2xl transition-all hover:scale-125"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Categories;
