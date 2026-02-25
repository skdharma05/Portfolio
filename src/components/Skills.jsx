import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { skills } from '../data/portfolioData';
import { fadeUp, scaleIn, staggerContainer } from '../utils/animations';
import { FaServer, FaCode, FaDatabase, FaBrain } from 'react-icons/fa';

// Import specific tech stack icons
import {
    SiPython, SiDjango, SiFastapi, SiExpress, SiReact, SiJavascript,
    SiTypescript, SiHtml5, SiCss3, SiAngular, SiTailwindcss,
    SiPostgresql, SiMongodb, SiRedis, SiSqlite, SiNodedotjs
} from 'react-icons/si';
import { TbApi } from 'react-icons/tb';
import { FaJava, FaLock } from 'react-icons/fa';

const categoryIconMap = { FaServer, FaCode, FaDatabase, FaBrain };

// Map skill names to specific icon components
const getSkillIcon = (name) => {
    const lowercaseName = name.toLowerCase();
    if (lowercaseName.includes('python')) return SiPython;
    if (lowercaseName.includes('java') && !lowercaseName.includes('script')) return FaJava;
    if (lowercaseName.includes('django')) return SiDjango;
    if (lowercaseName.includes('fastapi')) return SiFastapi;
    if (lowercaseName.includes('node')) return SiNodedotjs;
    if (lowercaseName.includes('express')) return SiExpress;
    if (lowercaseName.includes('api')) return TbApi;
    if (lowercaseName.includes('jwt') || lowercaseName.includes('auth')) return FaLock;
    if (lowercaseName.includes('react')) return SiReact;
    if (lowercaseName.includes('javascript')) return SiJavascript;
    if (lowercaseName.includes('typescript')) return SiTypescript;
    if (lowercaseName.includes('html')) return SiHtml5;
    if (lowercaseName.includes('css') || lowercaseName.includes('tailwind')) return SiTailwindcss;
    if (lowercaseName.includes('angular')) return SiAngular;
    if (lowercaseName.includes('postgres')) return SiPostgresql;
    if (lowercaseName.includes('mongo')) return SiMongodb;
    if (lowercaseName.includes('redis')) return SiRedis;
    if (lowercaseName.includes('sql')) return SiSqlite; // generic fallback for SQL

    return FaCode; // fallback icon for anything missing
};

const SkillCard = ({ category, index }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-80px' });
    const CategoryIcon = categoryIconMap[category.icon] || FaCode;

    const colorMap = {
        '#6366f1': 'from-indigo-500 to-indigo-600',
        '#ec4899': 'from-pink-500 to-pink-600',
        '#06b6d4': 'from-cyan-500 to-cyan-600',
        '#f59e0b': 'from-amber-500 to-amber-600',
    };
    const gradient = colorMap[category.color] || 'from-indigo-500 to-indigo-600';

    return (
        <motion.div
            ref={ref}
            variants={scaleIn}
            className="flex flex-col h-full glass-card border-none p-6 shadow-none"
            whileHover={{ y: -4 }}
        >
            {/* Header */}
            <div className="flex items-center gap-3 mb-6">
                <div
                    className={`w-10 h-10 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-lg transition-transform duration-300`}
                >
                    <CategoryIcon className="text-white" size={20} />
                </div>
                <h3 className="text-lg font-semibold text-white">{category.category}</h3>
            </div>

            {/* Skill tags area with Tech Logos, no borders */}
            <div className="flex flex-col gap-3 flex-grow">
                {category.items.map((skill) => {
                    const SkillIcon = getSkillIcon(skill.name);
                    return (
                        <div key={skill.name} className="flex items-center gap-3 group/item">
                            <div className="flex items-center justify-center w-6 h-6">
                                <SkillIcon
                                    className="text-text-muted text-xl group-hover/item:text-white transition-colors duration-300"
                                    style={{ color: category.color }}
                                />
                            </div>
                            <span className="text-sm text-text-secondary font-medium tracking-wide group-hover/item:text-white transition-colors duration-300">
                                {skill.name}
                            </span>
                        </div>
                    );
                })}
            </div>
        </motion.div>
    );
};

const Skills = () => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section id="skills" ref={ref} className="py-24 md:py-32 relative bg-bg-primary overflow-hidden">
            {/* Background effects */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section header */}
                <motion.div
                    className="text-center mb-16"
                    variants={staggerContainer(0.1)}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                >
                    <motion.div variants={fadeUp}>
                        <span className="section-tag">⚡ Tech Stack</span>
                    </motion.div>
                    <motion.h2 variants={fadeUp} className="section-title">
                        Technical <span className="gradient-text">Expertise</span>
                    </motion.h2>
                    <motion.p variants={fadeUp} className="section-subtitle">
                        A comprehensive toolkit for building intelligent, production-ready systems
                    </motion.p>
                </motion.div>

                {/* Skill cards grid */}
                <motion.div
                    className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
                    variants={staggerContainer(0.12)}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                >
                    {skills.map((category, i) => (
                        <SkillCard key={category.category} category={category} index={i} />
                    ))}
                </motion.div>

                {/* Bottom tech tags */}
                <motion.div
                    className="mt-16 text-center"
                    variants={fadeUp}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    transition={{ delay: 0.6 }}
                >
                    <p className="text-text-muted text-sm mb-4">Also working with</p>
                    <div className="flex flex-wrap justify-center gap-2">
                        {['Microservices', 'Postman', 'Cloud TTS', 'Vercel'].map((tag) => (
                            <span
                                key={tag}
                                className="px-3 py-1.5 rounded-lg text-xs font-medium bg-white/5 text-text-secondary border-none outline-none hover:text-primary transition-all duration-200 cursor-default"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
