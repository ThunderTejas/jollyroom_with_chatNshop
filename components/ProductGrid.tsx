import React from 'react';
import ProductCard from './ProductCard';
import { ProductInfo } from '../types';

export const products: ProductInfo[] = [
    {
        id: 1,
        imageUrl: 'https://www.jollyroom.no/storage/66A0C88F8E6BA634F01B1C20F80E71991CBFB9BB38FA5BA120C620FEF58A2E22/0005408b9a7a404286414c0e97f6391e/jpg/media/5bf4d2fcfb084442808e31b259323019/503825-I13-1356_5.jpg',
        category: 'Kids\' Clothing',
        name: 'Didriksons Lun Winter Jacket',
        subtitle: 'Rusty Wine',
        currentPrice: '65.99',
        originalPrice: '99.99',
        tags: [
            { text: 'Best in Test', bgColor: 'bg-blue-100', textColor: 'text-blue-700' },
            { text: 'Mid Season', bgColor: 'bg-purple-100', textColor: 'text-purple-700' },
        ],
        review: { avatarUrl: 'https://i.pravatar.cc/40?u=person1', text: 'Warm and flexible jacket!' },
        rating: 4.8,
        reviewCount: 31,
        colors: ['#B94E5A', '#9B89B3', '#79AC78', '#F3BAD6'],
    },
    {
        id: 2,
        imageUrl: 'https://streams.frend.dev/image/v1?url=https://vikingfootwear.centracdn.net/client/dynamic/images/735_edd834ed76-5-25100-4803-c-1350x0.jpg&width=3840&quality=80',
        category: 'Kids\' Shoes',
        name: 'Viking Ultra Lined Rubber Boots',
        subtitle: 'Grape/Grey',
        currentPrice: '47.99',
        originalPrice: '64.99',
        tags: [ 
            { text: 'Best in test', bgColor: 'bg-blue-100', textColor: 'text-blue-700' },
            { text: 'Super price', bgColor: 'bg-indigo-100', textColor: 'text-indigo-700' }
        ],
        review: { avatarUrl: 'https://i.pravatar.cc/40?u=person2', text: 'Love these winter boots! Bought now.' },
        rating: 4.9,
        reviewCount: 291,
        colors: ['#4d2d52', '#3b82f6', '#1f2937'],
    },
    {
        id: 3,
        imageUrl: 'https://www.jollyroom.no/storage/07145EBE41602B37619E245FEB68371DAC7F9F3CE1BB7B718D8492D51FC670F7/f144e00c4aba43c4b3143b22b86edcbc/337-450-0-jpg.Jpeg/media/50714be2d72144c7b3cc617938f44837/119263-009-4300_1.jpeg',
        category: 'Kids\' Shoes',
        name: 'Nordbjörn Snowfall Winter boots',
        subtitle: 'Navy',
        currentPrice: '44.99',
        originalPrice: '59.99',
        tags: [
            { text: 'Best in test', bgColor: 'bg-blue-100', textColor: 'text-blue-700' },
            { text: 'Super price', bgColor: 'bg-indigo-100', textColor: 'text-indigo-700' }
        ],
        review: { avatarUrl: 'https://i.pravatar.cc/40?u=person3', text: 'Solid and rain-resistant boots, so satisfied!' },
        rating: 4.5,
        reviewCount: 7,
        colors: ['#3b82f6', '#1f2937', '#a3e635', '#f9a8d4'],
    },
    {
        id: 4,
        imageUrl: 'https://cdn.shopify.com/s/files/1/0690/7111/0431/files/5100117C-8680_zoom_12.jpg?v=1760606383&width=1536&quality=75&format=pjpg',
        category: 'Strollers',
        name: 'Voksi Urban Travel Bag',
        subtitle: 'Meadow Green Wings',
        currentPrice: '229.50',
        originalPrice: '299.50',
        tags: [
            { text: 'Best in test', bgColor: 'bg-blue-100', textColor: 'text-blue-700' },
            { text: 'Super price', bgColor: 'bg-indigo-100', textColor: 'text-indigo-700' }
        ],
        review: { avatarUrl: 'https://i.pravatar.cc/40?u=person4', text: 'Super nice, soft and warm travel bag! Perfect.' },
        rating: 5,
        reviewCount: 35,
        colors: ['#84cc16', '#3b82f6', '#4b5563'],
    },
    {
        id: 5,
        imageUrl: 'https://www.fjellsport.no/assets/blobs/didriksons-aw2025-kids-a7r0370-1x1-c252-09949a42ed.jpeg?preset=tiny&dpr=2',
        category: 'Kids\' Clothing',
        name: 'Reimatec Gotland Overall',
        subtitle: 'Green Clay',
        currentPrice: '137.99',
        originalPrice: '174.99',
        tags: [
            { text: 'Best in test', bgColor: 'bg-blue-100', textColor: 'text-blue-700' },
            { text: 'Newness', bgColor: 'bg-pink-100', textColor: 'text-pink-700' }
        ],
        review: { avatarUrl: 'https://i.pravatar.cc/40?u=person5', text: 'Absolutely incredible overall! Definitely the...' },
        rating: 4.9,
        reviewCount: 7,
        colors: ['#84cc16', '#3b82f6', '#a3e635'],
    },
    ...Array.from({ length: 25 }, (_, i) => ({ 
        id: i + 6,
        imageUrl: `https://images.unsplash.com/photo-1550344071-6a1de58f35f8?q=80&w=600&auto=format&fit=crop&ixid=${i}`,
        category: ['Toys', 'Gifts', 'Nursery', 'Kids\' Clothing', 'Kids\' Shoes'][i % 5],
        name: 'Assorted Baby Product',
        subtitle: ['Fun Series', 'Cozy Collection', 'Playtime Essentials', 'Outdoor Gear', 'Cuddly Comfort'][i % 5],
        currentPrice: (20 + i * 3.5).toFixed(2),
        originalPrice: (25 + i * 4).toFixed(2),
        tags: i % 4 === 0 ? [{ text: 'Sale', bgColor: 'bg-red-100', textColor: 'text-red-700' }] : [],
        review: { avatarUrl: `https://i.pravatar.cc/40?u=person${i + 6}`, text: 'A really great find!' },
        rating: 4.5 + (i % 5) / 10,
        reviewCount: 10 + i * 5,
        colors: ['#3b82f6', '#10b981', '#f97316', '#9333ea'],
    }))
];

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