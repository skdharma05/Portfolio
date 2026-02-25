import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { skills } from '../data/portfolioData';
import { fadeUp, scaleIn, staggerContainer, progressBarVariant } from '../utils/animations';
import { FaServer, FaCode, FaDatabase, FaBrain } from 'react-icons/fa';

const iconMap = { FaServer, FaCode, FaDatabase, FaBrain };

const SkillCard = ({ category, index }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-80px' });
    const Icon = iconMap[category.icon] || FaCode;

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
            className="glass-card border border-white/5 p-6 hover:border-primary/30 hover:shadow-card-hover transition-all duration-500 group"
            whileHover={{ y: -4 }}
        >
            {/* Header */}
            <div className="flex items-center gap-3 mb-6">
                <div
                    className={`w-10 h-10 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                    <Icon className="text-white" size={20} />
                </div>
                <h3 className="text-lg font-semibold text-white">{category.category}</h3>
            </div>

            {/* Skill bars */}
            <div className="space-y-4">
                {category.items.map((skill) => (
                    <div key={skill.name}>
                        <div className="flex justify-between mb-1.5">
                            <span className="text-sm text-text-secondary font-medium">{skill.name}</span>
                        </div>
                        <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                            <motion.div
                                className={`h-full rounded-full bg-gradient-to-r ${gradient}`}
                                variants={progressBarVariant(skill.proficiency)}
                                initial="hidden"
                                animate={inView ? 'visible' : 'hidden'}
                                style={{ boxShadow: `0 0 8px ${category.color}60` }}
                            />
                        </div>
                    </div>
                ))}
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
                        {['Microservices', 'Postman', 'Linux', 'REST APIs', 'JWT', 'RAG', 'Cloud TTS', 'LlamaIndex', 'Vercel', 'Git'].map((tag) => (
                            <span
                                key={tag}
                                className="px-3 py-1.5 rounded-lg text-xs font-medium bg-white/5 text-text-secondary border border-white/10 hover:border-primary/30 hover:text-primary transition-all duration-200 cursor-default"
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
