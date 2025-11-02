import React from 'react';
import { ProductInfo } from '../types';

interface ChatProductCardProps {
    product: ProductInfo;
    onAddToCart: (product: ProductInfo) => void;
}

const ChatProductCard: React.FC<ChatProductCardProps> = ({ product, onAddToCart }) => {
    return (
        <div className="mt-2 border border-gray-200 rounded-lg overflow-hidden bg-white max-w-xs">
            <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover" />
            <div className="p-3">
                <h4 className="font-bold text-gray-800">{product.name}</h4>
                {/* FIX: Use currentPrice instead of price to match the ProductInfo type. */}
                <p className="text-lg font-semibold text-gray-900 mt-1">${product.currentPrice}</p>
                <button 
                    onClick={() => onAddToCart(product)}
                    className="w-full mt-3 bg-pink-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-pink-600 transition-colors"
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default ChatProductCard;