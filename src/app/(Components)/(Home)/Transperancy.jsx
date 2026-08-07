"use client";
import React, { useEffect, useRef } from 'react';
import '@/app/(Css)/(Home)/Transperancy.css';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AnimatedContent from '@/app/(Components)/AnimatedContent';

gsap.registerPlugin(ScrollTrigger);

// Array for transparency documents
const transparencyData = [
  {
    title: "Capability Statement",
    date: "2025-2026",
    size: "691KB",
    // Existing google pdf link or placeholder
    link: "https://reeds.webanatomytech.com/Reports/REEDS-Capability-Statement.pdf" 
  },
  {
    title: "Innovation Challenge 2026",
    date: "Feb-2026",
    size: "5MB",
    link: "https://reeds.webanatomytech.com/Reports/CIRDAP-International-Rural-Development-Innovation-Challenge-2026.pdf"
  },
];

const Transperancy = () => {
  const sectionRef = useRef(null);
  const bgRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(bgRef.current, 
      { scale: 1 }, 
      { 
        scale: 1.2, 
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      }
    );
  }, []);

  return (
   
    <section className="transparency-section" ref={sectionRef}>
      <div className="transparency-bg" ref={bgRef}>
        <Image src="/assets/Gallery_Assets/Self-Help-Groups.jpg.jpeg" alt="Transparency Background" fill style={{ objectFit: 'cover' }} priority />
      </div>
      <div className="transparency-overlay"></div>
      <AnimatedContent
        className="transparency-container"
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
      </AnimatedContent>
    </section>
  );
};

export default Transperancy;
