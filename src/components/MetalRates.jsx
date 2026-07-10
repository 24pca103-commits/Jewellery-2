import React, { useState, useEffect } from 'react';

const BASE_RATES = {
  gold24k: 75.50,
  gold22k: 69.20,
  gold18k: 58.10,
  silver: 1.80,
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
          gold24k: +rand(prev.gold24k - 0.30, prev.gold24k + 0.30),
          gold22k: +rand(prev.gold22k - 0.28, prev.gold22k + 0.28),
          gold18k: +rand(prev.gold18k - 0.22, prev.gold18k + 0.22),
          silver: +rand(prev.silver - 0.02, prev.silver + 0.02),
          diamond: +rand(prev.diamond - 5, prev.diamond + 5),
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
      img: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=600&q=80',
      unit: '/gram',
      prefix: '$',
    },
    {
      key: 'gold22k',
      label: '22K Gold (916)',
      purity: '916 Purity',
      icon: '💛',
      color: '#F0C040',
      img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80',
      unit: '/gram',
      prefix: '$',
    },
    {
      key: 'gold18k',
      label: '18K Gold',
      purity: '750 Purity',
      icon: '✨',
      color: '#E8B84B',
      img: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=600&q=80',
      unit: '/gram',
      prefix: '$',
    },
    {
      key: 'silver',
      label: '925 Sterling Silver',
      purity: '925 Purity',
      icon: '🔘',
      color: '#C0C8D8',
      img: 'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=600&q=80',
      unit: '/gram',
      prefix: '$',
    },
    {
      key: 'diamond',
      label: 'Diamond',
      purity: 'VVS1 Clarity',
      icon: '💎',
      color: '#A8D8F0',
      img: 'https://images.unsplash.com/photo-1615655404746-8f0309326651?auto=format&fit=crop&w=600&q=80',
      unit: '/carat',
      prefix: '$',
    },
  ];

  const timeStr = updated.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', second: '2-digit' });

  return (
    <section id="metal-rates" className="bg-[#FAF6F0] py-16 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-[#8C6239] text-xs font-bold uppercase tracking-widest mb-3">
            Live Market Prices
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-wide text-charcoal mb-4">
            Today's Metal Rates
          </h2>
          <p className="font-sans text-charcoal-muted text-sm font-light">
            Rates updated live every few seconds &nbsp;·&nbsp;
            <span className="text-[#8C6239] font-semibold">Last updated: {timeStr}</span>
          </p>
        </div>

        {/* Rate Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {cards.map(card => (
            <div 
              key={card.key} 
              className="rounded-2xl p-8 border border-gold/15 shadow-soft transition-all duration-300 transform hover:-translate-y-1.5 hover:shadow-premium relative overflow-hidden"
              style={{
                background: `linear-gradient(180deg, rgba(28, 18, 12, 0.72) 0%, rgba(12, 8, 5, 0.94) 100%), url(${card.img}) center/cover no-repeat`,
              }}
            >
              {/* Glow orb */}
              <div 
                className="absolute -top-8 -right-8 w-24 h-24 rounded-full opacity-10 blur-xl pointer-events-none"
                style={{ background: card.color }} 
              />

              <p className="text-white/50 text-[10px] uppercase tracking-widest mb-2 font-semibold">
                {card.purity}
              </p>

              <h3 className="text-white font-serif text-lg font-bold mb-5">
                {card.label}
              </h3>

              <div 
                className="transition-colors duration-300"
                style={{
                  color: flashing[card.key] ? '#fff' : card.color,
                }}
              >
                <span 
                  className="text-3xl font-bold tracking-tight"
                  style={{ 
                    fontFamily: "system-ui, -apple-system, sans-serif", 
                    fontVariantNumeric: 'tabular-nums' 
                  }}
                >
                  {card.prefix}{rates[card.key].toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </span>
                <span className="text-xs text-white/45 ml-1 font-light">
                  {card.unit}
                </span>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#4CAF50] inline-block animate-pulse" />
                <span className="text-white/45 text-xs font-light">
                  Live · Market rate
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="text-center text-charcoal-muted text-xs mt-10 opacity-70">
          * Rates are indicative and subject to making charges, GST, and hallmarking fees. Contact us for final pricing.
        </p>
      </div>
    </section>
  );
}



