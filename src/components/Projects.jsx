import React from "react";
import "./Projects.css";

const projects = [
  {
    title: "RideHub",
    description:
      "RideHub is a modern ride-booking platform designed to simplify urban transportation. It allows users to seamlessly book rides, leave reviews, and make secure payments—all personalized to their profile. The system supports real-time driver tracking, route optimization, and a rating system for both passengers and drivers. Built with React Native for cross-platform support and backed by Node.js and MongoDB, RideHub delivers a fast, scalable, and user-friendly experience.",
    techStack: ["React Native", "Node.js", "MongoDB"],
    link: "https://yourprojectlink.com",
  },
  {
    title: "TaskMaster",
    description:
      "TaskMaster is a collaborative task management application that enables teams and individuals to stay organized and productive. It supports real-time updates, notifications, and priority-based task tracking. Users can assign tasks, track deadlines, and work together seamlessly through shared boards. The backend is powered by Django and integrates with Firebase for authentication and live data syncing, providing a robust and interactive user experience.",
    techStack: ["Django", "Firebase", "Python"],
    link: "https://yourprojectlink.com",
  },
  {
    title: "GadgetMarket",
    description:
      "GadgetMarket is a Cashify-style platform designed for buying and selling used mobile devices with trust at the core. It features a modern UI, dynamic pricing based on device condition, and secure user authentication. The application emphasizes transparency and buyer confidence by incorporating review systems and device history checks. Built with Django and Firebase, and styled using Tailwind CSS, it ensures high performance and responsiveness across devices.",
    techStack: ["Django", "Firebase", "Tailwind CSS"],
    link: "https://yourprojectlink.com",
  },
];

export default function Projects() {
  return (
    <section className="projects-section" id="projects">
      <h2 data-aos="fade-up">Projects</h2>
      <div className="projects-grid">
        {projects.map((project, idx) => (
          <div className="project-card" data-aos="fade-up" data-aos-delay={idx * 100} key={idx}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tech-stack">
              {project.techStack.map((tech, i) => (
                <span key={i} className="tech-badge">{tech}</span>
              ))}
            </div>
            <a href={project.link} target="_blank" rel="noreferrer" className="project-link">
              View Project →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
