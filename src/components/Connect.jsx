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

    const hasProfiles = codingProfiles && codingProfiles.length > 0;
    const hasSocials = socialLinks && socialLinks.length > 0;

    if (!hasProfiles && !hasSocials) return null;

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

                <div className="space-y-16">
                    {/* Coding Profiles */}
                    {hasProfiles && (
                        <motion.div
                            className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl mx-auto"
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
                                        className="group glass-card border border-white/5 p-6 hover:border-primary/30 transition-all duration-500 no-underline flex flex-col items-center text-center"
                                        whileHover={{
                                            y: -6,
                                            boxShadow: `0 20px 50px rgba(0,0,0,0.4), 0 0 30px ${profile.color}25`,
                                        }}
                                    >
                                        <div
                                            className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg"
                                            style={{
                                                background: `${profile.color}15`,
                                                border: `1px solid ${profile.color}30`,
                                            }}
                                        >
                                            <Icon size={32} style={{ color: profile.color }} />
                                        </div>

                                        <h3 className="text-xl font-bold text-white mb-1 group-hover:text-primary transition-colors">
                                            {profile.name}
                                        </h3>
                                        <p className="text-sm text-text-muted font-mono mb-3">{profile.username}</p>
                                        <p className="text-sm text-text-secondary leading-relaxed mb-4 line-clamp-2">
                                            {profile.description}
                                        </p>

                                        <div className="mt-auto flex items-center gap-3">
                                            <span
                                                className="text-xs font-semibold px-3 py-1.5 rounded-full"
                                                style={{
                                                    background: `${profile.color}15`,
                                                    color: profile.color,
                                                    border: `1px solid ${profile.color}30`,
                                                }}
                                            >
                                                {profile.stats}
                                            </span>
                                            <ExternalLink
                                                size={18}
                                                className="text-text-muted group-hover:text-primary transition-colors"
                                            />
                                        </div>
                                    </motion.a>
                                );
                            })}
                        </motion.div>
                    )}

                    {/* Social Links */}
                    {hasSocials && (
                        <motion.div
                            className="flex flex-wrap justify-center gap-5 md:gap-8 pt-6 border-t border-white/5"
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
                    )}
                </div>
            </div>
        </section>
    );
};

export default Connect;
