import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import StickyTab from './components/StickyTab';
import ChatModal from './components/ChatModal';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';
import SupportPanel from './components/SupportPanel';
import CartPanel from './components/CartPanel';
import ThankYouPage from './components/ThankYouPage';
import { CartItem, ProductInfo } from './types';
import { products } from './products';

const App: React.FC = () => {
    const [isChatOpen, setIsChatOpen] = useState(false);
    const [isSupportPanelOpen, setIsSupportPanelOpen] = useState(false);
    const [isCartPanelOpen, setIsCartPanelOpen] = useState(false);
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const [isCheckoutComplete, setIsCheckoutComplete] = useState(false);

    const handleAddToCart = (product: ProductInfo) => {
        setCartItems(prevItems => {
            const itemInCart = prevItems.find(item => item.id === product.id);
            if (itemInCart) {
                return prevItems.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            return [...prevItems, { ...product, quantity: 1 }];
        });
        setIsCartPanelOpen(true); // Open cart when item is added
    };
    
    const handleUpdateQuantity = (productId: number, newQuantity: number) => {
        setCartItems(prevItems => 
            prevItems.map(item => 
                item.id === productId ? { ...item, quantity: newQuantity } : item
            )
        );
    };

    const handleRemoveFromCart = (productId: number) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
    };

    const handleCheckout = () => {
        setCartItems([]);
        setIsCartPanelOpen(false);
        setIsCheckoutComplete(true);
    };

    const handleGoHome = () => {
        setIsCheckoutComplete(false);
    };

    const cartItemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

    if (isCheckoutComplete) {
        return <ThankYouPage onGoHome={handleGoHome} />;
    }

    return (
        <div className="relative min-h-screen font-sans flex flex-col">
            <Header cartItemCount={cartItemCount} onCartClick={() => setIsCartPanelOpen(true)} onChatClick={() => setIsChatOpen(true)} />
            <main className="flex-grow">
                <Hero />
                <ProductGrid onAddToCart={handleAddToCart} />
            </main>
            <Footer />
            <StickyTab onClick={() => setIsSupportPanelOpen(true)} />
            
            {/* Panels */}
            <SupportPanel isOpen={isSupportPanelOpen} onClose={() => setIsSupportPanelOpen(false)} />
            <CartPanel 
                isOpen={isCartPanelOpen} 
                onClose={() => setIsCartPanelOpen(false)} 
                cartItems={cartItems}
                onUpdateQuantity={handleUpdateQuantity}
                onRemove={handleRemoveFromCart}
                onCheckout={handleCheckout}
            />

            {/* Floating chat button removed — header now provides chat trigger */}
            
            <ChatModal 
                isOpen={isChatOpen} 
                onClose={() => setIsChatOpen(false)} 
                onAddToCart={handleAddToCart}
                products={products}
            />
        </div>
    );
};

export default App;