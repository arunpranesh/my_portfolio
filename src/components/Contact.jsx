import React, { useState } from "react";
import "./Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thanks for reaching out!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="contact-section" id="contact">
      <h1 data-aos="fade-up">Get In Touch</h1>
      <p>
        I'm always open to discussing new projects, creative ideas, or
        opportunities to be part of your vision. Feel free to reach out!
      </p>

      <div className="contact-container">
        <div className="footer-links" data-aos="fade-left" data-aos-delay="300">
          <p>Reach me out here</p>
          <a
            href="https://github.com/arunpranesh"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i> GitHub
          </a>
          <a
            href="https://linkedin.com/in/arun-pranesh-s"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>
          <a
            href="https://instagram.com/s._.arun"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram"></i> Instagram
          </a>
          <span className="contact-info">
            <i className="fas fa-phone-alt"></i> 9488113232
          </span>
        </div>

        <form className="contact-form" data-aos="zoom-in" data-aos-delay="200" onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder=" "
            />
            <label>Your Name</label>
          </div>

          <div className="input-group">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder=" "
            />
            <label>Your Email</label>
          </div>

          <div className="input-group">
            <textarea
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder=" "
            />
            <label>Your Message</label>
          </div>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}
