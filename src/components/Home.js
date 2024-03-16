import React from "react";
import tech from "../images/tech.jpg";

const Home = ({ innerRef }) => {
  return (
    <div
      ref={innerRef}
      className="flex mb-0 sm:mb-16 m-16 w-[90vw] justify-between items-start sm:items-center mt-[10rem]"
    >
      <div className="flex flex-col gap-3">
        <span className="text-white text-xl sm:text-5xl font-medium">Hi I'm</span>
        <span className="text-white text-2xl sm:text-6xl font-semibold">Bhavya Dadheech</span>
        <span className="text-gray-400 text-sm sm:text-2xl max-w-[50vw]">
          A Passionate <span className="text-green-400 text-sm sm:text-2xl max-w-[50vw]">Front-End Web Developer</span>{" "}
          with 2 years of experience specializing in crafting responsive and mobile-friendly web applications using
          cutting-edge technologies.
        </span>
      </div>
      <img src={tech} alt="" className="w-[30vw] rounded-3xl" />
    </div>
  );
};

export default Home;
