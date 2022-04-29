import React from "react";
import { ButtonProps } from "../../interfaces/button";

const Button: React.FC<ButtonProps> = ({ title, className, onClick }) => {
  return (
    <button onClick={onClick} className={className}>
      {title}
    </button>
  );
};

export default Button;
