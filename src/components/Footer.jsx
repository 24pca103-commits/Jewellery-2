import React, { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';


// High-fidelity custom SVG icons for social media links
const InstagramIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const FacebookIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const YoutubeIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"></path>
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"></polygon>
  </svg>
);

const XIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
  </svg>
);

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => {
        setIsSubscribed(false);
        setEmail('');
      }, 5000);
    }
  };

  return (
    <footer id="about" className="bg-white border-t border-gold-light/20 text-charcoal py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Column 1: Company Profile (Double Width) */}
          <div className="space-y-4 text-left lg:col-span-2">
            <a href="#" className="flex items-center group">
              <img 
                src="/logo.png" 
                alt="Thodoo Jewellery" 
                className="h-11 sm:h-12 w-auto object-contain brightness-[0.2]"
              />
            </a>
            <p className="font-sans text-xs sm:text-sm text-charcoal-muted leading-relaxed font-light">
              India's most trusted premium earring brand, crafting exquisite gold, diamond, and bridal earrings since 1975. Over 5 lakh happy customers across India.
            </p>
            
            {/* Contact Details */}
            <ul className="space-y-2.5 font-sans text-xs sm:text-sm text-charcoal-muted font-light pt-2">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4.5 h-4.5 text-gold flex-shrink-0 mt-0.5" />
                <span>
                  No.5, Jaya Complex, Thadagam Main Rd,<br />
                  PMR Nagar, TVS Nagar, Coimbatore, Tamil Nadu 641025
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-gold flex-shrink-0" />
                <a href="tel:+919385411051" className="hover:text-gold transition-colors">+91 93854 11051</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-gold flex-shrink-0" />
                <a href="mailto:thodoo.co@gmail.com" className="hover:text-gold transition-colors">thodoo.co@gmail.com</a>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex items-center gap-4.5 pt-2 text-charcoal-muted">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors" title="Instagram">
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors" title="Facebook">
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors" title="YouTube">
                <YoutubeIcon className="w-4 h-4" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors" title="X (Twitter)">
                <XIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Shop categories */}
          <div className="space-y-4 text-left">
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-charcoal border-b border-gold-light/25 pb-2">
              Shop
            </h4>
            <ul className="space-y-2">
              <li><a href="#catalog" className="text-xs sm:text-sm text-charcoal-muted hover:text-gold transition-colors">Jhumka Collection</a></li>
              <li><a href="#catalog" className="text-xs sm:text-sm text-charcoal-muted hover:text-gold transition-colors">Stud Earrings</a></li>
              <li><a href="#catalog" className="text-xs sm:text-sm text-charcoal-muted hover:text-gold transition-colors">Hoop Earrings</a></li>
              <li><a href="#catalog" className="text-xs sm:text-sm text-charcoal-muted hover:text-gold transition-colors">Chandelier Earrings</a></li>
              <li><a href="#catalog" className="text-xs sm:text-sm text-charcoal-muted hover:text-gold transition-colors">Diamond Earrings</a></li>
              <li><a href="#catalog" className="text-xs sm:text-sm text-charcoal-muted hover:text-gold transition-colors">Gold Earrings</a></li>
            </ul>
          </div>

          {/* Column 3: Customer Care */}
          <div className="space-y-4 text-left">
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-charcoal border-b border-gold-light/25 pb-2">
              Customer Care
            </h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-xs sm:text-sm text-charcoal-muted hover:text-gold transition-colors">Track Order</a></li>
              <li><a href="#" className="text-xs sm:text-sm text-charcoal-muted hover:text-gold transition-colors">Return Policy</a></li>
              <li><a href="#" className="text-xs sm:text-sm text-charcoal-muted hover:text-gold transition-colors">Exchange Policy</a></li>
              <li><a href="#" className="text-xs sm:text-sm text-charcoal-muted hover:text-gold transition-colors">Buyback Policy</a></li>
              <li><a href="#" className="text-xs sm:text-sm text-charcoal-muted hover:text-gold transition-colors">Shipping Info</a></li>
              <li><a href="#" className="text-xs sm:text-sm text-charcoal-muted hover:text-gold transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Column 4: Company & Subscription */}
          <div className="space-y-6 text-left">
            <div className="space-y-4">
              <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-charcoal border-b border-gold-light/25 pb-2">
                Company
              </h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-xs sm:text-sm text-charcoal-muted hover:text-gold transition-colors">About Thodoo Collections</a></li>
                <li><a href="#" className="text-xs sm:text-sm text-charcoal-muted hover:text-gold transition-colors">Careers</a></li>
                <li><a href="#" className="text-xs sm:text-sm text-charcoal-muted hover:text-gold transition-colors">Blog</a></li>
              </ul>
            </div>
            
            <div className="space-y-3">
              <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-charcoal border-b border-gold-light/25 pb-2">
                Stay Updated
              </h4>
              <p className="font-sans text-xs text-charcoal-muted leading-relaxed font-light">
                Subscribe for exclusive offers, new arrivals & earring care tips.
              </p>
              
              <AnimatePresence mode="wait">
                {!isSubscribed ? (
                  <form onSubmit={handleSubscribe} className="flex gap-2 mt-2">
                    <input
                      type="email"
                      placeholder="Your email address"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-luxury-cream border border-gold-light/35 rounded-sm px-2.5 py-2 text-xs w-full focus:outline-none focus:border-gold font-sans placeholder:font-light"
                    />
                    <button
                      type="submit"
                      className="px-4 py-2 bg-charcoal hover:bg-gold text-white hover:text-charcoal text-[10px] font-bold uppercase tracking-widest rounded-sm transition-colors cursor-pointer"
                    >
                      Go
                    </button>
                  </form>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-3 bg-gold/10 border border-gold/30 rounded-sm flex items-center gap-2 text-gold-dark text-xs"
                  >
                    <CheckCircle className="w-4 h-4 flex-shrink-0" />
                    <span>Subscribed!</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>

        {/* Bottom copyright bar */}
        <div className="mt-12 pt-8 border-t border-luxury-cream flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-charcoal-muted font-light">
          <div>
            &copy; {new Date().getFullYear()} Thodoo Jewellery. All rights reserved.
          </div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
            <span>&bull;</span>
            <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
            <span>&bull;</span>
            <span className="text-gold font-semibold uppercase tracking-wider">Designed for Elegance</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
