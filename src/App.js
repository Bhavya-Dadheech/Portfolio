import "./App.css";
import { useRef } from "react";

function App() {
  const homeRef = useRef(null);
  const experienceRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToRef = ref => {
    const yOffset = -100;
    const y = ref.current.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      {/* NavBar */}
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

      {/* Home */}
      <div ref={homeRef} className="flex m-16 w-[90vw] justify-between items-center mt-[10rem]">
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

      {/* Experience */}
      <div ref={experienceRef} className="flex m-16 w-[90vw] items-start justify-start gap-[5rem]">
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

      {/* Skills */}
      <div
        ref={skillsRef}
        className="flex flex-col gap-3 items-center border rounded-[2rem] p-[5rem] pt-[0.5rem] bg-[#2d2d2d]"
      >
        <span className="w-[7rem] text-center p-2 bg-[#333333] rounded-xl text-md text-white p-2">Skills</span>
        <span className="text-3xl text-center text-green-400 w-[30rem]">
          Skills that I bring and Tools that I'm good with:
        </span>
        <div className="flex gap-5 mt-6 flex-wrap	w-[45rem] items-center justify-center">
          <div className="text-center flex flex-col items-center justify-between h-[5rem]">
            <div
              className="mx-4 w-[3rem] h-[3rem] rounded-[1rem] border-[3px] border-green-400 bg-white bg-contain bg-no-repeat bg-center hover:scale-110 transform transition-transform duration-100"
              style={{
                backgroundImage: 'url("./images/html.png")'
              }}
            />
            <span className="text-white text-sm">HTML</span>
          </div>
          <div className="text-center flex flex-col items-center justify-between  h-[5rem]">
            <div
              className="mx-4 w-[3rem] h-[3rem] rounded-[1rem] border-[3px] border-green-400 bg-white bg-contain bg-no-repeat bg-center hover:scale-110 transform transition-transform duration-100"
              style={{
                backgroundImage: 'url("./images/css.png")'
              }}
            />
            <span className="text-white text-sm">CSS</span>
          </div>
          <div className="text-center flex flex-col items-center justify-between  h-[5rem]">
            <div
              className="mx-4 w-[3rem] h-[3rem] rounded-[1rem] border-[3px] border-green-400 bg-white bg-contain bg-no-repeat bg-center hover:scale-110 transform transition-transform duration-100"
              style={{
                backgroundImage: 'url("./images/javascript.png")'
              }}
            />
            <span className="text-white text-sm">JavaScript</span>
          </div>
          <div className="text-center flex flex-col items-center justify-between  h-[5rem]">
            <div
              className="mx-4 w-[3rem] h-[3rem] rounded-[1rem] border-[3px] border-green-400 bg-white bg-contain bg-no-repeat bg-center hover:scale-110 transform transition-transform duration-100"
              style={{
                backgroundImage: 'url("./images/angular.png")'
              }}
            />
            <span className="text-white text-sm">Angular</span>
          </div>
          <div className="text-center flex flex-col items-center justify-between  h-[5rem]">
            <div
              className="mx-4 w-[3rem] h-[3rem] rounded-[1rem] border-[3px] border-green-400 bg-white bg-contain bg-no-repeat bg-center hover:scale-110 transform transition-transform duration-100"
              style={{
                backgroundImage: 'url("./images/react.png")'
              }}
            />
            <span className="text-white text-sm">React</span>
          </div>
          <div className="text-center flex flex-col items-center justify-between  h-[5rem]">
            <div
              className="mx-4 w-[3rem] h-[3rem] rounded-[1rem] border-[3px] border-green-400 bg-white bg-contain bg-no-repeat bg-center hover:scale-110 transform transition-transform duration-100"
              style={{
                backgroundImage: 'url("./images/tailwind.png")'
              }}
            />
            <span className="text-white text-sm">Tailwind</span>
          </div>
          <div className="text-center flex flex-col items-center justify-between  h-[5rem]">
            <div
              className="mx-4 w-[3rem] h-[3rem] rounded-[1rem] border-[3px] border-green-400 bg-white bg-contain bg-no-repeat bg-center hover:scale-110 transform transition-transform duration-100"
              style={{
                backgroundImage: 'url("./images/bootstrap.png")'
              }}
            />
            <span className="text-white text-sm">Bootstrap</span>
          </div>
          <div className="text-center flex flex-col items-center justify-between  h-[5rem]">
            <div
              className="mx-4 w-[3rem] h-[3rem] rounded-[1rem] border-[3px] border-green-400 bg-white bg-contain bg-no-repeat bg-center hover:scale-110 transform transition-transform duration-100"
              style={{
                backgroundImage: 'url("./images/github.png")'
              }}
            />
            <span className="text-white text-sm">Github</span>
          </div>
          <div className="text-center flex flex-col items-center justify-between  h-[5rem]">
            <div
              className="mx-4 w-[3rem] h-[3rem] rounded-[1rem] border-[3px] border-green-400 bg-white bg-contain bg-no-repeat bg-center hover:scale-110 transform transition-transform duration-100"
              style={{
                backgroundImage: 'url("./images/figma.png")'
              }}
            />
            <span className="text-white text-sm">Figma</span>
          </div>
          <div className="text-center flex flex-col items-center justify-between  h-[5rem]">
            <div
              className="mx-4 w-[3rem] h-[3rem] rounded-[1rem] border-[3px] border-green-400 bg-white bg-contain bg-no-repeat bg-center hover:scale-110 transform transition-transform duration-100"
              style={{
                backgroundImage: 'url("./images/postman.png")'
              }}
            />
            <span className="text-white text-sm">Postman</span>
          </div>
        </div>
      </div>

      {/* Projects */}
      <div ref={projectsRef} className="flex flex-col m-16 w-[90vw] items-center justify-center gap-5">
        <span className="w-[7rem] text-center p-2 bg-[#2e2e2e] rounded-xl text-md text-white p-2">Work</span>
        <span className="text-3xl text-green-400">Applications I've built so far</span>
        <div className="flex items-center justify-center gap-10 m-8 w-[90vw]">
          {/* #1 */}
          <div className="flex flex-col items-start border rounded-3xl text-white w-[20rem] h-[25rem]">
            <video
              src="./images/productivitypulse.mp4"
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
                for the backend. Developed with a primary focus on mastering the creation of RESTful APIs in Spring
                Boot, this project offers a robust platform for managing tasks efficiently.
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
                <img src="./images/github.png" alt="" className="bg-white rounded-full w-[1rem] h-[1rem]" />
                View Code
              </a>
            </div>
          </div>
          {/* #2 */}
          <div className="flex flex-col items-start border rounded-3xl text-white w-[20rem] h-[25rem]">
            <video
              src="./images/nweshorizon.mp4"
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
                utilizes the NewsAPI to gather news articles, including advanced filtering options and infinite
                scrolling functionality.
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
                <img src="./images/github.png" alt="" className="bg-white rounded-full w-[1rem] h-[1rem]" />
                View Code
              </a>
            </div>
          </div>
          {/* #3 */}
          <div className="flex flex-col items-start border rounded-3xl text-white w-[20rem] h-[25rem]">
            <video
              src="./images/textutils.mp4"
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
                <img src="./images/github.png" alt="" className="bg-white rounded-full w-[1rem] h-[1rem]" />
                View Code
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Me */}
      <div ref={contactRef} className="flex flex-col gap-5 items-center p-[5rem] pt-[0.5rem]">
        <span className="w-[7rem] text-center p-2 bg-[#333333] rounded-xl text-md text-white p-2">Contact Me</span>
        <span className="text-3xl text-center text-green-400 w-[30rem]">Get in Touch & Connect with Me!</span>
        <div className="flex flex-row gap-5">
          <div className="flex flex-row gap-3 items-center justify-center">
            <a
              href="https://github.com/Bhavya-Dadheech"
              className="text-center flex flex-col items-center justify-between  h-[5rem]"
            >
              <div
                className="mx-4 w-[3rem] h-[3rem] rounded-[1rem] border-[3px] border-green-400 bg-white bg-contain bg-no-repeat bg-center hover:scale-110 transform transition-transform duration-100"
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
                className="mx-4 w-[3rem] h-[3rem] rounded-[1rem] border-[3px] border-green-400 bg-white bg-contain bg-no-repeat bg-center hover:scale-110 transform transition-transform duration-100"
                style={{
                  backgroundImage: 'url("./images/linkedin.png")'
                }}
              />
            </a>
          </div>
          <div className="flex flex-row items-start justify-center">
            <div
              className="mx-4 w-[3rem] h-[3rem] rounded-[1rem] border-[3px] border-green-400 bg-white bg-contain bg-no-repeat bg-center hover:scale-110 transform transition-transform duration-100"
              style={{
                backgroundImage: 'url("./images/phone.png")',
                backgroundSize: "2rem"
              }}
            />
            <span className="text-white  text-lg">+91 7597704868</span>
          </div>
          <div className="flex flex-row items-start justify-center">
            <div
              className="mx-4 w-[3rem] h-[3rem] rounded-[1rem] border-[3px] border-green-400 bg-white bg-contain bg-no-repeat bg-center hover:scale-110 transform transition-transform duration-100"
              style={{
                backgroundImage: 'url("./images/gmail.png")',
                backgroundSize: "2rem"
              }}
            />
            <span className="text-white  text-lg">dadheechbhavya4@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
