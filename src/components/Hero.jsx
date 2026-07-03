import React from 'react';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-slider">
        <div className="hero-slide active" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1600&q=80')" }}>
          <div className="hero-overlay"></div>
          <div className="hero-content">
            <span className="hero-tag">Signature Masterpiece</span>
            <h1 className="hero-title">Celestial Solitaires & Royal Necklaces</h1>
            <p className="hero-desc">Indulge in handcrafted gold designs that represent centuries of artistic brilliance and the highest clarity gems on earth.</p>
            <a href="#catalog" className="btn-gold">Explore Collection</a>
          </div>
        </div>
      </div>
    </section>
  );
}
