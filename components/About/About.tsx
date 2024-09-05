import React from "react";

const About = () => {
  return (
    <div className="bg-white flex flex-start content-center justify-center flex-wrap overflow-hidden relative w-full h-min px-32  py-24 ">
      <div className="flex flex-col content-center items-center  gap-10  sm:flex-row">
        <h2 className="font-customHeading text-2xl md:w-[50%]">
          Unlock Your Networking Potential
        </h2>
        <h1 className="font-customSubHeading text-xl font-medium lg-w[50%] sm:w-[80%]   ">
          ConnectEase is a web app that simplifies professional networking for
          tech industry newcomers. We provide message templates, real-world
          examples, and community support to help fresh graduates confidently
          connect with industry leaders and launch their careers.
        </h1>
      </div>
    </div>
  );
};

export default About;
