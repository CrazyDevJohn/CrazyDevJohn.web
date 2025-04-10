import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Hero } from "../assets";
import { HeroTypeWritter, HomeSocialLinks } from "../components";
import { Socials } from "../utils/helper";

const Home = () => {
  return (
    <section
      id="home"
      className="flex items-center justify-center flex-col gap-12 relative"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 end-full">
        {/* content section  */}
        <div className="w-full h-full flex flex-col items-center lg:items-start justify-center gap-4">
          <h2 className="text-3xl lg:text-4xl text-texlight text-center md:text-left">
            Hello, It's me{" "}
            <span className="block tracking-wider text-4xl lg:text-6xl mt-4 text-white">
              Crazy Dev John
            </span>
          </h2>

          {/* typer  */}
          <h2 className="text-2xl lg:text-3xl text-texlight mt-4">
            And I'm{" "}
            <HeroTypeWritter
              speed={100}
              words={[
                "a Developer..",
                "a Designer..",
                "a Hacker..",
                "a YouTuber..",
                "a freelanzer..",
              ]}
            />
          </h2>

          <p className="text-base text-texlight mt-6 text-center lg:text-left">
            Greetings! I'm Crazy Dev John, a full-stack developer adept at
            creating dynamic web solutions. From crafting engaging user
            interfaces to optimizing server performance, I bring a comprehensive
            skill set to every project. Let's build something incredible
            together!
          </p>
          {/* social media buttons */}
          <div className="flex items-center justify-center gap-4 md:gap-16 mt-16 ">
            <AnimatePresence>
              {Socials &&
                Socials.map((item, index) => {
                  return (
                    <HomeSocialLinks index={index} data={item} key={index} />
                  );
                })}
            </AnimatePresence>
          </div>

          {/* hire me */}
          <a
            href="#"
            style={{ boxShadow: "inset 0 0 10px rgba(255,255,255,.5" }}
            className="mt-12 border border-[rgba(255,255,255,.05)] rounded-xl px-8 py-3 active:95 group hover:border-primary"
          >
            <p className="text-texlight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary">
              Hire Me
            </p>
          </a>
        </div>
        {/* image section */}
        <div className="w-full h-full flex px-4 items-center justify-center mt-4 md:mt-0">
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: [-10, 10, -10] }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
          >
            <>
              {/* <div className="w-full h-full bg-gradient-to-br rounded-full blur opacity-90 from-primary to-secondary -z-10 absolute"></div> */}
              <img
                src={Hero}
                className="w-full h-full object-contain rounded-full cursor-pointer"
              />
            </>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;
