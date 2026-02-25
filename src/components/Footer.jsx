import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { fadeUp } from '../utils/animations';

const Footer = () => {
    const year = new Date().getFullYear();

    const links = [
        { label: 'Home', href: '#hero' },
        { label: 'Skills', href: '#skills' },
        { label: 'Projects', href: '#projects' },
        { label: 'Articles', href: '#articles' },
        { label: 'Profiles', href: '#profiles' },
        { label: 'Contact', href: '#contact' },
    ];

    const socials = [
        { href: 'https://github.com/skdharma05', icon: Github, label: 'GitHub' },
        { href: 'https://www.linkedin.com/in/skdharma05/', icon: Linkedin, label: 'LinkedIn' },
        { href: 'mailto:skdharma05@gmail.com', icon: Mail, label: 'Email' },
    ];

    return (
        <footer className="relative bg-bg-primary border-t border-white/5 pt-16 pb-8 overflow-hidden">
            {/* Top gradient line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-3 gap-12 mb-12">
                    {/* Brand */}
                    <div>
                        <a href="#hero" className="text-2xl font-black tracking-tight mb-4 inline-block">
                            <span className="text-white">Dharma</span>
                            <span className="gradient-text">.S</span>
                        </a>
                        <p className="text-text-secondary text-sm leading-relaxed mb-6 max-w-xs">
                            AI & Full-Stack Engineer building intelligent, scalable systems. Always curious, always building.
                        </p>
                        <div className="flex gap-3">
                            {socials.map(({ href, icon: Icon, label }) => (
                                <motion.a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={label}
                                    className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-text-secondary hover:text-primary hover:border-primary/40 hover:bg-primary/10 hover:shadow-glow transition-all duration-300"
                                    whileHover={{ scale: 1.15, rotate: -5 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <Icon size={18} />
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-widest mb-4">Navigation</h3>
                        <ul className="space-y-2">
                            {links.map((link) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        className="text-text-secondary hover:text-primary text-sm transition-colors duration-200 inline-flex items-center gap-1.5 group"
                                    >
                                        <span className="w-0 group-hover:w-3 h-px bg-primary transition-all duration-200" />
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Call to action */}
                    <div>
                        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-widest mb-4">Let's Work Together</h3>
                        <p className="text-text-secondary text-sm mb-4">
                            Open to roles, freelance projects, and collaborations.
                        </p>
                        <motion.a
                            href="#contact"
                            className="btn-primary text-sm py-2.5 px-5 inline-flex"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Get In Touch
                        </motion.a>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-text-muted text-xs">
                    <p>
                        &copy; {year} <span className="text-text-secondary">Dharma S</span>. All rights reserved.
                    </p>
                    <p className="flex items-center gap-1.5">
                        Built with <Heart size={12} className="text-red-400 fill-red-400" /> using React, Three.js & Framer Motion
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
