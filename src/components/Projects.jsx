import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { projects } from '../data/portfolioData';
import { fadeUp, scaleIn, staggerContainer } from '../utils/animations';

const ProjectCard = ({ project }) => {
    const [hovered, setHovered] = useState(false);
    const [tilt, setTilt] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
        const y = ((e.clientY - rect.top) / rect.height - 0.5) * -20;
        setTilt({ x, y });
    };

    const handleMouseLeave = () => {
        setTilt({ x: 0, y: 0 });
        setHovered(false);
    };

    const categoryColors = {
        'Full Stack': 'text-primary border-primary/30 bg-primary/10',
        'AI/ML': 'text-accent border-accent/30 bg-accent/10',
        default: 'text-secondary border-secondary/30 bg-secondary/10',
    };
    const catColor = categoryColors[project.category] || categoryColors.default;

    return (
        <motion.div
            variants={scaleIn}
            className="group relative glass-card border border-white/5 overflow-hidden cursor-pointer"
            onMouseEnter={() => setHovered(true)}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                transform: `perspective(1000px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg) scale(${hovered ? 1.02 : 1})`,
                transition: hovered ? 'transform 0.1s ease-out' : 'transform 0.4s ease-out',
                boxShadow: hovered ? '0 20px 60px rgba(0,0,0,0.5), 0 0 30px rgba(99,102,241,0.15)' : undefined,
            }}
        >
            {/* Image */}
            <div className="relative h-48 overflow-hidden">
                <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    animate={{ scale: hovered ? 1.1 : 1 }}
                    transition={{ duration: 0.5 }}
                    loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-card via-transparent to-transparent" />

                {/* Category badge */}
                <span className={`absolute top-3 right-3 text-xs font-semibold px-2.5 py-1 rounded-full border ${catColor}`}>
                    {project.category}
                </span>

                {/* Hover overlay with links */}
                <motion.div
                    className="absolute inset-0 bg-bg-primary/80 backdrop-blur-sm flex items-center justify-center gap-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hovered ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <motion.a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-all duration-200"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={(e) => e.stopPropagation()}
                        aria-label="View on GitHub"
                    >
                        <Github size={20} />
                    </motion.a>
                    {project.links.demo !== '#' && (
                        <motion.a
                            href={project.links.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-secondary hover:border-secondary transition-all duration-200"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={(e) => e.stopPropagation()}
                            aria-label="View Live Demo"
                        >
                            <ExternalLink size={20} />
                        </motion.a>
                    )}
                </motion.div>
            </div>

            {/* Content */}
            <div className="p-6">
                <h3 className="text-lg font-bold text-white mb-2 group-hover:gradient-text transition-all duration-200">
                    {project.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed mb-4">
                    {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                        <span
                            key={tag}
                            className="text-xs px-2.5 py-1 rounded-md bg-primary/10 text-primary/80 font-medium border border-primary/20"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            {/* Bottom glow line */}
            <motion.div
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-accent"
                animate={{ scaleX: hovered ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                style={{ originX: 0 }}
            />
        </motion.div>
    );
};

const Projects = () => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section id="projects" ref={ref} className="py-24 md:py-32 relative bg-bg-secondary overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    className="text-center mb-16"
                    variants={staggerContainer()}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                >
                    <motion.div variants={fadeUp}>
                        <span className="section-tag">🚀 Featured Work</span>
                    </motion.div>
                    <motion.h2 variants={fadeUp} className="section-title">
                        Featured <span className="gradient-text">Projects</span>
                    </motion.h2>
                    <motion.p variants={fadeUp} className="section-subtitle">
                        Real-world solutions I've engineered — from AI systems to full-stack platforms
                    </motion.p>
                </motion.div>

                {/* Project grid */}
                <motion.div
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={staggerContainer(0.15)}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                >
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </motion.div>

                {/* View more link */}
                <motion.div
                    className="text-center mt-12"
                    variants={fadeUp}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    transition={{ delay: 0.5 }}
                >
                    <a
                        href="https://github.com/skdharma05"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary inline-flex items-center gap-2"
                    >
                        <Github size={18} />
                        View All on GitHub
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
