"use client";
import React from 'react';
import '@/app/(Css)/(Home)/Transperancy.css';
import Link from 'next/link';

// Array for transparency documents
const transparencyData = [
  {
    title: "Capability Statement",
    date: "2025-2026",
    size: "4.2MB",
    // Existing google pdf link or placeholder
    link: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" 
  },
  {
    title: "Innovation Challenge 2026",
    date: "Feb-2026",
    size: "4.2MB",
    link: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
  },
  {
    title: "Innovation Challenge 2026",
    date: "Feb-2026",
    size: "4.2MB",
    link: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
  }
];

const Transperancy = () => {
  return (
    <section className="transparency-section">
      <div className="transparency-overlay"></div>
      <div className="transparency-container">
        
        <div className="transparency-header">
          <span className="eyebrow-text-white transparency-eyebrow">TRANSPARENCY CENTER</span>
          <h2 className="head-text-white" style={{paddingBottom:"20px"}}>Everything, on the record.</h2>
          <p className="para-text-white">
            Governance, audited financials, statutory
            certifications and CSR compliance 
            available for download, updated every year.
          </p>
        </div>

        <div className="transparency-cards">
          {transparencyData.map((item, index) => (
            <div className="transparency-card" key={index}>
              <h3 className="transparency-card-title">{item.title}</h3>
              <hr className="transparency-divider" />
              
              <div className="transparency-meta">
                <div className="meta-col">
                  <span className="meta-label">Date</span>
                  <span className="meta-value">{item.date}</span>
                </div>
                <div className="meta-col align-right">
                  <span className="meta-label">PDF</span>
                  <span className="meta-value">{item.size}</span>
                </div>
              </div>

              <Link href={item.link} target="_blank" className="transparency-download-btn">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="download-icon">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                Download
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Transperancy;
