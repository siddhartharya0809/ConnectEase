"use client";
import type { NextPage } from "next";
import Button from "@/components/Button";

const Landing: NextPage = () => {
  const handleClick = () => {
    alert("Button Clicked");
  };
  return (
    <div className="flex items-center pjustify-center min-h-screen bg-gray-100">
      <Button text="Click Me" onClick={handleClick} />
    </div>
  );
};

export default Landing;
