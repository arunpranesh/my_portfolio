import React from "react";
import "./About.css";
import { FaJava, FaHtml5, FaCss3Alt, FaReact, FaGithub } from "react-icons/fa";
import { SiDjango, SiMongodb } from "react-icons/si";

export default function About() {
  return (
    <section className="about" id="about">
      <h2 data-aos="fade-up">About Me</h2>
      <p data-aos="fade-up" data-aos-delay="100">
        I’m a Bachelor of Engineering graduate, currently working as a Project Graduate Engineer Trainee (PGET) at Hexaware Technologies, where I’m undergoing intensive training in software development and enterprise solutions.
        <br /><br />
        As a passionate software developer, I enjoy building clean, scalable web applications and solving real-world problems through code. My interests lie in full-stack development, particularly with technologies like ReactJS, Node.js, and MongoDB, and I’m continuously exploring new tools and frameworks to sharpen my skill set.
        <br /><br />
        Driven by curiosity and a strong desire to grow, I actively seek out challenges that push me to learn and improve. I believe in writing code that not only works but is also maintainable, efficient, and impactful. My long-term goal is to contribute to meaningful tech-driven projects that make a real difference in users’ lives.
      </p>

      <h3 data-aos="fade-up" data-aos-delay="200">Skills</h3>
      <ul className="skills-list" data-aos="zoom-in-up" data-aos-delay="300">
        <li><FaJava /> Java</li>
        <li><SiDjango /> Django</li>
        <li><FaHtml5 /> HTML & <FaCss3Alt /> CSS</li>
        <li><FaReact /> React Native</li>
        <li><SiMongodb /> MongoDB</li>
        <li><FaGithub /> Git & GitHub</li>
      </ul>
    </section>
  );
}
