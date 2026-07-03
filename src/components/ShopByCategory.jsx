import React from 'react';

const CATEGORIES = [
  { name: 'Rings', img: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=300&q=80' },
  { name: 'Necklaces', img: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=300&q=80' },
  { name: 'Earrings', img: 'https://images.unsplash.com/photo-1635767798638-3e25273a8236?auto=format&fit=crop&w=300&q=80' },
  { name: 'Bracelets', img: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=300&q=80' },
  { name: 'Bridal', img: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=300&q=80' },
  { name: 'Gifts', img: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=300&q=80' }
];

export default function ShopByCategory() {
  return (
    <section style={{ padding: '60px 20px', background: 'var(--white)', textAlign: 'center' }}>
      <h2 style={{ fontSize: '28px', fontFamily: 'Cinzel, serif', color: 'var(--emerald-deep)', marginBottom: '40px' }}>
        Shop by Category
      </h2>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap', maxWidth: '1200px', margin: '0 auto' }}>
        {CATEGORIES.map((cat, idx) => (
          <a key={idx} href="#catalog" style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px', cursor: 'pointer', group: 'true' }}>
            <div style={{ width: '120px', height: '120px', borderRadius: '50%', overflow: 'hidden', border: '2px solid var(--gray-light)', padding: '4px', transition: 'all 0.3s' }}
                 onMouseOver={(e) => e.currentTarget.style.borderColor = 'var(--gold-burnished)'}
                 onMouseOut={(e) => e.currentTarget.style.borderColor = 'var(--gray-light)'}
            >
              <img src={cat.img} alt={cat.name} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%', transition: 'transform 0.5s' }} 
                   onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                   onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
              />
            </div>
            <span style={{ color: 'var(--charcoal)', fontWeight: '600', textTransform: 'uppercase', fontSize: '13px', letterSpacing: '1px' }}>
              {cat.name}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}



