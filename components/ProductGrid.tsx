import React from 'react';
import ProductCard from './ProductCard';
import { products } from '../products';

interface ProductGridProps {
    onAddToCart: (product: ProductInfo) => void;
}

const ProductGrid: React.FC<ProductGridProps> = ({ onAddToCart }) => {
    return (
        <section className="bg-white py-12">
            <div className="container mx-auto px-4 lg:px-8">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Featured Products</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductGrid;