import React, { lazy, Suspense } from 'react';
import ErrorBoundary from './components/ErrorBoundary';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import CallToAction from './components/CallToAction';
import ResumeDownload from './components/ResumeDownload';
import CodingProfiles from './components/CodingProfiles';
import SocialLinks from './components/SocialLinks';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Lazy-load heavier components
const Chatbot = lazy(() => import('./components/Chatbot'));

function App() {
    return (
        <ErrorBoundary>
            <div className="relative min-h-screen bg-bg-primary text-text-primary font-sans">
                <Navbar />

                <main>
                    <Hero />
                    <Skills />
                    <Projects />
                    <CallToAction />
                    <ResumeDownload />
                    <CodingProfiles />
                    <SocialLinks />
                    <Contact />
                </main>

                <Footer />

                {/* Floating chatbot */}
                <Suspense fallback={null}>
                    <Chatbot />
                </Suspense>
            </div>
        </ErrorBoundary>
    );
}

export default App;
