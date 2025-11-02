import React from 'react';
import { CloseIcon, MailIcon, PhoneIcon } from './Icons';

interface SupportPanelProps {
    isOpen: boolean;
    onClose: () => void;
}

const SupportPanel: React.FC<SupportPanelProps> = ({ isOpen, onClose }) => {
    const supportTopics = [
        "Other questions",
        "Returns & Exchanges",
        "Delivery",
        "Product specific questions",
        "Payment",
        "Price guarantee & Discounts",
        "Showroom & stores",
    ];

    return (
        <>
            {/* Overlay */}
            <div 
                className={`fixed inset-0 bg-black bg-opacity-40 z-40 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                onClick={onClose}
            ></div>

            {/* Panel */}
            <div className={`fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="flex flex-col h-full">
                    <header className="flex justify-between items-center p-5 border-b">
                        <h2 className="text-xl font-bold text-gray-800">How can we help you?</h2>
                        <button onClick={onClose} aria-label="Close support panel">
                            <CloseIcon className="h-7 w-7 text-gray-600 hover:text-pink-500"/>
                        </button>
                    </header>

                    <nav className="flex-grow p-5 space-y-3 overflow-y-auto">
                        {supportTopics.map(topic => (
                            <a 
                                key={topic}
                                href="#" 
                                className="block w-full text-left font-semibold text-gray-700 bg-pink-100 hover:bg-pink-200 transition-colors p-4 rounded-lg shadow-sm"
                            >
                                {topic}
                            </a>
                        ))}
                    </nav>

                    <footer className="p-5 border-t">
                        <h3 className="text-md font-bold text-gray-600 mb-3 text-center">Choose contact method!</h3>
                        <div className="flex justify-center items-center space-x-4">
                             <a href="#" className="flex items-center justify-center h-14 w-14 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-colors shadow-md" aria-label="Email us">
                                <MailIcon className="h-7 w-7" />
                             </a>
                             <a href="#" className="flex items-center justify-center h-14 w-14 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-colors shadow-md" aria-label="Call us">
                                <PhoneIcon className="h-7 w-7" />
                             </a>
                        </div>
                    </footer>
                </div>
            </div>
        </>
    );
};

export default SupportPanel;