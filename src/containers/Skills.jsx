import React from "react";
import { motion } from "framer-motion";
import { Leaf1, Leaf2 } from "../assets";
import { SkillCard } from "../components";
import { skillsIcons } from "../utils/helper";

const Skills = () => {
  return (
    <section
      id="skills"
      className="flex items-center justify-center flex-col gap-12 my-12"
    >
      {/* title */}
      <div className="w-full flex items-center justify-center py-24">
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: 200 }}
          exit={{ opacity: 0, width: 0 }}
          transition={{ delay: 0.4 }}
          className="w-52 flex justify-center items-center"
        >
          <img src={Leaf1} className="w-6 h-auto object-contain" alt="" />
          <p className="text-2xl text-texlight text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary capitalize font-sans tracking-wider">
            Skills
          </p>
          <img src={Leaf2} className="w-6 h-auto object-contain" alt="" />
        </motion.div>
      </div>

      {/* content section */}

      <div className="w-full px-8 flex flex-col gap-4 items-center justify-center">
        <p className="text-2xl text-texlight inline text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary capitalize font-sans tracking-wider">
          My Skills & Work Experience
        </p>
        <p className="text-texlight text-center text-base tracking-wide ">
          I am dedicated to maintaining the integrity of the digital landscape.
          As an ethical hacker, I use my skills to protect systems and networks
          from security threats, ensuring the safety and privacy of online data.
        </p>
      </div>

      {/* main content */}
      <div className="flex flex-wrap justify-center items-center gap-7 end-full">
        {/* image sction */}
        {skillsIcons &&
          skillsIcons?.map((skill, index) => {
            return (
              <SkillCard
                key={index}
                skill={skill?.lang}
                percentage={skill?.progress}
                color={skill?.color}
              />
            );
          })}
      </div>
    </section>
  );
};

export default Skills;
