import React from 'react';
import { Code, Database, Layout, PenTool, Server, Globe, Cpu } from 'lucide-react';
import '../styles/Skills.css';

const Skills = () => {
    const skillCategories = [
        {
            title: "Backend & API",
            icon: <Server className="skill-icon" />,
            skills: ["Python", "Django", "FastAPI", "Node.js", "Express.js", "RESTful APIs", "Authentication (JWT)"]
        },
        {
            title: "Frontend Development",
            icon: <Layout className="skill-icon" />,
            skills: ["React.js", "JavaScript", "HTML5", "CSS3", "Bootstrap", "Angular"]
        },
        {
            title: "Data & Database",
            icon: <Database className="skill-icon" />,
            skills: ["PostgreSQL", "MongoDB", "MySQL", "SQLAlchemy", "Hibernate", "JDBC"]
        },
        {
            title: "AI & Tools",
            icon: <Cpu className="skill-icon" />,
            skills: ["Machine Learning", "Google Gemini AI", "Docker", "Git/GitHub", "Postman", "Linux", "Microservices"]
        }
    ];

    return (
        <section className="skills" id="skills">
            <div className="section-header">
                <h2 className="section-title">Technical Expertise</h2>
                <p className="section-subtitle">My Stack & Tools</p>
            </div>

            <div className="skills-grid">
                {skillCategories.map((category, index) => (
                    <div className="skill-card" key={index}>
                        <div className="card-header">
                            <div className="icon-box">
                                {category.icon}
                            </div>
                            <h3>{category.title}</h3>
                        </div>
                        <div className="skill-tags">
                            {category.skills.map((skill, idx) => (
                                <span className="skill-tag" key={idx}>{skill}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
