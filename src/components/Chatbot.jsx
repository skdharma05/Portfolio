import React, { useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot, User, Sparkles } from 'lucide-react';
import useChatbotStore from '../store/useChatbotStore';
import { getResponse, simulateTypingDelay } from '../utils/chatEngine';
import { chatbotData } from '../data/portfolioData';
import { drawerVariant, chatMessageVariant } from '../utils/animations';

const TypingIndicator = () => (
    <div className="flex items-center gap-1.5 px-4 py-3">
        {[0, 1, 2].map((i) => (
            <motion.div
                key={i}
                className="w-2 h-2 bg-primary/60 rounded-full"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
            />
        ))}
    </div>
);

const MessageBubble = ({ message }) => {
    const isBot = message.role === 'bot';

    const formatText = (text) => {
        // Bold (**text**) and line breaks
        return text.split('\n').map((line, i) => {
            const parts = line.split(/(\*\*[^*]+\*\*)/g);
            return (
                <React.Fragment key={i}>
                    {i > 0 && <br />}
                    {parts.map((part, j) => {
                        if (part.startsWith('**') && part.endsWith('**')) {
                            return <strong key={j} className="text-white font-semibold">{part.slice(2, -2)}</strong>;
                        }
                        return <span key={j}>{part}</span>;
                    })}
                </React.Fragment>
            );
        });
    };

    return (
        <motion.div
            variants={chatMessageVariant}
            initial="hidden"
            animate="visible"
            className={`flex gap-2.5 ${isBot ? '' : 'flex-row-reverse'}`}
        >
            {/* Avatar */}
            <div
                className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1 ${isBot
                        ? 'bg-gradient-to-br from-primary to-secondary'
                        : 'bg-white/10 border border-white/20'
                    }`}
            >
                {isBot ? <Bot size={16} className="text-white" /> : <User size={16} className="text-text-secondary" />}
            </div>

            {/* Bubble */}
            <div
                className={`max-w-[75%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${isBot
                        ? 'bg-white/5 border border-white/10 text-text-secondary rounded-tl-sm'
                        : 'bg-gradient-to-br from-primary to-secondary text-white rounded-tr-sm'
                    }`}
            >
                {formatText(message.content)}
            </div>
        </motion.div>
    );
};

const Chatbot = () => {
    const { isOpen, toggleOpen, messages, addMessage, isTyping, setTyping, inputValue, setInputValue } =
        useChatbotStore();
    const messagesEndRef = useRef(null);
    const inputRef = useRef(null);

    // Greeting on first open
    useEffect(() => {
        if (isOpen && messages.length === 0) {
            const greeting = chatbotData.greetings[Math.floor(Math.random() * chatbotData.greetings.length)];
            setTimeout(() => {
                addMessage({ role: 'bot', content: greeting });
            }, 400);
        }
        if (isOpen) {
            setTimeout(() => inputRef.current?.focus(), 300);
        }
    }, [isOpen]);

    // Scroll to bottom on new message
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, isTyping]);

    const sendMessage = async (text) => {
        const userText = text || inputValue.trim();
        if (!userText) return;

        setInputValue('');
        addMessage({ role: 'user', content: userText });
        setTyping(true);

        const response = getResponse(userText);
        const delay = simulateTypingDelay(response);

        setTimeout(() => {
            setTyping(false);
            addMessage({ role: 'bot', content: response });
        }, delay);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    };

    return (
        <>
            {/* Chat window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        variants={drawerVariant}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="fixed bottom-24 right-4 sm:right-6 z-50 w-[340px] sm:w-[380px] max-h-[580px] flex flex-col rounded-2xl overflow-hidden border border-primary/20 shadow-glow-lg"
                        style={{ background: 'rgba(10,10,15,0.96)', backdropFilter: 'blur(20px)' }}
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-gradient-to-r from-primary/20 to-secondary/10">
                            <div className="flex items-center gap-3">
                                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                                    <Bot size={18} className="text-white" />
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-white">Portfolio Assistant</p>
                                    <div className="flex items-center gap-1.5">
                                        <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                                        <p className="text-xs text-text-muted">Online · Ask me anything!</p>
                                    </div>
                                </div>
                            </div>
                            <motion.button
                                onClick={toggleOpen}
                                className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-text-muted hover:text-white hover:bg-white/10 transition-all"
                                whileTap={{ scale: 0.9 }}
                                aria-label="Close chatbot"
                            >
                                <X size={16} />
                            </motion.button>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 min-h-[200px] max-h-[380px]">
                            {messages.map((msg) => (
                                <MessageBubble key={msg.id} message={msg} />
                            ))}
                            {isTyping && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="flex items-center gap-2.5"
                                >
                                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                                        <Bot size={16} className="text-white" />
                                    </div>
                                    <div className="bg-white/5 border border-white/10 rounded-2xl rounded-tl-sm">
                                        <TypingIndicator />
                                    </div>
                                </motion.div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Quick suggestions */}
                        {messages.length <= 1 && (
                            <div className="px-4 pb-2">
                                <p className="text-xs text-text-muted mb-2">Suggested:</p>
                                <div className="flex flex-wrap gap-2">
                                    {chatbotData.suggestions.map((s) => (
                                        <button
                                            key={s}
                                            onClick={() => sendMessage(s)}
                                            className="text-xs px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary hover:bg-primary hover:text-white transition-all duration-200"
                                        >
                                            {s}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Input */}
                        <div className="p-3 border-t border-white/10">
                            <div className="flex gap-2 items-end">
                                <input
                                    ref={inputRef}
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    onKeyDown={handleKeyDown}
                                    placeholder="Ask me anything..."
                                    className="flex-1 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder-text-muted focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
                                    aria-label="Chat input"
                                />
                                <motion.button
                                    onClick={() => sendMessage()}
                                    disabled={!inputValue.trim() || isTyping}
                                    className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white disabled:opacity-40 disabled:cursor-not-allowed flex-shrink-0"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.9 }}
                                    aria-label="Send message"
                                >
                                    <Send size={16} />
                                </motion.button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* FAB trigger */}
            <motion.button
                onClick={toggleOpen}
                className="fixed bottom-6 right-4 sm:right-6 z-50 w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white shadow-glow"
                whileHover={{ scale: 1.1, boxShadow: '0 0 40px rgba(99,102,241,0.8)' }}
                whileTap={{ scale: 0.9 }}
                animate={isOpen ? {} : {
                    boxShadow: ['0 0 20px rgba(99,102,241,0.4)', '0 0 40px rgba(99,102,241,0.8)', '0 0 20px rgba(99,102,241,0.4)'],
                }}
                transition={{ duration: 2, repeat: isOpen ? 0 : Infinity }}
                aria-label="Toggle AI assistant"
            >
                <AnimatePresence mode="wait">
                    {isOpen ? (
                        <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                            <X size={24} />
                        </motion.div>
                    ) : (
                        <motion.div key="msg" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                            <Sparkles size={24} />
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.button>
        </>
    );
};

export default Chatbot;
