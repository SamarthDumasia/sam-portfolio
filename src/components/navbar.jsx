// src/components/Navbar.jsx
import { useState, useEffect, useContext } from 'react';
import { motion } from 'framer-motion';
import { ThemeContext } from '../context/ThemeContext';
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
  const [menuOpen, setMenuOpen] = useState(false);
  const { darkMode } = useContext(ThemeContext);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleNavClick = (scrollFn) => {
    scrollFn();
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-brand">
          <a href="#" onClick={scrollToHome} className="navbar-title">
            Samarth Dumasia
          </a>
        </div>

        <div className="menu-icon" onClick={toggleMenu}>
          <i className={menuOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>

        <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <motion.span 
              className="nav-link" 
              onClick={() => handleNavClick(scrollToHome)}
              whileHover={{ scale: 1.1 }}
            >
              Home
            </motion.span>
          </li>
          <li className="nav-item">
            <motion.span 
              className="nav-link" 
              onClick={() => handleNavClick(scrollToAbout)}
              whileHover={{ scale: 1.1 }}
            >
              About
            </motion.span>
          </li>
          <li className="nav-item">
            <motion.span 
              className="nav-link" 
              onClick={() => handleNavClick(scrollToEducation)}
              whileHover={{ scale: 1.1 }}
            >
              Education
            </motion.span>
          </li>
          <li className="nav-item">
            <motion.span 
              className="nav-link" 
              onClick={() => handleNavClick(scrollToExperience)}
              whileHover={{ scale: 1.1 }}
            >
              Experience
            </motion.span>
          </li>
          <li className="nav-item">
            <motion.span 
              className="nav-link" 
              onClick={() => handleNavClick(scrollToProjects)}
              whileHover={{ scale: 1.1 }}
            >
              Projects
            </motion.span>
          </li>
          <li className="nav-item">
            <motion.span 
              className="nav-link" 
              onClick={() => handleNavClick(scrollToContact)}
              whileHover={{ scale: 1.1 }}
            >
              Contact
            </motion.span>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;