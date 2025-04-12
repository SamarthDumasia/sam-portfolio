// src/App.jsx
import { useRef } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/navbar.jsx';  // Add .jsx extension
import ThemeToggle from './components/ThemeToggle.jsx';
import Home from './sections/Home.jsx';
import About from './sections/About.jsx';
import Education from './sections/Education.jsx';
import Experience from './sections/Experience.jsx';
import Projects from './sections/Projects.jsx';
import Contact from './sections/Contact.jsx';
import { ThemeContext } from './context/ThemeContext';
import './App.css';

function App() {
  // Create refs for each section to enable smooth scrolling
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const educationRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  // Function to scroll to a section
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <ThemeProvider>
      <div className="App">
        <Navbar 
          scrollToHome={() => scrollToSection(homeRef)}
          scrollToAbout={() => scrollToSection(aboutRef)}
          scrollToEducation={() => scrollToSection(educationRef)}
          scrollToExperience={() => scrollToSection(experienceRef)}
          scrollToProjects={() => scrollToSection(projectsRef)}
          scrollToContact={() => scrollToSection(contactRef)}
        />
        
        <ThemeToggle />
        
        <main className="main-content">
          <div ref={homeRef} className="section">
            <Home />
          </div>
          
          <div ref={aboutRef} className="section">
            <About />
          </div>
          
          <div ref={educationRef} className="section">
            <Education />
          </div>
          
          <div ref={experienceRef} className="section">
            <Experience />
          </div>
          
          <div ref={projectsRef} className="section">
            <Projects />
          </div>
          
          <div ref={contactRef} className="section">
            <Contact />
          </div>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;