import React from "react";

const Waitlist = () => {
  return (
    <div className=" flex flex-col content-center items-center justify-center px-32 bg-waitlistBg ">
      <div>
        <h1 className="font-customHeading w-full text-3xl p-10">
          Dare Yourself
        </h1>
      </div>
      <div className="flex  w-[25rem]">
        <p className="font-customSubHeading  justify-center text-xl">
          Ever imagined yourself at the helm of networking? We did, and
          here&apos;s your chance to don the pro hat. Click &apos;Get
          Started&apos; to welcome the world of powerful connections, where
          every step you take not only amplifies your profile but brings
          countless possibilities to your doorstep.
        </p>
      </div>
      <div className="flex flex-row justify-between p-5">
        {/* <div className=" p-3 m-1 border border-primary bg-primary rounded-md">
          <p className="">Get Started</p>
        </div> */}
        <div className="m-1 p-3 border border-primary bg-primary rounded-md cursor-pointer">
          <p className="text-base font-customSubHeading font-semibold">
            Join Waitlist
          </p>
        </div>
      </div>
    </div>
  );
};

export default Waitlist;
