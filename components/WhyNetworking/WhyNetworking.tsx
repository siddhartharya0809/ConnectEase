import React from "react";

const WhyNetworking = () => {
  return (
    <div className="p-12 py-12 sm:px-16 sm:py-16 md:px-32 md:py-28 bg-waitlistBg">
      <div className="flex flex-col py-2">
        {/* Section Title */}
        <div className="pb-6 md:pb-10">
          <p className="font-customSubHeading font-light text-lg sm:text-xl md:text-xl text-white">
            Networking Power
          </p>
        </div>

        {/* Main Content */}
        <div className="flex-start w-full md:w-[39rem]">
          <h1 className="font-customHeading sm:text-xl md:text-2xl lg:text-3xl text-white leading-tight ">
            If you&apos;ve been ignoring networking, you&apos;ve been ignoring a
            treasure trove of opportunities. From job offers to professional
            development, its benefits weave a web of opportunities. Let&apos;s
            navigate this journey together!
          </h1>
        </div>
      </div>
    </div>
  );
};

export default WhyNetworking;
