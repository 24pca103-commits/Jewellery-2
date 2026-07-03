import React, { useState, useEffect } from 'react';

const SLIDES = [
  {
    tag: "New Arrival",
    title: "The Modern\nBridal Collection",
    desc: "Discover our latest curation of conflict-free diamonds and intricately designed bands for your special day.",
    img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1200&q=80"
  },
  {
    tag: "Everyday Elegance",
    title: "Minimalist\nGold Essentials",
    desc: "Lightweight 18k gold pieces perfect for daily wear, blending contemporary design with timeless tradition.",
    img: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=1200&q=80"
  },
  {
    tag: "Bespoke Luxury",
    title: "Heritage\nKundan Sets",
    desc: "Experience the grandeur of traditional Indian craftsmanship with our heavy bridal sets.",
    img: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1200&q=80"
  }
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % SLIDES.length);
  const prevSlide = () => setCurrent((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1));

  return (
    <section className="hero" style={{ background: 'var(--cream-bg)', display: 'flex', justifyContent: 'center', padding: '20px', position: 'relative' }}>
      <div style={{ maxWidth: '1400px', width: '100%', position: 'relative', display: 'flex', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', backgroundColor: 'var(--white)' }}>
        
        {/* Banner Content Box */}
        <div style={{ flex: 1, padding: '60px', display: 'flex', flexDirection: 'column', justifyContent: 'center', zIndex: 2 }}>
          <span style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--emerald-light)', marginBottom: '15px', fontWeight: 'bold' }}>
            {SLIDES[current].tag}
          </span>
          <h1 style={{ fontSize: '3rem', fontFamily: 'Cinzel, serif', color: 'var(--emerald-deep)', lineHeight: '1.2', marginBottom: '20px', whiteSpace: 'pre-line' }}>
            {SLIDES[current].title}
          </h1>
          <p style={{ color: 'var(--gray-text)', fontSize: '15px', lineHeight: '1.6', marginBottom: '30px', maxWidth: '400px' }}>
            {SLIDES[current].desc}
          </p>
          <a href="#catalog" className="btn-gold" style={{ alignSelf: 'flex-start', padding: '15px 40px', background: 'var(--emerald-deep)', color: 'var(--white)', textDecoration: 'none', borderRadius: '4px', textTransform: 'uppercase', fontSize: '13px', letterSpacing: '1px' }}>
            Shop The Collection
          </a>
        </div>
        
        {/* Banner Image */}
        <div style={{ flex: 1, minHeight: '500px', position: 'relative', overflow: 'hidden' }}>
          {SLIDES.map((slide, index) => (
            <div 
              key={index}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundImage: `url('${slide.img}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: current === index ? 1 : 0,
                transition: 'opacity 0.8s ease-in-out'
              }}
            />
          ))}
        </div>
        
        {/* Slider Controls */}
        <button onClick={prevSlide} style={{ position: 'absolute', left: '20px', top: '50%', transform: 'translateY(-50%)', background: 'rgba(255,255,255,0.8)', border: 'none', borderRadius: '50%', width: '40px', height: '40px', cursor: 'pointer', zIndex: 10, display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}>
          <svg width="20" height="20" fill="none" stroke="var(--emerald-deep)" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6"></path></svg>
        </button>
        <button onClick={nextSlide} style={{ position: 'absolute', right: '20px', top: '50%', transform: 'translateY(-50%)', background: 'rgba(255,255,255,0.8)', border: 'none', borderRadius: '50%', width: '40px', height: '40px', cursor: 'pointer', zIndex: 10, display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}>
          <svg width="20" height="20" fill="none" stroke="var(--emerald-deep)" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 18l6-6-6-6"></path></svg>
        </button>
        
        {/* Dots */}
        <div style={{ position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '8px', zIndex: 10 }}>
          {SLIDES.map((_, index) => (
            <div key={index} onClick={() => setCurrent(index)} style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: current === index ? 'var(--emerald-deep)' : 'rgba(0,0,0,0.2)', cursor: 'pointer', transition: 'background-color 0.3s' }} />
          ))}
        </div>
        
      </div>
    </section>
  );
}


