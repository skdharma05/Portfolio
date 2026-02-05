import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import '../styles/Projects.css';

const Projects = () => {
    const projects = [
        {
            title: "Req-Zy - Purchase Requisition System",
            description: "A full-stack procurement management platform with purchase lifecycle management, multi-level approval workflows, and role-based access control.",
            tags: ["Angular", "Express.js", "MongoDB", "TypeScript", "JWT"],
            links: { demo: "#", code: "https://github.com/skdharma05/req_zy" },
            image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        },
        {
            title: "AI - Meditation Generator",
            description: "An AI-powered service generating personalized meditation scripts and audio using Google Gemini AI and Cloud Text-to-Speech.",
            tags: ["FastAPI", "Google Gemini AI", "MongoDB", "Python", "Cloud TTS"],
            links: { demo: "#", code: "https://github.com/skdharma05/Ai_Med" },
            image: "https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
        },
        {
            title: "Resume Q&A System with Gemini AI",
            description: "FastAPI-based service for interactive resume analysis. Upload PDF/DOCX resumes and query them using Google Gemini AI and LlamaIndex with session-based security.",
            tags: ["FastAPI", "Gemini AI", "LlamaIndex", "Python 3.10+", "RAG"],
            links: { demo: "#", code: "https://github.com/skdharma05/medify" },
            image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        }
    ];

    return (
        <section className="projects" id="projects">
            <div className="section-header">
                <h2 className="section-title">Featured Projects</h2>
                <p className="section-subtitle">Real-world solutions I've engineered</p>
            </div>

            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div className="project-card" key={index}>
                        <div className="project-image" style={{ backgroundImage: `url(${project.image})` }}>
                            <div className="project-overlay">
                                <div className="project-links">
                                    <a href={project.links.code} className="icon-link" title="View Code" target="_blank" rel="noopener noreferrer">
                                        <Github size={24} />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="project-content">
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-description">{project.description}</p>
                            <div className="project-tags">
                                {project.tags.map((tag, idx) => (
                                    <span className="project-tag" key={idx}>{tag}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
