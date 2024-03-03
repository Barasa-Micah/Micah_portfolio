import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <p>&copy; {new Date().getFullYear()} micaTech</p>
          <p>Backend Developer: Micah Barasa</p>
          <p>Contact: micadevelops@gmail.com</p>
          <div className={styles.socialMedia}>
            <a href="https://x.com/BarasaMicah5?t=Fp-5W5TkmovW_YEFFADg8g&s=09" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i> Twitter
            </a>
            <a href="https://www.linkedin.com/in/mica-barasa/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i> LinkedIn
            </a>
            <a href="https://github.com/Barasa-Micah" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i> GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
