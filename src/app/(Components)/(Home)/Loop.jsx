"use client";
import React, { useState, useEffect, useRef } from 'react';
import '@/app/(Css)/(Home)/Loop.css';

const loopImages = [
  "/assets/Home_Assets/HomeBannner.avif",
  "/assets/Home_Assets/HomeBannner.avif",
  "/assets/Home_Assets/HomeBannner.avif",
  "/assets/Home_Assets/HomeBannner.avif",
  "/assets/Home_Assets/HomeBannner.avif",
  "/assets/Home_Assets/HomeBannner.avif",
  "/assets/Home_Assets/HomeBannner.avif",
  "/assets/Home_Assets/HomeBannner.avif"
];

const duplicatedImages = [...loopImages, ...loopImages];

const Loop = () => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let startTimestamp = null;
          const end = 5707;
          const duration = 2000;
          
          const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            
            setCount(Math.floor(easeOutQuart * end));
            
            if (progress < 1) {
              window.requestAnimationFrame(step);
            }
          };
          window.requestAnimationFrame(step);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="loop-section">
      <div className="loop-header">
        <span className="eyebrow-text-white loop-eyebrow">STAY ON THE LOOP</span>
        <h2 className="head-text-white" style={{paddingBottom:"20px"}}>One story from the field. Once a month.</h2>
        <p className="loop-subtitle">No spam. Only impact updates, campaigns and annual reports.</p>
        
        <form className="loop-subscribe-form" onSubmit={(e) => e.preventDefault()}>
          <input type="email" placeholder="name@email.com" required />
          <button type="submit">Subscribe</button>
        </form>
      </div>

      <div className="loop-marquee-container">
        <div className="loop-marquee-track">
          {duplicatedImages.map((img, idx) => (
            <div className="loop-image-card" key={idx}>
              <div 
                className="loop-image" 
                style={{ backgroundImage: `url(${img})` }}
              ></div>
            </div>
          ))}
        </div>
      </div>

      <div className="loop-footer" ref={countRef}>
        <p className="loop-footer-label">Total Visitors</p>
        <h3 className="loop-footer-count">{count.toLocaleString()}</h3>
      </div>
    </section>
  );
};

export default Loop;
