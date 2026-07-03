import React, { useState } from 'react';

export default function Catalog({ products, onAddToCart, onQuickView }) {
  const [filter, setFilter] = useState('all');

  const filteredProducts = filter === 'all' 
    ? products 
    : products.filter(p => p.category === filter);

  return (
    <section className="section" id="catalog">
      <div className="section-header">
        <span className="section-tag">Curated Vault</span>
        <h2 className="section-title">The Master Collections</h2>
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
        <div className="catalog-filters" style={{ margin: 0 }}>
          {['all', 'rings', 'necklaces', 'earrings', 'bracelets'].map(cat => (
            <button 
              key={cat}
              className={`filter-btn ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
              style={{ textTransform: 'capitalize' }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Product Display Grid */}
      <div className="product-grid">
        {filteredProducts.map(p => (
          <div 
            className="product-card" 
            key={p.id} 
            onClick={() => onQuickView(p)} 
            style={{ cursor: 'pointer' }}
          >
            <div className="product-img-wrapper">
              <span className="product-badge">Premium</span>
              <img src={p.img} alt={p.title} className="product-img" />
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
            <div className="product-info">
              <div className="product-category">{p.category}</div>
              <h4 className="product-title">{p.title}</h4>
              <div className="product-price">${p.price.toLocaleString()}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
