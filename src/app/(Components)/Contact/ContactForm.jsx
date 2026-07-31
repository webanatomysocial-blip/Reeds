"use client";

import React, { useState } from 'react';
import '@/app/(Css)/Contact/ContactForm.css';
import AnimatedContent from '@/app/(Components)/AnimatedContent';

export default function ReedsContact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    notes: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert('Thank you for contacting us! We will get back to you soon.');
    setFormData({ firstName: '', lastName: '', email: '', phone: '', notes: '' });
  };

  return (
    <section className="reeds-contact-section" id="contact">
        <AnimatedContent
          className="reeds-contact-container"
          distance={50}
          direction="vertical"
          reverse={false}
          duration={1.5}
          ease="power3.out"
          initialOpacity={0}
          animateOpacity
          scale={1}
          threshold={0.1}
          delay={0}
        >
        {/* Left Column: Image Placeholder & Contact Details */}
        <div className="reeds-contact-left">
          
          {/* Image Placeholder */}
          <div className="reeds-contact-image-placeholder" role="img" aria-label="REEDS Office Placeholder">
            {/* Replace this div or background-image with your real <img> tag */}
          </div>

          {/* Contact Details Cards */}
          <div className="reeds-contact-details">
            
            <div className="reeds-contact-detail-item">
              <div className="reeds-contact-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div className="reeds-contact-detail-text">
                <h4>Our Mail</h4>
                <p>info@reeds.in</p>
              </div>
            </div>

            <div className="reeds-contact-detail-item">
              <div className="reeds-contact-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div className="reeds-contact-detail-text">
                <h4>Our Contact</h4>
                <p>+91 9505051989</p>
              </div>
            </div>

            <div className="reeds-contact-detail-item">
              <div className="reeds-contact-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div className="reeds-contact-detail-text">
                <h4>Our Address</h4>
                <p>C-206,Vijaya Hills, 11-4-646, AC Guards, Hyderabad, Telangana India - 500004</p>
              </div>
            </div>

          </div>

        </div>

        {/* Right Column: Contact Form */}
        <div className="reeds-contact-right">
          <div className="reeds-contact-form-card">
            <h3 className="reeds-contact-form-title">Contact Information</h3>
            

            <form className="reeds-contact-form" onSubmit={handleSubmit}>
              <div className="reeds-contact-form-row">
                <div className="reeds-contact-form-group">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    placeholder="Jane"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                </div>

                <div className="reeds-contact-form-group">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    placeholder="Smith"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="reeds-contact-form-row">
                <div className="reeds-contact-form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="work@gmail.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="reeds-contact-form-group">
                  <label htmlFor="phone">Contact Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="+91 8772 62627"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="reeds-contact-form-group">
                <label htmlFor="notes">Notes</label>
                <textarea
                  id="notes"
                  name="notes"
                  rows="4"
                  placeholder="Let's work together!"
                  value={formData.notes}
                  onChange={handleChange}
                ></textarea>
              </div>

              <button type="submit" className="reeds-contact-submit-btn">
                Submit
              </button>
            </form>
          </div>
        </div>

      </AnimatedContent>
    </section>
  );
}