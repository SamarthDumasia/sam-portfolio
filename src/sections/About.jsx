// src/sections/About.jsx
import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useRef } from 'react';
import './Sections.css';

const About = () => {
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  const skillData = [
    { name: "HTML/CSS", level: 90, color: "#FF6B6B" },
    { name: "JavaScript", level: 85, color: "#4ECDC4" },
    { name: "React", level: 80, color: "#45B7D1" },
    { name: "C++", level: 85, color: "#96CEB4" },
    { name: "Java", level: 55, color: "#FF6B6B" },
    { name: "backend", level: 10, color: "#4ECDC4" },
  ];

  return (
    <section className="about-section" ref={containerRef}>
      <motion.div
        style={{ opacity, scale }}
        className="about-container"
      >
        <h2 className="about-title">
          {[..."About Me"].map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {char}
            </motion.span>
          ))}
        </h2>

        <div className="about-content">
          <motion.div 
            className="profile-card"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="image-container">
              <motion.img 
                src="src/assets/samarth_photo(2).jpg" 
                alt="Profile"
                whileHover={{ rotate: 5 }}
                initial={{ filter: "grayscale(100%)" }}
                whileInView={{ filter: "grayscale(0%)" }}
                transition={{ duration: 0.5 }}
              />
              <motion.div 
                className="image-overlay"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              >
                <a 
                  href="file:///C:/VS%20Code/VS%20Code/personal/portfolio-website/sam-portfolio/src/assets/samarth_resume[4].pdf" 
                  download 
                  className="download-cv-button"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <motion.span
                    animate={{ scale: isHovered ? 1.1 : 1 }}
                  >
                    Download CV
                  </motion.span>
                </a>
              </motion.div>
            </div>
          </motion.div>

          <motion.div className="about-content-right">
            <motion.h3
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              Hello, I'm <span className="highlight">Samarth Dumasia</span>
            </motion.h3>
            <p>
              I am a student at <strong>P.P. Savani University</strong>, currently pursuing my bachelor's degree in <strong>Btech CSE (Computer Science Engineering)</strong>. I am from <strong>Surat, Gujarat</strong>.
            </p>
            <p>Email: <a href="mailto:samarthdumasia@example.com">samarthdumasia@example.com</a></p>
            <p>Phone: <a href="tel:+918200429350">91+ 8200429350</a></p>

            <div className="skills-container">
              {skillData.map((skill, index) => (
                <motion.div 
                  key={skill.name}
                  className="skill-item"
                  initial={{ width: 0, opacity: 0 }}
                  whileInView={{ width: "100%", opacity: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  <div className="skill-header">
                    <span>{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <motion.div 
                    className="skill-progress-bar"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 1, delay: index * 0.2 }}
                    style={{ backgroundColor: skill.color }}
                  >
                    <motion.div 
                      className="skill-progress-fill"
                      style={{ width: `${skill.level}%` }}
                    />
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;