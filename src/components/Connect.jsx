import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub, FaLinkedin, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';
import { SiLeetcode, SiSkillshare } from 'react-icons/si';
import { codingProfiles, socialLinks } from '../data/portfolioData';
import { fadeUp, popIn, staggerContainer } from '../utils/animations';

const iconMap = {
    FaGithub,
    FaLinkedin,
    FaInstagram,
    FaYoutube,
    FaTwitter,
    SiLeetcode,
    SiSkillshare,
};

const Connect = () => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-80px' });

    // Combine data and remove duplicates by name to only show exactly the 3 requested links (GitHub, LeetCode, LinkedIn)
    const combinedData = [];
    const seen = new Set();

    // We expect codingProfiles and socialLinks to combine to our desired 3 unique items
    [...codingProfiles, ...socialLinks].forEach(item => {
        if (!seen.has(item.name)) {
            seen.add(item.name);
            combinedData.push(item);
        }
    });

    if (combinedData.length === 0) return null;

    return (
        <section id="connect" ref={ref} className="py-24 md:py-32 relative bg-bg-secondary overflow-hidden">
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="text-center mb-16"
                    variants={staggerContainer()}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                >
                    <motion.div variants={fadeUp}>
                        <span className="section-tag">🌐 Connect & Code</span>
                    </motion.div>
                    <motion.h2 variants={fadeUp} className="section-title">
                        Find Me <span className="gradient-text">Online</span>
                    </motion.h2>
                    <motion.p variants={fadeUp} className="section-subtitle">
                        Practice, contribute, and network across platforms
                    </motion.p>
                </motion.div>

                <div className="space-y-16 mt-12">
                    <motion.div
                        className="flex flex-wrap justify-center gap-6 md:gap-10 max-w-4xl mx-auto"
                        variants={staggerContainer(0.15)}
                        initial="hidden"
                        animate={inView ? 'visible' : 'hidden'}
                    >
                        {combinedData.map((social) => {
                            const Icon = iconMap[social.icon] || FaGithub;
                            return (
                                <motion.a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    variants={popIn}
                                    className="group flex flex-col items-center gap-4 p-8 glass-card border-none outline-none rounded-[2rem] hover:bg-white/5 transition-all duration-300 w-36 sm:w-44 no-underline relative overflow-hidden"
                                    whileHover={{
                                        y: -10,
                                        scale: 1.05,
                                        boxShadow: `0 20px 40px rgba(0,0,0,0.4), 0 0 40px ${social.color || social.hoverColor || '#6366f1'}30`,
                                    }}
                                    whileTap={{ scale: 0.95 }}
                                    aria-label={social.name}
                                >
                                    {/* Hover gradient background effect */}
                                    <div
                                        className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"
                                        style={{ background: `radial-gradient(circle at center, ${social.color || social.hoverColor || '#6366f1'}, transparent 70%)` }}
                                    />

                                    <motion.div
                                        className="transition-colors duration-300 relative z-10"
                                        whileHover={{ rotate: [0, -10, 10, 0], scale: 1.15 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <Icon
                                            size={48}
                                            className="text-text-secondary group-hover:text-white transition-colors duration-300"
                                            style={{ filter: `drop-shadow(0 0 10px ${social.color || social.hoverColor || '#ffffff'}40)` }}
                                        />
                                    </motion.div>
                                    <span className="text-base text-text-secondary font-semibold group-hover:text-white transition-colors relative z-10">
                                        {social.name}
                                    </span>
                                </motion.a>
                            );
                        })}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Connect;
