import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, ShoppingBag, Star, Check } from 'lucide-react';

// Card animations config
const cardRevealVariants = {
  hidden: { opacity: 0, y: 35, scale: 0.96 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.08,
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] // Apple-like custom ease out
    }
  })
};

const starContainerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.06
    }
  }
};

const starVariants = {
  hidden: { scale: 0, rotate: -30 },
  show: { 
    scale: 1, 
    rotate: 0, 
    transition: { type: 'spring', stiffness: 400, damping: 12 } 
  }
};
export default function ProductCard({ 
  product, 
  index, 
  isWishlisted, 
  onWishlistToggle, 
  onAddToCart
}) {
  const [isAdding, setIsAdding] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  const originalPrice = Math.round(product.price * 1.15); // Mock 15% discount
  const savings = originalPrice - product.price;

  const handleAddToCart = async (e) => {
    e.stopPropagation();
    setIsAdding(true);
    
    // Simulate luxury loader
    await new Promise(resolve => setTimeout(resolve, 800));
    
    onAddToCart(product);
    setIsAdding(false);
    setIsAdded(true);

    // Reset success state after 2 seconds
    setTimeout(() => {
      setIsAdded(false);
    }, 2000);
  };

  const getPurityBadge = () => {
    if (product.category === 'diamond' || product.category === 'chandeliers' || product.title.toLowerCase().includes('diamond')) {
      return "18K VVS1 Diamond";
    }
    return "22K BIS Hallmarked";
  };

  return (
    <motion.div
      custom={index}
      variants={cardRevealVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-40px" }}
      whileHover={{ 
        y: -12, 
        scale: 1.03,
        borderColor: '#D4AF37',
        boxShadow: '0 25px 50px -12px rgba(42, 27, 20, 0.12), 0 0 20px rgba(212, 175, 55, 0.15)'
      }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="group relative bg-white border border-gold-light/20 rounded-sm overflow-hidden transition-all duration-400 flex flex-col justify-between h-full"
    >
      {/* Product Image & Quick Actions Box */}
      <div className="relative aspect-[4/5] bg-luxury-cream overflow-hidden cursor-default">
        
        {/* Luxury Gold Shine Sweep Overlay */}
        <div className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none z-30 transform -skew-x-25" />

        {/* Purity Badge */}
        <span className="absolute top-4 left-4 z-20 bg-charcoal/90 backdrop-blur-sm text-gold text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-sm border border-gold/25 shadow-soft">
          {getPurityBadge()}
        </span>
        
        {/* Discount Badge */}
        <motion.span 
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="absolute top-4 right-4 z-20 bg-gold text-charcoal text-[9px] font-bold uppercase tracking-wider px-2 py-1 rounded-sm shadow-soft"
        >
          15% OFF
        </motion.span>

        {/* Product Image Container with zoom & subtle offset parallax */}
        <div className="absolute inset-0 z-0 transition-transform duration-750 ease-out group-hover:scale-110 group-hover:translate-y-[-4px]">
          <img 
            src={product.img} 
            alt={product.title} 
            className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0" 
          />
          {product.hoverImg && (
            <img 
              src={product.hoverImg} 
              alt={`${product.title} alternative view`} 
              className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
            />
          )}
        </div>

        {/* Wishlist Button (slides in from right) */}
        <button
          onClick={(e) => { e.stopPropagation(); onWishlistToggle(product.id); }}
          className="absolute top-16 right-4 z-25 p-2.5 rounded-full bg-white/95 border border-gold-light/20 shadow-soft text-charcoal hover:bg-gold hover:text-charcoal hover:scale-110 transition-all duration-300 opacity-0 translate-x-8 group-hover:opacity-100 group-hover:translate-x-0"
          title="Add to Wishlist"
        >
          <Heart className={`w-4 h-4 transition-colors ${isWishlisted ? 'fill-gold stroke-charcoal' : 'stroke-current'}`} />
        </button>

      </div>

      {/* Info & Purchase Area */}
      <div className="p-6 text-center space-y-4 relative z-10 bg-white flex-1 flex flex-col justify-between">
        
        <div className="space-y-2">
          {/* Category */}
          <span className="text-[9px] text-gold font-bold uppercase tracking-widest block opacity-80">
            {product.category}
          </span>
          
          {/* Title */}
          <h3 className="font-serif text-base font-bold text-charcoal tracking-wide cursor-pointer group-hover:text-gold transition-colors duration-300 line-clamp-1">
            {product.title}
          </h3>

          {/* Rating Stars - Sequential Reveal */}
          <motion.div 
            variants={starContainerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex justify-center items-center gap-1 text-gold"
          >
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <motion.div key={i} variants={starVariants}>
                  <Star className="w-3.5 h-3.5 fill-current stroke-none" />
                </motion.div>
              ))}
            </div>
            <span className="text-[10px] text-charcoal-muted font-sans font-bold ml-1 mt-0.5">(4.9)</span>
          </motion.div>

          {/* Price Block */}
          <div className="flex items-center justify-center gap-3 pt-1">
            <span className="text-xs line-through text-charcoal-muted/70 font-sans">
              ₹{originalPrice.toLocaleString()}
            </span>
            
            {/* Scale current price up on hover */}
            <motion.span 
              className="text-base font-bold text-[#2A1B14] tracking-wide transition-transform duration-300 group-hover:scale-110 inline-block font-sans"
            >
              ₹{product.price.toLocaleString()}
            </motion.span>
          </div>

          {/* Savings Highlight */}
          <div className="text-[10px] text-gold-dark font-semibold tracking-wider uppercase bg-gold/5 border border-gold/15 py-1 px-2.5 rounded-sm inline-block shadow-soft group-hover:shadow-gold-glow transition-all duration-300">
            Save ₹{savings.toLocaleString()}
          </div>
        </div>

        {/* Stateful Add to Cart Button */}
        <div className="pt-3">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            disabled={isAdding}
            onClick={handleAddToCart}
            className={`w-full py-2.5 font-sans text-[10px] uppercase tracking-widest font-bold rounded-sm shadow-soft transition-all duration-500 overflow-hidden flex items-center justify-center gap-2 border cursor-pointer ${
              isAdded 
                ? 'bg-emerald-600 text-white border-emerald-600 shadow-soft' 
                : 'bg-charcoal text-white hover:bg-gradient-to-r hover:from-gold hover:to-gold-dark hover:text-[#2A1B14] border-charcoal hover:border-gold'
            }`}
          >
            <AnimatePresence mode="wait">
              {isAdding ? (
                <motion.div
                  key="loader"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin"
                />
              ) : isAdded ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  className="flex items-center gap-1.5"
                >
                  <Check className="w-3.5 h-3.5 stroke-[3px]" />
                  Added to Treasury
                </motion.div>
              ) : (
                <motion.div
                  key="default"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center gap-2"
                >
                  <ShoppingBag className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-300" />
                  Add to treasury
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

      </div>
    </motion.div>
  );
}
