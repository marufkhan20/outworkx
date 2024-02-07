import React from "react";
import { Link } from "react-router-dom";

const Space = () => {
  return (
    <div>
      <div className="overflow-hidden rounded-2xl relative w-full">
        <img
          src="/images/spaces/1.jpg"
          alt="space"
          className="w-full transition-all hover:scale-125"
        />

        <div className="absolute top-[10px] right-[10px] w-[50px] h-[50px] rounded-full bg-primary flex items-center justify-center cursor-pointer transition-all hover:opacity-60">
          <img src="/images/icons/favorite.png" alt="favorite" />
        </div>

        {/* slider navigator */}
        <div className="absolute left-[10px] right-[10px] top-[50%] transform translate-y-[-50%] flex items-center justify-between gap-5">
          <div className="cursor-pointer w-6 h-6 rounded-full bg-white transition-all hover:opacity-60 flex items-center justify-center">
            <img src="/images/icons/left.png" alt="left" />
          </div>
          <div className="cursor-pointer w-6 h-6 rounded-full bg-white transition-all hover:opacity-60 flex items-center justify-center">
            <img src="/images/icons/right.png" alt="right" />
          </div>
        </div>

        {/* slider dots */}
        <div className="absolute bottom-5 w-full flex items-center justify-center gap-[10px]">
          <div className="w-[8px] h-[8px] rounded-full bg-white cursor-pointer" />
          <div className="w-[6px] h-[6px] rounded-full bg-[#D9D9D9] cursor-pointer" />
          <div className="w-[6px] h-[6px] rounded-full bg-[#D9D9D9] cursor-pointer" />
          <div className="w-[6px] h-[6px] rounded-full bg-[#D9D9D9] cursor-pointer" />
        </div>
      </div>

      <div className="py-[14px] text-lg">
        <div className="flex items-center gap-2 justify-between">
          <h3 className="font-bold">
            <Link to="#">Lorem ipsum dolor sit </Link>
          </h3>
          <div className="flex items-center gap-2">
            <img src="/images/icons/star.png" alt="star" />
            <span className="text-base text-primary">4.93</span>
          </div>
        </div>
        <p>Lorem ipsum dolor sit amet</p>
        <h3 className="font-bold">$102</h3>
      </div>
    </div>
  );
};

export default Space;
