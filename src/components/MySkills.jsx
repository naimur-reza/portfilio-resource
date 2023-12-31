import React from "react";
import { motion } from "framer-motion";
import { styles } from "../style";
import SectionWrapper from "../hoc/SectionWrapper";
import { technologies } from "../constant";
import { fadeIn, textVariant, zoomIn } from "../utils/motion";
const MySkills = () => {
  return (
    <div id="skills" className="mt-20">
      <motion.div variants={textVariant()}>
        <h1 className={`${styles.sectionSubText}`}>
          My <span>arsenal</span>
        </h1>
        <h1 className={`${styles.sectionHeadText}`}>Skills</h1>
        <p className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
          The skills, tools and technologies I use to bring your products to
          life:
        </p>
      </motion.div>
      <div className="flex flex-wrap lg:gap-[60px] gap-20 justify-around mt-20">
        {technologies.map((image, index) => {
          return (
            <motion.div key={index} variants={zoomIn(index * 0.4, 0.3)}>
              <img
                className="lg:w-16 w-14 hover:scale-110 duration-200 transition cursor-pointer"
                key={index}
                src={image}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default SectionWrapper(MySkills, "");
