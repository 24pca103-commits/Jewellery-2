import React, { useState } from 'react';

export default function Navbar({ cartCount, onCartToggle }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBrandsOpen, setIsBrandsOpen] = useState(false);

  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 1000, background: 'var(--white)', borderBottom: '1px solid var(--gray-light)' }}>
      <style>{`
        .topbar { display: flex; justify-content: space-between; align-items: center; padding: 8px clamp(10px, 3vw, 40px); gap: 8px; flex-wrap: wrap; }
        .topbar-left { display: flex; gap: 20px; alignItems: center; flex-wrap: wrap; }
        .topbar-right { display: flex; gap: 15px; alignItems: center; flex-wrap: wrap; }
        .brands-dropdown-container { position: relative; }
        .brands-dropdown .nav-link { padding: 5px 20px; color: var(--charcoal); }
        
        /* Desktop: Dropdown hover behavior with smooth CSS transition */
        @media (min-width: 769px) {
          .brands-dropdown { 
            position: absolute; 
            top: 100%; 
            left: 0; 
            background-color: var(--white); 
            border: 1px solid var(--gray-light); 
            box-shadow: var(--shadow-soft); 
            min-width: 200px; 
            padding: 10px 0; 
            display: flex; 
            flex-direction: column; 
            gap: 10px; 
            z-index: 100;
            opacity: 0;
            visibility: hidden;
            transform: translateY(10px);
            transition: opacity 0.3s ease, transform 0.3s ease, visibility 0.3s;
          }
          .brands-dropdown-container:hover .brands-dropdown {
            opacity: 1;
            visibility: visible;
            transform: translateY(0);
          }
        }
        
        /* Mobile: Dropdown display logic */
        @media (max-width: 768px) {
          .topbar { flex-direction: column; gap: 10px; padding: 8px 10px; text-align: center; }
          .topbar-left { justify-content: center; }
          .topbar-right { flex-wrap: wrap; justify-content: center; }
          .brands-dropdown-container { display: flex; flex-direction: column; align-items: center; width: 100%; }
          .brands-dropdown {
            display: none;
            flex-direction: column;
            gap: 10px;
            width: 100%;
            background-color: transparent;
            border: none;
            box-shadow: none;
            padding: 0;
            margin-top: 10px;
            align-items: center;
          }
          .brands-dropdown.mobile-open {
            display: flex;
          }
        }
      `}</style>
      {/* Top Bar for Store Locator and Live Gold Rates */}
      <div className="topbar" style={{
        backgroundColor: 'var(--emerald-deep)',
        color: 'var(--gold-light)',
        fontSize: '11px',
        fontWeight: '600',
        letterSpacing: '1px',
        textTransform: 'uppercase'
      }}>
        <div className="topbar-left">
          <a href="#store-locator" style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
            Store Locator
          </a>
          <span>|</span>
          <a href="#corporate" style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            Corporate & Gifting
          </a>
        </div>
        <div className="topbar-right">
          <span>Live Gold (24K): $75.50/g</span>
          <span>Silver (925): $1.80/g</span>
          <div style={{ borderLeft: '1px solid var(--gold-burnished)', height: '12px', margin: '0 5px' }}></div>
          <select style={{ 
            background: 'transparent', 
            color: 'var(--gold-light)', 
            border: 'none', 
            fontSize: '11px', 
            fontWeight: '600',
            cursor: 'pointer',
            outline: 'none'
          }}>
            <option value="USD">USD ($)</option>
            <option value="INR">INR (₹)</option>
            <option value="EUR">EUR (€)</option>
          </select>
        </div>
      </div>
      
      <div className="nav-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', minHeight: '64px', height: 'auto', padding: '0 clamp(12px, 3vw, 30px)', flexWrap: 'wrap', gap: '8px' }}>
        
        {/* Mobile Hamburger menu toggle button */}
        <button 
          className="menu-toggle-btn" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
          style={{
            background: 'none',
            border: 'none',
            color: 'var(--emerald-deep)',
            cursor: 'pointer',
            fontSize: '24px',
            padding: '5px',
            outline: 'none'
          }}
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>

        <a href="#" className="logo-container" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
          {/* Premium Diamond Icon */}
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--gold-burnished)" strokeWidth="1.5" style={{ minWidth: '28px' }}>
            <path d="M12 2L2 7l10 5 10-5-10-5z" fill="rgba(188, 160, 87, 0.1)"></path>
            <path d="M2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', lineHeight: '1.1' }}>
            <span className="logo-main" style={{ fontFamily: 'Cinzel, serif', fontSize: 'clamp(16px, 3.5vw, 20px)', fontWeight: '800', letterSpacing: '2px', color: '#2a1a14', textTransform: 'uppercase' }}>
              Thodoo
            </span>
            <span className="logo-sub" style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '8px', letterSpacing: '4px', color: 'var(--gold-burnished)', textTransform: 'uppercase', marginTop: '2px' }}>
              Jewellery
            </span>
          </div>
        </a>
        
        {/* Mobile menu overlay backdrop */}
        {isMenuOpen && (
          <div 
            className="mobile-nav-overlay"
            onClick={() => setIsMenuOpen(false)}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              backgroundColor: 'rgba(6, 28, 20, 0.4)',
              backdropFilter: 'blur(2px)',
              zIndex: 2050
            }}
          />
        )}
        
        <nav className={`nav-wrapper ${isMenuOpen ? 'open' : ''}`}>
          {/* Mobile Close Header */}
          <div className="mobile-menu-header" style={{
            display: 'none',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '24px 20px',
            borderBottom: '1px solid var(--gray-light)',
            marginBottom: '15px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--gold-burnished)" strokeWidth="1.5">
                <path d="M12 2L2 7l10 5 10-5-10-5z" fill="rgba(188, 160, 87, 0.1)"></path>
                <path d="M2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
              <span style={{ fontFamily: 'Cinzel, serif', fontWeight: '800', fontSize: '16px', color: 'var(--emerald-deep)', letterSpacing: '1px' }}>THODOO</span>
            </div>
            <button 
              onClick={() => setIsMenuOpen(false)} 
              aria-label="Close Menu"
              style={{
                background: 'none',
                border: 'none',
                fontSize: '28px',
                cursor: 'pointer',
                color: 'var(--emerald-deep)',
                padding: '5px',
                lineHeight: 1
              }}
            >
              &times;
            </button>
          </div>

          <ul className="nav-menu">
            <li><a href="#" className="nav-link active" onClick={() => setIsMenuOpen(false)}>Home</a></li>
            
            {/* Our Brands Dropdown */}
            <li 
              className="brands-dropdown-container"
              onClick={() => setIsBrandsOpen(!isBrandsOpen)}
            >
              <a href="#brands" className="nav-link" style={{ display: 'flex', alignItems: 'center', gap: '5px' }} onClick={(e) => e.preventDefault()}>
                Our Brands
                <svg width="10" height="10" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"></path></svg>
              </a>
              <div className={`brands-dropdown ${isBrandsOpen ? 'mobile-open' : ''}`}>
                <a href="#mudhra" className="nav-link" onClick={() => { setIsMenuOpen(false); setIsBrandsOpen(false); }}>Mudhra Antique</a>
                <a href="#nimah" className="nav-link" onClick={() => { setIsMenuOpen(false); setIsBrandsOpen(false); }}>Nimah Heritage</a>
                <a href="#anokhi" className="nav-link" onClick={() => { setIsMenuOpen(false); setIsBrandsOpen(false); }}>Anokhi Uncut</a>
              </div>
            </li>
            
            <li><a href="#catalog" className="nav-link" onClick={() => setIsMenuOpen(false)}>Collections</a></li>
            <li><a href="#metal-rates" className="nav-link" onClick={() => setIsMenuOpen(false)}>Today's Rates</a></li>
          </ul>
        </nav>

        <div className="nav-icons" style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <button className="icon-btn" onClick={onCartToggle} aria-label="Cart" style={{ background: 'none', border: 'none', color: 'var(--emerald-deep)', cursor: 'pointer', position: 'relative' }}>
            <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4H6z"></path>
              <path d="M3 6h18M16 10a4 4 0 0 1-8 0"></path>
            </svg>
            {cartCount > 0 && (
              <span className="cart-count" id="cart-badge">{cartCount}</span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}



