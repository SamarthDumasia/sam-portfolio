// src/sections/Education.jsx
import { motion } from 'framer-motion';
import './Sections.css';

const Education = () => {
  return (
    <section className="education-section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2>My Education</h2>
        <div className="timeline">
          <motion.div 
            className="timeline-item"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>Secondary School Certificate (SSC)</h3>
              <h4>10th School</h4>
              <p className="timeline-date">2018 - 2019</p>
              <p>
                Completed my secondary education from SDRUMS School with a strong foundation in mathematics and science.
                Actively participated in various extracurricular activities, including debate and science fairs.
              </p>
            </div>
          </motion.div>
          <motion.div 
            className="timeline-item"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>Higher Secondary Certificate (HSC)</h3>
              <h4>12th school</h4>
              <p className="timeline-date">2020 - 2021</p>
              <p>
                Completed my secondary education from NIOS National Institution of Open Schooling with a focus on science and mathematics.
              </p>
            </div>
          </motion.div>
          <motion.div 
            className="timeline-item"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>Btech - Computer Science Engineering</h3>
              <h4>P.P. Savani University</h4>
              <p className="timeline-date">2022 - 2026</p>
              <p>
                Currently pursuing a Bachelor of Technology in Computer Science Engineering from P.P. Savani University.
                Engaged in various projects and research activities related to software development and data science.
                Actively involved in coding competitions and hackathons to enhance my programming skills.
              </p>
            </div>
          </motion.div>
          
          <motion.div>
            {/* Add your content here */}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Education;