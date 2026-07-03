import React, { useState } from 'react';

export default function ProductModal({ product, onClose, onAddToCart }) {
  if (!product) return null;

  const [activeTab, setActiveTab] = useState('image'); // 'image' | 'video'
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomPos, setZoomPos] = useState({ x: 50, y: 50 });

  // Close helper reset
  const handleClose = () => {
    setActiveTab('image');
    setIsZoomed(false);
    setZoomPos({ x: 50, y: 50 });
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

  return (
    <div className="modal-overlay open" onClick={handleClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-modal" onClick={handleClose}>&times;</button>
        
        <div className="modal-media-carousel">
          {activeTab === 'image' ? (
            <div 
              className="modal-img-wrapper"
              onClick={() => setIsZoomed(!isZoomed)}
              onMouseMove={handleMouseMove}
              style={{ cursor: isZoomed ? 'zoom-out' : 'zoom-in' }}
            >
              <img 
                src={product.img} 
                alt={product.title} 
                style={{ 
                  transform: isZoomed ? 'scale(2.5)' : 'scale(1)',
                  transformOrigin: isZoomed ? `${zoomPos.x}% ${zoomPos.y}%` : 'center center'
                }}
              />
            </div>
          ) : (
            <div className="modal-video-wrapper">
              <video 
                src={videoUrl}
                className="modal-video"
                autoPlay 
                loop 
                muted 
                playsInline
                controls
              />
            </div>
          )}

          {/* Media Slider Tabs */}
          <div className="modal-media-tabs">
            <button 
              className={`media-tab-btn ${activeTab === 'image' ? 'active' : ''}`}
              onClick={() => { setActiveTab('image'); setIsZoomed(false); }}
            >
              View Image (Click to Zoom)
            </button>
            <button 
              className={`media-tab-btn ${activeTab === 'video' ? 'active' : ''}`}
              onClick={() => setActiveTab('video')}
            >
              Play Video
            </button>
          </div>
        </div>

        <div className="modal-info">
          <span className="modal-category">{product.category}</span>
          <h3 className="modal-title">{product.title}</h3>
          <div className="modal-price">${product.price.toLocaleString()}</div>

          {/* Dynamic per-gram pricing breakdown table */}
          <div className="pricing-breakdown-card" style={{
            marginTop: '15px',
            marginBottom: '15px',
            padding: '14px',
            background: 'rgba(188, 160, 87, 0.05)',
            border: '1px solid rgba(188, 160, 87, 0.2)',
            borderRadius: '6px'
          }}>
            <h4 style={{ color: 'var(--gold-light)', fontSize: '11px', margin: '0 0 10px 0', textTransform: 'uppercase', letterSpacing: '1px' }}>
              ✦ Pricing Breakdown (Rate Per Gram)
            </h4>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', fontSize: '12px', color: 'var(--white)' }}>
              <div><span style={{ color: 'var(--gray-text)' }}>Metal Purity:</span> {getPricingBreakdown(product.category, product.price).purity}</div>
              <div><span style={{ color: 'var(--gray-text)' }}>Net Weight:</span> {getPricingBreakdown(product.category, product.price).weight} g</div>
              <div><span style={{ color: 'var(--gray-text)' }}>Rate / Gram:</span> ${getPricingBreakdown(product.category, product.price).rate.toFixed(2)}</div>
              <div><span style={{ color: 'var(--gray-text)' }}>Metal Value:</span> ${getPricingBreakdown(product.category, product.price).metalValue.toLocaleString()}</div>
              <div><span style={{ color: 'var(--gray-text)' }}>Making (15%):</span> ${getPricingBreakdown(product.category, product.price).makingCharges.toLocaleString()}</div>
              <div><span style={{ color: 'var(--gray-text)' }}>Gemstones:</span> ${getPricingBreakdown(product.category, product.price).stoneValue.toLocaleString()}</div>
            </div>
          </div>

          <p className="modal-desc">{product.desc}</p>
          <button 
            className="btn-gold" 
            onClick={() => {
              onAddToCart(product);
              handleClose();
            }}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}
