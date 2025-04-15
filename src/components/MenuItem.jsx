import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const scrollToSection = (ev, href) => {
  ev.preventDefault();
  const section = document.querySelector(href);
  section.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest",
  });
};

const MenuItem = ({ menu, index }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <a
      href={menu?.uri}
      className="navLinks w-12 h-12 rounded-full flex justify-center items-center group cursor-pointer hover:bg-gradient-to-br hover:from-primary hover:to-secondary"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={(ev) => scrollToSection(ev, menu?.uri)}
    >
      <menu.Icon
        className={`text-neutral-800 text-xl group-hover:text-white`}
      />

      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -25 }}
            className="hidden lg:block absolute bg-white rounded-md px-6 py-2 -left-[140px] after:absolute after:-right-1 after:top-3 after:w-3 after:h-3 after:bg-white after:rotate-45"
            style={{ boxShadow: "inset 0 0 10px rgba(0,0,0,.5" }}
          >
            <p className="text-bgPrimary">{menu?.name}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </a>
  );
};

export default MenuItem;
