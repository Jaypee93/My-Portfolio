import React from "react";
import { motion } from "framer-motion";
import { styles } from "../style";
import { jag } from "../assets";


const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className="sm:py-16 py-6 absolut inset-0 top-[120px max-w-7xl mx-auto flex flex-row items-start gap-5]"
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className=" w-5 h-5 rounded-full bg-[#9153ff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1
            className=" font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2 text-white text-[38px] font-bold"
          >
            Hi, I'm <span className="text-[#915eff]">Jonathan Person</span>
          </h1>
          <p className=" text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] mt-2 text-white-100">
            Professional basketball player and Full-stack Developer. Constantly
            learning and challenging myself to be the best developer I can
            possibily be. 
          </p>
          <img src={jag} alt={jag} className="w-[500px]" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
