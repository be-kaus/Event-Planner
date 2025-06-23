import React from "react";
import background from "../assets/background.jpg";
const Hero = () => {
  return (
    <>
      <div className="mt-[-10%] bg-cover w-full  relative  h-screen flex justify-center ">
        <img src={background} alt="" className="absolute"/>

        <div className="grid gap-20 justify-items-center align-middle z-10">
          <h1 className=" mt-100 text-5xl font-extrabold text-center">
            Turn Your Dream Into Reality
          </h1>
          <div className="flex gap-10 ">
            <button className="bg-[ #836953] hover:bg-[#A66B47] text-white font-semibold px-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300 ease-in-out">Book Now</button>
          <button className="bg-[#A97458]/80 hover:bg-[#8B5E3C] text-white font-medium px-5 py-2.5 rounded-2xl border border-[#7B4A32] shadow-inner hover:shadow-md backdrop-blur-sm transition-all duration-300">Read More</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;