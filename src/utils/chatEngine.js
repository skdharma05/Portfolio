import { chatbotData } from '../data/portfolioData';

// Normalize text for matching
const normalize = (text) => text.toLowerCase().replace(/[^a-z0-9\s]/g, '').trim();

// Match user input against intent patterns
export function getResponse(userMessage) {
    const input = normalize(userMessage);

    for (const intent of chatbotData.intents) {
        for (const pattern of intent.patterns) {
            if (input.includes(normalize(pattern))) {
                return intent.response;
            }
        }
    }

    // Fuzzy keyword check
    const keywords = {
        skills: ['skill', 'tech', 'stack', 'know', 'language', 'framework'],
        projects: ['project', 'work', 'built', 'create', 'made', 'portfolio'],
        contact: ['contact', 'email', 'hire', 'reach', 'connect', 'available', 'phone'],
        resume: ['resume', 'cv', 'download', 'curriculum'],
        social: ['social', 'instagram', 'twitter', 'youtube', 'linkedin'],
    };

    for (const [intentKey, kws] of Object.entries(keywords)) {
        if (kws.some((kw) => input.includes(kw))) {
            const match = chatbotData.intents.find((i) =>
                i.patterns.some((p) => p.includes(intentKey))
            );
            if (match) return match.response;
        }
    }

    // Fallback
    return chatbotData.fallback[Math.floor(Math.random() * chatbotData.fallback.length)];
}

// Simulate async AI "thinking" delay
export function simulateTypingDelay(text) {
    const base = 600;
    const perChar = 15;
    return Math.min(base + text.length * perChar, 3000);
}
