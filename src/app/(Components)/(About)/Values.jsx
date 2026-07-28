"use client";

import React from 'react';
import '@/app/(Css)/(About)/Values.css';
import PillButton from '../PillButton';


const VALUES = [
  {
    id: 'respect',
    title: 'Respect',
    desc: 'We honor the values and beliefs of the people we work with.',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="#2e7d32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M32 12c0-4.4-3.6-8-8-8s-8 3.6-8 8 3.6 8 8 8" />
        <path d="M32 12c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8" />
        <path d="M32 28v24" />
        <path d="M16 32c0 8.8 7.2 16 16 16s16-7.2 16-16" />
        <path d="M16 32v-4c0-2.2 1.8-4 4-4h24c2.2 0 4 1.8 4 4v4" />
      </svg>
    ),
  },
  {
    id: 'integrity',
    title: 'Integrity',
    desc: 'We uphold our commitments and deliver on our promises.',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="#2e7d32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 36c2 4 6 6 12 6s10-2 12-6" />
        <path d="M12 28c4-4 10-4 14 0l6-6 6 6c4-4 10-4 14 0" />
        <path d="M16 44l-4 8h40l-4-8" />
        <path d="M24 36v8" />
        <path d="M40 36v8" />
      </svg>
    ),
  },
  {
    id: 'excellence',
    title: 'Excellence',
    desc: 'We continuously strive to surpass our current capabilities.',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="#2e7d32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 28c0-1.1.9-2 2-2h36c1.1 0 2 .9 2 2v2c0 5.5-4.5 10-10 10H22c-5.5 0-10-4.5-10-10v-2z" />
        <path d="M32 26V14" />
        <path d="M22 14h20" />
        <path d="M22 40l-4 12" />
        <path d="M42 40l4 12" />
        <path d="M16 52h32" />
      </svg>
    ),
  },
  {
    id: 'happiness',
    title: 'Happiness',
    desc: 'Our success is measured by the genuine smiles we inspire.',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="#2e7d32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M32 10c-6 0-10 4-10 9 0 6 10 15 10 15s10-9 10-15c0-5-4-9-10-9z" />
        <path d="M20 34c-6 2-10 6-10 10v8h44v-8c0-4-4-8-10-10" />
        <path d="M24 46c2 2 5 4 8 4s6-2 8-4" />
      </svg>
    ),
  },
];

const AVATARS = [
  { bg: '#d4a96a' },
  { bg: '#c89060' },
  { bg: '#a07050' },
  { bg: '#8a6040' },
];

export default function ReedsValues() {
  return (
    <section className="reeds-values-section">
      <div className="reeds-values-container">

        {/* Left Column */}
        <div className="reeds-values-left">
          <h2 className="head-text">Our Values</h2>
          <p className="sub-para-text" style={{paddingBottom:"0px"}}>
            Our four core values shape our culture, define who we are,
            and represent what we aspire to be:
          </p>

          {/* Donor Avatars — donor text visible on desktop, hidden on mobile */}
          <div className="reeds-values-donors">
            <div className="reeds-values-avatars">
              {AVATARS.map((a, i) => (
                <div
                  key={i}
                  className="reeds-values-avatar"
                  style={{ backgroundColor: a.bg }}
                />
              ))}
            </div>
            {/* Desktop-only donor text (inside the row) */}
            <div className="reeds-values-donor-text reeds-values-donor-text--desktop">
              <span className="reeds-values-donor-label">Hundreds of Real Doners</span>
              <span className="reeds-values-donor-sub">Trust and Value us</span>
            </div>
          </div>

          {/* Mobile-only donor text — sits where the button is on desktop */}
          <div className="reeds-values-donor-text reeds-values-donor-text--mobile">
            <span className="reeds-values-donor-label">Hundreds of Real Doners</span>
            <span className="reeds-values-donor-sub">Trust and Value us</span>
          </div>

          {/* CTA Button */}
  <PillButton 
                            text="Donate Now"
                            bg="#e78d06ff"
                            color="white"
                            arrowBg="white"
                            arrowColor="black"
                            hoverFillColor="white"
                            hoverTextColor="black"
                        />
        </div>

        {/* Right Column — Value Cards */}
        <div className="reeds-values-right">
          {VALUES.map((v) => (
            <div key={v.id} className="reeds-values-card">
              <div className="reeds-values-card-icon">{v.icon}</div>
              <div className="reeds-values-card-body">
                <h3 className="reeds-values-card-title">{v.title}</h3>
                <p className="reeds-values-card-desc">{v.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}