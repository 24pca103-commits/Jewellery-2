import React, { useState } from 'react';

const MARKET_RATES = {
  metal: {
    gold24k: 75.50,
    gold916: 69.20,
    platinum: 95.00,
    rosegold: 71.80,
    silver: 1.80
  },
  stone: {
    none: 0,
    diamond: 1800,
    emerald: 1200,
    sapphire: 1000,
    ruby: 1150
  }
};

export default function Estimator() {
  const [metal, setMetal] = useState('gold24k');
  const [metalWeight, setMetalWeight] = useState(15);
  const [stone, setStone] = useState('diamond');
  const [stoneWeight, setStoneWeight] = useState(1.5);

  const metalPrice = (MARKET_RATES.metal[metal] || 0) * (parseFloat(metalWeight) || 0);
  const stonePrice = (MARKET_RATES.stone[stone] || 0) * (parseFloat(stoneWeight) || 0);
  
  // Crafting fee formula: 15% of metal value + custom base fee of $250
  const craftFee = (metalPrice * 0.15) + 250;
  const total = metalPrice + stonePrice + craftFee;

  return (
    <section className="section" id="estimator">
      <div className="section-header">
        <span className="section-tag">Vault Valuation</span>
        <h2 className="section-title">Bespoke Price Estimator</h2>
      </div>

      <div className="estimator-layout">
        <div className="estimator-info">
          <h3>Live Metal & Gem Estimator</h3>
          <p>Curate your unique combination of fine metals and certified stones to calculate a real-time crafting estimate. Prices fluctuate based on market averages.</p>
          
          <div className="ticker-box">
            <div className="ticker-item">
              <div className="ticker-label">24k Gold (g)</div>
              <div className="ticker-val">$75.50</div>
            </div>
            <div className="ticker-item">
              <div className="ticker-label">925 Silver (g)</div>
              <div className="ticker-val">$1.80</div>
            </div>
            <div className="ticker-item">
              <div className="ticker-label">Diamond (ct)</div>
              <div className="ticker-val">$1,800</div>
            </div>
          </div>
        </div>

        <div className="estimator-form">
          <div className="form-group">
            <label htmlFor="estimator-metal">Select Fine Metal</label>
            <select 
              id="estimator-metal" 
              className="form-select"
              value={metal}
              onChange={(e) => setMetal(e.target.value)}
            >
              <option value="gold24k">24K Burnished Yellow Gold</option>
              <option value="gold916">22K Gold (916 Purity)</option>
              <option value="platinum">Imperial Platinum</option>
              <option value="rosegold">Ethereal Rose Gold</option>
              <option value="silver">925 Sterling Silver</option>
            </select>
          </div>
          
          <div className="form-group">
            <label htmlFor="estimator-weight">Estimated Metal Weight (grams)</label>
            <input 
              type="number" 
              id="estimator-weight" 
              className="form-input" 
              min="1" 
              max="500" 
              value={metalWeight}
              onChange={(e) => setMetalWeight(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="estimator-stone">Primary Gemstone</label>
            <select 
              id="estimator-stone" 
              className="form-select"
              value={stone}
              onChange={(e) => setStone(e.target.value)}
            >
              <option value="none">No Stone</option>
              <option value="diamond">Brilliant-Cut Diamond</option>
              <option value="emerald">Colombian Emerald</option>
              <option value="sapphire">Ceylon Sapphire</option>
              <option value="ruby">Burmese Ruby</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="stone-weight">Stone Carats</label>
            <input 
              type="number" 
              id="stone-weight" 
              className="form-input" 
              min="0" 
              max="25" 
              step="0.1" 
              value={stoneWeight}
              onChange={(e) => setStoneWeight(e.target.value)}
            />
          </div>

          {/* Pricing breakdown summary list for complete transparency */}
          <div className="estimate-result" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', color: 'var(--gray-text)' }}>
              <span>Metal Value:</span>
              <span>${Math.round(metalPrice).toLocaleString()}</span>
            </div>
            {stone !== 'none' && (
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', color: 'var(--gray-text)' }}>
                <span>Gemstone Value:</span>
                <span>${Math.round(stonePrice).toLocaleString()}</span>
              </div>
            )}
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', color: 'var(--gray-text)' }}>
              <span>Crafting & Making Fee:</span>
              <span>${Math.round(craftFee).toLocaleString()}</span>
            </div>
            
            <hr style={{ border: 'none', borderTop: '1px solid rgba(188, 160, 87, 0.2)', margin: '4px 0' }} />
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span className="res-lbl" style={{ margin: 0 }}>Estimated Total:</span>
              <span className="res-val" id="estimated-total" style={{ margin: 0 }}>${Math.round(total).toLocaleString()}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



