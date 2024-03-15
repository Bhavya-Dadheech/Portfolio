import React from "react";

const Home = ({ innerRef }) => {
  return (
    <div ref={innerRef} className="flex m-16 w-[90vw] justify-between items-center mt-[10rem]">
      <div className="flex flex-col gap-3">
        <span className="text-white text-5xl font-medium">Hi I'm</span>
        <span className="text-white text-6xl font-semibold">Bhavya Dadheech</span>
        <span className="text-gray-400 text-2xl max-w-[50vw]">
          A Passionate <span className="text-green-400 text-2xl max-w-[50vw]">Front-End Web Developer</span> with 2
          years of experience specializing in crafting responsive and mobile-friendly web applications using
          cutting-edge technologies.
        </span>
      </div>
      <img src="./images/4402130.jpg" alt="" className="w-[30vw] rounded-3xl	" />
    </div>
  );
};

export default Home;
