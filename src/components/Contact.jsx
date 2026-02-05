import React from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import '../styles/Contact.css';

const Contact = () => {
    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = React.useState(''); // success | error | idle

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        try {
            // Using FormSubmit.co - Free, no signup required
            const response = await fetch("https://formsubmit.co/ajax/skdharma05@gmail.com", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                    _subject: "New Portfolio Message!" // Custom subject
                })
            });

            const result = await response.json();

            if (response.ok === true || result.success === "true") {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
                setTimeout(() => setStatus(''), 5000);
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
            console.error(error);
        }
    };

    return (
        <section className="contact" id="contact">
            <div className="contact-container">
                <div className="section-header">
                    <h2 className="section-title">Get In Touch</h2>
                    <p className="section-subtitle">Have a project in mind? Let's talk.</p>
                </div>

                <div className="contact-content">
                    <div className="contact-info">
                        <h3>Contact Information</h3>
                        <p className="contact-desc">
                            Fill up the form and I will get back to you within 24 hours.
                        </p>

                        <div className="info-item">
                            <Phone className="info-icon" size={20} />
                            <span>+91 7904248094</span>
                        </div>
                        <div className="info-item">
                            <Mail className="info-icon" size={20} />
                            <span>skdharma05@gmail.com</span>
                        </div>
                        <div className="info-item">
                            <MapPin className="info-icon" size={20} />
                            <span>Perambalur, Tamil Nadu</span>
                        </div>
                    </div>

                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                placeholder="John Doe"
                                required
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                placeholder="john@example.com"
                                required
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                rows="5"
                                placeholder="Your message..."
                                required
                                value={formData.message}
                                onChange={handleChange}
                            ></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary submit-btn" disabled={status === 'sending'}>
                            {status === 'sending' ? 'Sending...' : 'Send Message'} <Send size={18} className="btn-icon" />
                        </button>

                        {status === 'success' && (
                            <p style={{ marginTop: '1rem', color: '#4ade80' }}>Message sent successfully!</p>
                        )}
                        {status === 'error' && (
                            <p style={{ marginTop: '1rem', color: '#ef4444' }}>Oops! Something went wrong. Check your Form ID.</p>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
