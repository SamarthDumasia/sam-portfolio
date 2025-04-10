import { motion } from 'framer-motion';
import './Sections.css';

const Home = () => {
  return (
    <section className="home-section">
      <motion.div
        className="home-content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <motion.h1
          className="home-title"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          Welcome to <span className="highlight">My Portfolio</span>
        </motion.h1>

        <motion.h3
          className="home-subtitle"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          I'm <span className="highlight">Samarth Dumasia</span>
        </motion.h3>

        <motion.p
          className="tagline"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Web Developer | Designer | Creative Thinker
        </motion.p>

        <motion.div
          className="cta-buttons"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          <motion.button
            className="primary-btn"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Download CV
          </motion.button>
          <motion.button
            className="secondary-btn"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me
          </motion.button>
        </motion.div>
      </motion.div>

      <motion.div
        className="home-visual"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <motion.img
          src="src/assets/samarth_photo(3).jpg"
          alt="samarth's DP"
          className="sam_dp"
          whileHover={{ scale: 1.05, rotate: 2 }}
          transition={{ duration: 0.5 }}
        />
      </motion.div>
    </section>
  );
};

export default Home;