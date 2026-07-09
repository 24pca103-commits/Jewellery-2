import React from 'react';
import { motion } from 'framer-motion';
import { Heart, MessageCircle, Sparkles } from 'lucide-react';

const Instagram = ({ className }) => (
  <svg 
    className={className} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const POSTS = [
  {
    img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=400&q=80",
    likes: '1.4k',
    comments: 82
  },
  {
    img: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=400&q=80",
    likes: '942',
    comments: 41
  },
  {
    img: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=400&q=80",
    likes: '2.1k',
    comments: 118
  },
  {
    img: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=400&q=80",
    likes: '1.8k',
    comments: 94
  },
  {
    img: "https://images.unsplash.com/photo-1635767798638-3e25273a8236?auto=format&fit=crop&w=400&q=80",
    likes: '820',
    comments: 29
  },
  {
    img: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=400&q=80",
    likes: '1.5k',
    comments: 72
  }
];

export default function InstagramFeed() {
  return (
    <section className="py-20 bg-white border-t border-gold-light/20 text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-16 space-y-3">
          <div className="flex items-center justify-center gap-1.5 text-xs text-gold font-bold uppercase tracking-widest">
            <Instagram className="w-4 h-4" />
            Social Gallery
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-wide text-charcoal">
            As Seen On You
          </h2>
          <div className="w-12 h-0.5 bg-gold mx-auto mt-4" />
          <p className="font-sans text-charcoal-muted text-sm leading-relaxed">
            Tag <span className="text-gold font-semibold">@ThodooJewels</span> to share your timeless wedding and lifestyle moments.
          </p>
        </div>

        {/* Horizontal scroll on mobile, flex grid on desktop */}
        <div className="flex lg:grid lg:grid-cols-6 gap-4 overflow-x-auto pb-6 lg:pb-0 scrollbar-none snap-x snap-mandatory">
          {POSTS.map((post, idx) => (
            <motion.a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="flex-shrink-0 w-[240px] lg:w-auto aspect-square relative group overflow-hidden rounded-sm border border-gold-light/10 shadow-soft snap-center"
            >
              <img 
                src={post.img} 
                alt={`Thodoo Jewels Instagram ${idx + 1}`} 
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
              />
              
              {/* Luxury Glassmorphic Overlay */}
              <div className="absolute inset-0 bg-charcoal/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center gap-3 text-white z-10">
                <Instagram className="w-6 h-6 text-gold" />
                <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest">
                  <span className="flex items-center gap-1">
                    <Heart className="w-3.5 h-3.5 fill-current text-gold" />
                    {post.likes}
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircle className="w-3.5 h-3.5 fill-current text-gold" />
                    {post.comments}
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="mt-12">
          <a 
            href="https://instagram.com"
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex justify-center items-center px-8 py-3.5 border border-charcoal hover:border-gold hover:text-gold text-charcoal font-sans text-xs uppercase tracking-widest font-bold rounded-sm transition-all duration-300"
          >
            Follow Our Journey
          </a>
        </div>

      </div>
    </section>
  );
}
