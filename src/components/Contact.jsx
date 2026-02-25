import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Mail, Phone, MapPin, Send, CheckCircle, XCircle, Loader } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { fadeUp, fadeLeft, fadeRight, staggerContainer } from '../utils/animations';

const schema = z.object({
    name: z.string().min(2, 'Name must be at least 2 characters').max(50),
    email: z.string().email('Please enter a valid email address'),
    subject: z.string().min(3, 'Subject must be at least 3 characters').max(100),
    message: z.string().min(10, 'Message must be at least 10 characters').max(1000),
});

const Contact = () => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-100px' });
    const [status, setStatus] = React.useState('idle'); // idle | sending | success | error

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm({ resolver: zodResolver(schema) });

    const onSubmit = async (data) => {
        setStatus('sending');
        try {
            const response = await fetch('https://formsubmit.co/ajax/skdharma05@gmail.com', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
                body: JSON.stringify({
                    name: data.name,
                    email: data.email,
                    subject: data.subject,
                    message: data.message,
                    _subject: `Portfolio Contact: ${data.subject}`,
                }),
            });
            const result = await response.json();
            if (response.ok || result.success === 'true') {
                setStatus('success');
                reset();
                setTimeout(() => setStatus('idle'), 5000);
            } else {
                setStatus('error');
                setTimeout(() => setStatus('idle'), 5000);
            }
        } catch {
            setStatus('error');
            setTimeout(() => setStatus('idle'), 5000);
        }
    };

    const inputClass = (error) =>
        `w-full px-4 py-3 rounded-xl bg-white/5 border ${error ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-primary/60'
        } text-white placeholder-text-muted focus:outline-none focus:ring-1 ${error ? 'focus:ring-red-500/30' : 'focus:ring-primary/20'
        } transition-all duration-200 text-sm`;

    const contactItems = [
        { icon: Mail, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
        { icon: Phone, label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
        { icon: MapPin, label: 'Location', value: personalInfo.location, href: '#' },
    ];

    return (
        <section id="contact" ref={ref} className="py-24 md:py-32 relative bg-bg-primary overflow-hidden">
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute top-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    className="text-center mb-16"
                    variants={staggerContainer()}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                >
                    <motion.div variants={fadeUp}>
                        <span className="section-tag">📬 Get In Touch</span>
                    </motion.div>
                    <motion.h2 variants={fadeUp} className="section-title">
                        Let's <span className="gradient-text">Connect</span>
                    </motion.h2>
                    <motion.p variants={fadeUp} className="section-subtitle">
                        Have a project in mind or just want to say hi? I'd love to hear from you!
                    </motion.p>
                </motion.div>

                <div className="grid lg:grid-cols-5 gap-12">
                    {/* Contact Info */}
                    <motion.div
                        className="lg:col-span-2 space-y-6"
                        variants={fadeLeft}
                        initial="hidden"
                        animate={inView ? 'visible' : 'hidden'}
                    >
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-3">Contact Information</h3>
                            <p className="text-text-secondary text-sm leading-relaxed">
                                Fill out the form or reach out directly. I typically respond within 24 hours.
                            </p>
                        </div>

                        {contactItems.map(({ icon: Icon, label, value, href }) => (
                            <motion.a
                                key={label}
                                href={href}
                                className="flex items-center gap-4 p-4 glass-card border border-white/5 hover:border-primary/30 hover:shadow-glow transition-all duration-300 group"
                                whileHover={{ x: 4 }}
                            >
                                <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                    <Icon size={20} />
                                </div>
                                <div>
                                    <p className="text-xs text-text-muted font-medium">{label}</p>
                                    <p className="text-sm text-white font-medium">{value}</p>
                                </div>
                            </motion.a>
                        ))}

                        {/* Availability indicator */}
                        <div className="p-4 glass-card border border-green-500/20 bg-green-500/5">
                            <div className="flex items-center gap-3">
                                <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-ping-slow" />
                                <div>
                                    <p className="text-green-400 text-sm font-semibold">Available for Work</p>
                                    <p className="text-text-muted text-xs">Open to full-time & freelance opportunities</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        className="lg:col-span-3"
                        variants={fadeRight}
                        initial="hidden"
                        animate={inView ? 'visible' : 'hidden'}
                    >
                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            className="glass-card border border-white/5 p-8 space-y-5"
                            noValidate
                        >
                            <div className="grid sm:grid-cols-2 gap-5">
                                {/* Name */}
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-text-secondary mb-1.5">
                                        Full Name *
                                    </label>
                                    <input
                                        id="name"
                                        type="text"
                                        placeholder="John Doe"
                                        {...register('name')}
                                        className={inputClass(errors.name)}
                                        aria-invalid={!!errors.name}
                                    />
                                    {errors.name && (
                                        <motion.p
                                            initial={{ opacity: 0, y: -4 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="text-red-400 text-xs mt-1"
                                        >
                                            {errors.name.message}
                                        </motion.p>
                                    )}
                                </div>

                                {/* Email */}
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-1.5">
                                        Email Address *
                                    </label>
                                    <input
                                        id="email"
                                        type="email"
                                        placeholder="john@example.com"
                                        {...register('email')}
                                        className={inputClass(errors.email)}
                                        aria-invalid={!!errors.email}
                                    />
                                    {errors.email && (
                                        <motion.p
                                            initial={{ opacity: 0, y: -4 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="text-red-400 text-xs mt-1"
                                        >
                                            {errors.email.message}
                                        </motion.p>
                                    )}
                                </div>
                            </div>

                            {/* Subject */}
                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-text-secondary mb-1.5">
                                    Subject *
                                </label>
                                <input
                                    id="subject"
                                    type="text"
                                    placeholder="Project Collaboration"
                                    {...register('subject')}
                                    className={inputClass(errors.subject)}
                                    aria-invalid={!!errors.subject}
                                />
                                {errors.subject && (
                                    <motion.p
                                        initial={{ opacity: 0, y: -4 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="text-red-400 text-xs mt-1"
                                    >
                                        {errors.subject.message}
                                    </motion.p>
                                )}
                            </div>

                            {/* Message */}
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-text-secondary mb-1.5">
                                    Message *
                                </label>
                                <textarea
                                    id="message"
                                    rows={5}
                                    placeholder="Tell me about your project..."
                                    {...register('message')}
                                    className={`${inputClass(errors.message)} resize-none`}
                                    aria-invalid={!!errors.message}
                                />
                                {errors.message && (
                                    <motion.p
                                        initial={{ opacity: 0, y: -4 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="text-red-400 text-xs mt-1"
                                    >
                                        {errors.message.message}
                                    </motion.p>
                                )}
                            </div>

                            {/* Submit button */}
                            <motion.button
                                type="submit"
                                disabled={isSubmitting || status === 'sending'}
                                className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
                                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                            >
                                {status === 'sending' ? (
                                    <><Loader size={18} className="animate-spin" /> Sending...</>
                                ) : (
                                    <><Send size={18} /> Send Message</>
                                )}
                            </motion.button>

                            {/* Status messages */}
                            {status === 'success' && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="flex items-center gap-2 text-green-400 text-sm p-3 bg-green-500/10 rounded-xl border border-green-500/20"
                                >
                                    <CheckCircle size={16} /> Message sent successfully! I'll get back to you soon.
                                </motion.div>
                            )}
                            {status === 'error' && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="flex items-center gap-2 text-red-400 text-sm p-3 bg-red-500/10 rounded-xl border border-red-500/20"
                                >
                                    <XCircle size={16} /> Something went wrong. Try emailing directly.
                                </motion.div>
                            )}
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
