// src/sections/Projects.jsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import './Sections.css';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  
  // Sample project data - replace with your actual projects
  const projects = [
    {
      id: 1,
      title: 'Hogwarts hat sorting Game',
      description: 'An android game which is a personality based quize and gives house based on that  result.',
      image: 'https://source.unsplash.com/random/600x400/?ecommerce',
      category: ['android studio', 'java'],
      link: '#',
      github: '#'
    },
    {
      id: 2,
      title: 'Portfolio Website',
      description: 'A personal portfolio website showcasing my skills and projects.',
      image: 'https://source.unsplash.com/random/600x400/?portfolio',
      category: ['react', 'css'],
      link: '#',
      github: '#'
    },
    {
      id: 3,
      title: 'Eyes On Wheels',
      description: 'An IOT based project aimed to reduce road accidents.',
      image: 'https://source.unsplash.com/random/600x400/?tasks',
      category: ['IOT', 'Raspberry PI'],
      link: '#',
      github: '#'
    },
    {
      id: 4,
      title: 'E-commerce Mushroom Website',
      description: 'An e-commerce website for selling mushrooms with a user-friendly interface.',
      image: 'https://source.unsplash.com/random/600x400/?weather',
      category: ['javascript', 'api'],
      link: '#',
      github: '#'
    },
    {
      id: 5,
      title: 'Blog Platform',
      description: 'A content management system for creating and publishing blog posts.',
      image: 'https://source.unsplash.com/random/600x400/?blog',
      category: ['node', 'mongodb'],
      link: '#',
      github: '#'
    },
    {
      id: 6,
      title: 'Chat Application',
      description: 'Real-time chat application with private messaging.',
      image: 'https://source.unsplash.com/random/600x400/?chat',
      category: ['react', 'node', 'socket'],
      link: '#',
      github: '#'
    }
  ];

  // Get unique categories for filter buttons
  const categories = ['all', ...new Set(projects.flatMap(project => project.category))];

  // Filter projects based on selected category
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category.includes(filter));

  return (
    <section className="projects-section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2>My Projects</h2>
        <div className="filter-buttons">
          {categories.map(category => (
            <button
              key={category}
              className={`filter-btn ${filter === category ? 'active' : ''}`}
              onClick={() => setFilter(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
        
        <div className="projects-grid">
          {filteredProjects.map(project => (
            <motion.div
              key={project.id}
              className="project-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              whileHover={{ y: -10 }}
            >
              <div className="project-img">
                <img src={project.image} alt={project.title} />
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i>
                  </a>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                </div>
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.category.map(cat => (
                    <span key={cat} className="project-tag">
                      {cat}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;