import React from "react";
import githubImg from "../images/github.png";
import linkedImg from "../images/linkedin.png";
import gmailImg from "../images/gmail.png";
import phone from "../images/phone.png";
const Contact = ({ innerRef }) => {
  return (
    <div ref={innerRef} className="flex flex-col gap-5 items-center p-0 sm:p-[5rem] pt-[0.5rem] mb-[5rem] sm:mb-0">
      <span className="w-[6rem] sm:w-[7rem] text-center p-2 bg-[#333333] rounded-xl text-xs sm:text-base text-white p-2">
        Contact
      </span>
      <span className="text-lg sm:text-3xl text-center text-green-400">Let's Connect!</span>
      <div className="flex flex-row flex-wrap justify-center gap-1 sm:gap-5">
        <div className="flex flex-row gap-3 items-center justify-center">
          <a
            href="https://github.com/Bhavya-Dadheech"
            className="text-center flex flex-col items-center justify-between  h-[5rem]"
          >
            <img
              alt=""
              src={githubImg}
              className="mx-2 sm:mx-4 w-[2rem] h-[2rem] sm:w-[3rem] sm:h-[3rem] rounded-[.75rem] sm:rounded-[1rem] border-[3px] border-green-400 bg-white bg-[length:1.5rem_1.5rem] sm:bg-[length:2.5rem_2.5rem] bg-no-repeat bg-center hover:scale-110 transform transition-transform duration-100"
            />
          </a>
        </div>
        <div className="flex flex-row gap-3 items-center justify-center">
          <a
            href="https://www.linkedin.com/in/bhavya-dadheech-64b3bb179/"
            className="text-center flex flex-col items-center justify-between  h-[5rem]"
          >
            <img
              alt=""
              src={linkedImg}
              className="mx-2 sm:mx-4 w-[2rem] h-[2rem] sm:w-[3rem] sm:h-[3rem] rounded-[.75rem] sm:rounded-[1rem] border-[3px] border-green-400 bg-white bg-[length:1.5rem_1.5rem] sm:bg-[length:2.5rem_2.5rem] bg-no-repeat bg-center hover:scale-110 transform transition-transform duration-100"
            />
          </a>
        </div>
        <div className="flex flex-row items-start justify-center">
          <a className="text-white text-sm sm:text-lg" href="tel:7597704868" alt="">
            <img
              alt=""
              src={phone}
              className="mx-2 sm:mx-4 w-[2rem] h-[2rem] sm:w-[3rem] sm:h-[3rem] rounded-[.75rem] sm:rounded-[1rem] border-[3px] border-green-400 bg-white bg-[length:1.5rem_1.5rem] sm:bg-[length:2.5rem_2.5rem] bg-no-repeat bg-center hover:scale-110 transform transition-transform duration-100"
            />
          </a>
        </div>
        <div className="flex flex-row items-start justify-center">
          <img
            alt=""
            src={gmailImg}
            className="mx-2 sm:mx-4 w-[2rem] h-[2rem] sm:w-[3rem] sm:h-[3rem] rounded-[.75rem] sm:rounded-[1rem] border-[3px] border-green-400 bg-white bg-[length:1.5rem_1.5rem] sm:bg-[length:2.5rem_2.5rem] bg-no-repeat bg-center hover:scale-110 transform transition-transform duration-100"
          />
          <span className="text-white text-sm sm:text-lg">dadheechbhavya4@gmail.com</span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
