// src/components/Navbar.jsx
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Navbar.css';

const Navbar = ({ 
  scrollToHome, 
  scrollToAbout, 
  scrollToEducation, 
  scrollToExperience,
  scrollToProjects,
  scrollToContact 
}) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <ul className="nav-menu">
          <li><span onClick={scrollToHome}>Home</span></li>
          <li><span onClick={scrollToAbout}>About</span></li>
          <li><span onClick={scrollToEducation}>Education</span></li>
          <li><span onClick={scrollToExperience}>Experience</span></li>
          <li><span onClick={scrollToProjects}>Projects</span></li>
          <li><span onClick={scrollToContact}>Contact</span></li>
        </ul>
      </div>
    </nav>
  );
};

export default navbar;