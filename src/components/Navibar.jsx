import { useState, useEffect, useRef } from 'react';
import './Navibar.css';

const NAV_LINKS = [
  { label: 'Home', key: 'home', prop: 'scrollToHome' },
  { label: 'About', key: 'about', prop: 'scrollToAbout' },
  { label: 'Education', key: 'education', prop: 'scrollToEducation' },
  { label: 'Experience', key: 'experience', prop: 'scrollToExperience' },
  { label: 'Projects', key: 'projects', prop: 'scrollToProjects' },
  { label: 'Contact', key: 'contact', prop: 'scrollToContact' },
];

const Navibar = (props) => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (key, callback) => {
    setActive(key);
    if (callback) callback();
  };

  return (
    <nav className={`navibar${scrolled ? ' scrolled' : ''}`} aria-label="Main Navigation">
      <div className="navibar-title" tabIndex={0} role="button" aria-label="Go to Home" onClick={() => handleNavClick('home', props.scrollToHome)}>
        Samarth Portfolio
      </div>
      <div className="nav-menu">
        {NAV_LINKS.map(link => (
          <button
            key={link.key}
            className={`nav-link${active === link.key ? ' active' : ''}`}
            onClick={() => handleNavClick(link.key, props[link.prop])}
            aria-current={active === link.key ? 'page' : undefined}
            tabIndex={0}
          >
            {link.label}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navibar; 