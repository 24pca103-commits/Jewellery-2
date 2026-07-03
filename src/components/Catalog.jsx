import React, { useState } from 'react';

export default function Catalog({ products, onAddToCart, onQuickView }) {
  const [filter, setFilter] = useState('all');

  const filteredProducts = filter === 'all' 
    ? products 
    : products.filter(p => p.category === filter);

  return (
    <section className="section" id="catalog" style={{ padding: 'clamp(40px, 6vw, 60px) clamp(16px, 3vw, 20px)', background: 'var(--white)' }}>
      <div className="section-header" style={{ marginBottom: '40px' }}>
        <h2 className="section-title" style={{ fontSize: '32px', color: 'var(--emerald-deep)', fontFamily: 'Cinzel, serif' }}>Our Collections</h2>
      </div>

      {/* Simplified Category Filters Only */}
      <div className="catalog-controls-bar" style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '40px',
        paddingBottom: '20px',
        borderBottom: '1px solid var(--gray-light)'
      }}>
        <div className="catalog-filters" style={{ margin: 0, display: 'flex', gap: '15px', overflowX: 'auto', paddingBottom: '10px' }}>
          {['all', 'rings', 'necklaces', 'earrings', 'bracelets'].map(cat => (
            <button 
              key={cat}
              className={`filter-btn ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
              style={{ 
                textTransform: 'capitalize', 
                whiteSpace: 'nowrap',
                padding: '8px 24px',
                border: filter === cat ? '1px solid var(--gold-burnished)' : '1px solid var(--gray-light)',
                borderRadius: '30px',
                background: filter === cat ? 'var(--gold-burnished)' : 'transparent',
                color: filter === cat ? 'var(--white)' : 'var(--charcoal)',
                cursor: 'pointer'
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Product Display Horizontal Scroll */}
      <div className="product-grid" style={{ 
        display: 'flex', 
        overflowX: 'auto', 
        gap: '30px', 
        paddingBottom: '20px', 
        scrollSnapType: 'x mandatory',
        WebkitOverflowScrolling: 'touch',
        scrollbarWidth: 'none'
      }}>
        {filteredProducts.map(p => (
          <div 
            className="product-card" 
            key={p.id} 
            onClick={() => onQuickView(p)} 
            style={{ cursor: 'pointer', minWidth: 'clamp(240px, 70vw, 300px)', flex: '0 0 auto', scrollSnapAlign: 'start' }}
          >
            <div className="product-img-wrapper">
              <span className="product-badge" style={{ background: 'var(--gold-burnished)', color: 'var(--white)' }}>Premium</span>
              <img src={p.img} alt={p.title} className="product-img" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'opacity 0.3s ease' }} 
                   onMouseOver={(e) => { if (p.hoverImg) e.currentTarget.style.opacity = 0; }}
                   onMouseOut={(e) => { if (p.hoverImg) e.currentTarget.style.opacity = 1; }}
              />
              {p.hoverImg && (
                <img src={p.hoverImg} alt={`${p.title} lifestyle view`} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: -1 }} />
              )}
              <div className="product-actions">
                <button 
                  className="action-btn" 
                  onClick={(e) => { e.stopPropagation(); onAddToCart(p); }} 
                  title="Add to Cart"
                >
                  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4H6z"></path>
                    <path d="M3 6h18M16 10a4 4 0 0 1-8 0"></path>
                  </svg>
                </button>
                <button 
                  className="action-btn" 
                  onClick={(e) => { e.stopPropagation(); onQuickView(p); }} 
                  title="Quick View"
                >
                  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                </button>
              </div>
            </div>
            <div className="product-info" style={{ textAlign: 'center', marginTop: '15px' }}>
              <div className="product-category" style={{ color: 'var(--gray-text)', fontSize: '12px', textTransform: 'uppercase' }}>{p.category}</div>
              <h4 className="product-title" style={{ fontSize: '16px', color: 'var(--charcoal)', margin: '5px 0' }}>{p.title}</h4>
              <div className="product-price" style={{ color: 'var(--gold-burnished)', fontWeight: 'bold' }}>${p.price.toLocaleString()}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}



