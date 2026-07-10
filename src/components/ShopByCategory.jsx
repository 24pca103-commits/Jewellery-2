import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const CATEGORIES = [
  {
    name: 'Jhumka Collection',
    img: 'https://silvermerc.com/cdn/shop/files/DSC_6347.jpg?v=1695110923',
    count: '95+ Masterpieces',
    tag: 'Bridal & Antique Temple'
  },
  {
    name: 'Stud Earrings',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRluByamiaXRYW11QzyA_EEqZShh0J4lcicfDUeN_qQuS5v_-tAvzyfqLkn&s=10',
    count: '120+ Solitaires',
    tag: 'Daily VVS1 Elegance'
  },
  {
    name: 'Hoop Earrings',
    img: 'https://rukminim2.flixcart.com/image/480/640/xif0q/earring/x/n/i/na-golden-pearl-earing-001-the-splendid-original-imahfvnvxcx4ktqk.jpeg?q=90',
    count: '80+ Classics',
    tag: 'Modern Textured Gold'
  },
  {
    name: 'Chandelier Earrings',
    img: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=400&q=80',
    count: '65+ Cascades',
    tag: 'Grand Evening Luxury'
  },
  {
    name: 'Diamond Earrings',
    img: 'https://web.sencogoldanddiamonds.com/images/transform?key=product-images/39e5eecc-7ed7-4ebc-8a35-d1b000650f48.jpg&width=800&format=webp',
    count: '110+ Certified',
    tag: 'Fine Baguette Cut'
  },
  {
    name: 'Gold Earrings',
    img: 'https://trendia.co/cdn/shop/files/JN413.jpg?v=1771322528',
    count: '150+ Hallmarked',
    tag: '22K Traditional Filigree'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 35 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

export default function ShopByCategory() {
  return (
    <section id="shop-by-type" className="py-10 bg-luxury-cream border-t border-gold-light/20 relative overflow-hidden">

      {/* Decorative luxury radial background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold-radial opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-10 space-y-3">
          <div className="flex items-center justify-center gap-1.5 text-xs text-gold font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            Curated Collections
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-wide text-charcoal">
            Shop By Type
          </h2>
          <div className="w-16 h-0.5 bg-gold mx-auto mt-4" />
          <p className="font-sans text-charcoal-muted text-sm leading-relaxed font-light">
            Explore our majestic array of fine earrings, crafted in pristine 22K gold and certified brilliant-cut diamonds.
          </p>
        </div>

        {/* Mobile: horizontal scroller; Desktop: 3-column grid */}
        <div className="block sm:hidden overflow-x-auto scrollbar-none -mx-4 px-4">
          <div className="flex gap-4 pb-4" style={{ width: 'max-content' }}>
            {CATEGORIES.map((cat, idx) => (
              <div
                key={idx}
                className="relative w-[260px] h-[340px] bg-charcoal rounded-sm overflow-hidden shadow-soft flex-shrink-0 cursor-pointer group"
              >
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <img src={cat.img} alt={cat.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent opacity-85" />
                </div>
                <div className="absolute inset-0 z-10 flex flex-col justify-end p-6 text-left space-y-2">
                  <span className="font-sans text-[10px] tracking-widest uppercase text-gold font-bold">{cat.tag}</span>
                  <h3 className="font-serif text-lg font-bold tracking-wide text-white">{cat.name}</h3>
                  <div className="flex justify-between items-center pt-2 border-t border-white/10">
                    <span className="font-sans text-[11px] text-white/80 font-light">{cat.count}</span>
                    <span className="font-sans text-[10px] font-bold text-gold uppercase tracking-wider">View All →</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop: 3D perspective grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-8 [perspective:1200px]"
        >
          {CATEGORIES.map((cat, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{
                y: -10,
                rotateX: 4,
                rotateY: -4,
                scale: 1.01,
                transition: { duration: 0.4, ease: 'easeOut' }
              }}
              style={{ transformStyle: 'preserve-3d' }}
              className="group relative h-[380px] bg-charcoal rounded-sm overflow-hidden shadow-soft hover:shadow-premium transition-all duration-500 cursor-pointer"
            >
              {/* Inset Gold Border Frame Overlay */}
              <div className="absolute inset-4 border border-gold/0 group-hover:border-gold/25 rounded-sm pointer-events-none z-25 transition-all duration-500 scale-[0.98] group-hover:scale-100" />

              {/* Luxury Shine Sweep Overlay (Metallic Gleam Reflection) */}
              <div className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none z-30 transform -skew-x-25" />

              {/* Background Image Container with Zoom */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <img
                  src={cat.img}
                  alt={cat.name}
                  className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-108"
                />
                {/* Grand gold/dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent opacity-85 group-hover:opacity-90 transition-opacity duration-500" />
              </div>

              {/* Text Content Overlay - Translate slightly forward in 3D */}
              <div className="absolute inset-0 z-10 flex flex-col justify-end p-8 text-left space-y-2 [transform:translateZ(40px)]">
                <span className="font-sans text-[10px] tracking-widest uppercase text-gold font-bold">
                  {cat.tag}
                </span>

                {/* Heading with self-drawing gold underline animation */}
                <div className="relative inline-block self-start">
                  <h3 className="font-serif text-xl sm:text-2xl font-bold tracking-wide text-white group-hover:text-gold transition-colors duration-300 relative pb-1">
                    {cat.name}
                  </h3>
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gold group-hover:w-full transition-all duration-500 ease-out" />
                </div>

                {/* Interactive Card Action Footer */}
                <div className="flex justify-between items-center pt-3 border-t border-white/10 opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="font-sans text-[11px] text-white/80 font-light">{cat.count}</span>
                  <span className="font-sans text-[10px] font-bold text-gold uppercase tracking-wider group-hover:underline flex items-center gap-1.5">
                    View All 
                    <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
                  </span>
                </div>
              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
