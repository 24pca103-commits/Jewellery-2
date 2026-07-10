import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, ChevronDown, Menu, X, Search, User, Heart, Phone, Home, Info, Tag, Sparkle, Star, Percent, Sparkles, Gift } from 'lucide-react';

export default function Navbar({ cartCount = 0, wishlistCount = 0, onCartToggle }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isShopDropdownOpen, setIsShopDropdownOpen] = useState(false);

  const shopTypes = [
    { name: 'Jhumka Collection', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAuidViczzylZ9HEzZ2K1_W_QiUWwFH3VKbjf5BV4Y_w&s=10' },
    { name: 'Stud Earrings', img: 'https://estailofashion.com/cdn/shop/files/Picresize-Estailo_1080x1080px_2.5x2.5in_-2023-09-09T202151.440.jpg?v=1751064551&width=2048' },
    { name: 'Hoop Earrings', img: 'https://annachy-prod-assets.annachy.com/pims/products-v1/013787ROSGOL1_2-image1_v1777379197301.webp' },
    { name: 'Chandelier Earrings', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxSmLAOXzwtm28yUTG0iWf4fu_fosFpAFYCHK0w5yPyTLlVSc6_oj1YAs&s=10' },
    { name: 'Diamond Earrings', img: 'https://m.media-amazon.com/images/I/61-IIS0rxuL._AC_UY1100_.jpg' },
    { name: 'Gold Earrings', img: 'https://images.jdmagicbox.com/quickquotes/images_main/women-elegant-earring-golden-2229100902-717mfypc.jpg' }
  ];

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300">
        
        {/* Top Bar for Contact & Scrolling rates Announcement */}
        <div className="bg-[#1C120C] border-b border-gold/15 flex items-center h-9 overflow-hidden">
          {/* Static Left Portion */}
          <div className="flex-shrink-0 flex items-center bg-[#1C120C] z-10 pr-4 pl-4 sm:pl-8 border-r border-white/10 h-full">
            <a href="tel:+919385411051" className="flex items-center gap-1.5 text-gold-light hover:text-gold transition-colors text-[10px] font-bold tracking-wider uppercase">
              <Phone className="w-3.5 h-3.5 text-gold" />
              <span>Call Us: +91 93854 11051</span>
            </a>
          </div>

          {/* Scrolling Marquee Right Portion */}
          <div className="top-bar-marquee-container flex-grow h-full bg-[#1C120C]">
            <div className="top-bar-marquee-track">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="flex items-center">
                  <div className="top-bar-announcement">
                    <Sparkles className="w-3.5 h-3.5 text-gold" />
                    <span>Live Gold (24K): $75.50/g</span>
                  </div>
                  <div className="top-bar-announcement">
                    <Sparkles className="w-3.5 h-3.5 text-gold" />
                    <span>Silver (925): $1.80/g</span>
                  </div>
                  <div className="top-bar-announcement">
                    <Gift className="w-3.5 h-3.5 text-gold" />
                    <span>Corporate & Gifting Inquiries</span>
                  </div>
                  <div className="top-bar-announcement">
                    <span>✦ BIS Hallmarked & Insured Delivery</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Header Row - Solid Premium Cream-Brown Backdrop */}
        <div className="w-full py-4 bg-[#F2ECE7] shadow-premium border-b border-gold/15">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
            
             {/* Left: Logo */}
            <div className="flex-shrink-0">
              <a href="#" className="flex items-center group">
                <div className="relative h-11 sm:h-12 w-32 sm:w-36 transition-transform duration-300 group-hover:scale-102">
                  <img 
                    src="/logo.png" 
                    alt="Thodoo Jewellery" 
                    className="absolute inset-0 w-full h-full object-contain"
                    style={{ 
                      clipPath: 'polygon(0% 0%, 49% 0%, 49% 32%, 40% 32%, 40% 100%, 0% 100%)',
                      filter: 'brightness(0) invert(1) drop-shadow(1px 0px 0px #2A1B14) drop-shadow(-1px 0px 0px #2A1B14) drop-shadow(0px 1px 0px #2A1B14) drop-shadow(0px -1px 0px #2A1B14) drop-shadow(0px 0px 1px #2A1B14)' 
                    }}
                  />
                  <img 
                    src="/logo.png" 
                    alt="Thodoo Jewellery" 
                    className="absolute inset-0 w-full h-full object-contain"
                    style={{ 
                      clipPath: 'polygon(48% 0%, 100% 0%, 100% 100%, 39% 100%, 39% 28%, 48% 28%)',
                      filter: 'brightness(0) invert(9%) sepia(21%) saturate(1915%) hue-rotate(336deg) brightness(96%) contrast(93%)' 
                    }}
                  />
                </div>
              </a>
            </div>

            {/* Center Navigation Links - Always Coffee Brown */}
            <nav className="hidden lg:flex space-x-8">
              <a
                href="#"
                className="font-sans text-xs tracking-wider uppercase font-semibold text-[#2A1B14] hover:text-[#8C6239] transition-colors duration-300"
              >
                Home
              </a>

              <a
                href="#about"
                className="font-sans text-xs tracking-wider uppercase font-semibold text-[#2A1B14] hover:text-[#8C6239] transition-colors duration-300"
              >
                About
              </a>

              {/* Shop By Type Dropdown */}
              <div
                className="relative group"
                onMouseEnter={() => setIsShopDropdownOpen(true)}
                onMouseLeave={() => setIsShopDropdownOpen(false)}
              >
                <a
                  href="#shop-by-type"
                  className="flex items-center gap-1 font-sans text-xs tracking-wider uppercase font-semibold text-[#2A1B14] hover:text-[#8C6239] transition-colors duration-300"
                >
                  Shop By Type
                  <ChevronDown className="w-3.5 h-3.5 opacity-75" />
                </a>

                <AnimatePresence>
                  {isShopDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 top-full mt-2 w-56 bg-[#F2ECE7] border border-gold/15 shadow-premium rounded-sm p-2 z-50 flex flex-col text-left"
                    >
                      {shopTypes.map((type, sIdx) => {
                        return (
                          <a 
                            key={sIdx}
                            href="#shop-by-type" 
                            className="flex items-center gap-2.5 text-xs text-[#2A1B14] hover:bg-black/5 hover:text-[#8C6239] px-4 py-2.5 rounded-sm transition-colors"
                          >
                            <img src={type.img} alt={type.name} className="w-5 h-5 rounded-full object-cover border border-[#8C6239]/20" />
                            {type.name}
                          </a>
                        );
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <a
                href="#new-arrivals"
                className="font-sans text-xs tracking-wider uppercase font-semibold text-[#2A1B14] hover:text-[#8C6239] transition-colors duration-300"
              >
                New Arrivals
              </a>

              <a
                href="#best-sellers"
                className="font-sans text-xs tracking-wider uppercase font-semibold text-[#2A1B14] hover:text-[#8C6239] transition-colors duration-300"
              >
                Best Sellers
              </a>

              <a
                href="#offers"
                className="font-sans text-xs tracking-wider uppercase font-semibold text-[#2A1B14] hover:text-[#8C6239] transition-colors duration-300"
              >
                Offers
              </a>
            </nav>

            {/* Right Side: Navigation Actions + Hamburger */}
            <div className="flex items-center gap-1 sm:gap-2 text-[#2A1B14]">
              {/* Search Icon */}
              <button className="p-1.5 rounded-full hover:bg-black/5 hover:text-[#8C6239] transition-colors cursor-pointer" aria-label="Search">
                <Search className="w-4.5 h-4.5 sm:w-5 h-5" />
              </button>

              {/* User Account Icon */}
              <button className="p-1.5 rounded-full hover:bg-black/5 hover:text-[#8C6239] transition-colors cursor-pointer" aria-label="Account">
                <User className="w-4.5 h-4.5 sm:w-5 h-5" />
              </button>

              {/* Wishlist Button */}
              <button className="p-1.5 rounded-full hover:bg-black/5 hover:text-[#8C6239] transition-colors relative cursor-pointer" aria-label="Wishlist">
                <Heart className="w-4.5 h-4.5 sm:w-5 h-5" />
                {wishlistCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 text-[8px] font-bold w-4 h-4 rounded-full flex items-center justify-center bg-[#8C6239] text-white border border-[#F2ECE7] shadow-soft">
                    {wishlistCount}
                  </span>
                )}
              </button>

              {/* Cart Button */}
              <button
                onClick={onCartToggle}
                className="p-1.5 rounded-full hover:bg-black/5 hover:text-[#8C6239] transition-colors relative cursor-pointer"
                aria-label="Cart"
              >
                <ShoppingBag className="w-4.5 h-4.5 sm:w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 text-[8px] font-bold w-4 h-4 rounded-full flex items-center justify-center bg-[#2A1B14] text-white border border-[#F2ECE7] shadow-soft">
                    {cartCount}
                  </span>
                )}
              </button>

              {/* Mobile Hamburger menu - placed at far right */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-1.5 rounded-full text-[#2A1B14] hover:bg-black/5 transition-colors ml-1"
                aria-label="Toggle Menu"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Drawer menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black z-50"
            />
            {/* Drawer */}
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed left-0 top-0 h-full w-[280px] sm:w-[320px] bg-[#F2ECE7] shadow-premium z-50 overflow-y-auto flex flex-col justify-between text-[#2A1B14]"
            >
              <div>
                <div className="flex items-center justify-between p-5 border-b border-gold/15">
                  <div className="flex items-center gap-1.5">
                    <div className="relative h-8 w-24">
                      <img 
                        src="/logo.png" 
                        alt="Thodoo" 
                        className="absolute inset-0 w-full h-full object-contain"
                        style={{ 
                          clipPath: 'polygon(0% 0%, 49% 0%, 49% 32%, 40% 32%, 40% 100%, 0% 100%)',
                          filter: 'brightness(0) invert(1) drop-shadow(1px 0px 0px #2A1B14) drop-shadow(-1px 0px 0px #2A1B14) drop-shadow(0px 1px 0px #2A1B14) drop-shadow(0px -1px 0px #2A1B14) drop-shadow(0px 0px 1px #2A1B14)' 
                        }}
                      />
                      <img 
                        src="/logo.png" 
                        alt="Thodoo" 
                        className="absolute inset-0 w-full h-full object-contain"
                        style={{ 
                          clipPath: 'polygon(48% 0%, 100% 0%, 100% 100%, 39% 100%, 39% 28%, 48% 28%)',
                          filter: 'brightness(0) invert(9%) sepia(21%) saturate(1915%) hue-rotate(336deg) brightness(96%) contrast(93%)' 
                        }}
                      />
                    </div>
                  </div>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-1 rounded-full text-[#2A1B14] hover:bg-black/5"
                    aria-label="Close menu"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                
              <nav className="p-5 space-y-1 text-left">
                  <a
                    href="#"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-3 font-sans text-sm font-semibold tracking-wider text-[#2A1B14] hover:text-[#8C6239] py-3 border-b border-black/5"
                  >
                    <Home className="w-4 h-4 text-gold-dark flex-shrink-0" />
                    Home
                  </a>

                  <a
                    href="#about"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-3 font-sans text-sm font-semibold tracking-wider text-[#2A1B14] hover:text-[#8C6239] py-3 border-b border-black/5"
                  >
                    <Info className="w-4 h-4 text-gold-dark flex-shrink-0" />
                    About
                  </a>

                  {/* Mobile Shop Dropdown */}
                  <div className="border-b border-black/5">
                    <button
                      onClick={() => setIsShopDropdownOpen(!isShopDropdownOpen)}
                      className="w-full flex items-center gap-3 py-3 font-sans text-sm font-semibold tracking-wider text-[#2A1B14] hover:text-[#8C6239]"
                    >
                      <Tag className="w-4 h-4 text-gold-dark flex-shrink-0" />
                      Shop By Type
                      <ChevronDown className={`w-4 h-4 ml-auto transition-transform ${isShopDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {isShopDropdownOpen && (
                      <div className="mb-2 pl-7 space-y-2">
                        {shopTypes.map((type, sIdx) => {
                          return (
                            <a 
                              key={sIdx}
                              href="#shop-by-type" 
                              onClick={() => {
                                setIsMobileMenuOpen(false);
                                setIsShopDropdownOpen(false);
                              }} 
                              className="flex items-center gap-2.5 text-xs text-[#2A1B14]/80 hover:text-[#8C6239] py-1.5"
                            >
                              <img src={type.img} alt={type.name} className="w-4 h-4 rounded-full object-cover border border-[#8C6239]/20" />
                              {type.name}
                            </a>
                          );
                        })}
                      </div>
                    )}
                  </div>

                  <a
                    href="#new-arrivals"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-3 font-sans text-sm font-semibold tracking-wider text-[#2A1B14] hover:text-[#8C6239] py-3 border-b border-black/5"
                  >
                    <Sparkle className="w-4 h-4 text-gold-dark flex-shrink-0" />
                    New Arrivals
                  </a>

                  <a
                    href="#best-sellers"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-3 font-sans text-sm font-semibold tracking-wider text-[#2A1B14] hover:text-[#8C6239] py-3 border-b border-black/5"
                  >
                    <Star className="w-4 h-4 text-gold-dark flex-shrink-0" />
                    Best Sellers
                  </a>

                  <a
                    href="#offers"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-3 font-sans text-sm font-semibold tracking-wider text-[#2A1B14] hover:text-[#8C6239] py-3"
                  >
                    <Percent className="w-4 h-4 text-gold-dark flex-shrink-0" />
                    Offers
                  </a>
                </nav>
              </div>

              <div className="p-6 bg-black/5 border-t border-gold/15">
                <a
                  href="#consultation"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full text-center bg-[#2A1B14] text-white hover:bg-[#8C6239] transition-colors block text-xs uppercase tracking-widest py-3 rounded-sm font-bold shadow-soft"
                >
                  Book Private Viewing
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
