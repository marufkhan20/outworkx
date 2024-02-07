import React from "react";

const SearchBar = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-2 sm:bg-white bg-transparent rounded-full p-[10px] w-full sm:w-[95%] mx-auto lg:min-w-[800px]">
      <div className="bg-white w-full rounded-full sm:w-[40%] lg:w-[45%] flex items-center gap-6 px-10 sm:px-5 md:px-16">
        <h3 className="text-2xl">Find</h3>
        <input
          className="py-4 w-full bg-transparent outline-none text-xl"
          type="text"
          placeholder="Ex: workspace"
        />
      </div>
      <div className="hidden sm:block w-[1px] bg-gray min-h-[40px]" />
      <div className="bg-white w-full rounded-full sm:w-[40%] lg:w-[45%] flex items-center gap-6 px-10 sm:px-5 md:px-16">
        <h3 className="text-2xl">Where</h3>
        <input
          className="py-4 w-full bg-transparent outline-none text-xl"
          type="text"
          placeholder="Your City"
        />
      </div>
      <div className="w-[60px] h-[60px] rounded-full bg-primary flex items-center justify-center cursor-pointer transition-all hover:opacity-60">
        <img src="/images/icons/search.png" alt="search" />
      </div>
    </div>
  );
};

export default SearchBar;
