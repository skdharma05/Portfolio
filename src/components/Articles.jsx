import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink, Calendar, Clock } from 'lucide-react';
import { articles } from '../data/portfolioData';
import { fadeUp, fadeLeft, staggerContainer } from '../utils/animations';

const Articles = () => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section id="articles" ref={ref} className="py-24 md:py-32 relative bg-bg-primary overflow-hidden">
            <div className="absolute top-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="text-center mb-16"
                    variants={staggerContainer()}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                >
                    <motion.div variants={fadeUp}>
                        <span className="section-tag">✍️ Writing</span>
                    </motion.div>
                    <motion.h2 variants={fadeUp} className="section-title">
                        Featured <span className="gradient-text">Articles</span>
                    </motion.h2>
                    <motion.p variants={fadeUp} className="section-subtitle">
                        Technical deep-dives, tutorials, and insights on AI & full-stack development
                    </motion.p>
                </motion.div>

                <motion.div
                    className="space-y-6 max-w-4xl mx-auto"
                    variants={staggerContainer(0.12)}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                >
                    {articles.map((article, i) => (
                        <motion.a
                            key={article.id}
                            href={article.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            variants={fadeLeft}
                            className="group flex flex-col sm:flex-row gap-6 p-6 glass-card border border-white/5 hover:border-primary/30 hover:shadow-card-hover transition-all duration-400 no-underline"
                            whileHover={{ x: 4 }}
                        >
                            {/* Number */}
                            <div className="flex-shrink-0 text-5xl font-black text-primary/15 group-hover:text-primary/30 transition-colors duration-300 leading-none select-none hidden sm:block">
                                {String(i + 1).padStart(2, '0')}
                            </div>

                            <div className="flex-1">
                                <div className="flex items-center gap-3 mb-3 flex-wrap">
                                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-accent/10 text-accent border border-accent/20">
                                        {article.platform}
                                    </span>
                                    {article.tags.map((tag) => (
                                        <span key={tag} className="text-xs text-text-muted">#{tag}</span>
                                    ))}
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors duration-200">
                                    {article.title}
                                </h3>
                                <p className="text-text-secondary text-sm leading-relaxed mb-3">
                                    {article.excerpt}
                                </p>
                                <div className="flex items-center gap-4 text-xs text-text-muted">
                                    <span className="flex items-center gap-1.5"><Calendar size={12} />{new Date(article.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                                    <span className="flex items-center gap-1.5"><Clock size={12} />{article.readTime}</span>
                                </div>
                            </div>

                            <ExternalLink
                                size={20}
                                className="text-text-muted group-hover:text-primary transition-colors duration-200 flex-shrink-0 self-start mt-1"
                            />
                        </motion.a>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Articles;
