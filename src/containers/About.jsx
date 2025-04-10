import React from "react";
import { motion } from "framer-motion";
import { Leaf1, Leaf2, about } from "../assets";
import { aboutIcons } from "../utils/helper";

const About = () => {
  return (
    <section
      id="about"
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
            About Me
          </p>
          <img src={Leaf2} className="w-6 h-auto object-contain" alt="" />
        </motion.div>
      </div>

      {/* main content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 end-full">
        {/* image sction */}
        <div className="w-full flex items-center justify-center px-8">
          <div className="w-full lg:w-96 p-[2px] rounded-md bg-gradient-to-br from-primary to-secondary relative">
            <img
              src={about}
              className="w-full h-auto rounded-md object-contain"
              alt=""
            />

            <div className="absolute w-full h-full -top-3 -left-2 bg-gradient-to-br from-primary to-secondary rounded-md blur-[5px] -z-10"></div>
          </div>
        </div>

        {/* content section */}

        <div className="w-full px-8 flex flex-col gap-4 items-start justify-start">
          <p className="text-texlight text-base tracking-wide text-justify">
            Hello, I'm John Friday, a multifaceted technology enthusiast with a
            passion for building, securing, and exploring the digital world. I
            specialize in Android, iOS, and web development, alongside my role
            as an ethical hacker.
          </p>
          <p className="text-texlight text-base tracking-wide text-justify">
            For inquiries, collaboration opportunities, or to discuss your
            technology requirements, please don't hesitate to get in touch.
          </p>
          <p className="text-texlight text-base tracking-wide text-justify">
            Thank you for visiting my webpage, and I look forward to assisting
            you in your digital journey.
          </p>
          <p className="text-texlight text-base tracking-wide text-justify">
            Feel free to personalize or modify this bio to best represent your
            skills and experiences. Also, make sure to include contact
            information or any other details you'd like to share with your
            webpage visitors.
          </p>
          <ul class="flex flex-wrap gap-2 justify-start items-center content-center mt-5">
            {aboutIcons &&
              aboutIcons?.map((icon, index) => {
                return (
                  <li
                    key={index}
                    className="w-7 h-7 flex justify-center items-center rounded-lg bg-[rgba(255,255,255,.1)] cursor-pointer"
                  >
                    <i className={`${icon} text-xl colored`}></i>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
