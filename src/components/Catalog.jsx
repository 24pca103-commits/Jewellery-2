import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, ShoppingBag, Eye, Star, Sparkles, ChevronRight, Play, Pause } from 'lucide-react';

const cardVariants = {
  hidden: (i) => ({
    opacity: 0,
    rotateY: 90,
    scale: 0.92,
  }),
  visible: (i) => ({
    opacity: 1,
    rotateY: 0,
    scale: 1,
    transition: {
      delay: i * 0.08,
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1], // Staggered premium cubic ease-out
    }
  }),
  exit: {
    opacity: 0,
    rotateY: -90,
    scale: 0.92,
    transition: {
      duration: 0.4,
      ease: 'easeInOut'
    }
  }
};

export default function Catalog({ products, wishlist = [], onWishlistToggle, onAddToCart, onQuickView }) {
  const [filter, setFilter] = useState('all');
  const [activeNewArrivalIdx, setActiveNewArrivalIdx] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);

  const newArrivals = products.slice(0, 4); // Use first 4 earrings for New Arrivals spotlight
  const filteredProducts = filter === 'all' 
    ? products 
    : products.filter(p => p.category === filter);

  // Auto-play timer for New Arrivals spotlight
  useEffect(() => {
    if (!isAutoplay) return;
    const interval = setInterval(() => {
      setActiveNewArrivalIdx((prev) => (prev + 1) % newArrivals.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoplay, newArrivals.length]);

  const isWishlisted = (id) => wishlist.includes(id);

  const getPurityBadge = (product) => {
    if (product.category === 'diamond' || product.category === 'chandeliers' || product.title.toLowerCase().includes('diamond')) {
      return "18K VVS1 Diamond";
    }
    return "22K BIS Hallmarked";
  };

  const filterTabs = [
    { 
      id: 'all', 
      label: 'All',
      img: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=150&q=80'
    },
    { 
      id: 'jhumka', 
      label: 'Jhumkas',
      img: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=150&q=80'
    },
    { 
      id: 'studs', 
      label: 'Studs',
      img: 'https://images.unsplash.com/photo-1635767798638-3e25273a8236?auto=format&fit=crop&w=150&q=80'
    },
    { 
      id: 'hoops', 
      label: 'Hoops',
      img: 'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&w=150&q=80'
    },
    { 
      id: 'chandeliers', 
      label: 'Chandeliers',
      img: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=150&q=80'
    },
    { 
      id: 'gold', 
      label: 'Gold',
      img: 'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&w=150&q=80'
    },
    { 
      id: 'diamond', 
      label: 'Diamond',
      img: 'https://images.unsplash.com/photo-1635767798638-3e25273a8236?auto=format&fit=crop&w=150&q=80'
    }
  ];

  const activeProduct = newArrivals[activeNewArrivalIdx] || newArrivals[0];

  return (
    <div className="bg-white space-y-24 py-16" id="catalog">
      
      {/* 1. Interactive New Arrivals Spotlight Gallery */}
      <section id="new-arrivals" className="bg-[#FAF5EF] py-20 border-y border-gold-light/20 scroll-mt-24 relative overflow-hidden">
        {/* Soft Golden Background Glows */}
        <div className="absolute top-0 left-0 w-80 h-80 bg-gold-radial opacity-35 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gold-radial opacity-25 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div className="space-y-2 text-left">
              <span className="text-xs text-gold font-bold uppercase tracking-widest block">
                The Boutique Showcase
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-wide text-charcoal">
                New Arrivals
              </h2>
            </div>
            
            {/* Play/Pause Autoplay Controls */}
            <div className="flex items-center gap-4 mt-4 md:mt-0">
              <button 
                onClick={() => setIsAutoplay(!isAutoplay)}
                className="flex items-center gap-1.5 text-xs font-bold text-gold uppercase tracking-wider hover:text-gold-dark transition-colors cursor-pointer"
              >
                {isAutoplay ? (
                  <>
                    <Pause className="w-3.5 h-3.5" />
                    Autoplay On
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5" />
                    Autoplay Paused
                  </>
                )}
              </button>
              <div className="h-4 w-[1px] bg-gold-light/40" />
              <a 
                href="#best-sellers"
                className="inline-flex items-center gap-1 text-xs font-bold text-charcoal hover:text-gold uppercase tracking-wider transition-colors"
              >
                Explore Best Sellers
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Unique Showcase Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            
            {/* Left Panel: Featured Spotlight Item (7 cols) */}
            <div className="lg:col-span-7 flex flex-col justify-between bg-white border border-gold-light/35 rounded-sm p-6 sm:p-8 shadow-premium relative group">
              {/* Inner Luxury Gold Frame */}
              <div className="absolute inset-4 border border-gold/15 group-hover:border-gold/30 rounded-sm pointer-events-none z-20 transition-colors duration-500" />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                
                {/* Spotlight Image with Zoom */}
                <div className="relative aspect-[4/5] bg-luxury-cream overflow-hidden rounded-sm border border-gold-light/10">
                  {/* Hallmark badge */}
                  <span className="absolute top-3 left-3 z-20 bg-charcoal/95 backdrop-blur-sm text-gold text-[8px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-sm border border-gold/25">
                    {getPurityBadge(activeProduct)}
                  </span>
                  
                  <AnimatePresence mode="wait">
                    <motion.img 
                      key={activeProduct.id}
                      src={activeProduct.img}
                      alt={activeProduct.title}
                      initial={{ opacity: 0, scale: 1.05 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.6 }}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </AnimatePresence>
                </div>

                {/* Spotlight Content */}
                <div className="text-left space-y-4 md:pl-2">
                  <div className="flex items-center gap-1.5 text-gold text-[10px] font-bold uppercase tracking-wider">
                    <Sparkles className="w-3.5 h-3.5" />
                    Spotlight Design
                  </div>
                  
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeProduct.id}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      transition={{ duration: 0.4 }}
                      className="space-y-3"
                    >
                      <h3 className="font-serif text-xl sm:text-2xl font-bold text-charcoal tracking-wide leading-tight">
                        {activeProduct.title}
                      </h3>
                      
                      {/* Rating */}
                      <div className="flex items-center gap-1 text-gold">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-3.5 h-3.5 fill-current stroke-none" />
                          ))}
                        </div>
                        <span className="text-[10px] text-charcoal-muted font-bold font-sans mt-0.5">(4.9)</span>
                      </div>

                      <p className="font-sans text-charcoal-muted text-xs leading-relaxed font-light">
                        {activeProduct.desc}
                      </p>

                      <div className="pt-2">
                        <span className="text-xs line-through text-charcoal-muted/60 font-serif mr-2">
                          ${Math.round(activeProduct.price * 1.15).toLocaleString()}
                        </span>
                        <span className="text-lg font-bold text-[#2A1B14] font-serif">
                          ${activeProduct.price.toLocaleString()}
                        </span>
                      </div>
                    </motion.div>
                  </AnimatePresence>

                  {/* Actions */}
                  <div className="pt-4 flex items-center gap-3">
                    <button
                      onClick={() => onAddToCart(activeProduct)}
                      className="flex-1 inline-flex justify-center items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-gold to-gold-dark hover:from-gold-light hover:to-gold text-[#2A1B14] font-sans text-[10px] uppercase tracking-widest font-bold rounded-sm shadow-soft transition-all duration-300"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      Add to treasury
                    </button>
                    <button
                      onClick={() => onWishlistToggle(activeProduct.id)}
                      className="p-2.5 rounded-full border border-gold-light/40 text-charcoal hover:bg-gold hover:text-charcoal hover:border-gold transition-colors"
                      title="Add to Wishlist"
                    >
                      <Heart className={`w-4 h-4 ${isWishlisted(activeProduct.id) ? 'fill-gold stroke-charcoal' : ''}`} />
                    </button>
                  </div>
                </div>

              </div>
              
              {/* Auto-play progress bar indicator */}
              {isAutoplay && (
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gold-light/20 overflow-hidden">
                  <motion.div 
                    key={activeNewArrivalIdx}
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 5, ease: 'linear' }}
                    className="h-full bg-gold"
                  />
                </div>
              )}
            </div>

            {/* Right Panel: Showcase Thumbnails Selector (5 cols) */}
            <div className="lg:col-span-5 flex flex-col gap-4 justify-between">
              <div className="text-left mb-2">
                <span className="font-sans text-[10px] tracking-widest uppercase text-gold font-bold">Select Earring Style</span>
                <div className="h-[1px] w-full bg-gold-light/25 mt-1" />
              </div>

              {newArrivals.map((item, idx) => {
                const isActive = activeNewArrivalIdx === idx;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveNewArrivalIdx(idx);
                      setIsAutoplay(false); // Stop autoplay when manually clicked
                    }}
                    className={`w-full flex items-center gap-4 p-4 rounded-sm border transition-all duration-300 text-left cursor-pointer group hover:-translate-y-0.5 hover:shadow-soft ${
                      isActive
                        ? 'bg-white border-gold shadow-soft scale-102 z-10'
                        : 'bg-white/60 border-gold-light/20 hover:bg-[#2A1B14] hover:border-gold hover:text-white'
                    }`}
                  >
                    {/* Thumbnail Image */}
                    <div className={`w-16 h-20 bg-luxury-cream rounded-sm overflow-hidden border transition-colors duration-300 flex-shrink-0 ${
                      isActive ? 'border-gold/30' : 'border-gold-light/10 group-hover:border-gold/20'
                    }`}>
                      <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    </div>
                    
                    {/* Thumbnail details */}
                    <div className="flex-1 space-y-1">
                      <span className="font-sans text-[9px] tracking-wider uppercase text-gold font-bold">0{idx + 1} / {item.category}</span>
                      <h4 className={`font-serif text-sm font-bold tracking-wide truncate transition-colors duration-300 ${
                        isActive ? 'text-charcoal' : 'text-charcoal group-hover:text-white'
                      }`}>
                        {item.title}
                      </h4>
                      <p className={`font-serif text-xs font-bold transition-colors duration-300 ${
                        isActive ? 'text-gold-dark' : 'text-gold-dark group-hover:text-gold'
                      }`}>
                        ${item.price.toLocaleString()}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

          </div>

        </div>
      </section>

      {/* 2. Best Sellers Section */}
      <section id="best-sellers" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-12 space-y-3">
          <div className="flex items-center justify-center gap-1.5 text-xs text-gold font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            Signature Masterpieces
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-wide text-charcoal">
            Best Sellers
          </h2>
          <div className="w-16 h-0.5 bg-gold mx-auto mt-4" />
          <p className="font-sans text-charcoal-muted text-sm leading-relaxed font-light">
            Discover our highly coveted, handcrafted earring masterpieces representing the pinnacle of South Indian heritage and diamond luxury.
          </p>
        </div>

        {/* Visual Circular Category Bubble Bar */}
        <div className="flex justify-center items-center gap-5 sm:gap-8 mb-12 overflow-x-auto pb-4 pt-2 scrollbar-none w-full">
          {filterTabs.map(tab => {
            const isActive = filter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className="flex flex-col items-center group focus:outline-none cursor-pointer flex-shrink-0"
              >
                {/* Round Category Circle Frame */}
                <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 overflow-hidden flex items-center justify-center transition-all duration-300 ${
                  isActive 
                    ? 'border-gold shadow-gold-glow scale-110 ring-2 ring-gold/25' 
                    : 'border-gold-light/20 group-hover:border-gold/45 group-hover:scale-105'
                }`}>
                  <img 
                    src={tab.img} 
                    alt={tab.label} 
                    className={`w-full h-full object-cover transition-all duration-500 ${
                      isActive ? 'brightness-100 scale-105' : 'brightness-90 group-hover:brightness-100'
                    }`}
                  />
                </div>
                {/* Category Text Label */}
                <span className={`font-sans text-[9px] sm:text-[10px] tracking-widest uppercase font-bold mt-2.5 transition-colors duration-300 ${
                  isActive ? 'text-gold' : 'text-charcoal-muted group-hover:text-gold'
                }`}>
                  {tab.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* Product Cards Grid with 3D Perspective */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 [perspective:1500px]">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((p, index) => {
              const originalPrice = Math.round(p.price * 1.15); // Mock 15% discount
              
              return (
                <motion.div 
                  key={`${filter}-${p.id}`}
                  custom={index}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  layout
                  whileHover={{ y: -8 }}
                  className="group relative bg-white border border-gold-light/20 rounded-sm overflow-hidden hover:shadow-gold-glow hover:border-gold/40 transition-all duration-500"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {/* Decorative Thin Inner Gold Border */}
                  <div className="absolute inset-3 border border-gold/10 group-hover:border-gold/30 rounded-sm pointer-events-none z-30 transition-colors duration-500" />

                  {/* Image Container with Alternate Swap */}
                  <div className="relative aspect-[4/5] bg-luxury-cream overflow-hidden cursor-pointer" onClick={() => onQuickView(p)}>
                    {/* Purity Badge */}
                    <span className="absolute top-5 left-5 z-20 bg-charcoal/90 backdrop-blur-sm text-gold text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-sm border border-gold/25">
                      {getPurityBadge(p)}
                    </span>
                    
                    {/* Discount Badge */}
                    <span className="absolute top-5 right-5 z-20 bg-gold text-charcoal text-[9px] font-bold uppercase tracking-wider px-2 py-1 rounded-sm shadow-soft">
                      15% OFF
                    </span>

                    {/* Primary Image */}
                    <img 
                      src={p.img} 
                      alt={p.title} 
                      className="absolute inset-0 w-full h-full object-cover transition-all duration-750 ease-out group-hover:scale-105 group-hover:opacity-0" 
                    />
                    
                    {/* Alternate Image on Hover */}
                    {p.hoverImg && (
                      <img 
                        src={p.hoverImg} 
                        alt={`${p.title} alternative view`} 
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-750 ease-out scale-102 opacity-0 group-hover:opacity-100 group-hover:scale-105" 
                      />
                    )}

                    {/* Glassmorphic Actions Tray */}
                    <div className="absolute inset-x-0 bottom-6 flex justify-center gap-3.5 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-20">
                      <button 
                        onClick={(e) => { e.stopPropagation(); onWishlistToggle(p.id); }}
                        className="p-3 rounded-full bg-white border border-gold-light/35 shadow-soft hover:bg-gold hover:text-charcoal hover:border-gold transition-colors duration-300 text-charcoal"
                        title="Add to Wishlist"
                      >
                        <Heart className={`w-4 h-4 ${isWishlisted(p.id) ? 'fill-gold stroke-charcoal' : ''}`} />
                      </button>
                      <button 
                        onClick={(e) => { e.stopPropagation(); onAddToCart(p); }}
                        className="p-3 rounded-full bg-charcoal border border-charcoal shadow-soft hover:bg-gold hover:text-charcoal hover:border-gold transition-colors duration-300 text-white"
                        title="Add to Treasury"
                      >
                        <ShoppingBag className="w-4 h-4" />
                      </button>
                      <button 
                        onClick={(e) => { e.stopPropagation(); onQuickView(p); }}
                        className="p-3 rounded-full bg-white border border-gold-light/35 shadow-soft hover:bg-gold hover:text-charcoal hover:border-gold transition-colors duration-300 text-charcoal"
                        title="Quick View"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Info Area */}
                  <div className="p-6 text-center space-y-2 relative z-10 bg-white">
                    <span className="text-[10px] text-gold font-bold uppercase tracking-widest block">
                      {p.category}
                    </span>
                    
                    <h3 className="font-serif text-base font-bold text-charcoal tracking-wide cursor-pointer hover:text-gold transition-colors" onClick={() => onQuickView(p)}>
                      {p.title}
                    </h3>

                    {/* Ratings & Reviews */}
                    <div className="flex justify-center items-center gap-1.5 text-gold">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-current stroke-none" />
                        ))}
                      </div>
                      <span className="text-[10px] text-charcoal-muted font-sans font-semibold">(4.9/5)</span>
                    </div>

                    {/* Price Block */}
                    <div className="flex items-center justify-center gap-3 pt-1">
                      <span className="text-xs line-through text-charcoal-muted/70 font-serif">
                        ${originalPrice.toLocaleString()}
                      </span>
                      <span className="text-base font-bold text-[#2A1B14] tracking-wide font-serif">
                        ${p.price.toLocaleString()}
                      </span>
                    </div>
                  </div>

                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </section>

      {/* 3. Bridal Collection & Offers Banner Section */}
      <section id="offers" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-sm overflow-hidden border border-gold-light/20 shadow-premium aspect-[21/9] min-h-[350px] bg-charcoal group">
          {/* Inner Golden border inside the banner */}
          <div className="absolute inset-4 sm:inset-5 border border-gold/15 group-hover:border-gold/30 transition-colors pointer-events-none z-10" />

          {/* Banner Image */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1600&q=80" 
              alt="Bridal Showcase Background" 
              className="w-full h-full object-cover opacity-60 transition-transform duration-1000 group-hover:scale-103"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/50 to-transparent" />
          </div>

          {/* Banner Content */}
          <div className="absolute inset-0 z-10 flex items-center">
            <div className="p-8 sm:p-12 lg:p-16 max-w-xl text-left space-y-4 text-white">
              <span className="text-[10px] sm:text-xs text-gold font-bold uppercase tracking-widest block">
                The Heritage Wedding Suite
              </span>
              
              <h2 className="font-serif text-2xl sm:text-4xl font-bold tracking-wide leading-tight">
                Crafting Your Eternal Moments
              </h2>
              
              <p className="font-sans text-white/80 text-xs sm:text-sm font-light leading-relaxed">
                Step into a realm of luxury with our heavy-crafted Kundan sets, bespoke gold waistbands (Vaddanams), and premium wedding chokers tailored to make you look unforgettable.
              </p>
              
              <div className="pt-2 flex flex-wrap gap-3">
                <a 
                  href="#catalog"
                  className="px-6 py-3 bg-gold hover:bg-gold-light text-[#2A1B14] text-[10px] sm:text-xs font-bold uppercase tracking-widest rounded-sm transition-colors shadow-soft"
                >
                  Explore Bridal Suite
                </a>
                <a 
                  href="#consultation"
                  className="px-6 py-3 border border-white/40 hover:border-gold hover:text-gold text-white text-[10px] sm:text-xs font-bold uppercase tracking-widest rounded-sm backdrop-blur-sm transition-colors"
                >
                  Book Consultation
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
