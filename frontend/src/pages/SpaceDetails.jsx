import React from "react";
import Heading from "../components/shared/Heading";
import Button from "../components/ui/Button";

const SpaceDetails = () => {
  return (
    <main className="mb-20">
      {/* details */}
      <section>
        <div className="container">
          {/* space images */}
          <div className="flex justify-between gap-5">
            <div className="w-[70%] relative">
              <img
                className="w-full h-full rounded-3xl"
                src="/images/spaces/5.jpg"
                alt="space"
              />

              <div className="absolute bottom-10 right-7">
                <Button size="sm">Show All Photos</Button>
              </div>
            </div>
            <div className="w-[30%] flex flex-col gap-4 h-full">
              <img
                src="/images/spaces/6.jpg"
                className="w-full h-full rounded-3xl"
                alt="space"
              />
              <img
                src="/images/spaces/7.jpg"
                className="w-full h-full rounded-3xl"
                alt="space"
              />
            </div>
          </div>

          {/* space details */}
          <div className="flex justify-between gap-16 mt-[60px]">
            {/* space content */}
            <div className="w-[65%]">
              <div>
                <Heading>
                  Coworking Space: Corporate Suites Rockefeller Center in New
                  York City
                </Heading>

                <div className="flex items-center gap-2 text-xl text-primary font-bold py-7 border-b border-gray">
                  <div className="flex items-center gap-2">
                    <img src="/images/icons/star-lg.png" alt="" />
                    <span>4.86</span>
                  </div>
                  <div className="w-[5px] h-[5px] rounded-full bg-primary" />
                  <span>300 Reviews</span>
                </div>
              </div>

              <div className="flex items-center justify-between gap-5 flex-wrap py-7 border-b border-gray">
                <div className="flex items-center gap-2 text-[25px] text-primary font-semibold flex-1">
                  <span>1 Guest </span>
                  <div className="w-[5px] h-[5px] rounded-full bg-primary" />
                  <span>1 Table </span>
                </div>
                <span className="flex-1 text-primary">
                  Access Hours : 9:00am - 6:00pm
                </span>
              </div>
            </div>

            {/* space reverse section */}
            <div className="w-[35%] h-20 border border-gray rounded-2xl shadow"></div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SpaceDetails;
