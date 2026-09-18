"use client";

import React from 'react';
import '@/app/(Css)/(About)/ReedsVisionMission.css';
import AnimatedContent from '@/app/(Components)/AnimatedContent';
import { FiEye, FiTarget } from 'react-icons/fi';

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
          
          {/* Column 1: Image */}
          <div className="reeds-vm-col image-col">
            <div
              className="reeds-vm-card reeds-vm-image-card"
              style={{ backgroundImage: "url(/assets/About_Assets/about2.webp)" }}
            >

            </div>
          </div>

          {/* Column 2: Our Vision & Lives Impacted */}
          <div className="reeds-vm-col">
            
            {/* Our Vision Card */}
            <div className="reeds-vm-card reeds-vm-text-card vision-card">
              <div>
                <div className="reeds-vm-icon-circle vision-circle">
                  <FiEye size={32} color="#2e7d32" />
                </div>
                <h3 className="sub-head-text">Our Vision</h3>
                <p className="sub-para-text">
                  An inclusively empowered rural India thrives through sustainable growth, equal opportunities, education, healthcare, technology, and community-driven initiatives for all.
                </p>
              </div>
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
                  <FiTarget size={32} color="#e05624" />
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