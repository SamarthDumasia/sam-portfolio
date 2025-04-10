// src/sections/Blog.jsx
import { motion } from 'framer-motion';
import './Sections.css';

const Blog = () => {
  // Sample blog posts - replace with your actual posts
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of Web Development',
      excerpt: 'Exploring the upcoming trends in web development and what skills will be in demand in the coming years.',
      date: 'March 15, 2025',
      image: 'https://source.unsplash.com/random/600x400/?coding',
      link: '#'
    },
    {
      id: 2,
      title: 'Mastering React Hooks',
      excerpt: 'A comprehensive guide to using React Hooks effectively in your next project.',
      date: 'February 28, 2025',
      image: 'https://source.unsplash.com/random/600x400/?javascript',
      link: '#'
    },
    {
      id: 3,
      title: 'Optimizing Website Performance',
      excerpt: 'Tips and tricks to improve your website loading speed and overall performance.',
      date: 'January 20, 2025',
      image: 'https://source.unsplash.com/random/600x400/?performance',
      link: '#'
    }
  ];

  return (
    <section className="blog-section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2>Latest Articles</h2>
        <div className="blog-grid">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              className="blog-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="blog-img">
                <img src={post.image} alt={post.title} />
              </div>
              <div className="blog-info">
                <div className="blog-date">{post.date}</div>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <a href={post.link} className="read-more">
                  Read More
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Blog;