import React from "react";
import homebg from "../assets/homebg.png";

const Hero = () => {
  return (
    <>
      <div className="mt-[-10%] bg-cover relative flex justify-center ">
        <img src={homebg} alt="" className="absolute"/>

        <div className="grid gap-20 justify-items-center align-middle z-10">
          <h1 className=" mt-80 text-5xl font-extrabold text-center bg-gradient-to-r from-orange-400 to-cyan-600 bg-clip-text text-transparent">
            Together is a Beautiful Place to Be
          </h1>
          <div className="flex gap-10 ">
            <button className="bg-[#FF8243] hover:bg-[#fb9062] text-white font-bold py-1 justify-center px-6 rounded-2xl shadow-md text-center hover:shadow-lg transition duration-300 ease-in-out">Book Now</button>

            <button className="bg-[#fb9062] text-white font-medium px-5 py-2.5 rounded-2xl border border-[#7B4A32] shadow-inner backdrop-blur-sm transition-all duration-300">Read More</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero;