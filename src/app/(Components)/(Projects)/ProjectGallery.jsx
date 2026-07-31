"use client";
import React from 'react';
import Marquee from 'react-fast-marquee';
import Headings from '../Headings';
import '@/app/(Css)/Projects/ProjectGallery.css';
import AnimatedContent from '@/app/(Components)/AnimatedContent';

const ProjectGallery = () => {
  // Using HomeBanner.avif for all images for now as requested
  const images = Array(6).fill('/assets/Home_Assets/HomeBannner.avif');

  return (
    <>
    <Headings
        eyebrowText="LOREM IPSUM"
        eyebrowColor="#0b6b3b"
        headingText="Project Gallery"
        descriptionText="Every cause we support is driven by real needs, real people, and real outcomes."
      />
    <section className="project-gallery-section">
      
      
      <AnimatedContent
        distance={50}
        direction="vertical"
        reverse={false}
        duration={1.2}
        ease="power3.out"
        initialOpacity={0}
        animateOpacity
        scale={1}
        threshold={0.1}
        delay={0.2}
      >
        <div className="project-gallery-carousel">
          <Marquee speed={40} gradient={false} direction="left">
            {images.map((img, index) => (
              <div key={index} className="project-gallery-item">
                <img src={img} alt={`Gallery Image ${index + 1}`} />
              </div>
            ))}
          </Marquee>
        </div>
      </AnimatedContent>
    </section>
    </>
  );
};

export default ProjectGallery;
