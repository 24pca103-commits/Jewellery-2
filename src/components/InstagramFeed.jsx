import React from 'react';

const POSTS = [
  "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=300&q=80",
  "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=300&q=80",
  "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=300&q=80",
  "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=300&q=80",
  "https://images.unsplash.com/photo-1635767798638-3e25273a8236?auto=format&fit=crop&w=300&q=80"
];

export default function InstagramFeed() {
  return (
    <section style={{ padding: '60px 0', background: 'var(--white)', textAlign: 'center', borderTop: '1px solid var(--gray-light)' }}>
      <h2 style={{ fontSize: '28px', fontFamily: 'Cinzel, serif', color: 'var(--emerald-deep)', marginBottom: '10px' }}>
        As Seen On You
      </h2>
      <p style={{ color: 'var(--gray-text)', marginBottom: '40px', fontSize: '14px' }}>
        Tag @JewelleryShop to be featured on our page.
      </p>
      
      <div style={{ display: 'flex', overflowX: 'auto', gap: '0', scrollbarWidth: 'none' }}>
        {POSTS.map((img, idx) => (
          <div key={idx} style={{ flex: '0 0 auto', width: '20%', minWidth: 'clamp(160px, 30vw, 250px)', position: 'relative', overflow: 'hidden', aspectRatio: '1/1' }}>
            <img 
              src={img} 
              alt={`Instagram post ${idx}`} 
              style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'scale(1.1)';
                e.currentTarget.nextElementSibling.style.opacity = '1';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.nextElementSibling.style.opacity = '0';
              }}
            />
            {/* Hover overlay with Instagram Icon */}
            <div 
              style={{
                position: 'absolute',
                top: 0, left: 0, width: '100%', height: '100%',
                backgroundColor: 'rgba(0,0,0,0.4)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                opacity: 0,
                transition: 'opacity 0.3s',
                pointerEvents: 'none'
              }}
            >
              <svg width="40" height="40" fill="none" stroke="white" strokeWidth="1.5" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </div>
          </div>
        ))}
      </div>
      
      <a href="#" className="btn-outline" style={{ display: 'inline-block', marginTop: '40px', padding: '12px 30px', border: '1px solid var(--emerald-deep)', color: 'var(--emerald-deep)', textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '13px', fontWeight: '600' }}>
        Follow Us
      </a>
    </section>
  );
}


