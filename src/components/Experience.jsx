import React from "react";
import "./Experience.css";

export default function Experience() {
  const experiences = [
    {
      role: "Intern - Frontend Developer",
      company: "TechVolt Software Pvt Ltd",
      period: "Apr 2022 - June 2022",
      description:
        "Worked on a project which showcased practical applications of HTML, CSS, and JavaScript. Developed responsive web pages and collaborated with the design team to implement UI/UX best practices.",
      skills: ["HTML", "CSS", "JavaScript", "Git"],
    },
    {
      role: "Intern - Data Analyst",
      company: "Forage",
      period: "Oct 2022 - Dec 2022",
      description:
        "Participated in a virtual internship program focused on data analysis. Analyzed datasets using Python and Pandas, created visualizations to present findings, and gained insights into data-driven decision-making.",
      skills: ["Python", "Pandas", "Data Visualization", "SQL"],
    },
  ];

  return (
    <section className="experience-section" id="experience">
      <h2 data-aos="fade-up">Experience</h2>
      <div className="experience-cards">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="experience-card"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <h3>{exp.role}</h3>
            <p className="company">{exp.company}</p>
            <p className="period">{exp.period}</p>
            <p className="description">{exp.description}</p>
            <div className="skill-tags">
              {exp.skills.map((skill, idx) => (
                <span key={idx} className="tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
