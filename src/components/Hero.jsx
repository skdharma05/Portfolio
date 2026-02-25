import React, { useRef, lazy, Suspense } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Download, Sparkles, MapPin, Mail, Code2, Cpu, Globe } from 'lucide-react';
import ParticlesBackground from './ParticlesBackground';
import { personalInfo, achievements } from '../data/portfolioData';
import { fadeUp, fadeLeft, fadeRight, scaleIn, staggerContainer } from '../utils/animations';

const NeuralNetwork3D = lazy(() => import('./NeuralNetwork3D'));

const Hero = () => {
    const ref = useRef(null);
    const aboutRef = useRef(null);
    const inView = useInView(ref, { once: true });
    const aboutInView = useInView(aboutRef, { once: true, margin: '-80px' });

    return (
        <>
            {/* ── HERO SECTION ─────────────────────────────────────────────── */}
            <section
                id="hero"
                ref={ref}
                className="relative min-h-screen flex items-center overflow-hidden bg-bg-primary"
            >
                {/* Particles */}
                <div className="absolute inset-0 z-0">
                    <ParticlesBackground />
                </div>

                {/* Ambient blurs */}
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

                        {/* Left — Text */}
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

                        {/* Right — Neural Network 3D */}
                        <motion.div
                            className="hidden lg:flex flex-col items-center"
                            variants={fadeRight}
                            initial="hidden"
                            animate={inView ? 'visible' : 'hidden'}
                        >
                            {/* Label above */}
                            <motion.div
                                className="flex items-center gap-2 mb-3"
                                animate={{ opacity: [0.6, 1, 0.6] }}
                                transition={{ duration: 3, repeat: Infinity }}
                            >
                                <Cpu size={14} className="text-primary" />
                                <span className="text-xs font-mono text-text-muted tracking-widest uppercase">
                                    Neural Network
                                </span>
                            </motion.div>

                            <div className="h-[420px] xl:h-[480px] w-full">
                                <Suspense fallback={<div className="w-full h-full" />}>
                                    <NeuralNetwork3D />
                                </Suspense>
                            </div>

                            {/* Layer labels */}
                            <div className="flex justify-between w-72 mt-1">
                                {['Input', 'Hidden', 'Hidden', 'Output'].map((l) => (
                                    <span key={l} className="text-[10px] font-mono text-text-muted">
                                        {l}
                                    </span>
                                ))}
                            </div>
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

            {/* ── ABOUT SECTION ────────────────────────────────────────────── */}
            <section
                id="about"
                ref={aboutRef}
                className="py-24 md:py-32 relative bg-bg-secondary overflow-hidden"
            >
                {/* Background effects */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
                    {/* Subtle grid */}
                    <div
                        className="absolute inset-0 opacity-[0.025]"
                        style={{
                            backgroundImage:
                                'linear-gradient(rgba(99,102,241,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.4) 1px, transparent 1px)',
                            backgroundSize: '60px 60px',
                        }}
                    />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    {/* Section header */}
                    <motion.div
                        className="text-center mb-20"
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
                    </motion.div>

                    <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">

                        {/* ── LEFT: Profile image ── */}
                        <motion.div
                            className="flex justify-center lg:justify-start"
                            variants={fadeLeft}
                            initial="hidden"
                            animate={aboutInView ? 'visible' : 'hidden'}
                        >
                            <div className="relative">
                                {/* Large ambient glow */}
                                <motion.div
                                    className="absolute -inset-8 rounded-full pointer-events-none"
                                    style={{
                                        background:
                                            'radial-gradient(ellipse at center, rgba(99,102,241,0.2) 0%, rgba(236,72,153,0.1) 50%, transparent 70%)',
                                    }}
                                    animate={{ scale: [1, 1.08, 1], opacity: [0.6, 1, 0.6] }}
                                    transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                                />

                                {/* Profile image — no border, no bg box */}
                                <div className="relative w-64 h-64 md:w-72 md:h-72 xl:w-80 xl:h-80">
                                    {personalInfo.profileImage ? (
                                        <img
                                            src={personalInfo.profileImage}
                                            alt={personalInfo.name}
                                            className="w-full h-full object-cover rounded-full"
                                            style={{ filter: 'drop-shadow(0 0 30px rgba(99,102,241,0.5))' }}
                                        />
                                    ) : (
                                        /* Placeholder: initial letter with gradient glow, NO background box */
                                        <div
                                            className="w-full h-full flex items-end justify-center pb-2"
                                            style={{ filter: 'drop-shadow(0 0 40px rgba(99,102,241,0.6))' }}
                                        >
                                            <span className="text-[10rem] font-black gradient-text select-none leading-none">
                                                {personalInfo.displayName[0]}
                                            </span>
                                        </div>
                                    )}

                                    {/* Floating skill tags */}
                                    <motion.div
                                        className="absolute -top-4 -right-10 px-3 py-1.5 rounded-full bg-bg-primary/80 border border-primary/30 backdrop-blur-sm"
                                        animate={{ y: [0, -6, 0] }}
                                        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                                    >
                                        <span className="text-xs font-mono text-primary flex items-center gap-1.5">
                                            <Code2 size={11} /> Python · React
                                        </span>
                                    </motion.div>
                                    <motion.div
                                        className="absolute -bottom-4 -left-8 px-3 py-1.5 rounded-full bg-bg-primary/80 border border-secondary/30 backdrop-blur-sm"
                                        animate={{ y: [0, 6, 0] }}
                                        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                                    >
                                        <span className="text-xs font-mono text-secondary flex items-center gap-1.5">
                                            <Cpu size={11} /> AI · ML
                                        </span>
                                    </motion.div>
                                    <motion.div
                                        className="absolute top-1/2 -right-14 -translate-y-1/2 px-3 py-1.5 rounded-full bg-bg-primary/80 border border-accent/30 backdrop-blur-sm"
                                        animate={{ y: [0, -4, 0] }}
                                        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                                    >
                                        <span className="text-xs font-mono text-accent flex items-center gap-1.5">
                                            <Globe size={11} /> FastAPI
                                        </span>
                                    </motion.div>
                                </div>

                                {/* "Open to work" badge */}
                                {personalInfo.available && (
                                    <motion.div
                                        className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 px-5 py-2 rounded-full bg-bg-primary/90 border border-green-500/30 backdrop-blur-sm whitespace-nowrap shadow-lg"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={aboutInView ? { opacity: 1, y: 0 } : {}}
                                        transition={{ delay: 0.6 }}
                                    >
                                        <motion.span
                                            className="w-2 h-2 rounded-full bg-green-400"
                                            animate={{ opacity: [1, 0.3, 1] }}
                                            transition={{ duration: 1.5, repeat: Infinity }}
                                        />
                                        <span className="text-xs font-semibold text-green-400">Open to Work</span>
                                    </motion.div>
                                )}
                            </div>
                        </motion.div>

                        {/* ── RIGHT: Bio, details, stats ── */}
                        <motion.div
                            className="space-y-8"
                            variants={staggerContainer(0.1)}
                            initial="hidden"
                            animate={aboutInView ? 'visible' : 'hidden'}
                        >
                            {/* Bio */}
                            <motion.div variants={fadeUp} className="space-y-4">
                                <h3 className="text-2xl font-bold text-white">
                                    AI & Full-Stack Engineer
                                </h3>
                                <p className="text-text-secondary text-base sm:text-lg leading-relaxed">
                                    {personalInfo.bio}
                                </p>
                            </motion.div>

                            {/* Contact details */}
                            <motion.div variants={fadeUp} className="flex flex-col gap-2.5">
                                <a
                                    href={`mailto:${personalInfo.email}`}
                                    className="flex items-center gap-3 text-text-muted hover:text-primary transition-colors text-sm group"
                                >
                                    <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                                        <Mail size={14} className="text-primary" />
                                    </div>
                                    {personalInfo.email}
                                </a>
                                <div className="flex items-center gap-3 text-text-muted text-sm">
                                    <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                                        <MapPin size={14} className="text-primary" />
                                    </div>
                                    {personalInfo.location}
                                </div>
                            </motion.div>

                            {/* Gradient divider */}
                            <motion.div
                                variants={fadeUp}
                                className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"
                            />

                            {/* Achievement stat cards */}
                            <motion.div
                                variants={fadeUp}
                                className="grid grid-cols-2 sm:grid-cols-4 gap-3"
                            >
                                {achievements.map((item) => (
                                    <motion.div
                                        key={item.label}
                                        variants={scaleIn}
                                        className="relative glass-card border border-white/5 p-4 text-center hover:border-primary/30 transition-all duration-300 group overflow-hidden cursor-default"
                                        whileHover={{ y: -4, scale: 1.03 }}
                                    >
                                        {/* Hover bottom gradient bar */}
                                        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        {/* Hover top-left corner glow */}
                                        <div className="absolute -top-4 -left-4 w-10 h-10 bg-primary/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                        <span className="text-2xl block mb-1.5 group-hover:scale-110 transition-transform duration-300">
                                            {item.icon}
                                        </span>
                                        <p className="text-xl font-bold gradient-text mb-0.5">
                                            {item.value}
                                        </p>
                                        <p className="text-[11px] text-text-muted font-medium leading-tight">
                                            {item.label}
                                        </p>
                                    </motion.div>
                                ))}
                            </motion.div>

                            {/* CTAs */}
                            <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
                                <motion.a
                                    href="#contact"
                                    className="btn-primary text-sm py-2.5 px-6"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Sparkles size={15} />
                                    Let's Talk
                                </motion.a>
                                <motion.a
                                    href="#resume"
                                    className="btn-secondary text-sm py-2.5 px-6"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Download size={15} />
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
