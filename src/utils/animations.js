// Framer Motion animation variants — reusable across all components

export const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
};

export const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 0.5, ease: 'easeOut' },
    },
};

export const fadeLeft = {
    hidden: { opacity: 0, x: -40 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
};

export const fadeRight = {
    hidden: { opacity: 0, x: 40 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
};

export const scaleIn = {
    hidden: { opacity: 0, scale: 0.85 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
};

export const staggerContainer = (stagger = 0.1, delay = 0) => ({
    hidden: {},
    visible: {
        transition: {
            staggerChildren: stagger,
            delayChildren: delay,
        },
    },
});

export const slideUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
};

export const popIn = {
    hidden: { opacity: 0, scale: 0.6 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { type: 'spring', stiffness: 300, damping: 20 },
    },
};

export const chatMessageVariant = {
    hidden: { opacity: 0, y: 10, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.3, ease: 'easeOut' },
    },
};

export const drawerVariant = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: { type: 'spring', stiffness: 300, damping: 30 },
    },
    exit: {
        opacity: 0,
        scale: 0.9,
        y: 20,
        transition: { duration: 0.2 },
    },
};

export const navItemVariant = {
    hidden: { opacity: 0, y: -10 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.05, duration: 0.4 },
    }),
};

export const progressBarVariant = (width) => ({
    hidden: { width: 0 },
    visible: {
        width: `${width}%`,
        transition: { duration: 1.2, ease: 'easeOut', delay: 0.2 },
    },
});
