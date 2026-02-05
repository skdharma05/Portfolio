import React from 'react';
import { Code, Github, Linkedin, Mail } from 'lucide-react';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-logo">
                    <h2>Dharma<span className="logo-accent">.S</span></h2>
                    <p>Building the future, one pixel at a time.</p>
                </div>

                <div className="footer-links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="#hero">Home</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#projects">Work</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>

                <div className="footer-social">
                    <h3>Connect</h3>
                    <div className="social-grid">
                        <a href="https://github.com/skdharma05" target="_blank" rel="noopener noreferrer" className="footer-social-link"><Github size={20} /></a>
                        <a href="https://www.linkedin.com/in/skdharma05/" target="_blank" rel="noopener noreferrer" className="footer-social-link"><Linkedin size={20} /></a>
                        <a href="https://leetcode.com/u/sivo_0/" target="_blank" rel="noopener noreferrer" className="footer-social-link"><Code size={20} /></a>
                        <a href="mailto:skdharma05@gmail.com" className="footer-social-link"><Mail size={20} /></a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Dharma S. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
