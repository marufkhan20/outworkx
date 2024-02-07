import React, { useState } from "react";
import Heading from "../shared/Heading";

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

        <div className="mt-9 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          <div className="overflow-hidden w-full rounded-2xl">
            <img
              src="/images/categories/1.png"
              alt="category"
              className="w-full rounded-2xl transition-all hover:scale-125"
            />
          </div>
          <div className="overflow-hidden w-full rounded-2xl">
            <img
              src="/images/categories/2.png"
              alt="category"
              className="w-full rounded-2xl transition-all hover:scale-125"
            />
          </div>
          <div className="overflow-hidden w-full rounded-2xl">
            <img
              src="/images/categories/3.png"
              alt="category"
              className="w-full rounded-2xl transition-all hover:scale-125"
            />
          </div>
          <div className="overflow-hidden w-full rounded-2xl">
            <img
              src="/images/categories/4.png"
              alt="category"
              className="w-full rounded-2xl transition-all hover:scale-125"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
