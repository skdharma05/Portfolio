// ============================================================
// PORTFOLIO CENTRALIZED DATA — Dharma S
// ============================================================
import userImg from '../assets/luffy.png'
import userResume from '../assets/dharma.pdf'

export const personalInfo = {
    name: 'Dharma S',
    displayName: 'Dharma',
    nameSuffix: '.S',
    title: 'AI & Full-Stack Engineer',
    tagline: 'Building Intelligent, Scalable Systems',
    bio: "A passionate Full-Stack Engineer with a strong foundation in AI/ML. I build production-ready web apps and AI-powered systems using Python, React, FastAPI, and modern backend technologies. I love transforming complex problems into elegant, scalable solutions.",
    location: 'Perambalur, Tamil Nadu, India',
    email: 'skdharma05@gmail.com',
    phone: '+91 7904248094',
    website: 'https://skdharma05.dev',
    profileImage: userImg, // Set your profile image URL here
    resumeUrl: userResume, // Set your resume file path here
    available: true,
};

export const achievements = [
    { label: 'Projects Built', value: '5+', icon: '🚀' },
    { label: 'AI Models Deployed', value: '2+', icon: '🤖' },
    { label: 'Tech Stack', value: '10+', icon: '⚡' },
    { label: 'GitHub Repos', value: '20+', icon: '📦' },
];

export const socialLinks = [
    {
        name: 'GitHub',
        url: 'https://github.com/skdharma05',
        icon: 'FaGithub',
        color: '#ffffff',
        hoverColor: '#6e5494',
    },
    {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/skdharma05/',
        icon: 'FaLinkedin',
        color: '#0077b5',
        hoverColor: '#0077b5',
    },

];

export const codingProfiles = [
    {
        name: 'GitHub',
        username: '@skdharma05',
        url: 'https://github.com/skdharma05',
        icon: 'FaGithub',
        description: 'Open source contributions & project repos',
        color: '#6e5494',
        stats: '30+ Repos',
    },
    {
        name: 'LeetCode',
        username: '@sivo_0',
        url: 'https://leetcode.com/u/sivo_0/',
        icon: 'SiLeetcode',
        description: 'Data structures & algorithms practice',
        color: '#ffa116',
        stats: '100+ Problems',
    },
];

export const skills = [
    {
        category: 'Backend & API',
        icon: 'FaServer',
        color: '#6366f1',
        items: [
            { name: 'Python', proficiency: 92 },
            { name: 'Java', proficiency: 80 },
            { name: 'Django', proficiency: 85 },
            { name: 'FastAPI', proficiency: 88 },
            { name: 'Node.js', proficiency: 78 },
            { name: 'Express.js', proficiency: 75 },
            { name: 'RESTful APIs', proficiency: 90 },
            { name: 'JWT Auth', proficiency: 85 },
        ],
    },
    {
        category: 'Frontend Development',
        icon: 'FaCode',
        color: '#ec4899',
        items: [
            { name: 'React.js', proficiency: 88 },
            { name: 'JavaScript', proficiency: 85 },
            { name: 'TypeScript', proficiency: 72 },
            { name: 'HTML5/CSS3', proficiency: 90 },
            { name: 'Angular', proficiency: 70 },
            { name: 'Tailwind CSS', proficiency: 82 },
        ],
    },
    {
        category: 'Data & Databases',
        icon: 'FaDatabase',
        color: '#06b6d4',
        items: [
            { name: 'PostgreSQL', proficiency: 80 },
            { name: 'MongoDB', proficiency: 82 },
            { name: 'MySQL', proficiency: 78 },
            { name: 'SQLAlchemy', proficiency: 75 },
            { name: 'Hibernate', proficiency: 70 },
            { name: 'JDBC', proficiency: 72 },
        ],
    },
    {
        category: 'AI & DevOps',
        icon: 'FaBrain',
        color: '#f59e0b',
        items: [
            { name: 'Machine Learning', proficiency: 78 },
            { name: 'Google Gemini AI', proficiency: 85 },
            { name: 'LlamaIndex/RAG', proficiency: 75 },
            { name: 'Docker', proficiency: 72 },
            { name: 'Git/GitHub', proficiency: 88 },
            { name: 'Linux', proficiency: 75 },
        ],
    },
];

