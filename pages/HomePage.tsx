import React from 'react';
import Hero from '../components/Hero';
import ProductGrid from '../components/ProductGrid';
import { ProductInfo } from '../types';

interface HomePageProps {
    onAddToCart: (product: ProductInfo) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onAddToCart }) => {
    return (
        <main className="flex-grow">
            <Hero />
            <ProductGrid onAddToCart={onAddToCart} />
        </main>
    );
};

export default HomePage;
