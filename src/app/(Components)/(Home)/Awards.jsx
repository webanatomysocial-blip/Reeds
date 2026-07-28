"use client";
import React from 'react';
import '@/app/(Css)/(Home)/Awards.css';

const awardsData = [
  {
    title: "The GRAMODAYA BANDHU MITRA PURASKAR Award 2020",
    image: "/assets/Home_Assets/HomeBannner.avif"
  },
  {
    title: "India Today Safaigiri WATER WARRIOR Award 2016",
    image: "/assets/Home_Assets/HomeBannner.avif"
  },
  {
    title: "Government of Andhra Pradesh's 'LETTER OF APPRECIATION 2008",
    image: "/assets/Home_Assets/HomeBannner.avif"
  }
];

const Awards = () => {
  return (
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
  );
};

export default Awards;
