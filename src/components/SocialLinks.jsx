import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';
import { socialLinks } from '../data/portfolioData';
import { fadeUp, popIn, staggerContainer } from '../utils/animations';

// Maps icon string names from data → actual React components
const iconMap = {
    FaGithub,
    FaLinkedin,
    FaInstagram,
    FaYoutube,
    FaTwitter,
};

const SocialLinks = () => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-80px' });

    // Don't render section if no social links
    if (!socialLinks || socialLinks.length === 0) return null;

    return (
        <section ref={ref} className="py-16 md:py-24 relative bg-bg-primary overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="text-center mb-12"
                    variants={staggerContainer()}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                >
                    <motion.div variants={fadeUp}>
                        <span className="section-tag">🌐 Connect</span>
                    </motion.div>
                    <motion.h2 variants={fadeUp} className="section-title">
                        Find Me <span className="gradient-text">Online</span>
                    </motion.h2>
                </motion.div>

                <motion.div
                    className="flex flex-wrap justify-center gap-5 md:gap-8"
                    variants={staggerContainer(0.1)}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                >
                    {socialLinks.map((social) => {
                        const Icon = iconMap[social.icon] || FaGithub;
                        return (
                            <motion.a
                                key={social.name}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                variants={popIn}
                                className="group flex flex-col items-center gap-3 p-6 glass-card border border-white/5 rounded-2xl hover:border-primary/30 transition-all duration-300 w-28 sm:w-32 no-underline"
                                whileHover={{
                                    y: -8,
                                    scale: 1.08,
                                    boxShadow: `0 15px 40px rgba(0,0,0,0.4), 0 0 25px ${social.hoverColor}30`,
                                }}
                                whileTap={{ scale: 0.95 }}
                                aria-label={social.name}
                            >
                                <motion.div
                                    className="transition-colors duration-300"
                                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.2 }}
                                    transition={{ duration: 0.4 }}
                                >
                                    <Icon
                                        size={32}
                                        className="text-text-secondary group-hover:text-white transition-colors duration-300"
                                    />
                                </motion.div>
                                <span className="text-sm text-text-muted font-medium group-hover:text-white transition-colors">
                                    {social.name}
                                </span>
                            </motion.a>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default SocialLinks;
