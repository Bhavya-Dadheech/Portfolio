import React from "react";
import productivitypulse from "../images/productivitypulse.mp4";
import nweshorizon from "../images/nweshorizon.mp4";
import textutils from "../images/textutils.mp4";
import githubImg from "../images/github.png";

const Projects = ({ innerRef }) => {
  return (
    <div ref={innerRef} className="flex flex-col m-16 w-[90vw] items-center justify-center gap-5">
      <span className="w-[6rem] sm:w-[7rem] text-center p-2 bg-[#333333] rounded-xl text-xs sm:text-base text-white p-2">
        Work
      </span>
      <span className="text-lg sm:text-3xl text-green-400">Applications I've built so far</span>
      <div className="flex flex-wrap items-center justify-center gap-10 m-8 w-[90vw]">
        {/* #1 */}
        <div className="flex flex-col items-start border rounded-3xl text-white w-[20rem] h-[25rem]">
          <video
            src={productivitypulse}
            width="600"
            height="300"
            controls="controls"
            autoPlay={true}
            className="rounded-t-3xl w-[20rem] h-[12rem]"
          />
          <div className="flex flex-col items-start text-white p-4 gap-3">
            <span className="font-medium text-lg">ProductivityPulse</span>
            <span className="text-gray-300 text-xs h-[6rem]">
              Comprehensive task management application that combines Angular for the frontend and Spring Boot (Java)
              for the backend. Developed with a primary focus on mastering the creation of RESTful APIs in Spring Boot,
              this project offers a robust platform for managing tasks efficiently.
            </span>
            <div className="text-gray-300 text-xs flex flex-row gap-2">
              <span className="px-1 py-0.5 rounded-md bg-[#3b3b3b]">HTML</span>
              <span className="px-1 py-0.5 rounded-md bg-[#3b3b3b]">CSS</span>
              <span className="px-1 py-0.5 rounded-md bg-[#3b3b3b]">Angular</span>
              <span className="px-1 py-0.5 rounded-md bg-[#3b3b3b]">Tailwind</span>
              <span className="px-1 py-0.5 rounded-md bg-[#3b3b3b]">Java</span>
            </div>
            <a
              href="https://github.com/Bhavya-Dadheech/ProductivityPulse"
              className="text-white text-[.65rem] flex flex-row gap-1"
            >
              <img src={githubImg} alt="" className="bg-white rounded-full w-[1rem] h-[1rem]" />
              View Code
            </a>
          </div>
        </div>
        {/* #2 */}
        <div className="flex flex-col items-start border rounded-3xl text-white w-[20rem] h-[25rem]">
          <video
            src={nweshorizon}
            width="600"
            height="300"
            controls="controls"
            autoPlay={true}
            className="rounded-t-3xl w-[20rem] h-[12rem]"
          />
          <div className="flex flex-col items-start text-white p-4 gap-3">
            <span className="font-medium text-lg">News-Horizon</span>
            <span className="text-gray-300 text-xs h-[6rem]">
              A web application built in react that provides users with the latest news from around the world.The app
              utilizes the NewsAPI to gather news articles, including advanced filtering options and infinite scrolling
              functionality.
            </span>
            <div className="text-gray-300 text-xs flex flex-row gap-2">
              <span className="px-1 py-0.5 rounded-md bg-[#3b3b3b]">HTML</span>
              <span className="px-1 py-0.5 rounded-md bg-[#3b3b3b]">CSS</span>
              <span className="px-1 py-0.5 rounded-md bg-[#3b3b3b]">JavaScript</span>
              <span className="px-1 py-0.5 rounded-md bg-[#3b3b3b]">React</span>
              <span className="px-1 py-0.5 rounded-md bg-[#3b3b3b]">Bootstrap</span>
            </div>
            <a
              href="https://github.com/Bhavya-Dadheech/News-Horizon"
              className="text-white text-[.65rem] flex flex-row gap-1"
            >
              <img src={githubImg} alt="" className="bg-white rounded-full w-[1rem] h-[1rem]" />
              View Code
            </a>
          </div>
        </div>
        {/* #3 */}
        <div className="flex flex-col items-start border rounded-3xl text-white w-[20rem] h-[25rem]">
          <video
            src={textutils}
            width="600"
            height="300"
            controls="controls"
            autoPlay={true}
            className="rounded-t-3xl w-[20rem] h-[12rem]"
          />
          <div className="flex flex-col items-start text-white p-4 gap-3">
            <span className="font-medium text-lg">TextUtils</span>
            <span className="text-gray-300 text-xs h-[6rem]">
              Built in React TextUtils offers a swift and efficient solution for text analysis, catering to various
              needs, whether it's counting words, characters, or evaluating entire paragraphs.
            </span>
            <div className="text-gray-300 text-xs flex flex-row gap-2">
              <span className="px-1 py-0.5 rounded-md bg-[#3b3b3b]">HTML</span>
              <span className="px-1 py-0.5 rounded-md bg-[#3b3b3b]">CSS</span>
              <span className="px-1 py-0.5 rounded-md bg-[#3b3b3b]">JavaScript</span>
              <span className="px-1 py-0.5 rounded-md bg-[#3b3b3b]">React</span>
              <span className="px-1 py-0.5 rounded-md bg-[#3b3b3b]">Bootstrap</span>
            </div>
            <a
              href="https://github.com/Bhavya-Dadheech/TextUtils"
              className="text-white text-[.65rem] flex flex-row gap-1"
            >
              <img src={githubImg} alt="" className="bg-white rounded-full w-[1rem] h-[1rem]" />
              View Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
