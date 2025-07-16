// src/App.jsx
import { useRef } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar.jsx';
import ThemeToggle from './components/ThemeToggle.jsx';
import Home from './sections/Home';
import About from './sections/About';
import Education from './sections/Education';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import { ThemeProvider } from './context/ThemeContext';
import './App.css';
import './index.css';

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