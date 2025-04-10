import React from "react";

const ServiceCard = ({ count, text }) => {
  return (
    <div
      className="w-full lg:w-52 h-32 rounded-md border border-[rgba(255,255, 255,.3)] gap-2 flex-col group hover:border-primary cursor-pointer relative bg-bgPrimary flex justify-center items-center"
      style={{ boxShadow: "inset 0 0 10px rgba(255,255,255,.5)" }}
    >
      <div className="hidden group-hover:block absolute -inset-1 blur-md bg-gradient-to-br from-primary to-secondary -z-10"></div>
      <p className="text-2xl text-texlight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary capitalize font-sans tracking-wider">
        {count}
      </p>
      <p className="text-base text-texlight group-hover:text-white">{text}</p>
    </div>
  );
};

export default ServiceCard;
