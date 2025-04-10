// src/sections/Experience.jsx
import './Sections.css';

const Experience = () => {
  return (
    <section className="experience-section">
      <h2>Work Experience</h2>
      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>IOT Lead  </h3>
            <h4>Google Development Group (GDG)</h4>
            <p className="timeline-date">2022 - 2023</p>
            <p>
              In my 3rd year of Btech, I am leading the IOT team at GDG.
              I am responsible for organizing workshops and events related to IOT.
            </p>
          </div>
        </div>
        
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>SSIP</h3>
            <h4>Eyes On Wheels</h4>
            <p className="timeline-date">2022 - 2023</p>
            <p>
              I am working on a project called Eyes On Wheels, which is an IOT-based project.
              The goal of this project is to help to reduce the number of accidents on roads using IOT devices,
              which detects Eyes to ensure that the driver is sleepy or not and if yes it alerts the driver by a beeping sound.
            </p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>Intership</h3>
            <h4>Company Name</h4>
            <p className="timeline-date">2022 - future</p>
            <p>
              soon I will be placed in a company for my internship.
              I am looking for a company where I can learn and grow my skills.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;