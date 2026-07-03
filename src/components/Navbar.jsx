import React, { useState } from 'react';

export default function Navbar({ cartCount, onCartToggle }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 1000, background: 'var(--white)', borderBottom: '1px solid var(--gray-light)' }}>
      <div className="tanishq-ticker" style={{
        backgroundColor: 'var(--emerald-deep)',
        color: 'var(--gold-light)',
        fontSize: '10px',
        textAlign: 'center',
        padding: '8px 20px',
        fontWeight: '600',
        letterSpacing: '1.5px',
        borderBottom: '1px solid rgba(188, 160, 87, 0.3)',
        textTransform: 'uppercase',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        width: '100%'
      }}>
        <div className="ticker-scroll-content">
          ✦ Live Rates: 24K Gold: $75.50/g | 22K (916) Gold: $69.20/g | 925 Sterling Silver: $1.80/g | 18K Diamond Gold: $58.10/g ✦ Book a Showroom Appointment for custom designs ✦ Free Insured Shipping ✦
        </div>
      </div>
      <div className="nav-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '80px', padding: '0 30px' }}>
        
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

        <a href="#" className="logo-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <span className="logo-main" style={{ fontSize: '24px', fontWeight: '800', letterSpacing: '3px', color: 'var(--emerald-deep)' }}>AURA</span>
          <span className="logo-sub" style={{ fontSize: '9px', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--gold-burnished)', marginTop: '2px' }}>Vault of Treasures</span>
        </a>
        
        <nav className={`nav-wrapper ${isMenuOpen ? 'open' : ''}`}>
          <ul className="nav-menu">
            <li><a href="#" className="nav-link active" onClick={() => setIsMenuOpen(false)}>Home</a></li>
            <li><a href="#catalog" className="nav-link" onClick={() => setIsMenuOpen(false)}>Collections</a></li>
            <li><a href="#metal-rates" className="nav-link" onClick={() => setIsMenuOpen(false)}>Today's Rates</a></li>
            <li><a href="#consultation" className="nav-link" onClick={() => setIsMenuOpen(false)}>Consultation</a></li>
          </ul>
        </nav>

        <div className="nav-icons" style={{ display: 'flex', alignItems: 'center' }}>
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
