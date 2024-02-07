import React from "react";
import { cn } from "../../lib/utills";

const Input = ({
  type = "",
  onChange,
  placeholder = "",
  className = "",
  value,
  id = "",
  ...rest
}) => {
  return (
    <input
      type={type}
      onChange={onChange}
      placeholder={placeholder}
      value={value}
      id={id}
      className={cn(
        "text-[19px] w-full placeholder:text-primary/70 text-primary/70 font-medium leading-[37px] outline-none",
        className
      )}
      {...rest}
    />
  );
};

export default Input;
