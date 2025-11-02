import React, { useState, useRef, useEffect, FormEvent } from 'react';
import { ChatMessage, ProductInfo } from '../types';
import { sendMessageToGemini } from '../services/geminiService';
import { CloseIcon, SendIcon } from './Icons';
import ChatProductCard from './ChatProductCard';

interface ChatModalProps {
    isOpen: boolean;
    onClose: () => void;
    onAddToCart: (product: ProductInfo) => void;
}

const ChatModal: React.FC<ChatModalProps> = ({ isOpen, onClose, onAddToCart }) => {
    const [messages, setMessages] = useState<ChatMessage[]>([
        { role: 'model', text: "Hi! I'm your shopping assistant. How can I help you find the perfect items for your little ones today?", product: null }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(scrollToBottom, [messages]);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (!input.trim() || isLoading) return;

        const userMessage: ChatMessage = { role: 'user', text: input, product: null };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);

        try {
            const { text, product } = await sendMessageToGemini(input);
            const modelMessage: ChatMessage = { role: 'model', text, product };
            setMessages(prev => [...prev, modelMessage]);
        } catch (error) {
            const errorMessage: ChatMessage = { role: 'model', text: "Sorry, I'm having trouble connecting. Please try again later.", product: null };
            setMessages(prev => [...prev, errorMessage]);
        } finally {
            setIsLoading(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg shadow-2xl w-full max-w-lg h-[80vh] flex flex-col transform transition-all duration-300 scale-100 opacity-100">
                <header className="flex items-center justify-between p-4 border-b">
                    <h2 className="text-xl font-bold text-[#e52e8d]">Chat 'n Shop</h2>
                    <button onClick={onClose} aria-label="Close chat">
                        <CloseIcon />
                    </button>
                </header>

                <main className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
                    {messages.map((msg, index) => (
                        <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                            <div className={`max-w-xs md:max-w-md lg:max-w-lg px-4 py-2 rounded-2xl ${msg.role === 'user' ? 'bg-pink-500 text-white' : 'bg-gray-200 text-gray-800'}`}>
                                <p className="whitespace-pre-wrap">{msg.text}</p>
                                {msg.role === 'model' && msg.product && (
                                    <ChatProductCard product={msg.product} onAddToCart={onAddToCart} />
                                )}
                            </div>
                        </div>
                    ))}
                    {isLoading && (
                        <div className="flex justify-start">
                             <div className="max-w-xs md:max-w-md lg:max-w-lg px-4 py-2 rounded-2xl bg-gray-200 text-gray-800">
                                <div className="flex items-center space-x-2">
                                    <span className="h-2 w-2 bg-gray-500 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                                    <span className="h-2 w-2 bg-gray-500 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                                    <span className="h-2 w-2 bg-gray-500 rounded-full animate-bounce"></span>
                                </div>
                            </div>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </main>
                
                <footer className="p-4 border-t">
                    <form onSubmit={handleSubmit} className="flex items-center space-x-2">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Ask about products..."
                            className="flex-1 p-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-400"
                            disabled={isLoading}
                        />
                        <button type="submit" disabled={isLoading || !input.trim()} className="bg-pink-500 text-white p-3 rounded-full hover:bg-pink-600 disabled:bg-pink-300 disabled:cursor-not-allowed transition-colors">
                           <SendIcon />
                        </button>
                    </form>
                </footer>
            </div>
        </div>
    );
};

export default ChatModal;