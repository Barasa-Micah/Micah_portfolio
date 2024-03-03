import React from 'react';
import {Link, animateScroll as scroll} from 'react-scroll';


const Navbar = () => {
    const scrollToTop = () => {
        scroll.scrollToTop();
    };


return (
    <nav className='navbar'>
        <div className='logo' onClick={scrollToTop}>
            <span> Micah Barasa</span>
        </div>
        <div className='nav-links'>
            <Link to='home' smooth={true} duration={500}>Home</Link>
            <Link to='about' smooth={true} duration={500}>About Me</Link>
            <Link to='home' smooth={true} duration={500}>Home</Link>
            <Link to='home' smooth={true} duration={500}>Home</Link>
        </div>
    </nav>
)        
} 