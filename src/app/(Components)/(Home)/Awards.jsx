"use client";
import React from 'react';
import '@/app/(Css)/(Home)/Awards.css';
import AnimatedContent from '@/app/(Components)/AnimatedContent';

const awardsData = [
  {
    title: "The GRAMODAYA BANDHU MITRA PURASKAR Award 2020",
    image: "/assets/Home_Assets/Gramodaya.avif"
  },
  {
    title: "India Today Safaigiri WATER WARRIOR Award 2016",
    image: "/assets/Home_Assets/safaigari.avif"
  },
  {
    title: "Government of Andhra Pradesh's 'LETTER OF APPRECIATION 2008",
    image: "/assets/Home_Assets/andhrapradesh.avif"
  }
];

const Awards = () => {
  return (
    <AnimatedContent
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
    <section className="awards-section">
      <div className="awards-grid">
        {awardsData.map((award, index) => (
          <div className="award-card" key={index}>
            <div className="award-image-container">
              <div 
                className="award-image" 
                style={{ backgroundImage: `url(${award.image})` }}
              ></div>
            </div>
            <div className="award-content">
              <h3 className="award-title">{award.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
    </AnimatedContent>
  );
};

export default Awards;
