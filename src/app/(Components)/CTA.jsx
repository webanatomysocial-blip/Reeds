"use client";
import React, { useState, useEffect } from 'react';
import '@/app/(Css)/CTA.css';
import PillButton from './PillButton';

const CTA = ({
  backImg = '/assets/Home_Assets/HomeBannner.avif', // Assuming HomeBanner is used if no image passed
  eyebrow = 'DONATE TODAY',
  title = 'WASH for Change',
  description = 'Join us in building healthier schools and brighter futures.',
  pillButton = 'Sponsor A School'
}) => {
  const [scale, setScale] = useState(1.3);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Start at 1.3 and scale down to 1.0 as we scroll down
      const newScale = Math.max(1, 1.3 - scrollY * 0.0004);
      setScale(newScale);
    };

    window.addEventListener('scroll', handleScroll);
    // Initial call to set correct scale on mount
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="cta-section">
      <div 
        className="cta-background" 
        style={{ 
          backgroundImage: `url(${backImg})`,
          transform: `scale(${scale})`
        }}
      ></div>
      <div className="cta-overlay"></div>
      
      <div className="cta-container">
        <div className="cta-left">
          <span className="eyebrow-text-white cta-eyebrow">{eyebrow}</span>
          <h2 className="head-text-white">{title}</h2>
        </div>
        <div className="cta-right">
          <p className="para-text-white">{description}</p>
          <PillButton 
            text={pillButton}
            bg="#fca311"
            color="black"
            arrowBg="white"
            arrowColor="black"
            hoverFillColor="white"
            hoverTextColor="black"
          />
        </div>
      </div>
    </section>
  );
};

export default CTA;
