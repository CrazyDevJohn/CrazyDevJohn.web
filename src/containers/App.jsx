import React from "react";
import {
  About,
  Contact,
  Header,
  Home,
  Projects,
  ServiceCount,
  Skills,
  ParticlesContainer,
} from "./";
import { AnimatePresence } from "framer-motion";

import { Socials } from "../utils/helper";
import { HomeSocialLinks } from "../components";

const App = () => {
  console.log("ENV " + process.env.API_URL);

  return (
    <div className="w-screen xl:w-[1600px] py-4 md:py-32 lg:px-12 pr-4 px-4 lg:pr-32">
      {/* partical */}
      <ParticlesContainer />

      {/* header */}
      <Header />

      {/* home container */}
      <Home />

      {/* services count crds */}
      <ServiceCount />

      {/* about container */}
      <About />

      {/* certifications */}

      {/* skills container */}
      <Skills />

      {/* projects container] */}
      <Projects />

      {/* contact container */}
      <Contact />

      {/* footer container */}
      <div className="w-full flex flex-col items-center justify-start mt-20 mb-12">
        <p className="text-3xl tracking-wider text-texlight">Crazy Dev John</p>
        <div className="flex items-center justify-center gap-4 md:gap-16 mt-12">
          <AnimatePresence>
            {Socials &&
              Socials.map((item, index) => {
                return (
                  <HomeSocialLinks index={index} data={item} key={index} />
                );
              })}
          </AnimatePresence>
        </div>

        <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-3 mt-12 pb-14">
          <p className="text-texlight text-center">
            Jack of all trades in the web world! I build and maintain all
            aspects of a website or application, from the user interface you see
            to the behind-the-scenes data management. Think front-end finesse
            meets back-end brains.
          </p>
          <p className="text-texlight text-center">
            Hey there! Thanks a bunch for stopping by my little corner of the
            internet. I really appreciate you taking the time to explore. Hope
            you found something interesting, and I'd love to have you back
            anytime!
          </p>

          <div className="w-full flex flex-col items-center justify-center gap-3">
            <p className="text-texlight text-center">crazydevjohn@gmail.com</p>
            <p className="text-texlight text-center">+94 7154-30976</p>
            <a href="#">
              <p className="text-primary text-center">Hire Me</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
