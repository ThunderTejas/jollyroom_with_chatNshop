import React from 'react';
import useHideOnScroll from '../hooks/useHideOnScroll';
import { CheckIcon, SearchIcon, UserIcon, HeartIcon, BagIcon } from './Icons';

interface HeaderProps {
  cartItemCount: number;
  onCartClick: () => void;
  onChatClick?: () => void;
}

const TopBar = () => (
  <div className="bg-[#fff0f5] text-sm text-gray-800 py-2">
    <div className="container mx-auto px-6 lg:px-32 flex justify-center items-center space-x-4 md:space-x-8">
      <div className="flex items-center space-x-1">
        <CheckIcon />
        <span>Price Guarantee</span>
      </div>
      <div className="flex items-center space-x-1">
        <CheckIcon />
        <span>Free Shipping on orders over $100</span>
      </div>
      <div className="flex items-center space-x-1">
        <CheckIcon />
        <span>365-Day Returns</span>
      </div>
    </div>
  </div>
);

// FIX: Update MainHeader props to accept cartItemCount and destructure it.
const MainHeader: React.FC<{ onCartClick: () => void; cartItemCount: number | string; onChatClick?: () => void }> = ({ onCartClick, cartItemCount, onChatClick }) => (
  <div className="border-b">
    <div className="container mx-auto px-6 lg:px-32 py-6 flex justify-between items-center space-x-6">
      {/* Logo on the left */}
      <div className="flex-1">
        <h1 className="text-[2.75rem] font-bold text-[#e52e8d]" style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900 }}>jollyroom.</h1>
        <p className="text-sm text-gray-500 tracking-wider">The Nordics' largest children's & baby store</p>
      </div>

      {/* Search bar in the middle */}
      <div className="flex-1 flex justify-center">
        <div className="hidden lg:block relative w-full max-w-lg">
          <input type="text" placeholder="Hey, what are you looking for?" className="w-full bg-gray-100 border border-gray-200 rounded-full py-2 pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-pink-300" />
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
            <SearchIcon />
          </div>
        </div>
      </div>

      {/* Icons and Customer Service on the right */}
      <div className="flex-1 flex justify-end items-center space-x-6">
        <button
          onClick={onChatClick}
          aria-label="Open chat"
          className="inline-flex items-center gap-2 text-white rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-peach-300"
        >
          <span className="sr-only">Open chat</span>
          {/* pill-shaped chat button to show horizontal logo */}
          <div className="px-5 py-1.5 rounded-md shadow-lg transform scale-105 transition-all duration-200 hover:scale-110 overflow-hidden flex items-center justify-center">
            <img src="/icon8.png" alt="Chat" className="h-12 w-auto max-w-[200px] object-contain scale-150 transition-transform" style={{ filter: 'brightness(1.3) saturate(1.3) hue-rotate(350deg)' }} />
          </div>
        </button>
        <div className="flex items-center space-x-3">
          <button aria-label="Account"><UserIcon /></button>
          <button aria-label="Wishlist"><HeartIcon /></button>
          <button onClick={onCartClick} aria-label="Cart" className="relative">
            <BagIcon />
            {/* FIX: Use parseInt to safely check cartItemCount which can be a number or string like '9+' */}
            {parseInt(String(cartItemCount), 10) > 0 && (
              <span className="absolute -top-1 -right-2 bg-pink-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {cartItemCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </div>
  </div>
);

const NavBar = () => {
  const navItems = [
    'News', 'Presents', 'Toys', 'Children\'s Clothing', 'Children\'s Shoes',
    'Prams', 'Car seats', 'The Children\'s Room', 'Baby Products', 'Mama', 'Sport',
    'Leisure & Hobbies'
  ];
  return (
    <nav className="hidden md:block shadow-sm">
      <div className="container mx-auto px-6 lg:px-32">
        <ul className="flex justify-center items-center space-x-6 py-3 overflow-x-auto whitespace-nowrap">
          {navItems.map(item => (
            <li key={item}>
              <a href="#" className="text-gray-700 font-small hover:text-pink-500 transition-colors duration-200">{item}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

const Header: React.FC<HeaderProps> = ({ cartItemCount, onCartClick, onChatClick }) => {
    const totalItems = cartItemCount > 9 ? '9+' : cartItemCount;
    const hidden = useHideOnScroll();

    return (
      <header
        // keep the header in the flow (sticky) and perform visual hide using transform
        className={`bg-white sticky top-0 z-40 transform transition-transform duration-300 ease-in-out ${hidden ? '-translate-y-full' : 'translate-y-0'}`}
        aria-hidden={hidden}
      >
        <TopBar />
        <MainHeader onCartClick={onCartClick} cartItemCount={totalItems} onChatClick={onChatClick} />
        <NavBar />
      </header>
    );
};

export default Header;