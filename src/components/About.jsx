import React from 'react';
import { motion } from 'framer-motion';
// import micahImage from './micah.jpg'; 
import 'About.css'

const About = () => {
  return (
    <motion.div
      className="about"
      id="about"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="about-content">
        <div className="about-image">
          <img src={micahImage} alt="Micah Barasa" />
        </div>
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            Hi there! I'm Micah Barasa, a dedicated backend developer with a keen interest in crafting robust and efficient software solutions. My passion lies in designing and implementing scalable server-side architectures that power seamless web applications.
          </p>
          <p>
            With a solid foundation in languages like Python, Java, and Node.js, I thrive on creating efficient backend logic and APIs. I have hands-on experience with frameworks such as Flask, Spring Boot, and Express.js, ensuring that the applications I build are not just functional but also maintainable and scalable.
          </p>
          <p>
            Constantly staying abreast of the latest developments in backend technologies, I embrace the challenge of solving complex problems to deliver high-quality software. I am committed to writing clean, maintainable code and employing best practices to optimize performance and security.
          </p>
          <p>
            Away from the keyboard, you might find me immersed in tech blogs, exploring innovative coding techniques, or contributing to open-source projects. I believe in the power of collaboration and knowledge-sharing within the developer community.
          </p>
          <p>
            Let's connect and build something amazing together. Whether it's architecting databases, optimizing API performance, or diving into new technologies, I'm always up for the next coding adventure.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
