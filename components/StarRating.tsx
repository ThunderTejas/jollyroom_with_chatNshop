import React from 'react';
import { StarIcon } from './Icons';

interface StarRatingProps {
  rating: number;
  reviewCount: number;
}

const StarRating: React.FC<StarRatingProps> = ({ rating, reviewCount }) => {
  return (
    <div className="flex items-center space-x-1">
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <StarIcon key={i} className={`h-4 w-4 ${i < Math.round(rating) ? 'text-yellow-400' : 'text-gray-300'}`} />
        ))}
      </div>
      <span className="text-xs text-gray-500">({reviewCount})</span>
    </div>
  );
};

export default StarRating;
