import React from "react";
import htmlImg from "../images/html.png";
import cssImg from "../images/css.png";
import javascriptImg from "../images/javascript.png";
import angularImg from "../images/angular.png";
import reactImg from "../images/react.png";
import tailwindImg from "../images/tailwind.png";
import bootstrapImg from "../images/bootstrap.png";
import githubImg from "../images/github.png";
import figmaImg from "../images/figma.png";
import postmanImg from "../images/postman.png";

const Skills = ({ innerRef }) => {
  return (
    <div
      ref={innerRef}
      className="flex flex-col gap-3 items-center border rounded-[2rem] p-0 sm:p-[5rem] mx-4 sm:mx-0 pt-[0.5rem] bg-[#2d2d2d]"
    >
      <span className="w-[6rem] sm:w-[7rem] text-center p-2 bg-[#333333] rounded-xl text-xs sm:text-base text-white p-2">
        Skills
      </span>
      <span className="text-lg sm:text-3xl text-center text-green-400 px-2">
        Skills that I bring and Tools that I'm good with:
      </span>
      <div className="flex gap-2 sm:gap-5 mt-6 flex-wrap w-[90vw] sm:w-[45vw] items-center justify-center py-4 sm:py-0">
        <div className="text-center flex flex-col items-center justify-between h-[4rem] sm:h-[5rem]">
          <img
            alt=""
            src={htmlImg}
            className="mx-2 sm:mx-4 w-[2rem] h-[2rem] sm:w-[3rem] sm:h-[3rem] rounded-[.75rem] sm:rounded-[1rem] border-[3px] border-green-400 bg-white bg-[length:1.5rem_1.5rem] sm:bg-[length:2.5rem_2.5rem] bg-no-repeat bg-center hover:scale-110 transform transition-transform duration-100"
          />
          <span className="text-white text-sm">HTML</span>
        </div>
        <div className="text-center flex flex-col items-center justify-between  h-[4rem] sm:h-[5rem]">
          <img
            alt=""
            src={cssImg}
            className="mx-2 sm:mx-4 w-[2rem] h-[2rem] sm:w-[3rem] sm:h-[3rem] rounded-[.75rem] sm:rounded-[1rem] border-[3px] border-green-400 bg-white bg-[length:1.5rem_1.5rem] sm:bg-[length:2.5rem_2.5rem] bg-no-repeat bg-center hover:scale-110 transform transition-transform duration-100"
          />
          <span className="text-white text-sm">CSS</span>
        </div>
        <div className="text-center flex flex-col items-center justify-between  h-[4rem] sm:h-[5rem]">
          <img
            alt=""
            src={javascriptImg}
            className="mx-2 sm:mx-4 w-[2rem] h-[2rem] sm:w-[3rem] sm:h-[3rem] rounded-[.75rem] sm:rounded-[1rem] border-[3px] border-green-400 bg-white bg-[length:1.5rem_1.5rem] sm:bg-[length:2.5rem_2.5rem] bg-no-repeat bg-center hover:scale-110 transform transition-transform duration-100"
          />
          <span className="text-white text-sm">JavaScript</span>
        </div>
        <div className="text-center flex flex-col items-center justify-between  h-[4rem] sm:h-[5rem]">
          <img
            alt=""
            src={angularImg}
            className="mx-2 sm:mx-4 w-[2rem] h-[2rem] sm:w-[3rem] sm:h-[3rem] rounded-[.75rem] sm:rounded-[1rem] border-[3px] border-green-400 bg-white bg-[length:1.5rem_1.5rem] sm:bg-[length:2.5rem_2.5rem] bg-no-repeat bg-center hover:scale-110 transform transition-transform duration-100"
          />
          <span className="text-white text-sm">Angular</span>
        </div>
        <div className="text-center flex flex-col items-center justify-between  h-[4rem] sm:h-[5rem]">
          <img
            alt=""
            src={reactImg}
            className="mx-2 sm:mx-4 w-[2rem] h-[2rem] sm:w-[3rem] sm:h-[3rem] rounded-[.75rem] sm:rounded-[1rem] border-[3px] border-green-400 bg-white bg-[length:1.5rem_1.5rem] sm:bg-[length:2.5rem_2.5rem] bg-no-repeat bg-center hover:scale-110 transform transition-transform duration-100"
          />
          <span className="text-white text-sm">React</span>
        </div>
        <div className="text-center flex flex-col items-center justify-between  h-[4rem] sm:h-[5rem]">
          <img
            alt=""
            src={tailwindImg}
            className="mx-2 sm:mx-4 w-[2rem] h-[2rem] sm:w-[3rem] sm:h-[3rem] rounded-[.75rem] sm:rounded-[1rem] border-[3px] border-green-400 bg-white bg-[length:1.5rem_1.5rem] sm:bg-[length:2.5rem_2.5rem] bg-no-repeat bg-center hover:scale-110 transform transition-transform duration-100"
          />
          <span className="text-white text-sm">Tailwind</span>
        </div>
        <div className="text-center flex flex-col items-center justify-between  h-[4rem] sm:h-[5rem]">
          <img
            alt=""
            src={bootstrapImg}
            className="mx-2 sm:mx-4 w-[2rem] h-[2rem] sm:w-[3rem] sm:h-[3rem] rounded-[.75rem] sm:rounded-[1rem] border-[3px] border-green-400 bg-white bg-[length:1.5rem_1.5rem] sm:bg-[length:2.5rem_2.5rem] bg-no-repeat bg-center hover:scale-110 transform transition-transform duration-100"
          />
          <span className="text-white text-sm">Bootstrap</span>
        </div>
        <div className="text-center flex flex-col items-center justify-between  h-[4rem] sm:h-[5rem]">
          <img
            alt=""
            src={githubImg}
            className="mx-2 sm:mx-4 w-[2rem] h-[2rem] sm:w-[3rem] sm:h-[3rem] rounded-[.75rem] sm:rounded-[1rem] border-[3px] border-green-400 bg-white bg-[length:1.5rem_1.5rem] sm:bg-[length:2.5rem_2.5rem] bg-no-repeat bg-center hover:scale-110 transform transition-transform duration-100"
          />
          <span className="text-white text-sm">Github</span>
        </div>
        <div className="text-center flex flex-col items-center justify-between  h-[4rem] sm:h-[5rem]">
          <img
            alt=""
            src={figmaImg}
            className="mx-2 sm:mx-4 w-[2rem] h-[2rem] sm:w-[3rem] sm:h-[3rem] rounded-[.75rem] sm:rounded-[1rem] border-[3px] border-green-400 bg-white bg-[length:1.5rem_1.5rem] sm:bg-[length:2.5rem_2.5rem] bg-no-repeat bg-center hover:scale-110 transform transition-transform duration-100"
          />
          <span className="text-white text-sm">Figma</span>
        </div>
        <div className="text-center flex flex-col items-center justify-between  h-[4rem] sm:h-[5rem]">
          <img
            alt=""
            src={postmanImg}
            className="mx-2 sm:mx-4 w-[2rem] h-[2rem] sm:w-[3rem] sm:h-[3rem] rounded-[.75rem] sm:rounded-[1rem] border-[3px] border-green-400 bg-white bg-[length:1.5rem_1.5rem] sm:bg-[length:2.5rem_2.5rem] bg-no-repeat bg-center hover:scale-110 transform transition-transform duration-100"
          />
          <span className="text-white text-sm">Postman</span>
        </div>
      </div>
    </div>
  );
};

export default Skills;
