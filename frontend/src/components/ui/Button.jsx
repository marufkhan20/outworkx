import React from "react";
import { Link } from "react-router-dom";
import { cn } from "../../lib/utills";

const Button = ({
  type = "button",
  to = "",
  className = "",
  children,
  onClick,
  size = "lg",
  ...rest
}) => {
  const styles = `font-medium text-white bg-primary transition-all border border-transparent hover:text-primary hover:bg-transparent rounded-full hover:border-primary ${
    size === "lg" ? "py-4 px-10 text-xl" : "py-3 px-5 text-base"
  }`;

  return to ? (
    <Link to={to} className={cn(styles, className)} {...rest}>
      {children}
    </Link>
  ) : (
    <button
      className={cn(styles, className)}
      onClick={onClick}
      type={type}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
