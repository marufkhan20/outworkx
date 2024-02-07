import React from "react";
import { cn } from "../../lib/utills";

const InputBox = ({ children, className = "" }) => {
  return (
    <div
      className={cn(
        "flex flex-col py-5 px-10 rounded-[25px] border border-gray",
        className
      )}
    >
      {children}
    </div>
  );
};

export default InputBox;
