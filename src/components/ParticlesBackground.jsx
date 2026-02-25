import React, { useCallback, useEffect, useState } from 'react';
import Particles from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

const ParticlesBackground = () => {
    const [init, setInit] = useState(false);

    useEffect(() => {
        let mounted = true;
        const initParticles = async () => {
            const { initParticlesEngine } = await import('@tsparticles/react');
            await initParticlesEngine(async (engine) => {
                await loadSlim(engine);
            });
            if (mounted) setInit(true);
        };
        initParticles();
        return () => { mounted = false; };
    }, []);

    const particlesLoaded = useCallback(async () => { }, []);

    if (!init) return null;

    return (
        <Particles
            id="tsparticles"
            particlesLoaded={particlesLoaded}
            className="absolute inset-0 z-0"
            options={{
                background: { color: { value: 'transparent' } },
                fpsLimit: 60,
                interactivity: {
                    events: {
                        onHover: { enable: true, mode: 'repulse' },
                        onClick: { enable: true, mode: 'push' },
                        resize: true,
                    },
                    modes: {
                        repulse: { distance: 100, duration: 0.4 },
                        push: { quantity: 2 },
                    },
                },
                particles: {
                    color: { value: ['#6366f1', '#ec4899', '#06b6d4'] },
                    links: {
                        color: '#6366f1',
                        distance: 150,
                        enable: true,
                        opacity: 0.15,
                        width: 1,
                    },
                    move: {
                        direction: 'none',
                        enable: true,
                        outModes: { default: 'bounce' },
                        random: true,
                        speed: 0.8,
                        straight: false,
                    },
                    number: {
                        density: { enable: true, area: 900 },
                        value: 60,
                    },
                    opacity: {
                        value: { min: 0.2, max: 0.6 },
                        animation: { enable: true, speed: 1, sync: false },
                    },
                    shape: { type: 'circle' },
                    size: {
                        value: { min: 1, max: 3 },
                        animation: { enable: true, speed: 2, sync: false },
                    },
                },
                detectRetina: true,
            }}
        />
    );
};

export default ParticlesBackground;
