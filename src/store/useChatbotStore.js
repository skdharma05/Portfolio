import { create } from 'zustand';

const useChatbotStore = create((set, get) => ({
    isOpen: false,
    messages: [],
    isTyping: false,
    inputValue: '',

    setOpen: (open) => set({ isOpen: open }),
    toggleOpen: () => set((state) => ({ isOpen: !state.isOpen })),

    addMessage: (message) =>
        set((state) => ({
            messages: [...state.messages, { id: Date.now(), ...message }],
        })),

    setTyping: (typing) => set({ isTyping: typing }),
    setInputValue: (value) => set({ inputValue: value }),

    clearMessages: () => set({ messages: [] }),
}));

export default useChatbotStore;
