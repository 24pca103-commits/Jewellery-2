import React, { useState } from 'react';

export default function ProductModal({ product, onClose, onAddToCart, onBuyNow }) {
  if (!product) return null;

  const [activeTab, setActiveTab] = useState('image'); // 'image' | 'video'
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomPos, setZoomPos] = useState({ x: 50, y: 50 });

  const [metal, setMetal] = useState('18k Yellow Gold');
  const [size, setSize] = useState('Standard');
  const [engraving, setEngraving] = useState('');

  const inputStyle = {
    flex: 1,
    padding: '10px',
    background: 'var(--white)',
    border: '1px solid var(--gray-light)',
    color: 'var(--charcoal)',
    borderRadius: '4px',
    fontSize: '13px',
    outline: 'none'
  };

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
          
          <div className="customization-options" style={{ marginTop: '15px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div style={{ display: 'flex', gap: '10px' }}>
              <select value={metal} onChange={(e) => setMetal(e.target.value)} style={inputStyle}>
                <option value="18k Yellow Gold">18k Yellow Gold</option>
                <option value="18k Rose Gold">18k Rose Gold</option>
                <option value="Platinum">Platinum</option>
                <option value="22k Burnished Gold">22k Burnished Gold</option>
              </select>
              <select value={size} onChange={(e) => setSize(e.target.value)} style={inputStyle}>
                <option value="Standard">Standard Size</option>
                <option value="Size 5">Size 5</option>
                <option value="Size 6">Size 6</option>
                <option value="Size 7">Size 7</option>
                <option value="Size 8">Size 8</option>
                <option value="Size 9">Size 9</option>
              </select>
            </div>
            <input 
              type="text" 
              placeholder="Complimentary Engraving (Max 15 chars)" 
              maxLength={15}
              value={engraving}
              onChange={(e) => setEngraving(e.target.value)}
              style={inputStyle}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '20px' }}>
            <div style={{ display: 'flex', gap: '10px' }}>
              <button 
                className="btn-gold" 
                style={{ flex: 1, padding: '12px', fontSize: '13px' }}
                onClick={() => {
                  if (onBuyNow) onBuyNow(product, { metal, size, engraving });
                  handleClose();
                }}
              >
                Buy Now
              </button>
              <button 
                className="btn-outline" 
                style={{ flex: 1, padding: '12px', fontSize: '13px', background: 'transparent', color: 'var(--gold-light)', border: '1px solid var(--gold-light)', cursor: 'pointer' }}
                onClick={() => {
                  onAddToCart(product, { metal, size, engraving });
                  handleClose();
                }}
              >
                Add To Treasury Box
              </button>
            </div>
            <button 
              style={{ width: '100%', padding: '12px', fontSize: '13px', background: 'transparent', color: 'var(--gray-text)', border: '1px solid rgba(255,255,255,0.2)', cursor: 'pointer', transition: 'all 0.3s' }}
              onMouseOver={(e) => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)' }}
              onMouseOut={(e) => { e.currentTarget.style.color = 'var(--gray-text)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)' }}
              onClick={() => {
                window.location.hash = "#consultation";
                handleClose();
              }}
            >
              Book Private Viewing
            </button>
            <button 
              style={{ width: '100%', padding: '12px', fontSize: '13px', background: 'var(--charcoal)', color: 'var(--white)', border: 'none', cursor: 'pointer', transition: 'all 0.3s', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}
              onMouseOver={(e) => { e.currentTarget.style.background = 'var(--emerald-mid)' }}
              onMouseOut={(e) => { e.currentTarget.style.background = 'var(--charcoal)' }}
              onClick={() => {
                alert("Initiating Live Video Shopping Experience with a jewelry expert...");
              }}
            >
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M23 7l-7 5 7 5V7z"></path><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg>
              Live Video Shopping
            </button>
            <div style={{ textAlign: 'center', fontSize: '12px', color: 'var(--gray-text)', marginTop: '8px', fontStyle: 'italic' }}>
              ✦ Financing available: 4 interest-free payments of ${(product.price / 4).toLocaleString()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
