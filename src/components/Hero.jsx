import React from "react";
import "./Hero.css";
import heroImage from "./assets/hero.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text" data-aos="fade-up">
          <h1>Hi, I'm Arun Pranesh</h1>
          <p className="subtitle">Software Developer | Problem Solver | Tech Enthusiast</p>
          <div className="hero-buttons" data-aos="fade-up" data-aos-delay="200">
            <a href="#projects" className="btn">View My Work</a>
            <a
  href={`${process.env.PUBLIC_URL}/resume.pdf`}
  download="ArunPranesh_Resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="btn"
>
              <FontAwesomeIcon icon={faDownload} style={{ marginRight: "8px" }} />
              Download Resume
            </a>
          </div>
        </div>

        <div className="hero-image" data-aos="zoom-in">
          <img src={heroImage} alt="Developer Illustration" />
        </div>
      </div>
    </section>
  );
}
