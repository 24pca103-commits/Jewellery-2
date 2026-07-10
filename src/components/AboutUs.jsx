import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Award, Users, Heart, Sparkles } from 'lucide-react';

export default function AboutUs() {
  const stats = [
    { icon: <Award className="w-5 h-5 text-gold" />, value: "Estd. 1975", label: "Heritage Legacy" },
    { icon: <Users className="w-5 h-5 text-gold" />, value: "5 Lakh+", label: "Happy Customers" },
    { icon: <ShieldCheck className="w-5 h-5 text-gold" />, value: "100%", label: "BIS Hallmarked Gold" },
    { icon: <Heart className="w-5 h-5 text-gold" />, value: "VVS1 Clarity", label: "Certified Diamonds" }
  ];

  // Animation variants
  const textContainer = {
    hidden: { opacity: 0, x: -30 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        staggerChildren: 0.15,
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const childItem = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="about" className="py-10 bg-white relative overflow-hidden">

      {/* Grand Luxury Radial Gold Backdrops */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-radial opacity-35 pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] bg-gold-radial opacity-25 pointer-events-none" />

      {/* Thin Gold Separator Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[85%] h-[1px] bg-gradient-to-r from-transparent via-gold/25 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">

          {/* Left Column: Brand Story & Staggered Animations (5 cols) */}
          <motion.div
            variants={textContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-5 space-y-8 text-left"
          >
            <motion.div variants={childItem} className="space-y-3">
              <div className="inline-flex items-center gap-2 text-xs text-gold font-bold uppercase tracking-widest">
                <Sparkles className="w-3.5 h-3.5" />
                Our Royal Heritage
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-wide text-charcoal leading-tight">
                A Legacy of Exquisite Craftsmanship
              </h2>
              <div className="w-16 h-0.5 bg-gold mt-4" />
            </motion.div>

            <motion.div variants={childItem} className="space-y-4">
              <p className="font-sans text-charcoal-muted text-sm sm:text-base leading-relaxed font-light">
                <span className="font-serif text-4xl sm:text-5xl text-gold font-bold float-left mr-3 mt-1 leading-[0.8] select-none">S</span>
                ince 1975, Thodoo Jewellery has been at the forefront of crafting the finest gold, diamond, and bridal earrings in India. We believe that every ornament is a piece of art, meticulously sculpted to capture elegance and reflect your inner radiance.
              </p>
              <p className="font-sans text-charcoal-muted text-sm leading-relaxed font-light">
                From our flagship heritage store in Coimbatore, Tamil Nadu, we design masterpieces that celebrate culture and modern luxury. Every single piece is certified, hallmarked, and carries the trust of over five lakh happy families across the nation.
              </p>
            </motion.div>

            {/* List of Stats */}
            <motion.div variants={childItem} className="grid grid-cols-2 gap-4 sm:gap-6 pt-2">
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{
                    y: -6,
                    scale: 1.02,
                    borderColor: '#D4AF37',
                    backgroundColor: '#ffffff',
                    boxShadow: '0 10px 25px rgba(212, 175, 55, 0.12)'
                  }}
                  transition={{ type: 'spring', stiffness: 350, damping: 15 }}
                  className="flex items-start gap-3 p-4 bg-[#FAF5EF]/60 border border-gold-light/20 rounded-sm cursor-pointer group"
                >
                  <motion.div
                    whileHover={{ rotate: 15, scale: 1.1 }}
                    className="p-2 bg-white rounded-full border border-gold-light/15 group-hover:bg-[#2A1B14] transition-all duration-300 flex items-center justify-center"
                  >
                    <span className="text-gold group-hover:text-white transition-colors duration-300">
                      {stat.icon}
                    </span>
                  </motion.div>
                  <div className="text-left">
                    <div className="font-serif text-sm sm:text-base font-bold text-charcoal">{stat.value}</div>
                    <div className="font-sans text-[9px] sm:text-[10px] tracking-widest uppercase text-charcoal-muted mt-0.5">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column: Overlapping Visual Showcase Collage (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 relative h-[450px] sm:h-[550px] w-full"
          >
            {/* Background luxury gold watermark pattern */}
            <div className="absolute inset-0 opacity-[0.02] select-none pointer-events-none z-0">
              <img src="/logo.png" alt="logo pattern" className="w-full h-full object-contain" />
            </div>

            {/* Behind Image Frame (Smelting Gold / Crafting) */}
            <div className="absolute top-4 left-4 sm:top-8 sm:left-8 w-[50%] aspect-[4/5] rounded-sm overflow-hidden border border-gold/20 shadow-premium z-10 bg-charcoal">
              <img
                src="https://i.pinimg.com/474x/e2/cb/3e/e2cb3ef09369d0d8d935656bcb12d848.jpg?nii=t"
                alt="Stud Earrings Showcase"
                className="w-full h-full object-cover opacity-85 hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Center Front Featured Image (Exquisite earrings close-up) */}
            <div className="absolute top-20 right-4 sm:top-24 sm:right-8 w-[55%] aspect-[4/5] rounded-sm overflow-hidden border-2 border-gold shadow-premium z-20 bg-charcoal">
              {/* Thin Inner Frame */}
              <div className="absolute inset-2 border border-gold/15 pointer-events-none z-35" />
              <img
                src="https://i.pinimg.com/236x/46/58/d4/4658d4b6de29d821e5fdf705553aed07.jpg"
                alt="Exquisite Earring Details"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Overlapping Bottom Small Image (Diamond Setting) */}
            <div className="absolute bottom-4 left-16 sm:bottom-8 sm:left-24 w-[35%] aspect-square rounded-sm overflow-hidden border border-gold/25 shadow-premium z-30 bg-charcoal hidden sm:block">
              <img
                src="https://i.pinimg.com/originals/bf/06/98/bf06982542d3d4e73c3e1676ed27188b.jpg"
                alt="Hoop Earrings Detail"
                className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Floating Glassmorphic Trust Seal Badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              className="absolute bottom-20 right-10 sm:bottom-28 sm:right-20 z-40 bg-[#2A1B14]/90 backdrop-blur-md border border-gold/30 p-4 sm:p-5 rounded-sm shadow-gold-glow flex flex-col items-center justify-center text-center max-w-[150px] sm:max-w-[170px]"
            >
              <div className="w-10 h-10 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center mb-2.5">
                <ShieldCheck className="w-5 h-5 text-gold" />
              </div>
              <div className="font-serif text-xs font-bold text-white tracking-wide">100% Certified</div>
              <div className="font-sans text-[8px] text-white/50 tracking-wider uppercase mt-1">BIS Hallmarked & VVS Verified</div>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
