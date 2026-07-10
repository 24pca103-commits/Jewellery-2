import React, { useState } from 'react';
import { Sparkles, Zap, ShieldCheck } from 'lucide-react';

export default function Diamond3D() {
  const [spinSpeed, setSpinSpeed] = useState(10); // duration in seconds
  const [glare, setGlare] = useState(true);
  const [colorTheme, setColorTheme] = useState('platinum'); // platinum | gold | rosegold

  // Color mapping for top/bottom facets
  const facetColor = {
    platinum: 'rgba(240, 248, 255, 0.75)',
    gold: 'rgba(255, 215, 0, 0.75)',
    rosegold: 'rgba(255, 183, 197, 0.75)'
  }[colorTheme];

  const bottomFacetColor = {
    platinum: 'rgba(200, 225, 255, 0.6)',
    gold: 'rgba(218, 165, 32, 0.6)',
    rosegold: 'rgba(224, 137, 157, 0.6)'
  }[colorTheme];

  const speedText = spinSpeed <= 5 ? 'High velocity reflection' : spinSpeed <= 12 ? 'Graceful sweeping orbit' : 'Slow study';

  return (
    <section className="section py-16" id="diamond3d">
      <div className="diamond-3d-layout">
        
        {/* Left Column: Interactive Controls & Details */}
        <div className="diamond-3d-info text-left flex flex-col justify-center space-y-6">
          <div className="flex items-center gap-1.5 text-xs text-[#8C6239] font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            Innovative Facet Precision
          </div>
          
          <h3>Precision Craftsmanship</h3>
          <p className="font-sans text-white/70 text-sm leading-relaxed">
            Our diamonds are cut to absolute mathematical perfection. Explore our ideal 3D brilliant facet structure, reflecting 99% of ambient light. Select your metal setting and spin velocity to test the visual brilliance.
          </p>

          <div className="h-[1px] bg-white/10 w-full" />

          {/* Interactive Panel controls */}
          <div className="space-y-4">
            
            {/* Speed Slider */}
            <div className="flex flex-col gap-2">
              <div className="flex justify-between text-xs font-semibold tracking-wider text-gold-light uppercase">
                <span>Rotation Period ({spinSpeed}s)</span>
                <span className="text-[10px] text-white/50">{speedText}</span>
              </div>
              <input 
                type="range" 
                min="3" 
                max="20" 
                value={spinSpeed}
                onChange={(e) => setSpinSpeed(Number(e.target.value))}
                className="w-full h-1 bg-white/20 rounded-lg appearance-none cursor-pointer accent-gold-champagne focus:outline-none"
              />
            </div>

            {/* Color Theme Selector */}
            <div className="flex flex-col gap-2">
              <span className="text-xs font-semibold tracking-wider text-gold-light uppercase text-left">Metal Tint Theme</span>
              <div className="flex gap-2.5">
                {[
                  { id: 'platinum', label: 'Platinum' },
                  { id: 'gold', label: '24K Gold' },
                  { id: 'rosegold', label: 'Rose Gold' }
                ].map((theme) => (
                  <button
                    key={theme.id}
                    onClick={() => setColorTheme(theme.id)}
                    className={`flex-1 py-2 text-xs font-bold uppercase tracking-wider rounded-sm border cursor-pointer transition-all duration-300 ${
                      colorTheme === theme.id 
                        ? 'bg-gold-light text-charcoal border-gold-light shadow-soft' 
                        : 'bg-transparent text-white/60 border-white/15 hover:border-white/30 hover:text-white'
                    }`}
                  >
                    {theme.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Glare Toggle */}
            <div className="flex items-center justify-between py-2">
              <span className="text-xs font-semibold tracking-wider text-gold-light uppercase">Ambient Glare Overlay</span>
              <button
                onClick={() => setGlare(!glare)}
                className={`w-12 h-6 rounded-full p-1 cursor-pointer transition-colors duration-300 relative ${glare ? 'bg-gold' : 'bg-white/20'}`}
              >
                <div className={`w-4 h-4 rounded-full bg-charcoal transition-transform duration-300 absolute top-1 left-1 ${glare ? 'translate-x-6' : 'translate-x-0'}`} />
              </button>
            </div>

          </div>

          <div className="h-[1px] bg-white/10 w-full" />

          {/* Luxury features badge list */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-2 text-white/80">
              <ShieldCheck className="w-4 h-4 text-gold" />
              <span className="text-xs font-sans tracking-wide">Perfect 57 Facets</span>
            </div>
            <div className="flex items-center gap-2 text-white/80">
              <Zap className="w-4 h-4 text-gold" />
              <span className="text-xs font-sans tracking-wide">Refracts 99% Light</span>
            </div>
          </div>
        </div>

        {/* Right Column: 3D Render Viewport */}
        <div className="flex flex-col items-center justify-center relative">
          
          <div className="diamond-viewport">
            <div 
              className="diamond-object"
              style={{ 
                animation: `rotate3d ${spinSpeed}s infinite linear`,
                filter: glare ? 'drop-shadow(0 0 25px rgba(255,255,255,0.45))' : 'none'
              }}
            >
              {/* Top facets */}
              <div className="diamond-facet facet-top1" style={{ borderColor: `transparent transparent ${facetColor} transparent` }} />
              <div className="diamond-facet facet-top2" style={{ borderColor: `transparent transparent ${facetColor} transparent` }} />
              <div className="diamond-facet facet-top3" style={{ borderColor: `transparent transparent ${facetColor} transparent` }} />
              <div className="diamond-facet facet-top4" style={{ borderColor: `transparent transparent ${facetColor} transparent` }} />
              <div className="diamond-facet facet-top5" style={{ borderColor: `transparent transparent ${facetColor} transparent` }} />
              <div className="diamond-facet facet-top6" style={{ borderColor: `transparent transparent ${facetColor} transparent` }} />
              
              {/* Bottom facets */}
              <div className="diamond-facet facet-bot1" style={{ borderColor: `${bottomFacetColor} transparent transparent transparent` }} />
              <div className="diamond-facet facet-bot2" style={{ borderColor: `${bottomFacetColor} transparent transparent transparent` }} />
              <div className="diamond-facet facet-bot3" style={{ borderColor: `${bottomFacetColor} transparent transparent transparent` }} />
              <div className="diamond-facet facet-bot4" style={{ borderColor: `${bottomFacetColor} transparent transparent transparent` }} />
              <div className="diamond-facet facet-bot5" style={{ borderColor: `${bottomFacetColor} transparent transparent transparent` }} />
              <div className="diamond-facet facet-bot6" style={{ borderColor: `${bottomFacetColor} transparent transparent transparent` }} />
            </div>
          </div>

          <a 
            href="#consultation" 
            className="inline-block px-8 py-3.5 bg-transparent border border-gold-light hover:bg-gold-light hover:text-charcoal text-white font-sans text-[11px] uppercase tracking-widest font-bold transition-all duration-300"
          >
            Schedule Diamond Review
          </a>
        </div>

      </div>
    </section>
  );
}



