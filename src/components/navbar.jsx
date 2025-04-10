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
  const { theme, darkMode } = useContext(ThemeContext);

  // Handle scroll event to change navbar style
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
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
        <div           className="navbar-brand">
          <a href="#"           onClick={scrollToHome} className="navbar-title">
            Samarth Dumasia
          </a>
        </div>

        <div className="menu-icon" onClick={toggleMenu}>
          <i className={menuOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>

        <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <span className="nav-link" onClick={scrollToHome}>Home</span>
          </li>
          <li className="nav-item">
            <span className="nav-link" onClick={scrollToAbout}>About</span>
          </li>
          <li className="nav-item">
            <span className="nav-link" onClick={scrollToEducation}>Education</span>
          </li>
          <li className="nav-item">
            <span className="nav-link" onClick={scrollToExperience}>Experience</span>
          </li>
          <li className="nav-item">
            <span className="nav-link" onClick={scrollToProjects}>Projects</span>
          </li>
          <li className="nav-item">
            <span className="nav-link" onClick={scrollToContact}>Contact</span>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;