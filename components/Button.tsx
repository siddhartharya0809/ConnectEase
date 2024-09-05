"use client";

import React from "react";

interface ButtonProps {
  text: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button onClick={onClick} className="border-t-emerald-300">
      {text}
    </button>
  );
};

export default Button;