export const projects = [
    {
        id: 1,
        title: 'Req-Zy — Purchase Requisition System',
        description: 'A full-stack procurement management platform with purchase lifecycle management, multi-level approval workflows, and role-based access control.',
        longDescription: 'Req-Zy is a comprehensive procurement system that streamlines the purchase requisition process from request to fulfillment. Features include real-time tracking, automated approval chains, budget monitoring, and detailed audit trails.',
        tags: ['Angular', 'Express.js', 'MongoDB', 'TypeScript', 'JWT'],
        links: {
            demo: '#',
            github: 'https://github.com/skdharma05/req_zy',
        },
        image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80',
        featured: true,
        category: 'Full Stack',
    },
    {
        id: 2,
        title: 'AI Meditation Generator',
        description: 'An AI-powered service generating personalized meditation scripts and audio using Google Gemini AI and Cloud Text-to-Speech technology.',
        longDescription: 'This system creates unique, personalized meditation sessions based on user preferences, mood, and goals. Integrates with Google Gemini for contextual script generation and Cloud TTS for natural audio output with multiple voice options.',
        tags: ['FastAPI', 'Google Gemini AI', 'MongoDB', 'Python', 'Cloud TTS'],
        links: {
            demo: '#',
            github: 'https://github.com/skdharma05/Ai_Med',
        },
        image: 'https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?auto=format&fit=crop&w=800&q=80',
        featured: true,
        category: 'AI/ML',
    },
    {
        id: 3,
        title: 'Resume Q&A System with Gemini AI',
        description: 'FastAPI-based service for interactive resume analysis. Upload PDF/DOCX resumes and query them using Google Gemini AI and LlamaIndex with session-based security.',
        longDescription: 'A sophisticated RAG (Retrieval-Augmented Generation) system that indexes resume documents and enables natural language Q&A about the content. Supports multiple file formats, session persistence, and role-based access control.',
        tags: ['FastAPI', 'Gemini AI', 'LlamaIndex', 'Python 3.10+', 'RAG'],
        links: {
            demo: '#',
            github: 'https://github.com/skdharma05/medify',
        },
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80',
        featured: true,
        category: 'AI/ML',
    },
];

export const articles = [
    {
        id: 1,
        title: 'Building RAG Systems with LlamaIndex & Gemini AI',
        excerpt: 'A deep-dive into Retrieval-Augmented Generation patterns using LlamaIndex for document indexing and Google Gemini for intelligent Q&A.',
        date: '2024-12-15',
        readTime: '8 min read',
        tags: ['AI', 'RAG', 'Python'],
        url: '#',
        platform: 'Medium',
    },
    {
        id: 2,
        title: 'FastAPI Best Practices for Production APIs',
        excerpt: 'How to structure FastAPI applications for production: async patterns, dependency injection, authentication, and performance optimization.',
        date: '2024-11-20',
        readTime: '10 min read',
        tags: ['FastAPI', 'Python', 'API'],
        url: '#',
        platform: 'Dev.to',
    },
    {
        id: 3,
        title: 'Multi-level Approval Workflows in Node.js',
        excerpt: 'Designing and implementing a robust multi-level approval system with real-time notifications using Node.js and MongoDB.',
        date: '2024-10-08',
        readTime: '6 min read',
        tags: ['Node.js', 'MongoDB', 'Backend'],
        url: '#',
        platform: 'Hashnode',
    },
];

