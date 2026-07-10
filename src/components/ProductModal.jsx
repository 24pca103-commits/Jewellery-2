import React, { useState } from 'react';
import { X, Sparkles, ShoppingBag, CreditCard, Video, Image as ImageIcon, Calendar } from 'lucide-react';

export default function ProductModal({ product, onClose, onAddToCart, onBuyNow }) {
  const [activeTab, setActiveTab] = useState('image'); // 'image' | 'video'
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomPos, setZoomPos] = useState({ x: 50, y: 50 });

  const [metal, setMetal] = useState('18k Yellow Gold');
  const [size, setSize] = useState('Standard');
  const [engraving, setEngraving] = useState('');

  if (!product) return null;

  // Close helper reset
  const handleClose = () => {
    setActiveTab('image');
    setIsZoomed(false);
    setZoomPos({ x: 50, y: 50 });
    setMetal('18k Yellow Gold');
    setSize('Standard');
    setEngraving('');
    onClose();
  };

  const handleMouseMove = (e) => {
    if (!isZoomed) return;
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setZoomPos({ x, y });
  };

  // Calculate pricing breakdown details
  const getPricingBreakdown = (category, price) => {
    let weight = 8.5; // default weight in grams
    let purity = "22K Gold (916 Purity)";
    let goldRate = 72.50; // $ per gram

    if (category === 'rings') {
      weight = (price * 0.25) / goldRate;
      purity = "18K Gold";
    } else if (category === 'necklaces') {
      weight = (price * 0.35) / goldRate;
      purity = "22K Gold (916 Purity)";
    } else if (category === 'earrings') {
      weight = (price * 0.30) / goldRate;
      purity = "18K Gold";
    } else if (category === 'bracelets') {
      weight = (price * 0.32) / goldRate;
      purity = "22K Gold (916 Purity)";
    }

    const formattedWeight = weight.toFixed(2);
    const metalValue = parseFloat((weight * goldRate).toFixed(2));
    const makingCharges = parseFloat((price * 0.15).toFixed(2));
    const stoneValue = parseFloat((price - metalValue - makingCharges).toFixed(2));

    return {
      purity,
      weight: formattedWeight,
      rate: goldRate,
      metalValue,
      makingCharges,
      stoneValue
    };
  };

  const videoUrl = "https://assets.mixkit.co/videos/preview/mixkit-diamond-ring-on-black-surface-41585-large.mp4";
  const breakdown = getPricingBreakdown(product.category, product.price);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={handleClose}
      />

      {/* Modal Container */}
      <div className="relative bg-white w-full max-w-4xl rounded-sm shadow-premium border border-gold-light/20 overflow-hidden grid grid-cols-1 md:grid-cols-2 z-10 animate-in fade-in zoom-in-95 duration-300">

        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute right-4 top-4 p-1.5 rounded-full bg-white/80 hover:bg-gold hover:text-charcoal transition-colors text-charcoal shadow-soft z-30 cursor-pointer"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Column: Media Area */}
        <div className="bg-luxury-cream p-6 flex flex-col justify-between border-r border-gold-light/10">
          <div className="relative flex-grow flex items-center justify-center min-h-[300px]">
            {activeTab === 'image' ? (
              <div
                className="relative overflow-hidden w-full h-full aspect-square rounded-sm cursor-zoom-in"
                onClick={() => setIsZoomed(!isZoomed)}
                onMouseMove={handleMouseMove}
                style={{ cursor: isZoomed ? 'zoom-out' : 'zoom-in' }}
              >
                <img
                  src={product.img}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-200"
                  style={{
                    transform: isZoomed ? 'scale(2.2)' : 'scale(1)',
                    transformOrigin: isZoomed ? `${zoomPos.x}% ${zoomPos.y}%` : 'center center'
                  }}
                />
              </div>
            ) : (
              <div className="w-full h-full aspect-square rounded-sm overflow-hidden flex items-center justify-center">
                <video
                  src={videoUrl}
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                  controls
                />
              </div>
            )}
          </div>

          {/* Media Switcher Tabs */}
          <div className="flex gap-2 justify-center mt-4">
            <button
              className={`flex items-center gap-1 px-4 py-2 text-[10px] font-bold uppercase tracking-wider rounded-sm border transition-all ${activeTab === 'image'
                ? 'bg-charcoal text-white border-charcoal'
                : 'bg-white text-charcoal-muted border-gold-light/35 hover:border-gold'
                }`}
              onClick={() => { setActiveTab('image'); setIsZoomed(false); }}
            >
              <ImageIcon className="w-3.5 h-3.5" />
              Image Detail
            </button>
            <button
              className={`flex items-center gap-1 px-4 py-2 text-[10px] font-bold uppercase tracking-wider rounded-sm border transition-all ${activeTab === 'video'
                ? 'bg-charcoal text-white border-charcoal'
                : 'bg-white text-charcoal-muted border-gold-light/35 hover:border-gold'
                }`}
              onClick={() => setActiveTab('video')}
            >
              <Video className="w-3.5 h-3.5" />
              360&deg; Video
            </button>
          </div>
        </div>

        {/* Right Column: Details Area */}
        <div className="p-8 flex flex-col justify-between overflow-y-auto max-h-[85vh] md:max-h-none space-y-6">
          <div className="space-y-4">
            <div className="space-y-1.5">
              <span className="text-[10px] text-gold font-bold uppercase tracking-widest block">
                {product.category}
              </span>
              <h2 className="font-serif text-2xl font-bold text-charcoal tracking-wide">
                {product.title}
              </h2>
              <p className="text-xl text-gold-dark font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
                ${product.price.toLocaleString()}
              </p>
            </div>

            {/* Pricing breakdown */}
            <div className="p-4 bg-luxury-cream border border-gold-light/25 rounded-sm space-y-3">
              <h4 className="flex items-center gap-1.5 text-[10px] text-gold font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                Value Specification
              </h4>
              <div className="grid grid-cols-2 gap-x-6 gap-y-1.5 text-xs font-sans">
                <div className="flex justify-between border-b border-gold-light/10 pb-1">
                  <span className="text-charcoal-muted font-light">Purity:</span>
                  <span className="font-semibold text-charcoal">{breakdown.purity}</span>
                </div>
                <div className="flex justify-between border-b border-gold-light/10 pb-1">
                  <span className="text-charcoal-muted font-light">Net Weight:</span>
                  <span className="font-semibold text-charcoal">{breakdown.weight} g</span>
                </div>
                <div className="flex justify-between border-b border-gold-light/10 pb-1">
                  <span className="text-charcoal-muted font-light">Metal Value:</span>
                  <span className="font-semibold text-charcoal">${breakdown.metalValue.toLocaleString()}</span>
                </div>
                <div className="flex justify-between border-b border-gold-light/10 pb-1">
                  <span className="text-charcoal-muted font-light">Making Charges:</span>
                  <span className="font-semibold text-charcoal">${breakdown.makingCharges.toLocaleString()}</span>
                </div>
                <div className="col-span-2 flex justify-between border-b border-gold-light/10 pb-1 pt-1">
                  <span className="text-charcoal-muted font-light">Certified Stone Value:</span>
                  <span className="font-semibold text-charcoal">${breakdown.stoneValue.toLocaleString()}</span>
                </div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-charcoal-muted font-light leading-relaxed">
              {product.desc}
            </p>

            {/* Customizations */}
            <div className="space-y-3 pt-2">
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-[10px] text-charcoal-muted font-bold uppercase tracking-wider">Metal Type</label>
                  <select
                    value={metal}
                    onChange={(e) => setMetal(e.target.value)}
                    className="w-full bg-luxury-cream border border-gold-light/35 rounded-sm p-2 text-xs font-semibold focus:outline-none focus:border-gold"
                  >
                    <option value="18k Yellow Gold">18k Yellow Gold</option>
                    <option value="18k Rose Gold">18k Rose Gold</option>
                    <option value="Platinum">Platinum</option>
                    <option value="22k Burnished Gold">22k Burnished Gold</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] text-charcoal-muted font-bold uppercase tracking-wider">Size Selector</label>
                  <select
                    value={size}
                    onChange={(e) => setSize(e.target.value)}
                    className="w-full bg-luxury-cream border border-gold-light/35 rounded-sm p-2 text-xs font-semibold focus:outline-none focus:border-gold"
                  >
                    <option value="Standard">Standard Size</option>
                    <option value="Size 5">Size 5</option>
                    <option value="Size 6">Size 6</option>
                    <option value="Size 7">Size 7</option>
                    <option value="Size 8">Size 8</option>
                  </select>
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-[10px] text-charcoal-muted font-bold uppercase tracking-wider">Custom Engraving</label>
                <input
                  type="text"
                  placeholder="Complimentary (Max 15 characters)"
                  maxLength={15}
                  value={engraving}
                  onChange={(e) => setEngraving(e.target.value)}
                  className="w-full bg-luxury-cream border border-gold-light/35 rounded-sm px-3 py-2 text-xs font-semibold focus:outline-none focus:border-gold font-sans placeholder:font-light"
                />
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="space-y-3 pt-4 border-t border-luxury-cream">
            <div className="flex gap-3">
              <button
                onClick={() => {
                  onBuyNow(product, { metal, size, engraving });
                  handleClose();
                }}
                className="flex-1 inline-flex justify-center items-center gap-1.5 px-6 py-3 bg-gold hover:bg-gold-dark text-charcoal text-xs uppercase tracking-widest font-bold rounded-sm shadow-soft transition-colors cursor-pointer"
              >
                <CreditCard className="w-4 h-4" />
                Buy Now
              </button>
              <button
                onClick={() => {
                  onAddToCart(product, { metal, size, engraving });
                  handleClose();
                }}
                className="flex-1 inline-flex justify-center items-center gap-1.5 px-6 py-3 border border-charcoal hover:border-gold hover:text-gold text-charcoal text-xs uppercase tracking-widest font-bold rounded-sm transition-colors cursor-pointer"
              >
                <ShoppingBag className="w-4 h-4" />
                Add to Cart
              </button>
            </div>

            <button
              onClick={() => {
                window.location.hash = "#consultation";
                handleClose();
              }}
              className="w-full inline-flex justify-center items-center gap-1.5 px-6 py-3 border border-gold hover:bg-gold hover:text-charcoal text-gold text-xs uppercase tracking-widest font-bold rounded-sm transition-colors cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              Book Private Viewing
            </button>

            <div className="text-center text-[10px] text-charcoal-muted italic font-light pt-1">
              * Govt BIS Hallmarked gold. Certified Diamond authentication included.
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
