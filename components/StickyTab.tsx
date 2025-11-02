import React from 'react';

interface StickyTabProps {
    onClick: () => void;
}

const StickyTab: React.FC<StickyTabProps> = ({ onClick }) => {
    return (
        <button 
            onClick={onClick}
            className="fixed top-1/2 right-0 transform translate-x-[calc(50%-18px)] -rotate-90 -translate-y-1/2 bg-[#e52e8d] text-white font-bold py-2 px-6 rounded-t-md shadow-lg z-30 hover:bg-pink-600 transition-colors"
            aria-label="Open Customer Service"
        >
            Customer
        </button>
    );
};

export default StickyTab;