// ============================================================
// CHATBOT KNOWLEDGE BASE
// ============================================================
export const chatbotData = {
    greetings: [
        "Hey there! 👋 I'm Dharma's AI portfolio assistant. Ask me anything about his skills, projects, or experience!",
        "Hi! I'm here to help you learn more about Dharma S and his work. What would you like to know?",
        "Hello! Great to meet you. I can tell you all about Dharma's projects, skills, and how to get in touch. What's on your mind?",
    ],
    intents: [
        {
            patterns: ['who are you', 'tell me about yourself', 'introduce', 'who is dharma', 'about you'],
            response: "I'm Dharma S — an **AI & Full-Stack Engineer** based in Tamil Nadu, India. I build production-ready web apps and AI-powered systems using **Python, React, FastAPI**, and modern backend tech. I'm passionate about transforming complex problems into elegant, scalable solutions! 🚀",
        },
        {
            patterns: ['skills', 'tech stack', 'technologies', 'what do you know', 'what can you do'],
            response: "Here's my core tech stack:\n\n🔵 **Backend:** Python, Django, FastAPI, Node.js, Express.js\n🟣 **Frontend:** React.js, Angular, TypeScript, JavaScript\n🗄️ **Databases:** PostgreSQL, MongoDB, MySQL\n🤖 **AI/ML:** Google Gemini AI, LlamaIndex, Machine Learning\n⚙️ **DevOps:** Docker, Git, Linux",
        },
        {
            patterns: ['project', 'work', 'built', 'created', 'portfolio work'],
            response: "I've built some exciting projects:\n\n🛒 **Req-Zy** — Purchase requisition system with multi-level approvals (Angular + Express + MongoDB)\n\n🧘 **AI Meditation Generator** — Personalized meditation audio with Gemini AI & Cloud TTS (FastAPI + Python)\n\n📄 **Resume Q&A System** — RAG-based resume analysis using LlamaIndex + Gemini AI\n\nCheck out the Projects section for full details!",
        },
        {
            patterns: ['contact', 'hire', 'email', 'reach', 'get in touch', 'available'],
            response: "I'd love to connect! Here's how to reach me:\n\n📧 **Email:** skdharma05@gmail.com\n📞 **Phone:** +91 7904248094\n💼 **LinkedIn:** linkedin.com/in/skdharma05\n📍 **Location:** Perambalur, Tamil Nadu\n\nI'm currently **available for opportunities**! Feel free to use the Contact form on this page. 😊",
        },
        {
            patterns: ['resume', 'cv', 'download', 'curriculum'],
            response: "You can download my resume from the **Resume** section on this page! It includes my full work experience, education, skills, and certifications. The download button provides the latest PDF version. 📄",
        },
        {
            patterns: ['github', 'leetcode', 'coding profile', 'open source'],
            response: "Find me on coding platforms:\n\n🐙 **GitHub:** github.com/skdharma05 — 30+ repos\n💻 **LeetCode:** leetcode.com/u/sivo_0 — 100+ problems solved\n🎯 **SkillRack:** 500+ competition points\n\nCheck the Coding Profiles section for all links!",
        },
        {
            patterns: ['experience', 'background', 'history', 'education'],
            response: "I'm a Full-Stack & AI Engineer with expertise in building end-to-end production systems. My background spans **AI/ML systems** (RAG, LLMs), **REST API design** (FastAPI, Django), **frontend development** (React, Angular), and **database architecture** (PostgreSQL, MongoDB). I'm constantly learning and experimenting with emerging technologies!",
        },
        {
            patterns: ['ai', 'machine learning', 'gemini', 'llm', 'rag'],
            response: "AI is one of my strongest areas! I specialize in:\n\n🤖 **LLM Integration** — Google Gemini AI, OpenAI APIs\n📚 **RAG Systems** — LlamaIndex for document Q&A\n🔊 **AI Audio** — Cloud Text-to-Speech for audio generation\n📊 **ML Models** — Training and deploying ML pipelines\n\nThe Resume Q&A and Meditation Generator projects showcase this!",
        },
        {
            patterns: ['python', 'fastapi', 'django', 'backend'],
            response: "Python is my primary language! I use it for:\n\n⚡ **FastAPI** — High-performance async APIs\n🌐 **Django** — Full-featured web apps\n🤖 **AI/ML** — Model training, inference, and LLM integration\n🔧 **Backend Logic** — Business rules, data processing, authentication\n\nI also work with Node.js/Express for JavaScript backends!",
        },
        {
            patterns: ['react', 'frontend', 'javascript', 'angular'],
            response: "On the frontend, I primarily use **React.js** for modern SPAs and **Angular** for enterprise applications. I'm skilled in:\n\n⚛️ React.js + TypeScript\n🅰️ Angular\n🎨 Tailwind CSS, Bootstrap, CSS3\n🎬 Animations with Framer Motion\n📦 State management (Context, Zustand, NgRx)",
        },
        {
            patterns: ['social', 'instagram', 'twitter', 'linkedin', 'youtube'],
            response: "Connect with me on social media!\n\n💼 **LinkedIn:** linkedin.com/in/skdharma05\n🐙 **GitHub:** github.com/skdharma05\n📸 **Instagram:** @skdharma05\n🎬 **YouTube:** @skdharma05\n🐦 **Twitter/X:** @skdharma05\n\nI share development tips, project updates, and tech insights!",
        },
        {
            patterns: ['hello', 'hi', 'hey', 'howdy', 'sup', 'good morning', 'good evening'],
            response: "Hey there! 👋 Great to have you here! I'm Dharma's portfolio assistant. I can tell you about his **skills**, **projects**, **experience**, or how to **contact** him. What would you like to know?",
        },
        {
            patterns: ['thank', 'thanks', 'awesome', 'great', 'cool'],
            response: "You're welcome! 😊 Is there anything else you'd like to know about Dharma? I'm happy to tell you more about his projects, skills, or how to get in touch!",
        },
        {
            patterns: ['bye', 'goodbye', 'see you', 'cya'],
            response: "Bye! 👋 Feel free to come back if you have more questions. Don't forget to check out the projects and reach out via the Contact section!",
        },
    ],
    fallback: [
        "Hmm, I'm not sure about that specific topic, but I can tell you about Dharma's **projects**, **skills**, **experience**, or **contact info**. What would you like to explore?",
        "I don't have a specific answer for that, but feel free to ask about Dharma's **tech stack**, **projects**, or **how to hire him**!",
        "That's outside my knowledge base! Try asking about **skills**, **projects**, **resume**, or **contact**. I'm here to help! 🤖",
    ],
    suggestions: ['Tell me about your projects', 'What are your skills?', 'How can I contact you?', 'Download your resume'],
};
