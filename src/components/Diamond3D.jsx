import React from 'react';
import { Sparkles, Zap, ShieldCheck } from 'lucide-react';

export default function Diamond3D() {
  return (
    <section className="section py-16" id="diamond3d">
      <div className="diamond-3d-layout">
        
        {/* Left Column: Details & Process */}
        <div className="diamond-3d-info text-left flex flex-col justify-center space-y-6">
          <div className="flex items-center gap-1.5 text-xs text-[#8C6239] font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            Artisanal Precision
          </div>
          
          <h3>Precision Craftsmanship</h3>
          <p className="font-sans text-white/70 text-sm leading-relaxed">
            Our diamonds are cut to absolute mathematical perfection. Watch our master artisans bring raw crystals to life, shaping the ideal brilliant facet structure that reflects 99% of ambient light.
          </p>

          <div className="h-[1px] bg-white/10 w-full" />

          {/* Process Steps */}
          <div className="space-y-4 font-sans text-sm text-white/80">
            <div className="flex gap-3">
              <span className="text-gold font-bold">01.</span>
              <div>
                <strong className="text-white">Ethical Sourcing:</strong> Every gem is conflict-free and certified by the world's leading authorities.
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-gold font-bold">02.</span>
              <div>
                <strong className="text-white">Ideal Cut Calibration:</strong> Formulated mathematically to maximize fire, brilliance, and scintillation.
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-gold font-bold">03.</span>
              <div>
                <strong className="text-white">Heirloom Hand Setting:</strong> Set by hand under high magnification for lifelong durability.
              </div>
            </div>
          </div>

          <div className="h-[1px] bg-white/10 w-full" />

          {/* Luxury features badge list */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-2 text-white/80">
              <ShieldCheck className="w-4 h-4 text-gold" />
              <span className="text-xs font-sans tracking-wide">Perfect Faceting</span>
            </div>
            <div className="flex items-center gap-2 text-white/80">
              <Zap className="w-4 h-4 text-gold" />
              <span className="text-xs font-sans tracking-wide">Maximum Brilliance</span>
            </div>
          </div>
        </div>

        {/* Right Column: Video Viewport */}
        <div className="flex flex-col items-center justify-center relative">
          
          <div className="w-[300px] h-[300px] rounded-full overflow-hidden border-2 border-gold-light/20 shadow-premium flex items-center justify-center bg-black/60 mb-6 relative group">
            <video 
              src="/the_first_image_is_bg_to_set_t (1).mp4"
              className="w-full h-full object-cover"
              autoPlay 
              loop 
              muted 
              playsInline
            />
          </div>
        </div>

      </div>
    </section>
  );
}



