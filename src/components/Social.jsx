import React from "react";
import { motion } from "framer-motion";
import SectionWrapper from "../hoc/SectionWrapper";
import { fadeIn, textVariant } from "../Utils/motion";
import { socialmedia } from "../constants";
import { insta, linkedin, github } from "../assets";
import { Tilt } from "react-tilt";

const SocialMedia = ({ image, source_code_link, index, name }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>

        <div
          className="relative w-[50px] h-[50px] cursor-pointer flex justify-center hover:scale-110 "
          onClick={() => window.open(source_code_link, "_blank")}
        >
          <img
            src={image}
            alt={name}
            className=" w-[220px] h-full object-cover rounded-2xl "
          />
          <div className="">
          </div>
        </div>

    </motion.div>
  );
};

const Social = () => {
  return (
    <>
      <motion-div variants={textVariant()}>
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider ">
          My Socials
        </p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          Social Media.
        </h2>
      </motion-div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Follow me on my social platforms.
        </motion.p>
      </div>
      <div className="my-20 flex flex-wrap gap-20">
        {socialmedia.map((social, index) => (
          <SocialMedia key={`social-${index}`} {...social} index={index} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Social, "");
