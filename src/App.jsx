// src/App.jsx
import { useRef } from 'react';
import { motion } from 'framer-motion';
import Navbar from './src/components/Navbar'; // Fix casing and remove .jsx
import ThemeToggle from './src/components/ThemeToggle';
import Home from './src/sections/Home';
import About from './src/sections/About';
import Education from './src/sections/Education';
import Experience from './src/sections/Experience';
import Projects from './src/sections/Projects';
import Contact from './src/sections/Contact';
import { ThemeProvider } from './context/ThemeContext'; // Add ThemeProvider
import './src/App.css';

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
      <div className="App" data-theme="light">
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