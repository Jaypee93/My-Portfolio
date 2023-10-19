import React from "react";

import { motion } from "framer-motion";
import { styles } from "../style";
import SectionWrapper from "../hoc/SectionWrapper";
import { fadeIn, textVariant } from "../Utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-black-100 p-10 mt-20 rounded-3xl xs:w-[320px] w-[320px] flex flex-wrap border-2"
  >
    <p className="text-white font-black text-[38px]">"</p>
    <div className="mt-1 ">
      <p className="tex-white tracking-wider text-[15px]">{testimonial}</p>
      <div className="mt-7 flex justify-between items-center gap-1">
        <div className="flex-1 flex flex-col">
          <p className="text-white font-medium text-[12px]">
            <span className="blue-text-gradient">@</span> {name}
          </p>
          <p className="mt-1 text-secondary text-[10px]">
            {designation} of {company}
          </p>
        </div>
        <img src={image} alt={`feedback-by-${name}`} className="w-10 h-10 rounded-full object-cover"/>
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
      <div
        className={`${styles.padding} violet-gradient rounded-2xl min-h-[300px]`}
      >
        <motion.div className="p-10 " variants={textVariant()}>
          <p className={styles.sectionSubText}>What others say</p>
          <h2 className={styles.sectionHeadText}>Testimonials.</h2>
        </motion.div>
        <div className={`${styles.paddingX} -mt-10 pb-14 flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
      </div>


    </div>
  );
};

export default SectionWrapper (Feedbacks, "")
