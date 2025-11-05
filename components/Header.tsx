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

const MainHeader: React.FC<{
  onCartClick: () => void;
  cartItemCount: number | string;
  onChatClick?: () => void;
}> = ({ onCartClick, cartItemCount, onChatClick }) => (
  <div className="border-b">
    <div className="container mx-auto px-6 lg:px-32 py-6 flex justify-between items-center">
      {/* Left Section - Logo */}
      <div className="flex flex-col justify-center flex-1">
        <h1
          className="text-[2.75rem] font-bold text-[#e52e8d] leading-none"
          style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900 }}
        >
          jollyroom.
        </h1>
        <p className="text-sm text-gray-500 tracking-wider">
          The Nordics' largest children's & baby store
        </p>
      </div>

      {/* Middle Section - Search + Chat */}
      <div className="flex flex-[2] justify-center items-center space-x-6">
        {/* Search Bar */}
        <div className="relative w-full max-w-lg">
          <input
            type="text"
            placeholder="Hey, what are you looking for?"
            className="w-full bg-gray-100 border border-gray-200 rounded-full py-2 pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-pink-300"
          />
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
            <SearchIcon />
          </div>
        </div>

        {/* Chat N’Shop Button — with enlarged internal image */}
        <div className="flex-none flex items-center justify-center">
          <button
            onClick={onChatClick}
            aria-label="Open Chat N'Shop"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#e52e8d]
                       h-[41.6px] w-[210px] px-4 shadow-sm hover:shadow-md transition-[box-shadow,transform]
                       duration-150 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-pink-200"
          >
            {/* Logo inside pink circle with enlarged internal image */}
            <div
              className="flex items-center justify-center bg-[#e52e8d] rounded-full overflow-hidden"
              style={{
                width: '30px',
                height: '30px',
              }}
            >
              <img
                src="/icon9.png" // your logo path in /public
                alt="ChatNShop Logo"
                className="object-contain scale-[1.35]" // <— enlarged internal logo
              />
            </div>

            <span className="text-white uppercase tracking-wide text-[13px] font-extrabold leading-none">
              Chat N’Shop
            </span>
          </button>
        </div>
      </div>

      {/* Right Section - Icons */}
      <div className="flex flex-1 justify-end items-center space-x-6">
        <button aria-label="Account">
          <UserIcon />
        </button>
        <button aria-label="Wishlist">
          <HeartIcon />
        </button>
        <button onClick={onCartClick} aria-label="Cart" className="relative">
          <BagIcon />
          {parseInt(String(cartItemCount), 10) > 0 && (
            <span className="absolute -top-1 -right-2 bg-pink-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
              {cartItemCount}
            </span>
          )}
        </button>
      </div>
    </div>
  </div>
);

const NavBar = () => {
  const navItems = [
    'News',
    'Presents',
    'Toys',
    "Children's Clothing",
    "Children's Shoes",
    'Prams',
    'Car seats',
    "The Children's Room",
    'Baby Products',
    'Mama',
    'Sport',
    'Leisure & Hobbies',
  ];
  return (
    <nav className="hidden md:block shadow-sm">
      <div className="container mx-auto px-6 lg:px-32">
        <ul className="flex justify-center items-center space-x-6 py-3 overflow-x-auto whitespace-nowrap">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href="#"
                className="text-gray-700 text-sm hover:text-pink-500 transition-colors duration-200"
              >
                {item}
              </a>
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
      className={`bg-white sticky top-0 z-40 transform transition-transform duration-300 ease-in-out ${
        hidden ? '-translate-y-full' : 'translate-y-0'
      }`}
      aria-hidden={hidden}
    >
      <TopBar />
      <MainHeader
        onCartClick={onCartClick}
        cartItemCount={totalItems}
        onChatClick={onChatClick}
      />
      <NavBar />
    </header>
  );
};

export default Header;
