import React, { useState } from 'react';
import {Link, animateScroll as scroll} from 'react-scroll';
import { FaMobileScreenButton } from "react-icons/fa6";
import { scrollSpy } from 'react-scroll';

const Navbar = () => {
    const [isDarkMode, setIsDarkMode] = useState (false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const scrollToTop = () => {
        scroll.scrollToTop();
    };


return (
    <nav className={`navbar ${isDarkMode ? 'dark-mode' : ''}`}>
        <div className='logo' onClick={scrollToTop}>
            <span> Micah Barasa</span>
        </div>
        {/* The Desktop Navbar */}
        <div className='nav-links'>
           <scrollSpy items={['home', 'about', 'projects', 'contact']} currentClassName='active'>
           <Link to='home' smooth={true} duration={500}>Home</Link>
            <Link to='about' smooth={true} duration={500}>About Me</Link>
            <Link to='home' smooth={true} duration={500}>Home</Link>
            <Link to='home' smooth={true} duration={500}>Home</Link>
           </scrollSpy>
           <a href="" target='_blank' rel='noopener noreferrer'>Resume</a>
          <div className='mode-toggle' onClick={toggleDarkMode}>
            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
          </div>
        </div>

        {/* Mobile Menu */}
        <div className='mobile-menu-icon' onClick={toggleMobileMenu}>
           <FaMobileScreenButton />
           </div>
    </nav>
)        
} 