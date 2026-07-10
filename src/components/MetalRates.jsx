import React, { useState, useEffect } from 'react';

const BASE_RATES = {
  gold24k:  75.50,
  gold22k:  69.20,
  gold18k:  58.10,
  silver:    1.80,
  diamond: 3800.00,
};

function rand(min, max) {
  return (Math.random() * (max - min) + min).toFixed(2);
}

export default function MetalRates() {
  const [rates, setRates] = useState(BASE_RATES);
  const [updated, setUpdated] = useState(new Date());
  const [flashing, setFlashing] = useState({});

  // Simulate live rate fluctuation every 8 seconds
  useEffect(() => {
    const id = setInterval(() => {
      setRates(prev => {
        const next = {
          gold24k:  +rand(prev.gold24k  - 0.30, prev.gold24k  + 0.30),
          gold22k:  +rand(prev.gold22k  - 0.28, prev.gold22k  + 0.28),
          gold18k:  +rand(prev.gold18k  - 0.22, prev.gold18k  + 0.22),
          silver:   +rand(prev.silver   - 0.02, prev.silver   + 0.02),
          diamond:  +rand(prev.diamond  - 5,    prev.diamond   + 5),
        };
        const changed = {};
        Object.keys(next).forEach(k => { changed[k] = next[k] !== prev[k]; });
        setFlashing(changed);
        setTimeout(() => setFlashing({}), 700);
        return next;
      });
      setUpdated(new Date());
    }, 8000);
    return () => clearInterval(id);
  }, []);

  const cards = [
    {
      key: 'gold24k',
      label: '24K Pure Gold',
      purity: '999 Purity',
      icon: '🪙',
      color: '#D4A843',
      img: 'https://cdn.eternz.com/thumbnails/products/253_25dca409_thumbnail_1024.png',
      bg: 'linear-gradient(135deg, #3B2507 0%, #6B3E10 100%)',
      unit: '/gram',
      prefix: '$',
    },
    {
      key: 'gold22k',
      label: '22K Gold (916)',
      purity: '916 Purity',
      icon: '💛',
      color: '#F0C040',
      img: 'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw677f6639/images/hi-res/511069SOEAGA00_1.jpg?sw=480&sh=480',
      bg: 'linear-gradient(135deg, #4A2D06 0%, #7C4A12 100%)',
      unit: '/gram',
      prefix: '$',
    },
    {
      key: 'gold18k',
      label: '18K Gold',
      purity: '750 Purity',
      icon: '✨',
      color: '#E8B84B',
      img: 'https://m.media-amazon.com/images/I/71TM-Vk7w7L._AC_UY1100_.jpg',
      bg: 'linear-gradient(135deg, #3A2A08 0%, #5E4015 100%)',
      unit: '/gram',
      prefix: '$',
    },
    {
      key: 'silver',
      label: '925 Sterling Silver',
      purity: '925 Purity',
      icon: '🔘',
      color: '#C0C8D8',
      img: 'https://silverlinings.in/cdn/shop/products/Filigree_Earrings_ER303.jpg?v=1757268890',
      bg: 'linear-gradient(135deg, #1A1E2A 0%, #2D3446 100%)',
      unit: '/gram',
      prefix: '$',
    },
    {
      key: 'diamond',
      label: 'Diamond',
      purity: 'VVS1 Clarity',
      icon: '💎',
      color: '#A8D8F0',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJtzjHpJ3q0WxUxm5MH1mLE2Nn_bg0QjHwWGbpZdA4Dw8N7AoEsnfrDmz0&s=10',
      bg: 'linear-gradient(135deg, #0D1B2A 0%, #1B3A5C 100%)',
      unit: '/carat',
      prefix: '$',
    },
  ];

  const timeStr = updated.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', second: '2-digit' });

  return (
    <section id="metal-rates" style={{ background: 'var(--cream)', padding: 'clamp(20px, 4vw, 45px) clamp(16px, 4vw, 40px)' }}>
      <div style={{ maxWidth: '1300px', margin: '0 auto' }}>

         {/* Header */}
         <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <p style={{ color: 'var(--gold-burnished)', fontSize: '11px', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '12px' }}>
            Live Market Prices
          </p>
          <h2 style={{ fontSize: '38px', color: 'var(--emerald-deep)', marginBottom: '14px' }}>
            Today's Metal Rates
          </h2>
          <p style={{ color: 'var(--gray-text)', fontSize: '14px' }}>
            Rates updated live every day &nbsp;·&nbsp;
            <span style={{ color: 'var(--gold-burnished)', fontWeight: 600 }}>Last updated: {timeStr}</span>
          </p>
        </div>

        {/* Rate Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '24px',
        }}>
          {cards.map(card => (
            <div key={card.key} style={{
              background: `linear-gradient(180deg, rgba(15, 10, 8, 0.72) 0%, rgba(5, 3, 2, 0.94) 100%), url(${card.img}) center/cover no-repeat`,
              borderRadius: '16px',
              padding: '32px 24px',
              border: `1px solid rgba(188,160,87,0.25)`,
              boxShadow: '0 8px 32px rgba(0,0,0,0.18)',
              transition: 'transform 0.3s, box-shadow 0.3s',
              cursor: 'default',
              position: 'relative',
              overflow: 'hidden',
            }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 16px 40px rgba(0,0,0,0.28)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.18)';
              }}
            >
              {/* Glow orb */}
              <div style={{
                position: 'absolute', top: '-30px', right: '-30px',
                width: '100px', height: '100px',
                borderRadius: '50%',
                background: card.color,
                opacity: 0.08,
                filter: 'blur(20px)',
              }} />



              <p style={{
                color: 'rgba(255,255,255,0.55)',
                fontSize: '10px', letterSpacing: '2.5px',
                textTransform: 'uppercase',
                marginBottom: '6px',
              }}>
                {card.purity}
              </p>

              <h3 style={{
                color: '#fff',
                fontSize: '16px',
                fontWeight: '700',
                marginBottom: '18px',
              }}>
                {card.label}
              </h3>

              <div style={{
                transition: 'color 0.4s',
                color: flashing[card.key] ? '#fff' : card.color,
              }}>
                <span style={{ fontSize: '30px', fontWeight: '800', fontFamily: 'Inter, sans-serif' }}>
                  {card.prefix}{rates[card.key].toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </span>
                <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.45)', marginLeft: '4px' }}>
                  {card.unit}
                </span>
              </div>

              <div style={{
                marginTop: '20px',
                paddingTop: '16px',
                borderTop: '1px solid rgba(255,255,255,0.08)',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
              }}>
                <span style={{
                  width: '7px', height: '7px',
                  borderRadius: '50%',
                  background: '#4CAF50',
                  display: 'inline-block',
                  animation: 'pulse-green 1.5s infinite',
                }} />
                <span style={{ color: 'rgba(255,255,255,0.45)', fontSize: '11px', letterSpacing: '0.5px' }}>
                  Live · Market rate
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <p style={{
          textAlign: 'center',
          color: 'var(--gray-text)',
          fontSize: '12px',
          marginTop: '36px',
          opacity: 0.7,
        }}>
          * Rates are indicative and subject to making charges, GST, and hallmarking fees. Contact us for final pricing.
        </p>
      </div>
    </section>
  );
}



