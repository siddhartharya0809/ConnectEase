import React from "react";

const Navbar = () => {
  return (
    <div className="flex flex-row justify-around content-center gap-10 font-light cursor-pointer pb-5 font-serif">
      <p className=" transition transform hover:font-bold ">Home</p>
      <p className=" transition transform hover:font-bold">Resources</p>
      <p className=" transition transform hover:font-bold">Community</p>
    </div>
  );
};

export default Navbar;
