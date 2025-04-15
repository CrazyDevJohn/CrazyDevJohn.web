import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Leaf1, Leaf2, about } from "../assets";
import { iconClasses } from "../utils/helper";
import { fetchProjects } from "../sanity";

const Projects = () => {
  const [projectsData, setProjectsData] = useState([]);

  const fetchingData = async () => {
    await fetchProjects()
      .then((d) => setProjectsData(d))
      .catch((er) => console.log("Error In Fetching Project"));
  };

  useEffect(() => {
    fetchingData();
  }, []);

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
          {projectsData &&
            projectsData.map((project, index) => {
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
      key={project._id}
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
        src={project.image.asset.url}
      />
      {isHovered && (
        <motion.div className="absolute inset-0 backdrop-blur-md bg-[rgba(0,0,0,.6)] flex items-center justify-center flex-col ">
          <h2 className="text-base text-primary">{project.category}</h2>
          <p className="text-xl text-primary">{project?.title}</p>
          <h2 className="text-sm text-secondary">using:</h2>
          <div className="flex gap-2 mt-3">
            <a href={project.gitLink} target="_blank">
              <i
                className={`${iconClasses["github"]} colored text-3xl text-white hover:text-primary`}
              />
            </a>
            <a href={project.liveLink} target="_blank">
              <i
                className={`devicon-chrome-plain colored text-3xl text-white hover:text-primary`}
              />
            </a>
          </div>
          <div className="flex gap-2 mt-3 flex-wrap justify-center items-center w-3/4">
            {project.tech.length > 0 &&
              project?.tech?.map((tech, i) => {
                console.log(tech.className);
                return (
                  <>
                    <i
                      className={`${tech.className}  colored text-xl text-white hover:text-primary`}
                    />
                  </>
                );
              })}
          </div>
          <div className="justify-center flex flex-col  items-center pt-3">
            <h2 className="text-sm text-texlight">{project.description}</h2>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Projects;
