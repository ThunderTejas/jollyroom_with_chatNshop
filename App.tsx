import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import StickyTab from './components/StickyTab';
import Footer from './components/Footer';
import SupportPanel from './components/SupportPanel';
import CartPanel from './components/CartPanel';
import ThankYouPage from './components/ThankYouPage';
import HomePage from './pages/HomePage';
import ChatPage from './pages/ChatPage';
import { CartItem, ProductInfo } from './types';
import { products } from './products';

const App: React.FC = () => {
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
        <Router>
            <AppContent
                cartItemCount={cartItemCount}
                cartItems={cartItems}
                isSupportPanelOpen={isSupportPanelOpen}
                isCartPanelOpen={isCartPanelOpen}
                setIsSupportPanelOpen={setIsSupportPanelOpen}
                setIsCartPanelOpen={setIsCartPanelOpen}
                handleAddToCart={handleAddToCart}
                handleUpdateQuantity={handleUpdateQuantity}
                handleRemoveFromCart={handleRemoveFromCart}
                handleCheckout={handleCheckout}
            />
        </Router>
    );
};

interface AppContentProps {
    cartItemCount: number;
    cartItems: CartItem[];
    isSupportPanelOpen: boolean;
    isCartPanelOpen: boolean;
    setIsSupportPanelOpen: (value: boolean) => void;
    setIsCartPanelOpen: (value: boolean) => void;
    handleAddToCart: (product: ProductInfo) => void;
    handleUpdateQuantity: (productId: number, newQuantity: number) => void;
    handleRemoveFromCart: (productId: number) => void;
    handleCheckout: () => void;
}

const AppContent: React.FC<AppContentProps> = ({
    cartItemCount,
    cartItems,
    isSupportPanelOpen,
    isCartPanelOpen,
    setIsSupportPanelOpen,
    setIsCartPanelOpen,
    handleAddToCart,
    handleUpdateQuantity,
    handleRemoveFromCart,
    handleCheckout,
}) => {
    const navigate = useNavigate();

    return (
        <div className="relative min-h-screen font-sans flex flex-col">
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <Header 
                                cartItemCount={cartItemCount} 
                                onCartClick={() => setIsCartPanelOpen(true)} 
                                onChatClick={() => navigate('/chat')} 
                            />
                            <HomePage onAddToCart={handleAddToCart} />
                            <Footer />
                            <StickyTab onClick={() => setIsSupportPanelOpen(true)} />
                        </>
                    }
                />
                <Route
                    path="/chat"
                    element={
                        <ChatPage 
                            onAddToCart={handleAddToCart} 
                            products={products}
                        />
                    }
                />
            </Routes>
            
            {/* Panels - Available on all routes */}
            <SupportPanel isOpen={isSupportPanelOpen} onClose={() => setIsSupportPanelOpen(false)} />
            <CartPanel 
                isOpen={isCartPanelOpen} 
                onClose={() => setIsCartPanelOpen(false)} 
                cartItems={cartItems}
                onUpdateQuantity={handleUpdateQuantity}
                onRemove={handleRemoveFromCart}
                onCheckout={handleCheckout}
            />
        </div>
    );
};

export default App;