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
    <footer id="about" className="bg-white border-t border-gold-light/20 text-charcoal py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid - 2-col on mobile, 5-col on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-10">
          
          {/* Column 1: Company Profile (Full-width on mobile, Double Width on desktop) */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2 space-y-4 text-left">
            <div className="relative h-12 sm:h-14 w-36 sm:w-40 transition-transform duration-300 group-hover:scale-102">
              <img 
                src="/logo.png" 
                alt="Thodoo Jewellery" 
                className="absolute inset-0 w-full h-full object-contain"
                style={{ 
                  clipPath: 'inset(0 55% 0 0)',
                  filter: 'brightness(0) invert(1) drop-shadow(1px 0px 0px #2A1B14) drop-shadow(-1px 0px 0px #2A1B14) drop-shadow(0px 1px 0px #2A1B14) drop-shadow(0px -1px 0px #2A1B14) drop-shadow(0px 0px 1px #2A1B14)' 
                }}
              />
              <img 
                src="/logo.png" 
                alt="Thodoo Jewellery" 
                className="absolute inset-0 w-full h-full object-contain"
                style={{ 
                  clipPath: 'inset(0 0 0 42%)',
                  filter: 'brightness(0) invert(9%) sepia(21%) saturate(1915%) hue-rotate(336deg) brightness(96%) contrast(93%)' 
                }}
              />
            </div>
            <p className="font-sans text-xs sm:text-sm text-charcoal-muted leading-relaxed font-light">
              India's most trusted premium earring brand, crafting exquisite gold, diamond, and bridal earrings since 1975. Over 5 lakh happy customers across India.
            </p>
            
            {/* Contact Details */}
            <ul className="space-y-2.5 font-sans text-xs sm:text-sm text-charcoal-muted font-light pt-1">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  No.5, Jaya Complex, Thadagam Main Rd,<br />
                  PMR Nagar, TVS Nagar, Coimbatore, Tamil Nadu 641025
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4.5 h-4.5 text-gold flex-shrink-0" />
                <a href="tel:+919385411051" className="hover:text-gold transition-colors">+91 93854 11051</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4.5 h-4.5 text-gold flex-shrink-0" />
                <a href="mailto:thodoo.co@gmail.com" className="hover:text-gold transition-colors">thodoo.co@gmail.com</a>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex items-center gap-5 pt-2 text-charcoal-muted">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gold hover:scale-110 transition-all duration-300" title="Instagram">
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gold hover:scale-110 transition-all duration-300" title="Facebook">
                <FacebookIcon className="w-5 h-5" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-gold hover:scale-110 transition-all duration-300" title="YouTube">
                <YoutubeIcon className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gold hover:scale-110 transition-all duration-300" title="X (Twitter)">
                <XIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Shop categories */}
          <div className="space-y-3 text-left">
            <h4 className="font-sans text-sm font-bold uppercase tracking-wider text-charcoal border-b border-gold-light/25 pb-2">
              Shop
            </h4>
            <ul className="space-y-2">
              <li><a href="#catalog" className="text-xs sm:text-sm text-charcoal-muted hover:text-gold hover:translate-x-1.5 transform transition-all duration-300 inline-block">Jhumka Collection</a></li>
              <li><a href="#catalog" className="text-xs sm:text-sm text-charcoal-muted hover:text-gold hover:translate-x-1.5 transform transition-all duration-300 inline-block">Stud Earrings</a></li>
              <li><a href="#catalog" className="text-xs sm:text-sm text-charcoal-muted hover:text-gold hover:translate-x-1.5 transform transition-all duration-300 inline-block">Hoop Earrings</a></li>
              <li><a href="#catalog" className="text-xs sm:text-sm text-charcoal-muted hover:text-gold hover:translate-x-1.5 transform transition-all duration-300 inline-block">Chandelier Earrings</a></li>
              <li><a href="#catalog" className="text-xs sm:text-sm text-charcoal-muted hover:text-gold hover:translate-x-1.5 transform transition-all duration-300 inline-block">Diamond Earrings</a></li>
              <li><a href="#catalog" className="text-xs sm:text-sm text-charcoal-muted hover:text-gold hover:translate-x-1.5 transform transition-all duration-300 inline-block">Gold Earrings</a></li>
            </ul>
          </div>

          {/* Column 3: Customer Care */}
          <div className="space-y-3 text-left">
            <h4 className="font-sans text-sm font-bold uppercase tracking-wider text-charcoal border-b border-gold-light/25 pb-2">
              Customer Care
            </h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-xs sm:text-sm text-charcoal-muted hover:text-gold hover:translate-x-1.5 transform transition-all duration-300 inline-block">Track Order</a></li>
              <li><a href="#" className="text-xs sm:text-sm text-charcoal-muted hover:text-gold hover:translate-x-1.5 transform transition-all duration-300 inline-block">Return Policy</a></li>
              <li><a href="#" className="text-xs sm:text-sm text-charcoal-muted hover:text-gold hover:translate-x-1.5 transform transition-all duration-300 inline-block">Exchange Policy</a></li>
              <li><a href="#" className="text-xs sm:text-sm text-charcoal-muted hover:text-gold hover:translate-x-1.5 transform transition-all duration-300 inline-block">Buyback Policy</a></li>
              <li><a href="#" className="text-xs sm:text-sm text-charcoal-muted hover:text-gold hover:translate-x-1.5 transform transition-all duration-300 inline-block">Shipping Info</a></li>
              <li><a href="#" className="text-xs sm:text-sm text-charcoal-muted hover:text-gold hover:translate-x-1.5 transform transition-all duration-300 inline-block">FAQ</a></li>
            </ul>
          </div>

          {/* Column 4: Company & Subscription */}
          <div className="space-y-4 text-left">
            <div className="space-y-3">
              <h4 className="font-sans text-sm font-bold uppercase tracking-wider text-charcoal border-b border-gold-light/25 pb-2">
                Company
              </h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-xs sm:text-sm text-charcoal-muted hover:text-gold hover:translate-x-1.5 transform transition-all duration-300 inline-block">About Thodoo Collections</a></li>
                <li><a href="#" className="text-xs sm:text-sm text-charcoal-muted hover:text-gold hover:translate-x-1.5 transform transition-all duration-300 inline-block">Careers</a></li>
                <li><a href="#" className="text-xs sm:text-sm text-charcoal-muted hover:text-gold hover:translate-x-1.5 transform transition-all duration-300 inline-block">Blog</a></li>
              </ul>
            </div>
            
            <div className="space-y-3 pt-1">
              <h4 className="font-sans text-sm font-bold uppercase tracking-wider text-charcoal border-b border-gold-light/25 pb-2">
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
        <div className="mt-8 pt-5 border-t border-luxury-cream flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-charcoal-muted font-light">
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
