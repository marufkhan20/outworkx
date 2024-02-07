import React from "react";
import Button from "../../ui/Button";
import Review from "./Review";

const Reviews = () => {
  return (
    <div className="py-7 border-b border-gray">
      <div className="flex items-center gap-2 text-xl text-primary font-bold flex-wrap">
        <div className="flex items-center gap-2">
          <img src="/images/icons/star-lg.png" alt="" />
          <span>4.86</span>
        </div>
        <div className="w-[5px] h-[5px] rounded-full bg-primary" />
        <span>300 Reviews</span>
      </div>

      <div className="mt-2">
        <h5 className="leading-[47px] text-[15px]">Overall rating</h5>
        <div className="flex">
          <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-y-5 lg:grid-cols-6">
            <div className="border-r border-gray">
              <div className="flex items-center gap-2">
                <span className="text-[15px]">5</span>
                <div className="w-[80%] h-1 bg-primary rounded-full" />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[15px]">4</span>
                <div className="w-[80%] h-1 bg-gray rounded-full" />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[15px]">3</span>
                <div className="w-[80%] h-1 bg-gray rounded-full" />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[15px]">2</span>
                <div className="w-[80%] h-1 bg-gray rounded-full" />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[15px]">1</span>
                <div className="w-[80%] h-1 bg-gray rounded-full" />
              </div>
            </div>

            <div className="px-6 border-r flex flex-col gap-1 border-gray">
              <h5 className="text-[15px]">Cleanliness</h5>
              <h5 className="text-[15px]">5.0</h5>
              <div>
                <img src="/images/icons/cleaner.png" alt="icon" />
              </div>
            </div>

            <div className="px-6 border-r flex flex-col gap-1 border-gray">
              <h5 className="text-[15px]">Accuracy</h5>
              <h5 className="text-[15px]">5.0</h5>
              <div>
                <img src="/images/icons/accuricy.png" alt="icon" />
              </div>
            </div>
            <div className="px-6 border-r flex flex-col gap-1 border-gray">
              <h5 className="text-[15px]">Check-in</h5>
              <h5 className="text-[15px]">5.0</h5>
              <div>
                <img src="/images/icons/check-in.png" alt="icon" />
              </div>
            </div>
            <div className="px-6 border-r flex flex-col gap-1 border-gray">
              <h5 className="text-[15px]">Communication</h5>
              <h5 className="text-[15px]">5.0</h5>
              <div>
                <img src="/images/icons/communication.png" alt="icon" />
              </div>
            </div>
            <div className="px-6 flex flex-col gap-1">
              <h5 className="text-[15px]">Value</h5>
              <h5 className="text-[15px]">5.0</h5>
              <div>
                <img src="/images/icons/value.png" alt="icon" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* all reviews */}
      <div className="mt-14 grid sm:grid-cols-2 gap-10">
        <Review />
        <Review />
        <Review />
        <Review />
      </div>

      <div className="mt-14 flex items-center justify-center">
        <Button variant="secondary">Show More Reviews</Button>
      </div>
    </div>
  );
};

export default Reviews;
