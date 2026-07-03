import React, { useState } from 'react';

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

  return (
    <section className="section" id="consultation">
      <div className="section-header">
        <span className="section-tag">Private Session</span>
        <h2 className="section-title">Schedule a Consultation</h2>
      </div>

      <div className="booking-section">
        <form className="booking-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="book-name">Full Name</label>
            <input 
              type="text" 
              id="book-name" 
              className="form-input" 
              placeholder="e.g. Eleanor Vance" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="book-email">Email Address</label>
            <input 
              type="email" 
              id="book-email" 
              className="form-input" 
              placeholder="e.g. eleanor@aura.com" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="book-date">Requested Date</label>
            <input 
              type="date" 
              id="book-date" 
              className="form-input" 
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="book-interest">Interest Area</label>
            <select 
              id="book-interest" 
              className="form-select"
              value={interest}
              onChange={(e) => setInterest(e.target.value)}
            >
              <option value="diamonds">Custom Diamond Solitaire</option>
              <option value="wedding">Bridal & Wedding Suite</option>
              <option value="investment">Investment Grade Gems</option>
              <option value="other">Bespoke Design Inquiry</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="book-notes">Special Instructions or Design Ideas</label>
            <textarea 
              id="book-notes" 
              className="form-input" 
              rows={4} 
              placeholder="Describe the masterpiece you envision..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            ></textarea>
          </div>
          <button type="submit" className="btn-gold">Request Booking</button>
        </form>
      </div>
    </section>
  );
}
