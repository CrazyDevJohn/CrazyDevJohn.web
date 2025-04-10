import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Leaf1, Leaf2, about } from "../assets";
import { ProjectsData } from "../utils/helper";
import { FaGithub } from "react-icons/fa6";
import { GoFlame } from "react-icons/go";

const Projects = () => {
  return (
    <section
      id="projects"
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
            Projects
          </p>
          <img src={Leaf2} className="w-6 h-auto object-contain" alt="" />
        </motion.div>
      </div>

      {/* main content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 end-full">
        <AnimatePresence>
          {ProjectsData &&
            ProjectsData.map((project, index) => {
              return <ProjectCard key={index} project={project} />;
            })}
        </AnimatePresence>
      </div>
    </section>
  );
};

const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = React.useState(false);
  return (
    <motion.div
      key={project.id}
      className="overflow-hidden cursor-pointer rounded-lg relative"
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
    >
      <motion.img
        whileHover={{ scale: 1.1 }}
        className="w-full h-full object-contain rounded-lg"
        src={project.imgSrc}
      />
      {isHovered && (
        <motion.div className="absolute inset-0 backdrop-blur-md bg-[rgba(0,0,0,.6)] flex items-center justify-center flex-col gap-2">
          <p className="text-xl text-primary">{project?.name}</p>
          <div className="flex gap-2">
            <a href={project.gitURL}>
              <FaGithub className="text-3xl text-white hover:text-primary" />
            </a>
            <a href={project.liveUrl}>
              <GoFlame className="text-3xl text-white hover:text-primary" />
            </a>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Projects;
