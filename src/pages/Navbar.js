import React from "react";

const Navbar = ({ scrollToRef, homeRef, experienceRef, skillsRef, projectsRef, contactRef }) => {
  return (
    <div
      style={{ zIndex: "1000" }}
      className="bg-[#303030] fixed top-0 flex flex-row border border-slate-600 justify-between items-center rounded-2xl px-8 py-4 w-[96vw]"
    >
      <span className="text-3xl  text-green-400 font-semibold">Bhavya Dadheech</span>
      <div className="flex flex-row justify-between items-center text-white w-[30vw] mx-6">
        <div
          className="hover:scale-110 transform transition-transform duration-100 px-4 hover:bg-green-400 hover:text-black hover:py-1 hover:rounded-xl hover:cursor-pointer"
          onClick={() => scrollToRef(homeRef)}
        >
          Home
        </div>
        <div
          className="hover:scale-110 transform transition-transform duration-100 px-4 hover:bg-green-400 hover:text-black hover:py-1 hover:rounded-xl hover:cursor-pointer"
          onClick={() => scrollToRef(experienceRef)}
        >
          Experience
        </div>
        <div
          className="hover:scale-110 transform transition-transform duration-100 px-4 hover:bg-green-400 hover:text-black hover:py-1 hover:rounded-xl hover:cursor-pointer"
          onClick={() => scrollToRef(skillsRef)}
        >
          Skills
        </div>
        <div
          className="hover:scale-110 transform transition-transform duration-100 px-4 hover:bg-green-400 hover:text-black hover:py-1 hover:rounded-xl hover:cursor-pointer"
          onClick={() => scrollToRef(projectsRef)}
        >
          Projects
        </div>
        <div
          className="hover:scale-110 transform transition-transform duration-100 px-4 hover:bg-green-400 hover:text-black hover:py-1 hover:rounded-xl hover:cursor-pointer"
          onClick={() => scrollToRef(contactRef)}
        >
          Contact Me
        </div>
      </div>

      <a
        className="hover:scale-110 transform transition-transform duration-100 "
        href="./images/Bhavya Dadheech.pdf"
        title=""
        download
      >
        <button className="hover:text-white bg-green-400 text-black px-4 py-1 rounded-xl">Resume ⬇</button>
      </a>
    </div>
  );
};

export default Navbar;
