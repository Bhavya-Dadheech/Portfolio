import "./App.css";
import { useRef, useState, useEffect } from "react";
import NET from "vanta/dist/vanta.net.min";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  const homeRef = useRef(null);
  const experienceRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToRef = (ref) => {
    let yOffset = -100; // Default yOffset

    // Check viewport width
    if (window.innerWidth < 768 && ref !== homeRef) {
      yOffset = -350; // Adjusted yOffset for smaller screens (you can adjust this value as needed)
      console.log("not here");
    }

    const y = ref.current.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  // const [vantaEffect, setVantaEffect] = useState(null);
  // const myRef = useRef(null);

  // useEffect(() => {
  //   if (!vantaEffect) {
  //     setVantaEffect(
  //       NET({
  //         el: myRef.current,
  //         mouseControls: true,
  //         touchControls: true,
  //         gyroControls: false,
  //         scale: 1.0,
  //         scaleMobile: 1.0
  //       })
  //     );
  //   }

  //   return () => {
  //     if (vantaEffect) vantaEffect.destroy();
  //   };
  // }, [vantaEffect]);

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      {/* <div className="vanta-container" ref={myRef}></div> */}

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
