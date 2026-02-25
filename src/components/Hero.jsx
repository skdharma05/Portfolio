import React, { useRef, lazy, Suspense } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Download, Sparkles } from 'lucide-react';
import ParticlesBackground from './ParticlesBackground';
import { personalInfo, achievements } from '../data/portfolioData';
import { fadeUp, fadeLeft, fadeRight, scaleIn, staggerContainer } from '../utils/animations';

const Scene3D = lazy(() => import('./Scene3D'));

const Hero = () => {
    const ref = useRef(null);
    const aboutRef = useRef(null);
    const inView = useInView(ref, { once: true });
    const aboutInView = useInView(aboutRef, { once: true, margin: '-80px' });

    return (
        <>
            {/* HERO SECTION */}
            <section
                id="hero"
                ref={ref}
                className="relative min-h-screen flex items-center overflow-hidden bg-bg-primary"
            >
                {/* Particles */}
                <div className="absolute inset-0 z-0">
                    <ParticlesBackground />
                </div>

                {/* Animated gradient blurs */}
                <motion.div
                    className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full blur-3xl pointer-events-none"
                    style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)' }}
                    animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
                    transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
                />
                <motion.div
                    className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full blur-3xl pointer-events-none"
                    style={{ background: 'radial-gradient(circle, rgba(236,72,153,0.12) 0%, transparent 70%)' }}
                    animate={{ x: [0, -40, 0], y: [0, -30, 0] }}
                    transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
                />

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left — Text content */}
                        <motion.div
                            variants={staggerContainer(0.12)}
                            initial="hidden"
                            animate={inView ? 'visible' : 'hidden'}
                        >
                            <motion.div variants={fadeUp}>
                                <span className="section-tag">
                                    <Sparkles size={14} />
                                    {personalInfo.available ? 'Available for Hire' : 'Currently Unavailable'}
                                </span>
                            </motion.div>

                            <motion.h1
                                variants={fadeUp}
                                className="text-5xl sm:text-6xl md:text-7xl font-black leading-[1.05] mb-4 tracking-tight"
                            >
                                Hi, I'm{' '}
                                <span className="gradient-text">{personalInfo.displayName}</span>
                                <span className="text-primary">{personalInfo.nameSuffix}</span>
                            </motion.h1>

                            <motion.p
                                variants={fadeUp}
                                className="text-xl sm:text-2xl text-text-secondary font-medium mb-3"
                            >
                                {personalInfo.title}
                            </motion.p>

                            <motion.p
                                variants={fadeUp}
                                className="text-text-muted text-base sm:text-lg leading-relaxed mb-8 max-w-lg"
                            >
                                {personalInfo.tagline}. {personalInfo.bio.split('.')[0]}.
                            </motion.p>

                            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
                                <motion.a
                                    href="#contact"
                                    className="btn-primary text-base px-8 py-3.5"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Sparkles size={18} />
                                    Hire Me
                                    <ArrowRight size={18} />
                                </motion.a>
                                <motion.a
                                    href="#projects"
                                    className="btn-secondary text-base px-8 py-3.5"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    View Projects
                                </motion.a>
                            </motion.div>
                        </motion.div>

                        {/* Right — 3D scene */}
                        <motion.div
                            className="hidden lg:block h-[420px] xl:h-[480px]"
                            variants={fadeRight}
                            initial="hidden"
                            animate={inView ? 'visible' : 'hidden'}
                        >
                            <Suspense fallback={<div className="w-full h-full" />}>
                                <Scene3D />
                            </Suspense>
                        </motion.div>
                    </div>
                </div>

                {/* Scroll indicator */}
                <motion.div
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <span className="text-text-muted text-xs tracking-widest uppercase">Scroll</span>
                    <div className="w-5 h-8 rounded-full border-2 border-primary/30 flex items-start justify-center pt-1.5">
                        <motion.div
                            className="w-1 h-2 rounded-full bg-primary"
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        />
                    </div>
                </motion.div>
            </section>

            {/* ABOUT SECTION */}
            <section
                id="about"
                ref={aboutRef}
                className="py-24 md:py-32 relative bg-bg-secondary overflow-hidden"
            >
                {/* Ambient background blurs */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Section header */}
                    <motion.div
                        className="text-center mb-16"
                        variants={staggerContainer()}
                        initial="hidden"
                        animate={aboutInView ? 'visible' : 'hidden'}
                    >
                        <motion.div variants={fadeUp}>
                            <span className="section-tag">👋 About Me</span>
                        </motion.div>
                        <motion.h2 variants={fadeUp} className="section-title">
                            Get to Know <span className="gradient-text">Me</span>
                        </motion.h2>
                        <motion.p variants={fadeUp} className="section-subtitle">
                            Engineer by trade, problem solver by passion
                        </motion.p>
                    </motion.div>

                    <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
                        {/* Left — Profile image with glow */}
                        <motion.div
                            className="lg:col-span-2 flex justify-center lg:sticky lg:top-28"
                            variants={fadeLeft}
                            initial="hidden"
                            animate={aboutInView ? 'visible' : 'hidden'}
                        >
                            <div className="relative group">
                                {/* Pulsing glow behind image */}
                                <motion.div
                                    className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-primary/20 to-secondary/20 blur-xl opacity-60 -z-10"
                                    animate={{
                                        opacity: [0.4, 0.7, 0.4],
                                        scale: [0.95, 1.02, 0.95],
                                    }}
                                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                                />

                                <div className="w-60 h-60 md:w-72 md:h-72 rounded-3xl overflow-hidden border-2 border-primary/20 shadow-glow group-hover:shadow-glow-lg transition-shadow duration-500">
                                    {personalInfo.profileImage ? (
                                        <img
                                            src={personalInfo.profileImage}
                                            alt={personalInfo.name}
                                            className="w-full h-full object-cover"
                                        />
                                    ) : (
                                        <div className="w-full h-full bg-gradient-to-br from-bg-card via-primary/20 to-secondary/20 flex items-center justify-center relative">
                                            <span className="text-8xl font-black gradient-text select-none">
                                                {personalInfo.displayName[0]}
                                            </span>
                                            {/* Code-style decorative overlay */}
                                            <div className="absolute bottom-3 left-3 right-3 px-3 py-2 rounded-lg bg-black/40 backdrop-blur-sm border border-white/10">
                                                <p className="text-xs font-mono text-primary/80 truncate">
                                                    {'>'} {personalInfo.title}
                                                </p>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Decorative rings */}
                                <div className="absolute -inset-3 border border-primary/10 rounded-[2rem] -z-10 group-hover:border-primary/20 transition-colors duration-500" />
                                <div className="absolute -inset-6 border border-primary/5 rounded-[2.5rem] -z-10" />

                                {/* Status badge */}
                                {personalInfo.available && (
                                    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-1.5 rounded-full bg-bg-primary/90 border border-green-500/30 backdrop-blur-sm">
                                        <span className="w-2 h-2 rounded-full bg-green-400 animate-ping-slow" />
                                        <span className="text-xs font-medium text-green-400">Open to work</span>
                                    </div>
                                )}
                            </div>
                        </motion.div>

                        {/* Right — Bio + details + achievements */}
                        <motion.div
                            className="lg:col-span-3 space-y-8"
                            variants={staggerContainer(0.1)}
                            initial="hidden"
                            animate={aboutInView ? 'visible' : 'hidden'}
                        >
                            {/* Bio */}
                            <motion.div variants={fadeUp} className="space-y-4">
                                <p className="text-text-secondary text-base sm:text-lg leading-relaxed">
                                    {personalInfo.bio}
                                </p>
                                <div className="flex flex-wrap items-center gap-4 text-sm text-text-muted">
                                    <span className="flex items-center gap-1.5">📍 {personalInfo.location}</span>
                                    <span className="w-1 h-1 rounded-full bg-text-muted" />
                                    <a
                                        href={`mailto:${personalInfo.email}`}
                                        className="flex items-center gap-1.5 hover:text-primary transition-colors"
                                    >
                                        ✉️ {personalInfo.email}
                                    </a>
                                </div>
                            </motion.div>

                            {/* Gradient divider */}
                            <motion.div
                                variants={fadeUp}
                                className="h-px w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent"
                            />

                            {/* Achievement cards */}
                            <motion.div
                                variants={fadeUp}
                                className="grid grid-cols-2 sm:grid-cols-4 gap-4"
                            >
                                {achievements.map((item) => (
                                    <motion.div
                                        key={item.label}
                                        variants={scaleIn}
                                        className="relative glass-card border border-white/5 p-5 text-center hover:border-primary/30 transition-all duration-300 group overflow-hidden"
                                        whileHover={{ y: -4, scale: 1.02 }}
                                    >
                                        {/* Bottom gradient accent line */}
                                        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                        <span className="text-2xl block mb-1.5 group-hover:scale-110 transition-transform duration-300">
                                            {item.icon}
                                        </span>
                                        <p className="text-2xl font-bold gradient-text mb-0.5">
                                            {item.value}
                                        </p>
                                        <p className="text-xs text-text-muted font-medium">{item.label}</p>
                                    </motion.div>
                                ))}
                            </motion.div>

                            {/* Quick action */}
                            <motion.div variants={fadeUp} className="flex flex-wrap gap-3 pt-2">
                                <motion.a
                                    href="#contact"
                                    className="btn-primary text-sm py-2.5 px-6"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Sparkles size={16} />
                                    Let's Talk
                                </motion.a>
                                <motion.a
                                    href="#resume"
                                    className="btn-secondary text-sm py-2.5 px-6"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Download size={16} />
                                    Resume
                                </motion.a>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;
