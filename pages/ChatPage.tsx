import React, { useState, useRef, useEffect, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChatMessage, ProductInfo } from '../types';
import { sendMessageToGemini } from '../services/geminiService';
import { SendIcon } from '../components/Icons';
import ChatProductCard from '../components/ChatProductCard';

interface ChatPageProps {
    onAddToCart: (product: ProductInfo) => void;
    products: ProductInfo[];
}

const ChatPage: React.FC<ChatPageProps> = ({ onAddToCart, products }) => {
    const navigate = useNavigate();
    const isApiKeySet = !!process.env.API_KEY;

    const initialMessage: ChatMessage = isApiKeySet
        ? { role: 'model', text: "Hi! I'm your shopping assistant. How can I help you find the perfect items for your little ones today?", product: null }
        : { role: 'model', text: "Welcome to Chat 'n Shop! To get started, please configure your Gemini API key. You'll need to set the `API_KEY` environment variable for this feature to work.", product: null };

    const [messages, setMessages] = useState<ChatMessage[]>([initialMessage]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(scrollToBottom, [messages]);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (!input.trim() || isLoading || !isApiKeySet) return;

        const userMessage: ChatMessage = { role: 'user', text: input, product: null };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);

        try {
            const { text, product } = await sendMessageToGemini(input, products);
            const modelMessage: ChatMessage = { role: 'model', text, product };
            setMessages(prev => [...prev, modelMessage]);
        } catch (error) {
            const errorMessage: ChatMessage = { role: 'model', text: "Sorry, I'm having trouble connecting. Please try again later.", product: null };
            setMessages(prev => [...prev, errorMessage]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 flex flex-col">
            {/* Header */}
            <header className="bg-white shadow-md sticky top-0 z-10">
                <div className="container mx-auto px-4 lg:px-8 py-4 flex items-center">
                    <div className="flex items-center gap-1 flex-1">
                        <button
                            onClick={() => navigate('/')}
                            className="text-gray-600 hover:text-pink-500 transition-colors"
                            aria-label="Go back"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <div className="flex items-center gap-1">
                            <div className="flex items-center justify-center bg-[#e52e8d] rounded-full overflow-hidden w-10 h-10">
                                <img
                                    src="/icon9.png"
                                    alt="ChatNShop Logo"
                                    className="object-contain scale-[1.35]"
                                />
                            </div>
                            <h1 className="text-2xl font-bold text-[#e52e8d]">Chat 'n Shop</h1>
                        </div>
                    </div>
                    
                    {/* Center - jollyroom logo and tagline */}
                    <div className="flex flex-col justify-center items-center absolute left-1/2 transform -translate-x-1/2">
                        <h1
                            className="text-[2.75rem] font-bold text-[#e52e8d] leading-none"
                            style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900 }}
                        >
                            jollyroom.
                        </h1>
                        <p className="text-sm text-gray-500 tracking-wider">
                            The Nordics' largest children's & baby store
                        </p>
                    </div>
                    
                    <div className="flex-1 flex justify-end">
                        <button
                            onClick={() => navigate('/')}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-colors shadow-sm hover:shadow-md"
                            aria-label="Return to home"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                            </svg>
                            <span className="font-semibold text-sm">Home</span>
                        </button>
                    </div>
                </div>
            </header>

            {/* Main Chat Area */}
            <main className="flex-1 flex flex-col">
                {/* Messages */}
                <div className="flex-1 overflow-y-auto container mx-auto px-4 lg:px-32 py-8 max-w-4xl">
                    <div className="space-y-4">
                        {messages.map((msg, index) => (
                            <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                <div className={`max-w-xs md:max-w-md lg:max-w-lg px-4 py-3 rounded-2xl ${
                                    msg.role === 'user' 
                                        ? 'bg-pink-500 text-white' 
                                        : (index === 0 && !isApiKeySet)
                                            ? 'bg-amber-100 text-amber-900 border border-amber-200'
                                            : 'bg-white text-gray-800 shadow-sm'
                                }`}>
                                    <p className="whitespace-pre-wrap">{msg.text}</p>
                                    {msg.role === 'model' && msg.product && (
                                        <ChatProductCard product={msg.product} onAddToCart={onAddToCart} />
                                    )}
                                </div>
                            </div>
                        ))}
                        {isLoading && (
                            <div className="flex justify-start">
                                <div className="max-w-xs md:max-w-md lg:max-w-lg px-4 py-3 rounded-2xl bg-white text-gray-800 shadow-sm">
                                    <div className="flex items-center space-x-2">
                                        <span className="h-2 w-2 bg-gray-500 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                                        <span className="h-2 w-2 bg-gray-500 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                                        <span className="h-2 w-2 bg-gray-500 rounded-full animate-bounce"></span>
                                    </div>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>
                </div>
                
                {/* Input Area - Fixed at bottom */}
                <div className="sticky bottom-0 bg-white border-t shadow-lg">
                    <div className="container mx-auto px-4 lg:px-32 py-6 max-w-4xl">
                        <form onSubmit={handleSubmit} className="flex items-center space-x-3">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder={isApiKeySet ? "Ask about products..." : "API key not configured"}
                                className="flex-1 p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-400 disabled:bg-gray-200 disabled:cursor-not-allowed"
                                disabled={isLoading || !isApiKeySet}
                            />
                            <button 
                                type="submit" 
                                disabled={isLoading || !input.trim() || !isApiKeySet} 
                                className="bg-pink-500 text-white p-4 rounded-full hover:bg-pink-600 disabled:bg-pink-300 disabled:cursor-not-allowed transition-colors shadow-md hover:shadow-lg"
                            >
                                <SendIcon />
                            </button>
                        </form>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default ChatPage;
