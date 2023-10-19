import React from "react";
import { motion } from "framer-motion";
import { styles } from "../style";
import { jag } from "../assets";

const Hero = () => {
  return (
    <section className="relative w-full h-750px mx-auto">
      <div className="sm:py-16 py-6 absolut inset-0 top-[120px max-w-7xl mx-auto flex flex-row items-start gap-5]">
        <div className="flex flex-col justify-center items-center mt-5">
          <div className=" w-5 h-5 rounded-full bg-[#9153ff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div className="md:flex">
          <div className="flex flex-col">
            <h1 className=" font-black text-white lg:text-[70px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2 text-white text-[38px] font-bold">
              Hi, I'm <span className="text-[#915eff]">Jonathan Person</span>
            </h1>
            <p className=" text-[#dfd9ff] font-medium lg:text-[28px] sm:text-[24px] xs:text-[18px] text-[16px] lg:leading-[40px] mt-2 text-white-100">
              I'm a professional basketball player and Full-stack Developer from
              Sweden. Constantly learning and challenging myself to be the best
              developer I can possibily be.
            </p>
          </div>
          <img src={jag} alt={jag} className="mt-10 w-[500px] h-[500px] " />
        </div>
      </div>
    </section>
  );
};

export default Hero;
