import React from 'react';
import { Star, Quote, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const REVIEWS = [
  {
    name: 'Anjali R. Iyer',
    location: 'Bangalore, India',
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80',
    rating: 5,
    title: 'Exquisite Bridal Heritage Set',
    text: 'For my wedding, I wanted a traditional choker that captured antique style. The Nimah Heritage set from Thodoo Jewels was a absolute masterpiece. The finish and the detailing are flawless. The live video shopping helped so much!'
  },
  {
    name: 'Devendra K. Sen',
    location: 'Mumbai, India',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80',
    rating: 5,
    title: 'Impeccable Diamond Solitaire',
    text: 'I customized a 1.5 carat diamond solitaire engagement ring. The price estimator was very transparent, and they provided the certified IGI certificate. The finish is stunning. Extremely secure delivery as well.'
  },
  {
    name: 'Meera Deshmukh',
    location: 'Pune, India',
    photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80',
    rating: 5,
    title: 'Stunning Daily Wear Gold Drops',
    text: 'Thodoo Jewels has the best selection of daily wear minimalist gold. I purchased the Imperial Gold drops. The Government hallmarking is verified, and the lifetime exchange program gives complete peace of mind.'
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

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

export default function Testimonials() {
  return (
    <section className="py-10 bg-luxury-cream border-t border-gold-light/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-16 space-y-3">
          <div className="flex items-center justify-center gap-1.5 text-xs text-gold font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            Voices of Elegance
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-wide text-charcoal">
            Customer Testimonials
          </h2>
          <div className="w-12 h-0.5 bg-gold mx-auto mt-4" />
          <p className="font-sans text-charcoal-muted text-sm leading-relaxed">
            Discover how we help make life’s milestones unforgettable through handcrafted brilliance.
          </p>
        </div>

        {/* Testimonial Cards Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {REVIEWS.map((review, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="relative p-8 bg-white border border-gold-light/20 rounded-sm hover:border-gold hover:shadow-premium transition-all duration-300 flex flex-col justify-between text-left"
            >
              {/* Luxury Quote Icon Backdrop */}
              <Quote className="absolute top-6 right-6 w-10 h-10 text-gold-muted/10" />

              <div className="space-y-4">
                {/* Stars and Verification */}
                <div className="flex items-center justify-between">
                  <div className="flex text-gold">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current stroke-none" />
                    ))}
                  </div>
                  <span className="text-[9px] uppercase tracking-wider bg-gold-light text-gold-dark font-bold px-2 py-0.5 rounded-sm">
                    Verified Buyer
                  </span>
                </div>

                <div className="space-y-2">
                  <h4 className="font-serif text-sm font-bold text-charcoal tracking-wide">
                    "{review.title}"
                  </h4>
                  <p className="font-sans text-xs sm:text-sm text-charcoal-muted leading-relaxed font-light italic">
                    {review.text}
                  </p>
                </div>
              </div>

              {/* Customer Info footer */}
              <div className="flex items-center gap-4 mt-6 pt-4 border-t border-luxury-cream">
                <img
                  src={review.photo}
                  alt={review.name}
                  className="w-10 h-10 rounded-full object-cover border border-gold-light/35"
                />
                <div>
                  <h5 className="font-serif text-xs font-bold text-charcoal tracking-wide">
                    {review.name}
                  </h5>
                  <p className="text-[10px] text-charcoal-muted">
                    {review.location}
                  </p>
                </div>
              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
