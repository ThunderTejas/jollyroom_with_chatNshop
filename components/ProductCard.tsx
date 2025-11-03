import React from 'react';
import { ProductInfo } from '../types';
import { HeartIcon } from './Icons';
import StarRating from './StarRating';

interface ProductCardProps {
    product: ProductInfo;
    onAddToCart: (product: ProductInfo) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
    const { 
        imageUrl, 
        name, 
        subtitle,
        currentPrice, 
        originalPrice,
        tags,
        review,
        rating,
        reviewCount,
        colors
    } = product;

    return (
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden h-full flex flex-col">
            <div className="relative">
                <a href="#" className="block">
                    <div className="relative pb-[125%] bg-gray-100">
                        <img className="absolute h-full w-full object-cover" src={imageUrl} alt={name} loading="lazy" />
                    </div>
                </a>
                <div className="absolute top-2 left-2 flex flex-col space-y-1">
                    {tags?.map(tag => (
                        <span key={tag.text} className={`px-2 py-0.5 text-xs font-semibold rounded ${tag.bgColor} ${tag.textColor}`}>
                            {tag.text}
                        </span>
                    ))}
                </div>
                <button className="absolute top-2 right-2 p-1.5 bg-white/70 rounded-full text-gray-600 hover:text-pink-500 hover:bg-white transition-colors" aria-label="Add to wishlist">
                    <HeartIcon />
                </button>
                {review && (
                     <div className="absolute bottom-2 left-2 right-2 flex items-center space-x-2">
                        <img src={review.avatarUrl} alt="Reviewer" className="h-8 w-8 rounded-full border-2 border-white" />
                        <div className="bg-white/90 text-gray-800 text-xs px-2 py-1 rounded-lg shadow">
                            {review.text}
                        </div>
                    </div>
                )}
            </div>

            <div className="p-3 flex flex-col flex-grow text-left">
                <div className="flex-grow">
                    <StarRating rating={rating} reviewCount={reviewCount} />
                    <a href="#" className="block mt-1">
                        <h3 className="text-sm font-semibold text-gray-800 hover:text-pink-500 transition-colors">{name}</h3>
                        {subtitle && <p className="text-sm text-gray-500">{subtitle}</p>}
                    </a>

                    <div className="flex items-center space-x-2 mt-2">
                        {colors?.slice(0, 4).map((color, index) => (
                            <span key={index} className="h-4 w-4 rounded-full border" style={{ backgroundColor: color }}></span>
                        ))}
                        {colors && colors.length > 4 && <span className="text-sm">+</span>}
                    </div>
                </div>

                <div className="mt-2">
                    <p className="text-lg font-bold text-pink-600">${currentPrice}</p>
                    {originalPrice && (
                        <p className="text-sm text-gray-500">
                           Orig. price: <span className="line-through">${originalPrice}</span>
                        </p>
                    )}
                </div>

                <div className="mt-3">
                    <button
                        onClick={() => onAddToCart(product)}
                        className="w-full bg-pink-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-pink-600 transition-colors focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
                        aria-label={`Add ${name} to cart`}
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;