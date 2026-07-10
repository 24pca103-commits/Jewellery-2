import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Sparkles } from 'lucide-react';

const SLIDES = [
  {
    tag: "Exclusive Launch",
    title: "The Royal Bridal Heritage",
    subtitle: "Divine Craftsmanship in Gold",
    desc: "Experience the grandeur of traditional South Indian antique earrings, hand-crafted in 22K BIS Hallmarked gold.",
    img: "https://www.crunchyfashion.com/cdn/shop/files/RAE2504_4_cf0cece3-c8ff-406b-9f9a-e393ef82a3c8.jpg?v=1778152134",
    ctaGold: "#catalog",
    ctaDiamonds: "#catalog"
  },
  {
    tag: "Eternal Brilliance",
    title: "Solitaire & Diamond Studs",
    subtitle: "VVS1 Clarity Certified Studs",
    desc: "Unveil our magnificent range of VVS1 diamond studs, cascading drops, and chandelier masterpieces.",
    img: "https://images-static.nykaa.com/media/catalog/product/b/9/b9e80a0ZGRK286_1.jpg?tr=w-500",
    ctaGold: "#catalog",
    ctaDiamonds: "#catalog"
  },
  {
    tag: "Modern Heirloom",
    title: "Heirloom Gold Jhumkas",
    subtitle: "22K BIS Hallmarked Temple Craft",
    desc: "Explore our magnificent collections of hand-crafted gold hoops, traditional jhumkas, and modern drops.",
    img: "https://images-static.nykaa.com/media/catalog/product/7/b/7b46f72DBER282_1.jpg",
    ctaGold: "#catalog",
    ctaDiamonds: "#catalog"
  }
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const handleNext = () => setCurrent((prev) => (prev + 1) % SLIDES.length);
  const handlePrev = () => setCurrent((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1));

  return (
    <section className="relative w-full h-screen overflow-hidden bg-[#2A1B14]">

      {/* Split Screen Grid */}
      <div className="w-full h-full grid grid-cols-1 lg:grid-cols-12">

        {/* Left Side: Content & Typography (45% Width on Desktop) */}
        <div className="lg:col-span-5 flex flex-col justify-center px-6 sm:px-12 lg:px-16 xl:px-20 h-full bg-[#2A1B14] relative z-10 pt-24 lg:pt-12 text-left text-white border-r border-gold/10">

          {/* Subtle logo watermark background */}
          <div className="absolute -bottom-10 -left-10 opacity-[0.03] select-none pointer-events-none w-96 h-96">
            <img src="/logo.png" alt="watermark" className="w-full h-full object-contain" />
          </div>

          <div className="space-y-6 lg:space-y-8 max-w-lg relative z-20">
            {/* Active Slide Number Indicator */}
            <div className="font-serif text-gold/30 text-4xl sm:text-5xl font-light tracking-widest select-none">
              0{current + 1} <span className="text-gold/10 font-sans text-2xl">/</span> 0{SLIDES.length}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-6"
              >
                {/* Sparkles tag */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-sm bg-gold/10 border border-gold/25 text-gold text-[10px] font-bold tracking-widest uppercase">
                  <Sparkles className="w-3.5 h-3.5" />
                  {SLIDES[current].tag}
                </div>

                {/* Subtitle & Title */}
                <div className="space-y-2.5">
                  <span className="font-sans text-xs sm:text-sm tracking-[0.25em] uppercase text-gold-muted block font-semibold">
                    {SLIDES[current].subtitle}
                  </span>
                  <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-wide leading-tight text-white">
                    {SLIDES[current].title}
                  </h1>
                </div>

                {/* Description */}
                <p className="font-sans text-white/70 text-sm leading-relaxed font-light max-w-md">
                  {SLIDES[current].desc}
                </p>

                {/* Call To Actions */}
                <div className="pt-4 flex flex-col sm:flex-row gap-4">
                  <a
                    href={SLIDES[current].ctaGold}
                    className="inline-flex justify-center items-center px-7 py-3 bg-gold hover:bg-gold-light text-[#2A1B14] font-sans text-xs uppercase tracking-widest font-bold rounded-sm shadow-soft transition-all duration-300 transform hover:-translate-y-0.5"
                  >
                    Shop Gold
                  </a>
                  <a
                    href={SLIDES[current].ctaDiamonds}
                    className="inline-flex justify-center items-center px-7 py-3 border border-white/20 hover:border-gold hover:text-gold text-white font-sans text-xs uppercase tracking-widest font-bold rounded-sm backdrop-blur-sm transition-all duration-300 transform hover:-translate-y-0.5"
                  >
                    Shop Diamonds
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Indicator dashes at the bottom */}
          <div className="mt-12 lg:mt-16 flex gap-3 relative z-20">
            {SLIDES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className="group flex items-center py-2 focus:outline-none"
                aria-label={`Go to slide ${idx + 1}`}
              >
                <div className="flex flex-col gap-1">
                  <div className={`h-0.5 transition-all duration-500 rounded-full ${current === idx ? 'w-10 bg-gold' : 'w-6 bg-white/20 group-hover:bg-white/40'
                    }`} />
                  <span className={`text-[9px] font-bold tracking-wider transition-colors ${current === idx ? 'text-gold' : 'text-white/30 group-hover:text-white/50'
                    }`}>
                    0{idx + 1}
                  </span>
                </div>
              </button>
            ))}
          </div>

        </div>

        {/* Right Side: Image Panel (55% Width on Desktop) */}
        <div className="lg:col-span-7 relative h-[50vh] lg:h-full bg-charcoal overflow-hidden order-first lg:order-last">

          {/* Decorative luxury gold gallery border */}
          <div className="absolute inset-4 sm:inset-6 border border-gold/15 pointer-events-none z-10" />

          {/* Dynamic Background Image */}
          <div className="absolute inset-0 z-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.2, ease: 'easeInOut' }}
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${SLIDES[current].img})` }}
              >
                {/* Luxury gold and dark gradients overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#2A1B14]/40 via-transparent to-[#2A1B14]/30" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2A1B14]/65 via-transparent to-black/35" />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Minimalist Navigation Buttons inside Image Frame */}
          <div className="absolute bottom-6 right-6 sm:bottom-10 sm:right-10 z-20 flex items-center gap-3">
            <button
              onClick={handlePrev}
              className="p-2.5 rounded-full border border-white/25 text-white hover:border-gold hover:text-gold hover:bg-black/25 backdrop-blur-sm transition-all duration-300 cursor-pointer"
              aria-label="Previous Slide"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              className="p-2.5 rounded-full border border-white/25 text-white hover:border-gold hover:text-gold hover:bg-black/25 backdrop-blur-sm transition-all duration-300 cursor-pointer"
              aria-label="Next Slide"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>

    </section>
  );
}
