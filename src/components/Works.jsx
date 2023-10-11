import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../style";
import { github } from "../assets";
import SectionWrapper from "../hoc/SectionWrapper";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../Utils/motion"; 

const ProjectCard = ({index, name, description, tags, image, source_code_link}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75 )}>
      <Tilt
        options={{
          max: 45, 
          scale: 1,
          speed: 450
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img src={image} alt={name} className="w-full h-full object-cover rounded-2xl" />

        </div>

      </Tilt>
    </motion.div>
  )

}

const Works = () => {
  return (
    <>
      <motion-div variants={textVariant()}>
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">
          My work
        </p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          projects.
        </h2>
      </motion-div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Here are my projects I've made so far where I showcase my skills and
          experiences. Each project comes with a brief explanation and links for
          you to navigate thru them. As I am improving and learning new
          techniques daily, my projects will be updated consistently.
        </motion.p>
      </div>
      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard 
            key={`project-${index}`} 
            {...project}
            index={index}
            />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
