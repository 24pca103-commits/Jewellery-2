import React from 'react';

export default function Hero() {
  return (
    <section className="hero" style={{ background: 'var(--cream-bg)', display: 'flex', justifyContent: 'center', padding: '40px 20px' }}>
      <div style={{ maxWidth: '1400px', width: '100%', position: 'relative', display: 'flex', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
        
        {/* Banner Content Box */}
        <div style={{ flex: 1, backgroundColor: 'var(--white)', padding: '60px', display: 'flex', flexDirection: 'column', justifyContent: 'center', zIndex: 2 }}>
          <span style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--emerald-light)', marginBottom: '15px', fontWeight: 'bold' }}>
            New Arrival
          </span>
          <h1 style={{ fontSize: '3rem', fontFamily: 'Cinzel, serif', color: 'var(--emerald-deep)', lineHeight: '1.2', marginBottom: '20px' }}>
            The Modern<br/>Bridal Collection
          </h1>
          <p style={{ color: 'var(--gray-text)', fontSize: '15px', lineHeight: '1.6', marginBottom: '30px', maxWidth: '400px' }}>
            Discover our latest curation of conflict-free diamonds and intricately designed bands for your special day.
          </p>
          <a href="#catalog" className="btn-gold" style={{ alignSelf: 'flex-start', padding: '15px 40px', background: 'var(--emerald-deep)', color: 'var(--white)', textDecoration: 'none', borderRadius: '4px', textTransform: 'uppercase', fontSize: '13px', letterSpacing: '1px' }}>
            Shop The Collection
          </a>
        </div>
        
        {/* Banner Image */}
        <div style={{ flex: 1, backgroundImage: "url('https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1200&q=80')", backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '500px' }}>
        </div>
        
      </div>
    </section>
  );
}
