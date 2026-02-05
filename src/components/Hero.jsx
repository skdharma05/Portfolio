import React from 'react';
import { ArrowRight, Code, Github, Linkedin, Mail } from 'lucide-react';
import '../styles/Hero.css';

const Hero = () => {
    return (
        <section className="hero" id="hero">
            <div className="hero-content">
                <span className="hero-badge">AI & Full-Stack Engineer</span>
                <h2 className="hero-name">Hi, I'm <span className="text-gradient">Dharma S</span></h2>
                <h1 className="hero-title">
                    Building <span className="text-gradient">Intelligent</span> <br />
                    Scalable Systems
                </h1>
                <p className="hero-description">
                    A Full-Stack Engineer with a strong foundation in AI/ML.
                    I build production-ready web apps and AI-powered systems using Python, React, and Modern Backend Technologies.
                </p>

                <div className="hero-actions">
                    <a href="#projects" className="btn btn-primary">
                        View Projects <ArrowRight className="btn-icon" size={20} />
                    </a>
                    <a href="#contact" className="btn btn-secondary">Contact Me</a>
                </div>

                <div className="social-links">
                    <a href="https://github.com/skdharma05" target="_blank" rel="noopener noreferrer" className="social-icon"><Github size={24} /></a>
                    <a href="https://www.linkedin.com/in/skdharma05/" target="_blank" rel="noopener noreferrer" className="social-icon"><Linkedin size={24} /></a>
                    <a href="https://leetcode.com/u/sivo_0/" target="_blank" rel="noopener noreferrer" className="social-icon"><Code size={24} /></a>
                    <a href="mailto:skdharma05@gmail.com" className="social-icon"><Mail size={24} /></a>
                </div>
            </div>

            <div className="hero-visual">
                <div className="glow-circle"></div>
                <div className="code-card">
                    <div className="code-header">
                        <span className="dot red"></span>
                        <span className="dot yellow"></span>
                        <span className="dot green"></span>
                    </div>
                    <pre>
                        <code>
                            <span className="keyword">const</span> <span className="function">engineer</span> = <span className="bracket">&#123;</span><br />
                            &nbsp;&nbsp;name: <span className="string">'Dharma S'</span>,<br />
                            &nbsp;&nbsp;focus: [<span className="string">'AI/ML'</span>, <span className="string">'Full Stack'</span>],<br />
                            &nbsp;&nbsp;stack: [<span className="string">'Python'</span>, <span className="string">'React'</span>, <span className="string">'FastAPI'</span>]<br />
                            <span className="bracket">&#125;</span>;
                        </code>
                    </pre>
                </div>
            </div>
        </section>
    );
};

export default Hero;
