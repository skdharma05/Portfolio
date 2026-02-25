import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Articles', href: '#articles' },
    { label: 'Profiles', href: '#profiles' },
    { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('hero');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 30);

            // Scroll spy
            const sections = navLinks.map((l) => l.href.replace('#', ''));
            for (let i = sections.length - 1; i >= 0; i--) {
                const el = document.getElementById(sections[i]);
                if (el && window.scrollY >= el.offsetTop - 120) {
                    setActiveSection(sections[i]);
                    break;
                }
            }
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                    ? 'bg-bg-primary/80 backdrop-blur-xl border-b border-white/5 shadow-lg'
                    : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo */}
                    <motion.a
                        href="#hero"
                        className="text-xl font-bold tracking-tight"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <span className="text-white">Dharma</span>
                        <span className="gradient-text">.S</span>
                    </motion.a>

                    {/* Desktop nav */}
                    <div className="hidden md:flex items-center gap-1">
                        {navLinks.map((link, i) => (
                            <motion.a
                                key={link.href}
                                href={link.href}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.05 * i + 0.3 }}
                                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${activeSection === link.href.replace('#', '')
                                        ? 'text-primary'
                                        : 'text-text-secondary hover:text-white'
                                    }`}
                            >
                                {link.label}
                                {activeSection === link.href.replace('#', '') && (
                                    <motion.span
                                        layoutId="nav-indicator"
                                        className="absolute inset-0 rounded-lg bg-primary/10 border border-primary/20"
                                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                                    />
                                )}
                            </motion.a>
                        ))}
                        <motion.a
                            href="#contact"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7 }}
                            className="ml-4 btn-primary text-sm py-2 px-5"
                        >
                            Hire Me
                        </motion.a>
                    </div>

                    {/* Mobile menu button */}
                    <motion.button
                        className="md:hidden p-2 rounded-lg text-text-secondary hover:text-white hover:bg-white/5 transition-colors"
                        onClick={() => setIsOpen(!isOpen)}
                        whileTap={{ scale: 0.9 }}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </motion.button>
                </div>
            </div>

            {/* Mobile menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden bg-bg-primary/95 backdrop-blur-xl border-b border-white/5"
                    >
                        <div className="px-4 py-4 space-y-1">
                            {navLinks.map((link, i) => (
                                <motion.a
                                    key={link.href}
                                    href={link.href}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                    onClick={() => setIsOpen(false)}
                                    className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all ${activeSection === link.href.replace('#', '')
                                            ? 'text-primary bg-primary/10'
                                            : 'text-text-secondary hover:text-white hover:bg-white/5'
                                        }`}
                                >
                                    {link.label}
                                </motion.a>
                            ))}
                            <div className="pt-2">
                                <a
                                    href="#contact"
                                    onClick={() => setIsOpen(false)}
                                    className="btn-primary w-full justify-center"
                                >
                                    Hire Me
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
