import React, { useState } from 'react';
import { Mail, Sparkles } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail('');
      }, 5000);
    }
  };

  return (
    <section className="relative py-12 bg-charcoal border-t border-gold-dark/25 overflow-hidden text-center">
      {/* Background Graphic Accents */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-gold-radial" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Section Header */}
        <div className="space-y-4 max-w-xl mx-auto">
          <div className="flex items-center justify-center gap-1.5 text-xs text-gold font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            The Privilege Club
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-wide text-white leading-tight">
            Join the House of Thodoo
          </h2>
          <div className="w-12 h-0.5 bg-gold mx-auto" />
          <p className="font-sans text-white/70 text-sm leading-relaxed font-light">
            Subscribe to receive exclusive access to private vault openings, preview new design launches, and obtain custom styling advice.
          </p>
        </div>

        {/* Subscription Form */}
        <div className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-3 w-full">
            <div className="relative flex-grow">
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white/5 border border-white/20 focus:border-gold rounded-sm px-4 py-3.5 pl-11 text-sm text-white placeholder-white/45 focus:outline-none focus:ring-1 focus:ring-gold transition-all duration-300 font-sans"
              />
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/45" />
            </div>
            <button
              type="button"
              className="px-8 py-3.5 bg-gold hover:bg-gold-dark text-charcoal text-xs uppercase tracking-widest font-bold rounded-sm shadow-gold-glow transition-all duration-300 whitespace-nowrap cursor-default"
            >
              Subscribe
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
