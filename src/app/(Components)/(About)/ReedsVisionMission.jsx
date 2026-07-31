"use client";

import React from 'react';
import '@/app/(Css)/(About)/ReedsVisionMission.css';
import AnimatedContent from '@/app/(Components)/AnimatedContent';

export default function ReedsVisionMission() {
  return (
    <section className="reeds-vm-section" id='vismissection'>
      <AnimatedContent
        className="reeds-vm-container"
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
        <div className="reeds-vm-grid">
          
          {/* Column 1: Image Placeholder */}
          <div className="reeds-vm-col image-col">
            <div className="reeds-vm-card reeds-vm-image-card">
              
            </div>
          </div>

          {/* Column 2: Our Vision & Lives Impacted */}
          <div className="reeds-vm-col">
            
            {/* Our Vision Card */}
            <div className="reeds-vm-card reeds-vm-text-card vision-card">
              <div>
                <div className="reeds-vm-icon-circle vision-circle">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="4" y="16" width="12" height="12" rx="3" fill="#81c784" fillOpacity="0.6" />
                    <rect x="10" y="10" width="12" height="12" rx="3" fill="#4caf50" fillOpacity="0.8" />
                    <rect x="16" y="4" width="12" height="12" rx="3" fill="#2e7d32" />
                  </svg>
                </div>
                <h3 className="sub-head-text">Our Vision</h3>
                <p className="sub-para-text">
                  An inclusively empowered rural India thrives through sustainable growth, equal opportunities, education, healthcare, technology, and community-driven initiatives for all.
                </p>
              </div>
            </div>

            {/* Lives Impacted Stat Card */}
            <div className="reeds-vm-card reeds-vm-stat-card">
              <span className="reeds-vm-stat-number">150k+</span>
              <span className="reeds-vm-stat-label">Lives Impacted</span>
            </div>

          </div>

          {/* Column 3: Volunteers & Our Mission */}
          <div className="reeds-vm-col">
            
            {/* Volunteers Stat Card */}
            <div className="reeds-vm-card reeds-vm-stat-card">
              <span className="reeds-vm-stat-number">450+</span>
              <span className="reeds-vm-stat-label">Volunteers</span>
            </div>

            {/* Our Mission Card */}
            <div className="reeds-vm-card reeds-vm-text-card mission-card">
              <div>
                <div className="reeds-vm-icon-circle mission-circle">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="16" cy="16" r="10" stroke="#e05624" strokeWidth="2.5" opacity="0.3" />
                    <circle cx="16" cy="16" r="6" stroke="#e05624" strokeWidth="2.5" />
                    <circle cx="16" cy="16" r="2.5" fill="#e05624" />
                  </svg>
                </div>
                <h3 className="sub-head-text">Our Mission</h3>
                <p className="sub-para-text">
                  Implement innovative strategies through public, private, and community partnerships for sustainable and inclusive socio-economic development—enhancing rural capabilities to become more productive at scale.
                </p>
              </div>
            </div>

          </div>

        </div>
      </AnimatedContent>
    </section>
  );
}