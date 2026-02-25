import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Download, FileText, CheckCircle } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { fadeUp, staggerContainer } from '../utils/animations';

const ResumeDownload = () => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-80px' });
    const [downloaded, setDownloaded] = useState(false);

    const handleDownload = () => {
        setDownloaded(true);
        setTimeout(() => setDownloaded(false), 3000);
    };

    return (
        <section id="resume" ref={ref} className="py-24 md:py-32 relative bg-bg-primary overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    variants={staggerContainer(0.12)}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                >
                    <motion.div variants={fadeUp}>
                        <span className="section-tag">
                            <FileText size={14} />
                            Resume
                        </span>
                    </motion.div>

                    <motion.h2 variants={fadeUp} className="section-title">
                        Download My <span className="gradient-text">Resume</span>
                    </motion.h2>

                    <motion.p variants={fadeUp} className="section-subtitle mb-10">
                        Get a comprehensive overview of my skills, experience, and projects in PDF format.
                    </motion.p>

                    <motion.div variants={fadeUp}>
                        <motion.a
                            href={personalInfo.resumeUrl}
                            download
                            onClick={handleDownload}
                            className="relative inline-flex items-center gap-3 px-10 py-4 rounded-2xl font-bold text-lg text-white overflow-hidden group"
                            style={{
                                background: 'linear-gradient(135deg, #6366f1, #06b6d4)',
                            }}
                            whileHover={{
                                scale: 1.05,
                                boxShadow: '0 0 40px rgba(99,102,241,0.6), 0 0 80px rgba(6,182,212,0.3)',
                            }}
                            whileTap={{ scale: 0.95 }}
                            animate={{
                                boxShadow: [
                                    '0 0 20px rgba(99,102,241,0.3)',
                                    '0 0 40px rgba(99,102,241,0.6)',
                                    '0 0 20px rgba(99,102,241,0.3)',
                                ],
                            }}
                            transition={{ duration: 3, repeat: Infinity }}
                        >
                            {/* Shimmer */}
                            <motion.span
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -skew-x-12"
                                animate={{ x: ['-100%', '200%'] }}
                                transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 1.5 }}
                            />

                            {downloaded ? (
                                <>
                                    <CheckCircle size={22} className="relative z-10" />
                                    <span className="relative z-10">Downloaded!</span>
                                </>
                            ) : (
                                <>
                                    <Download size={22} className="relative z-10 group-hover:animate-bounce" />
                                    <span className="relative z-10">Download Resume</span>
                                </>
                            )}
                        </motion.a>
                    </motion.div>

                    <motion.p variants={fadeUp} className="text-text-muted text-xs mt-4">
                        PDF • Updated {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                    </motion.p>
                </motion.div>
            </div>
        </section>
    );
};

export default ResumeDownload;
