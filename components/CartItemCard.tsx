import React from 'react';
import { CartItem } from '../types';
import { PlusIcon, MinusIcon, TrashIcon } from './Icons';

interface CartItemCardProps {
    item: CartItem;
    onUpdateQuantity: (productId: number, newQuantity: number) => void;
    onRemove: (productId: number) => void;
}

const CartItemCard: React.FC<CartItemCardProps> = ({ item, onUpdateQuantity, onRemove }) => {
    const handleQuantityChange = (change: number) => {
        const newQuantity = item.quantity + change;
        if (newQuantity > 0) {
            onUpdateQuantity(item.id, newQuantity);
        } else {
            onRemove(item.id);
        }
    };

    return (
        <div className="flex items-center space-x-4 p-3 bg-white rounded-lg shadow-sm">
            <img src={item.imageUrl} alt={item.name} className="w-16 h-20 object-cover rounded-md" />
            <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-sm text-gray-800 truncate">{item.name}</h4>
                {/* FIX: Use currentPrice instead of price to match the CartItem type. */}
                <p className="text-md font-bold text-gray-900">${(parseFloat(item.currentPrice) * item.quantity).toFixed(2)}</p>
                {item.quantity > 1 && (
                    // FIX: Use currentPrice instead of price to match the CartItem type.
                    <p className="text-xs text-gray-500">(${item.currentPrice} each)</p>
                )}
                <div className="flex items-center mt-2">
                    <div className="flex items-center border border-gray-300 rounded-full">
                        <button onClick={() => handleQuantityChange(-1)} className="p-1 text-gray-600 hover:bg-gray-100 rounded-l-full" aria-label="Decrease quantity">
                            <MinusIcon />
                        </button>
                        <span className="font-bold text-sm w-8 text-center px-2 text-gray-800 border-l border-r border-gray-300">{item.quantity}</span>
                        <button onClick={() => handleQuantityChange(1)} className="p-1 text-gray-600 hover:bg-gray-100 rounded-r-full" aria-label="Increase quantity">
                            <PlusIcon />
                        </button>
                    </div>
                </div>
            </div>
            <button onClick={() => onRemove(item.id)} className="text-gray-500 hover:text-red-600 p-1" aria-label={`Remove ${item.name}`}>
                <TrashIcon />
            </button>
        </div>
    );
};

export default CartItemCard;