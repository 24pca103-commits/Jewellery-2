import React from 'react';
import { ShieldCheck, Gem, Lock, Truck, RotateCcw, RefreshCw, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const TRUST_ITEMS = [
  {
    icon: <ShieldCheck className="w-7 h-7 text-gold" />,
    title: 'BIS Hallmarked Gold',
    desc: 'Every gram of our gold features 22K/18K government certified hallmarking guaranteeing purity.'
  },
  {
    icon: <Gem className="w-7 h-7 text-gold" />,
    title: 'Certified Diamonds',
    desc: 'Conflict-free diamonds with individual certificates of authenticity from SGL, IGI, or GIA labs.'
  },
  {
    icon: <Lock className="w-7 h-7 text-gold" />,
    title: 'Secure Payments',
    desc: 'Fully encrypted PCI-compliant payment gateways safeguarding all credit, debit, and digital transactions.'
  },
  {
    icon: <Truck className="w-7 h-7 text-gold" />,
    title: 'Free Insured Shipping',
    desc: 'Secure, 100% fully-insured transport straight to your doorstep across India.'
  },
  {
    icon: <RotateCcw className="w-7 h-7 text-gold" />,
    title: 'Easy Returns',
    desc: 'No-questions-asked, hassle-free returns within 14 days of delivery for complete peace of mind.'
  },
  {
    icon: <RefreshCw className="w-7 h-7 text-gold" />,
    title: 'Lifetime Exchange',
    desc: 'Upgrade your design suite whenever you want with competitive buy-back and exchange rates.'
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
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

export default function TrustBadges() {
  return (
    <section className="py-10 bg-white border-t border-gold-light/20 relative overflow-hidden">
      
      {/* Decorative luxury gold radial backgrounds */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-radial opacity-30 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-radial opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-10 space-y-3">
          <div className="flex items-center justify-center gap-1.5 text-xs text-gold font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            Uncompromised Trust
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-wide text-charcoal">
            Why Choose Thodoo Jewels
          </h2>
          <div className="w-16 h-0.5 bg-gold mx-auto mt-4" />
          <p className="font-sans text-charcoal-muted text-sm leading-relaxed font-light">
            For decades, Thodoo has stood as a beacon of unmatched authenticity, timeless style, and customer-first values.
          </p>
        </div>

        {/* Grid of Trust Items */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-5 lg:gap-4 xl:gap-5"
        >
          {TRUST_ITEMS.map((item, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ 
                backgroundColor: '#2A1B14',
                borderColor: '#D4AF37',
                y: -6,
                boxShadow: '0 15px 30px rgba(42, 27, 20, 0.15)'
              }}
              transition={{ type: 'spring', stiffness: 350, damping: 20 }}
              className="group p-5 rounded-sm border border-gold-light/20 bg-[#FAF5EF]/60 transition-all duration-300 flex flex-col items-center text-center gap-4 cursor-pointer h-full"
            >
              {/* Icon Container with Scale-up and gold highlights on hover */}
              <div className="p-3 bg-white rounded-full border border-gold-light/15 shadow-soft group-hover:bg-gold/15 group-hover:scale-105 transition-all duration-300 flex-shrink-0 flex items-center justify-center">
                {item.icon}
              </div>
              
              <div className="space-y-2 flex-grow flex flex-col justify-start">
                <h4 className="font-serif text-sm font-bold text-charcoal group-hover:text-white transition-colors duration-300 tracking-wide">
                  {item.title}
                </h4>
                <p className="font-sans text-[11px] text-charcoal-muted group-hover:text-white/70 transition-colors duration-300 leading-relaxed font-light">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
