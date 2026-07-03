import React from 'react';

export default function Diamond3D() {
  return (
    <section className="section" id="diamond3d">
      <div className="diamond-3d-layout">
        <h3>Precision Craftsmanship</h3>
        <p>Our diamonds are cut to absolute mathematical perfection. Explore our ideal 3D brilliant facet structure below, reflecting 99% of ambient light.</p>
        
        <div className="diamond-viewport">
          <div className="diamond-object">
            <div className="diamond-facet facet-top1"></div>
            <div className="diamond-facet facet-top2"></div>
            <div className="diamond-facet facet-top3"></div>
            <div className="diamond-facet facet-top4"></div>
            <div className="diamond-facet facet-top5"></div>
            <div className="diamond-facet facet-top6"></div>
            <div className="diamond-facet facet-bot1"></div>
            <div className="diamond-facet facet-bot2"></div>
            <div className="diamond-facet facet-bot3"></div>
            <div className="diamond-facet facet-bot4"></div>
            <div className="diamond-facet facet-bot5"></div>
            <div className="diamond-facet facet-bot6"></div>
          </div>
        </div>

        <a href="#consultation" className="btn-gold">Schedule Diamond Review</a>
      </div>
    </section>
  );
}



