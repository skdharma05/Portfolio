import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { SiLeetcode, SiSkillshare } from 'react-icons/si';
import { codingProfiles } from '../data/portfolioData';
import { fadeUp, popIn, staggerContainer } from '../utils/animations';

// Maps icon string names from data → actual React components
const iconMap = {
    FaGithub,
    SiLeetcode,
    SiSkillshare,
};

const CodingProfiles = () => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-80px' });

    if (!codingProfiles || codingProfiles.length === 0) return null;

    // Responsive grid: center cards when fewer than 3
    const gridCols =
        codingProfiles.length >= 3
            ? 'sm:grid-cols-2 lg:grid-cols-3'
            : codingProfiles.length === 2
                ? 'sm:grid-cols-2 max-w-2xl'
                : 'max-w-sm';

    return (
        <section id="profiles" ref={ref} className="py-24 md:py-32 relative bg-bg-secondary overflow-hidden">
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="text-center mb-16"
                    variants={staggerContainer()}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                >
                    <motion.div variants={fadeUp}>
                        <span className="section-tag">💻 Coding Profiles</span>
                    </motion.div>
                    <motion.h2 variants={fadeUp} className="section-title">
                        Where I <span className="gradient-text">Code</span>
                    </motion.h2>
                    <motion.p variants={fadeUp} className="section-subtitle">
                        Practice, contribute, and build on various coding platforms
                    </motion.p>
                </motion.div>

                <motion.div
                    className={`grid ${gridCols} gap-6 mx-auto`}
                    variants={staggerContainer(0.15)}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                >
                    {codingProfiles.map((profile) => {
                        const Icon = iconMap[profile.icon] || FaGithub;
                        return (
                            <motion.a
                                key={profile.name}
                                href={profile.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                variants={popIn}
                                className="group glass-card border border-white/5 p-6 hover:border-primary/30 transition-all duration-500 no-underline block"
                                whileHover={{
                                    y: -6,
                                    boxShadow: `0 20px 50px rgba(0,0,0,0.4), 0 0 30px ${profile.color}25`,
                                }}
                            >
                                {/* Icon */}
                                <div
                                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg"
                                    style={{
                                        background: `${profile.color}15`,
                                        border: `1px solid ${profile.color}30`,
                                    }}
                                >
                                    <Icon size={28} style={{ color: profile.color }} />
                                </div>

                                {/* Info */}
                                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-primary transition-colors">
                                    {profile.name}
                                </h3>
                                <p className="text-xs text-text-muted font-mono mb-2">{profile.username}</p>
                                <p className="text-sm text-text-secondary leading-relaxed mb-4">
                                    {profile.description}
                                </p>

                                {/* Stats + Link */}
                                <div className="flex items-center justify-between">
                                    <span
                                        className="text-xs font-semibold px-2.5 py-1 rounded-full"
                                        style={{
                                            background: `${profile.color}15`,
                                            color: profile.color,
                                            border: `1px solid ${profile.color}30`,
                                        }}
                                    >
                                        {profile.stats}
                                    </span>
                                    <ExternalLink
                                        size={16}
                                        className="text-text-muted group-hover:text-primary transition-colors"
                                    />
                                </div>
                            </motion.a>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default CodingProfiles;
