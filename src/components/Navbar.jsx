import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, ChevronDown, Menu, X, MapPin, Gift } from 'lucide-react';

export default function Navbar({ cartCount = 0, onCartToggle }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isShopDropdownOpen, setIsShopDropdownOpen] = useState(false);

  // Scroll listener for sticky navbar effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const shopTypes = [
    'Jhumka Collection',
    'Stud Earrings',
    'Hoop Earrings',
    'Chandelier Earrings',
    'Diamond Earrings',
    'Gold Earrings'
  ];

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300">
        
        {/* Top Bar for Store Locator and Live Gold Rates */}
        <div className="bg-charcoal text-gold-light text-[10px] font-semibold tracking-wider uppercase py-2 px-4 sm:px-8 flex flex-col sm:flex-row justify-between items-center gap-2 border-b border-gold/15">
          <div className="flex items-center gap-4">
            <a href="#store-locator" className="flex items-center gap-1.5 hover:text-gold transition-colors">
              <MapPin className="w-3.5 h-3.5 text-gold" />
              Store Locator
            </a>
            <span className="text-white/20 hidden sm:inline">|</span>
            <a href="#corporate" className="flex items-center gap-1.5 hover:text-gold transition-colors">
              <Gift className="w-3.5 h-3.5 text-gold" />
              Corporate & Gifting
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span>Live Gold (24K): $75.50/g</span>
            <span className="text-white/20">|</span>
            <span>Silver (925): $1.80/g</span>
            <span className="text-white/20">|</span>
            <select className="bg-transparent border-none text-gold-light text-[10px] font-bold outline-none cursor-pointer focus:ring-0">
              <option value="USD" className="bg-charcoal text-white">USD ($)</option>
              <option value="INR" className="bg-charcoal text-white">INR (₹)</option>
              <option value="EUR" className="bg-charcoal text-white">EUR (€)</option>
            </select>
          </div>
        </div>

        {/* Main Header Row */}
        <div className={`w-full py-4 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#F2ECE7]/95 backdrop-blur-md shadow-premium border-b border-gold/15'
            : 'bg-black/25 backdrop-blur-sm border-b border-white/10'
        }`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
            
            {/* Mobile Hamburger menu */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-1.5 rounded-full transition-colors ${
                isScrolled ? 'text-[#2A1B14] hover:bg-black/5' : 'text-white hover:bg-white/10'
              }`}
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

            {/* Left/Center: Logo (Thodoo Jewellery Image) */}
            <div className="flex-shrink-0">
              <a href="#" className="flex items-center group">
                <img 
                  src="/logo.png" 
                  alt="Thodoo Jewellery" 
                  className={`h-11 sm:h-12 w-auto object-contain transition-all duration-300 ${
                    isScrolled ? 'brightness-[0.2]' : ''
                  }`}
                />
              </a>
            </div>

            {/* Center Navigation Links (Exact Navbar Order matching page sections) */}
            <nav className="hidden lg:flex space-x-8">
              <a
                href="#"
                className={`font-sans text-xs tracking-wider uppercase font-semibold transition-colors duration-300 ${
                  isScrolled ? 'text-[#2A1B14] hover:text-[#8C6239]' : 'text-white hover:text-gold'
                }`}
              >
                Home
              </a>

              <a
                href="#about"
                className={`font-sans text-xs tracking-wider uppercase font-semibold transition-colors duration-300 ${
                  isScrolled ? 'text-[#2A1B14] hover:text-[#8C6239]' : 'text-white hover:text-gold'
                }`}
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
                  className={`flex items-center gap-1 font-sans text-xs tracking-wider uppercase font-semibold transition-colors duration-300 ${
                    isScrolled ? 'text-[#2A1B14] hover:text-[#8C6239]' : 'text-white hover:text-gold'
                  }`}
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
                      className="absolute left-0 top-full mt-2 w-52 bg-[#F2ECE7] border border-gold/15 shadow-premium rounded-sm p-2 z-50 flex flex-col text-left"
                    >
                      {shopTypes.map((type, sIdx) => (
                        <a 
                          key={sIdx}
                          href="#shop-by-type" 
                          className="text-xs text-[#2A1B14] hover:bg-black/5 hover:text-[#8C6239] px-4 py-2.5 rounded-sm transition-colors"
                        >
                          {type}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <a
                href="#new-arrivals"
                className={`font-sans text-xs tracking-wider uppercase font-semibold transition-colors duration-300 ${
                  isScrolled ? 'text-[#2A1B14] hover:text-[#8C6239]' : 'text-white hover:text-gold'
                }`}
              >
                New Arrivals
              </a>

              <a
                href="#best-sellers"
                className={`font-sans text-xs tracking-wider uppercase font-semibold transition-colors duration-300 ${
                  isScrolled ? 'text-[#2A1B14] hover:text-[#8C6239]' : 'text-white hover:text-gold'
                }`}
              >
                Best Sellers
              </a>

              <a
                href="#offers"
                className={`font-sans text-xs tracking-wider uppercase font-semibold transition-colors duration-300 ${
                  isScrolled ? 'text-[#2A1B14] hover:text-[#8C6239]' : 'text-white hover:text-gold'
                }`}
              >
                Offers
              </a>
            </nav>

            {/* Right Side: Cart Toggle */}
            <div className="flex items-center">
              <button
                onClick={onCartToggle}
                className={`p-2 rounded-full transition-colors relative ${
                  isScrolled ? 'text-[#2A1B14] hover:bg-black/5 hover:text-[#8C6239]' : 'text-white hover:bg-white/10 hover:text-gold'
                }`}
                aria-label="Cart"
              >
                <ShoppingBag className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className={`absolute top-0 right-0 text-[9px] font-bold w-4.5 h-4.5 rounded-full flex items-center justify-center border transition-all ${
                    isScrolled 
                      ? 'bg-[#2A1B14] text-white border-[#F2ECE7]' 
                      : 'bg-gold text-charcoal border-white'
                  }`}>
                    {cartCount}
                  </span>
                )}
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
                    <img src="/logo.png" alt="Thodoo" className="h-8 w-auto object-contain brightness-[0.2]" />
                  </div>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-1 rounded-full text-[#2A1B14] hover:bg-black/5"
                    aria-label="Close menu"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                
                <nav className="p-6 space-y-4 text-left">
                  <a
                    href="#"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="font-sans text-sm font-semibold tracking-wider text-[#2A1B14] hover:text-[#8C6239] block"
                  >
                    Home
                  </a>

                  <a
                    href="#about"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="font-sans text-sm font-semibold tracking-wider text-[#2A1B14] hover:text-[#8C6239] block pb-3 border-b border-black/5"
                  >
                    About
                  </a>

                  {/* Mobile Shop Dropdown */}
                  <div className="border-b border-black/5 pb-3">
                    <button
                      onClick={() => setIsShopDropdownOpen(!isShopDropdownOpen)}
                      className="w-full flex items-center justify-between font-sans text-sm font-semibold tracking-wider text-[#2A1B14] hover:text-[#8C6239]"
                    >
                      Shop By Type
                      <ChevronDown className={`w-4 h-4 transition-transform ${isShopDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {isShopDropdownOpen && (
                      <div className="mt-2 pl-3 space-y-2">
                        {shopTypes.map((type, sIdx) => (
                          <a 
                            key={sIdx}
                            href="#shop-by-type" 
                            onClick={() => setIsMobileMenuOpen(false)} 
                            className="text-xs text-[#2A1B14]/80 hover:text-[#8C6239] block py-1.5"
                          >
                            {type}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>

                  <a
                    href="#new-arrivals"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="font-sans text-sm font-semibold tracking-wider text-[#2A1B14] hover:text-[#8C6239] block pb-3 border-b border-black/5"
                  >
                    New Arrivals
                  </a>

                  <a
                    href="#best-sellers"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="font-sans text-sm font-semibold tracking-wider text-[#2A1B14] hover:text-[#8C6239] block pb-3 border-b border-black/5"
                  >
                    Best Sellers
                  </a>

                  <a
                    href="#offers"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="font-sans text-sm font-semibold tracking-wider text-[#2A1B14] hover:text-[#8C6239] block"
                  >
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
