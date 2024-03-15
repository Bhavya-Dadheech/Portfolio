import React from "react";

const Skills = ({ innerRef }) => {
  return (
    <div
      ref={innerRef}
      className="flex flex-col gap-3 items-center border rounded-[2rem] p-[5rem] pt-[0.5rem] bg-[#2d2d2d]"
    >
      <span className="w-[7rem] text-center p-2 bg-[#333333] rounded-xl text-md text-white p-2">Skills</span>
      <span className="text-3xl text-center text-green-400 w-[30rem]">
        Skills that I bring and Tools that I'm good with:
      </span>
      <div className="flex gap-5 mt-6 flex-wrap	w-[45rem] items-center justify-center">
        <div className="text-center flex flex-col items-center justify-between h-[5rem]">
          <div
            className="mx-2 w-[3rem] h-[3rem] rounded-[1rem] border-[3px] border-green-400 bg-white bg-contain bg-no-repeat bg-center hover:scale-110 transform transition-transform duration-100"
            style={{
              backgroundImage: 'url("./images/html.png")'
            }}
          />
          <span className="text-white text-sm">HTML</span>
        </div>
        <div className="text-center flex flex-col items-center justify-between  h-[5rem]">
          <div
            className="mx-2 w-[3rem] h-[3rem] rounded-[1rem] border-[3px] border-green-400 bg-white bg-contain bg-no-repeat bg-center hover:scale-110 transform transition-transform duration-100"
            style={{
              backgroundImage: 'url("./images/css.png")'
            }}
          />
          <span className="text-white text-sm">CSS</span>
        </div>
        <div className="text-center flex flex-col items-center justify-between  h-[5rem]">
          <div
            className="mx-2 w-[3rem] h-[3rem] rounded-[1rem] border-[3px] border-green-400 bg-white bg-contain bg-no-repeat bg-center hover:scale-110 transform transition-transform duration-100"
            style={{
              backgroundImage: 'url("./images/javascript.png")'
            }}
          />
          <span className="text-white text-sm">JavaScript</span>
        </div>
        <div className="text-center flex flex-col items-center justify-between  h-[5rem]">
          <div
            className="mx-2 w-[3rem] h-[3rem] rounded-[1rem] border-[3px] border-green-400 bg-white bg-contain bg-no-repeat bg-center hover:scale-110 transform transition-transform duration-100"
            style={{
              backgroundImage: 'url("./images/angular.png")'
            }}
          />
          <span className="text-white text-sm">Angular</span>
        </div>
        <div className="text-center flex flex-col items-center justify-between  h-[5rem]">
          <div
            className="mx-2 w-[3rem] h-[3rem] rounded-[1rem] border-[3px] border-green-400 bg-white bg-contain bg-no-repeat bg-center hover:scale-110 transform transition-transform duration-100"
            style={{
              backgroundImage: 'url("./images/react.png")'
            }}
          />
          <span className="text-white text-sm">React</span>
        </div>
        <div className="text-center flex flex-col items-center justify-between  h-[5rem]">
          <div
            className="mx-2 w-[3rem] h-[3rem] rounded-[1rem] border-[3px] border-green-400 bg-white bg-contain bg-no-repeat bg-center hover:scale-110 transform transition-transform duration-100"
            style={{
              backgroundImage: 'url("./images/tailwind.png")'
            }}
          />
          <span className="text-white text-sm">Tailwind</span>
        </div>
        <div className="text-center flex flex-col items-center justify-between  h-[5rem]">
          <div
            className="mx-2 w-[3rem] h-[3rem] rounded-[1rem] border-[3px] border-green-400 bg-white bg-contain bg-no-repeat bg-center hover:scale-110 transform transition-transform duration-100"
            style={{
              backgroundImage: 'url("./images/bootstrap.png")'
            }}
          />
          <span className="text-white text-sm">Bootstrap</span>
        </div>
        <div className="text-center flex flex-col items-center justify-between  h-[5rem]">
          <div
            className="mx-2 w-[3rem] h-[3rem] rounded-[1rem] border-[3px] border-green-400 bg-white bg-contain bg-no-repeat bg-center hover:scale-110 transform transition-transform duration-100"
            style={{
              backgroundImage: 'url("./images/github.png")'
            }}
          />
          <span className="text-white text-sm">Github</span>
        </div>
        <div className="text-center flex flex-col items-center justify-between  h-[5rem]">
          <div
            className="mx-2 w-[3rem] h-[3rem] rounded-[1rem] border-[3px] border-green-400 bg-white bg-contain bg-no-repeat bg-center hover:scale-110 transform transition-transform duration-100"
            style={{
              backgroundImage: 'url("./images/figma.png")'
            }}
          />
          <span className="text-white text-sm">Figma</span>
        </div>
        <div className="text-center flex flex-col items-center justify-between  h-[5rem]">
          <div
            className="mx-2 w-[3rem] h-[3rem] rounded-[1rem] border-[3px] border-green-400 bg-white bg-contain bg-no-repeat bg-center hover:scale-110 transform transition-transform duration-100"
            style={{
              backgroundImage: 'url("./images/postman.png")'
            }}
          />
          <span className="text-white text-sm">Postman</span>
        </div>
      </div>
    </div>
  );
};

export default Skills;