import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Zap } from 'lucide-react';
import { fadeUp, staggerContainer } from '../utils/animations';

const CallToAction = () => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-80px' });

    return (
        <section id="cta" ref={ref} className="py-24 md:py-32 relative overflow-hidden bg-bg-primary">
            {/* Animated gradient orbs */}
            <div className="absolute inset-0 pointer-events-none">
                <motion.div
                    className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl"
                    animate={{ x: [0, 60, 0], y: [0, -40, 0] }}
                    transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                />
                <motion.div
                    className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-3xl"
                    animate={{ x: [0, -40, 0], y: [0, 40, 0] }}
                    transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
                />
            </div>

            <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div variants={staggerContainer(0.12)} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
                    <motion.div variants={fadeUp} className="flex justify-center mb-6">
                        <div className="section-tag">
                            <Zap size={14} />
                            Open to Opportunities
                        </div>
                    </motion.div>

                    <motion.h2 variants={fadeUp} className="text-4xl md:text-6xl font-black mb-6 leading-tight">
                        Let's Build Something{' '}
                        <span className="gradient-text">Extraordinary</span>{' '}
                        Together
                    </motion.h2>

                    <motion.p variants={fadeUp} className="text-text-secondary text-lg md:text-xl leading-relaxed mb-12 max-w-2xl mx-auto">
                        Whether you need an AI-powered system, a full-stack web app, or a technical co-founder —
                        I bring both the engineering skills and the creative vision to make it happen.
                    </motion.p>

                    <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4">
                        {/* Primary glowing CTA */}
                        <motion.a
                            href="#contact"
                            className="relative inline-flex items-center gap-3 px-10 py-4 rounded-2xl font-bold text-lg text-white overflow-hidden group"
                            style={{
                                background: 'linear-gradient(135deg, #6366f1, #ec4899)',
                            }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            animate={{
                                boxShadow: [
                                    '0 0 20px rgba(99,102,241,0.4)',
                                    '0 0 50px rgba(99,102,241,0.8), 0 0 80px rgba(236,72,153,0.4)',
                                    '0 0 20px rgba(99,102,241,0.4)',
                                ],
                            }}
                            transition={{ duration: 2.5, repeat: Infinity }}
                        >
                            {/* Shimmer effect */}
                            <motion.span
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                                animate={{ x: ['-100%', '200%'] }}
                                transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                            />
                            <Zap size={22} className="relative z-10" />
                            <span className="relative z-10">Hire Me Now</span>
                            <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                        </motion.a>

                        <motion.a
                            href="mailto:skdharma05@gmail.com"
                            className="btn-secondary text-lg px-8 py-4"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Send Email
                        </motion.a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default CallToAction;
