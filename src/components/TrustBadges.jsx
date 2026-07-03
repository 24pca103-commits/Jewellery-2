import React from 'react';

const BADGES = [
  {
    icon: <svg width="32" height="32" fill="none" stroke="var(--gold-burnished)" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><path d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12"></path></svg>,
    title: 'Free Insured Shipping',
    desc: 'On all orders nationwide'
  },
  {
    icon: <svg width="32" height="32" fill="none" stroke="var(--gold-burnished)" strokeWidth="1.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><path d="M12 8v4l3 3"></path></svg>,
    title: 'Lifetime Exchange',
    desc: 'Upgrade anytime'
  },
  {
    icon: <svg width="32" height="32" fill="none" stroke="var(--gold-burnished)" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>,
    title: '100% Certified',
    desc: 'Authentic Hallmark Jewelry'
  },
  {
    icon: <svg width="32" height="32" fill="none" stroke="var(--gold-burnished)" strokeWidth="1.5" viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>,
    title: 'Secure Payments',
    desc: 'Encrypted checkout process'
  }
];

export default function TrustBadges() {
  return (
    <section style={{ padding: '40px 20px', background: 'var(--cream-bg)', borderTop: '1px solid var(--gray-light)', borderBottom: '1px solid var(--gray-light)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px' }}>
        {BADGES.map((badge, idx) => (
          <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '15px', flex: '1 1 200px' }}>
            <div style={{ background: 'var(--white)', padding: '15px', borderRadius: '50%', boxShadow: '0 4px 10px rgba(0,0,0,0.05)' }}>
              {badge.icon}
            </div>
            <div>
              <h4 style={{ color: 'var(--charcoal)', fontSize: '14px', marginBottom: '4px', fontWeight: '700' }}>{badge.title}</h4>
              <p style={{ color: 'var(--gray-text)', fontSize: '12px' }}>{badge.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}



