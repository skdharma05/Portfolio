import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import '../styles/Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <a href="#" className="logo">
                    Dharma<span className="logo-accent">.S</span>
                </a>

                <div className="menu-icon" onClick={toggleMenu}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </div>

                <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
                    <li className="nav-item">
                        <a href="#hero" className="nav-links" onClick={toggleMenu}>Home</a>
                    </li>
                    <li className="nav-item">
                        <a href="#skills" className="nav-links" onClick={toggleMenu}>Skills</a>
                    </li>
                    <li className="nav-item">
                        <a href="#projects" className="nav-links" onClick={toggleMenu}>Projects</a>
                    </li>
                    <li className="nav-item">
                        <a href="#contact" className="nav-links" onClick={toggleMenu}>Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
