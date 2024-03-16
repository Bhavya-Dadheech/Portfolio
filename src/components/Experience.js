import React from "react";
import person from "../images/person.jpg";

const Experience = ({ innerRef }) => {
  return (
    <div
      ref={innerRef}
      className="flex flex-col sm:flex-row my-16 mx-4 items-center justify-center sm:items-start sm:justify-start gap-[1rem] sm:gap-[5rem]"
    >
      <img src={person} alt="" className="w-[45vw] sm:w-[15vw] rounded-full" />
      <div className="flex flex-col items-center justify-center sm:items-start sm:justify-start gap-2">
        <span className="w-[6rem] sm:w-[7rem] text-center p-2 bg-[#333333] rounded-xl text-xs sm:text-base text-white p-2">
          Experience
        </span>
        <span className="hidden sm:inline-flex text-3xl text-green-400">
          Frontend Developer - Maeko Tech Solutions | Sep. 2021 - Nov. 2023
        </span>
        <span className="text-green-400 sm:hidden text-lg">Maeko Tech Solutions</span>
        <span className="text-green-400 sm:hidden text-lg">Frontend Developer</span>
        <span className="text-green-400 sm:hidden text-lg">Sep. 2021 - Nov. 2023</span>
        <span className="text-gray-400 text-lg max-w-max sm:max-w-[50vw] text-center sm:text-start">
          I worked at Maeko Tech as a Angular Developer for two years, crafted responsive and mobile-friendly user
          interfaces for smooth user experience. I have a keen focus on modern frameworks and have collaborated
          effectively with backend developers to ensure seamless integration of APIs.
        </span>
      </div>
    </div>
  );
};

export default Experience;
