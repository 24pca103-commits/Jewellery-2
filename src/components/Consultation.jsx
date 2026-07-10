import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Sparkles, User, Mail, MessageSquare, Clock } from 'lucide-react';

export default function Consultation() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [interest, setInterest] = useState('diamonds');
  const [notes, setNotes] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! Your private viewing and consultation has been requested. One of our master curators will contact you within 24 hours.");
    setName('');
    setEmail('');
    setDate('');
    setInterest('diamonds');
    setNotes('');
  };

  const formVariants = {
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
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  return (
    <section className="section relative overflow-hidden py-16 bg-[#FAF6F0]" id="consultation">
      {/* Dynamic luxury background elements */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gold-radial opacity-20 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gold-radial opacity-15 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-12 space-y-3">
          <div className="flex items-center justify-center gap-1.5 text-xs text-gold font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            Curated Concierge Experience
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-wide text-charcoal">
            Schedule a Consultation
          </h2>
          <div className="w-16 h-0.5 bg-gold mx-auto mt-4" />
          <p className="font-sans text-charcoal-muted text-sm leading-relaxed font-light">
            Book an exclusive, one-on-one virtual or in-person private viewing session with our master jewellery curators.
          </p>
        </div>

        {/* Luxury Booking Lounge Card */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-charcoal border border-gold-light/20 rounded-2xl p-8 sm:p-12 shadow-premium relative group overflow-hidden"
        >
          {/* Inner luxury gold border frame */}
          <div className="absolute inset-4 border border-gold/10 group-hover:border-gold/20 rounded-xl pointer-events-none z-10 transition-colors duration-500" />
          
          <motion.form 
            variants={formVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 relative z-20" 
            onSubmit={handleSubmit}
          >
            {/* Full Name */}
            <motion.div variants={itemVariants} className="form-group flex flex-col text-left space-y-2">
              <label htmlFor="book-name" className="text-[10px] text-gold font-bold uppercase tracking-wider flex items-center gap-1.5">
                <User className="w-3.5 h-3.5" /> Full Name
              </label>
              <input 
                type="text" 
                id="book-name" 
                className="w-full bg-white/5 border border-white/10 focus:border-gold rounded-sm px-4 py-3 text-sm text-white placeholder-white/25 focus:outline-none transition-all duration-300 font-sans"
                placeholder="e.g. Eleanor Vance" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                required 
              />
            </motion.div>

            {/* Email Address */}
            <motion.div variants={itemVariants} className="form-group flex flex-col text-left space-y-2">
              <label htmlFor="book-email" className="text-[10px] text-gold font-bold uppercase tracking-wider flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5" /> Email Address
              </label>
              <input 
                type="email" 
                id="book-email" 
                className="w-full bg-white/5 border border-white/10 focus:border-gold rounded-sm px-4 py-3 text-sm text-white placeholder-white/25 focus:outline-none transition-all duration-300 font-sans"
                placeholder="e.g. eleanor@aura.com" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required 
              />
            </motion.div>

            {/* Requested Date */}
            <motion.div variants={itemVariants} className="form-group flex flex-col text-left space-y-2">
              <label htmlFor="book-date" className="text-[10px] text-gold font-bold uppercase tracking-wider flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" /> Requested Date
              </label>
              <input 
                type="date" 
                id="book-date" 
                className="w-full bg-white/5 border border-white/10 focus:border-gold rounded-sm px-4 py-3 text-sm text-white focus:outline-none transition-all duration-300 font-sans color-whiteScheme" 
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required 
              />
            </motion.div>

            {/* Interest Area */}
            <motion.div variants={itemVariants} className="form-group flex flex-col text-left space-y-2">
              <label htmlFor="book-interest" className="text-[10px] text-gold font-bold uppercase tracking-wider flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" /> Interest Area
              </label>
              <select 
                id="book-interest" 
                className="w-full bg-white/5 border border-white/10 focus:border-gold rounded-sm px-4 py-3 text-sm text-white focus:outline-none transition-all duration-300 font-sans cursor-pointer"
                value={interest}
                onChange={(e) => setInterest(e.target.value)}
              >
                <option value="diamonds" className="bg-[#1C120C] text-white">Custom Diamond Solitaire</option>
                <option value="wedding" className="bg-[#1C120C] text-white">Bridal & Wedding Suite</option>
                <option value="investment" className="bg-[#1C120C] text-white">Investment Grade Gems</option>
                <option value="other" className="bg-[#1C120C] text-white">Bespoke Design Inquiry</option>
              </select>
            </motion.div>

            {/* Special Instructions */}
            <motion.div variants={itemVariants} className="form-group flex flex-col text-left space-y-2 md:col-span-2">
              <label htmlFor="book-notes" className="text-[10px] text-gold font-bold uppercase tracking-wider flex items-center gap-1.5">
                <MessageSquare className="w-3.5 h-3.5" /> Special Instructions or Design Ideas
              </label>
              <textarea 
                id="book-notes" 
                className="w-full bg-white/5 border border-white/10 focus:border-gold rounded-sm px-4 py-3.5 text-sm text-white placeholder-white/25 focus:outline-none transition-all duration-300 font-sans"
                rows={4} 
                placeholder="Describe the masterpiece you envision..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              ></textarea>
            </motion.div>

            {/* Submit Button */}
            <motion.div variants={itemVariants} className="md:col-span-2 pt-2 text-center">
              <button 
                type="submit" 
                className="inline-flex justify-center items-center px-10 py-4 bg-gradient-to-r from-gold to-gold-dark hover:from-gold-light hover:to-gold text-[#2A1B14] font-sans text-xs uppercase tracking-widest font-bold rounded-sm shadow-soft transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-gold-glow cursor-pointer"
              >
                Request Consultation Session
              </button>
            </motion.div>
          </motion.form>
        </motion.div>

      </div>
    </section>
  );
}



