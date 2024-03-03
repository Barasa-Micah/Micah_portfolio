import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <p>&copy; {new Date().getFullYear()} Your Company</p>
          <p>Backend Developer: Micah Barasa</p>
          <p>Contact: micadevelops@gmail.com</p>
          <div className={styles.socialMedia}>
            <a href="https://twitter.com/yourtwitter" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
           
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
