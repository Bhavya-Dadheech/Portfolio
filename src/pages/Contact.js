import React from "react";

const Contact = ({ innerRef }) => {
  return (
    <div ref={innerRef} className="flex flex-col gap-5 items-center p-[5rem] pt-[0.5rem]">
      <span className="w-[6rem] sm:w-[7rem] text-center p-2 bg-[#333333] rounded-xl text-xs sm:text-base text-white p-2">
        Contact Me
      </span>
      <span className="text-lg sm:text-3xl text-center text-green-400 w-[30rem]">Get in Touch & Connect with Me!</span>
      <div className="flex flex-row flex-wrap justify-center gap-1 sm:gap-5">
        <div className="flex flex-row gap-3 items-center justify-center">
          <a
            href="https://github.com/Bhavya-Dadheech"
            className="text-center flex flex-col items-center justify-between  h-[5rem]"
          >
            <div
              className="mx-4 w-[2rem] h-[2rem] sm:w-[3rem] sm:h-[3rem] rounded-[.75rem] sm:rounded-[1rem] border-[3px] border-green-400 bg-white bg-[length:1.5rem_1.5rem] sm:bg-[length:2.5rem_2.5rem] bg-no-repeat bg-center hover:scale-110 transform transition-transform duration-100"
              style={{
                backgroundImage: 'url("./images/github.png")'
              }}
            />
          </a>
        </div>
        <div className="flex flex-row gap-3 items-center justify-center">
          <a
            href="https://www.linkedin.com/in/bhavya-dadheech-64b3bb179/"
            className="text-center flex flex-col items-center justify-between  h-[5rem]"
          >
            <div
              className="mx-4 w-[2rem] h-[2rem] sm:w-[3rem] sm:h-[3rem] rounded-[.75rem] sm:rounded-[1rem] border-[3px] border-green-400 bg-white bg-[length:1.5rem_1.5rem] sm:bg-[length:2.5rem_2.5rem] bg-no-repeat bg-center hover:scale-110 transform transition-transform duration-100"
              style={{
                backgroundImage: 'url("./images/linkedin.png")'
              }}
            />
          </a>
        </div>
        <div className="flex flex-row items-start justify-center">
          <div
            className="mx-4 w-[2rem] h-[2rem] sm:w-[3rem] sm:h-[3rem] rounded-[.75rem] sm:rounded-[1rem] border-[3px] border-green-400 bg-white bg-[length:1.25rem_1.25rem] sm:bg-[length:2rem_2rem] bg-no-repeat bg-center hover:scale-110 transform transition-transform duration-100"
            style={{
              backgroundImage: 'url("./images/phone.png")'
            }}
          />
          <span className="text-white text-sm sm:text-lg">+91 7597704868</span>
        </div>
        <div className="flex flex-row items-start justify-center">
          <div
            className="mx-4 w-[2rem] h-[2rem] sm:w-[3rem] sm:h-[3rem] rounded-[.75rem] sm:rounded-[1rem] border-[3px] border-green-400 bg-white bg-[length:1.25rem_1.25rem] sm:bg-[length:2rem_2rem] bg-no-repeat bg-center hover:scale-110 transform transition-transform duration-100"
            style={{
              backgroundImage: 'url("./images/gmail.png")'
            }}
          />
          <span className="text-white text-sm sm:text-lg">dadheechbhavya4@gmail.com</span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
