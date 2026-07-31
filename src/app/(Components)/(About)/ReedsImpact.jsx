"use client";

import React, { useEffect, useRef } from 'react';
import '@/app/(Css)/(About)/ReedsImpact.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AnimatedContent from '@/app/(Components)/AnimatedContent';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ReedsImpact() {
  const sectionRef = useRef(null);
  const cardBackRef = useRef(null);
  const cardFrontRef = useRef(null);
  const heartRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Tilt back card slightly (e.g. from -14deg to -2deg)
      gsap.fromTo(cardBackRef.current,
        { rotate: -14 },
        {
          rotate: -2,
          ease: 'power1.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          }
        }
      );

      // Tilt front card slightly in opposite direction (e.g. from 2deg to 12deg)
      gsap.fromTo(cardFrontRef.current,
        { rotate: 1 },
        {
          rotate: 11,
          ease: 'power1.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          }
        }
      );

      // Rotate heart slightly (e.g. from 10deg to 20deg)
      gsap.fromTo(heartRef.current,
        { rotate: 10, y: -10 },
        {
          rotate: 20,
          y: 10,
          ease: 'power1.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.2,
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="reeds-impact-section" ref={sectionRef}>
      <AnimatedContent
        className="reeds-impact-container"
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
        
        {/* Left Column: Impact Content & Statistics */}
        <div className="reeds-impact-content">
          <h2 className="head-text"style={{paddingBottom:"20px"}}>The Impact We’ve Created So Far</h2>
          
          <p className="sub-para-text">
            REEDS is a voluntary not-for-profit organization, established in 1989 as a Society. 
            With a multi-state presence, REEDS is actively engaged in promoting the quality of 
            life of rural communities through programs and initiatives that can improve diverse 
            spheres of rural life.
          </p>

          <div className="reeds-impact-list">
            
            {/* Stat Item 1: 450K+ Lives Impacted */}
            <div className="reeds-impact-item">
              <div className="reeds-impact-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <span className="reeds-impact-item-text">450K+ Lives Impacted</span>
            </div>

            {/* Stat Item 2: 11K+ Villages Covered */}
            <div className="reeds-impact-item">
              <div className="reeds-impact-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5c0-3.78 3.4-6.86 8.55-11.54L12 21.35z" />
                  <path d="M2 14c2.5 0 4 1.5 6.5 1.5h7.5c2 0 3.5-1.5 3.5-3" />
                </svg>
              </div>
              <span className="reeds-impact-item-text">11K+ Villages Covered</span>
            </div>

            {/* Stat Item 3: 15 States Coverages */}
            <div className="reeds-impact-item">
              <div className="reeds-impact-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3c3.08 0 5.5 2.42 5.5 5.5 0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  <path d="M8 12l2 2 4-4" />
                </svg>
              </div>
              <span className="reeds-impact-item-text">15 States Coverages</span>
            </div>

          </div>
        </div>

        {/* Right Column: Visual Elements (Decoupled Position Wrappers) */}
        <div className="reeds-impact-visual">
          <div className="reeds-impact-visual-inner">
            
            {/* Back Card Wrapper */}
            <div className="reeds-impact-card-wrapper card-back-wrap">
              <div className="reeds-impact-card card-back" ref={cardBackRef}></div>
            </div>

            {/* Front Card Wrapper */}
            <div className="reeds-impact-card-wrapper card-front-wrap">
              <div className="reeds-impact-card card-front" ref={cardFrontRef}></div>
            </div>

            {/* Translucent Green Heart Overlay Wrapper */}
            <div className="reeds-impact-heart-wrap" ref={heartRef}>
              <svg className="reeds-impact-heart" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path 
                  className="reeds-impact-heart-path" 
                  d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" 
                />
              </svg>
            </div>

          </div>
        </div>

      </AnimatedContent>
    </section>
  );
}