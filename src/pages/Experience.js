import React from "react";

const Experience = ({ innerRef }) => {
  return (
    <div ref={innerRef} className="flex m-16 w-[90vw] items-start justify-start gap-[5rem]">
      <img src="./images/40770.jpg" alt="" className="w-[15vw] rounded-full" />
      <div className="flex flex-col gap-2">
        <span className="w-[7rem] text-center p-2 bg-[#2e2e2e] rounded-xl text-md text-white p-2">Experience</span>
        <span className="text-3xl text-green-400">
          Frontend Developer - Maeko Tech Solutions | Sep. 2021 - Nov. 2023
        </span>
        <span className="text-gray-400 text-lg max-w-[50vw]">
          I worked at Maeko Tech as a Angular Developer for two years, crafted responsive and mobile-friendly user
          interfaces for smooth user experience. I have a keen focus on modern frameworks and have collaborated
          effectively with backend developers to ensure seamless integration of APIs.
        </span>
      </div>
    </div>
  );
};

export default Experience;
