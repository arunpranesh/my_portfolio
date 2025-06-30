import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      once: true, // animate only once
    });
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <section id="projects">
        <Projects />
      </section>
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
