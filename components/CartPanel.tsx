import React from 'react';
import { CartItem } from '../types';
import { CloseIcon } from './Icons';
import CartItemCard from './CartItemCard';

interface CartPanelProps {
    isOpen: boolean;
    onClose: () => void;
    cartItems: CartItem[];
    onUpdateQuantity: (productId: number, newQuantity: number) => void;
    onRemove: (productId: number) => void;
    onCheckout: () => void;
}

const CartPanel: React.FC<CartPanelProps> = ({ isOpen, onClose, cartItems, onUpdateQuantity, onRemove, onCheckout }) => {
    // FIX: Use currentPrice instead of price to match the CartItem type for subtotal calculation.
    const subtotal = cartItems.reduce((total, item) => total + parseFloat(item.currentPrice) * item.quantity, 0);
    const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
    const itemsText = totalQuantity === 1 ? 'item' : 'items';

    return (
        <>
            {/* Overlay */}
            <div 
                className={`fixed inset-0 bg-black bg-opacity-40 z-40 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                onClick={onClose}
            ></div>

            {/* Panel */}
            <div className={`fixed top-0 right-0 h-full w-full max-w-md bg-gray-50 shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="flex flex-col h-full">
                    <header className="flex justify-between items-center p-5 border-b bg-white">
                        <h2 className="text-xl font-bold text-gray-800">
                            Shopping Cart
                            {cartItems.length > 0 && (
                                <span className="ml-2 text-lg font-normal text-gray-500">
                                    ({totalQuantity} {itemsText})
                                </span>
                            )}
                        </h2>
                        <button onClick={onClose} aria-label="Close cart panel">
                            <CloseIcon className="h-7 w-7 text-gray-600 hover:text-pink-500"/>
                        </button>
                    </header>

                    {cartItems.length > 0 ? (
                        <main className="flex-grow p-4 space-y-3 overflow-y-auto">
                           {cartItems.map(item => (
                               <CartItemCard 
                                 key={item.id} 
                                 item={item}
                                 onUpdateQuantity={onUpdateQuantity}
                                 onRemove={onRemove}
                               />
                           ))}
                        </main>
                    ) : (
                        <div className="flex-grow flex flex-col justify-center items-center text-center p-5">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                            </svg>
                            <h3 className="text-xl font-semibold text-gray-700 mt-4">Your cart is empty</h3>
                            <p className="text-gray-500 mt-2">Add some products to get started!</p>
                        </div>
                    )}

                    <footer className="p-5 border-t bg-white">
                        <div className="flex justify-between items-center mb-4">
                            <span className="text-lg font-semibold text-gray-700">Subtotal:</span>
                            <span className="text-2xl font-bold text-gray-900">${subtotal.toFixed(2)}</span>
                        </div>
                         <button 
                            onClick={onCheckout}
                            disabled={cartItems.length === 0}
                            className="w-full bg-pink-500 text-white font-bold py-3 px-4 rounded-lg hover:bg-pink-600 transition-colors disabled:bg-pink-300 disabled:cursor-not-allowed"
                         >
                            Proceed to Checkout
                        </button>
                    </footer>
                </div>
            </div>
        </>
    );
};

export default CartPanel;