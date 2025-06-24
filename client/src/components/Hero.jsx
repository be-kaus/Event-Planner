import React from "react";
import pkkahomebg from "../assets/pkkahomebg.jpg";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <>
      <div className="mt-[-10%] bg-cover relative flex justify-center ">
        <img src={pkkahomebg} alt="" className="absolute"/>

        <div className="grid gap-20 justify-items-center align-middle z-10">
          <h1 className=" mt-100 text-5xl font-extrabold text-center text-white">
            Turn Your Dream Into Reality
          </h1>
          <div className="flex gap-10 ">
            <button className="bg-[#A66B47] hover:bg-[#af8474] text-white font-bold py-1 justify-center px-6 rounded-2xl shadow-md text-center hover:shadow-lg transition duration-300 ease-in-out">Book Now</button>

            <button className="bg-[#aa7968] text-white font-medium px-5 py-2.5 rounded-2xl border border-[#7B4A32] shadow-inner backdrop-blur-sm transition-all duration-300">Read More</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero;