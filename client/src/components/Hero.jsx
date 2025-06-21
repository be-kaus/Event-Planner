import React from "react";
import background from "../assets/background.jpg";
const Hero = () => {
  return (
    <>
      <div className="m-[-10%] relative h-275 flex justify-center items-center">
        <img src={background} alt="" className="absolute -z-1" />
      </div>
    </>
  );
};

export default Hero;