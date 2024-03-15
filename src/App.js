import "./App.css";
import { useRef } from "react";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Skills from "./pages/Skills";
import Home from "./pages/Home";
import Navbar from "./pages/Navbar";

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
      <Navbar
        scrollToRef={scrollToRef}
        homeRef={homeRef}
        experienceRef={experienceRef}
        skillsRef={skillsRef}
        projectsRef={projectsRef}
        contactRef={contactRef}
      />
      {/* Home */}
      <Home innerRef={homeRef} />

      {/* Experience */}
      <Experience innerRef={experienceRef} />

      {/* Skills */}
      <Skills innerRef={skillsRef} />

      {/* Projects */}
      <Projects innerRef={projectsRef} />

      {/* Contact Me */}
      <Contact innerRef={contactRef} />
    </div>
  );
}

export default App;
