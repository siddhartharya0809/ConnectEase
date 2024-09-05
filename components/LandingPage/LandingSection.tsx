import React from "react";
import LandingBGImg from "./BackgroundImage";
// import LandingText from "./LandingText";
import Navbar from "./Navbar";

const LandingSection = () => {
  return (
    <div className="relative w-full h-screen bg-landingBg flex flex-col justify-center items-center">
      {/* <LandingText /> */}
      <LandingBGImg />
      <Navbar />
    </div>
  );
};

export default LandingSection;
