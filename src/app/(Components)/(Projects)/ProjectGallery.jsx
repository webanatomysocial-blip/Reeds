"use client";
import React from 'react';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import Headings from '../Headings';
import '@/app/(Css)/Projects/ProjectGallery.css';
import AnimatedContent from '@/app/(Components)/AnimatedContent';

const ProjectGallery = () => {
  // Using HomeBanner.avif for all images for now as requested
  const images = [
    '/assets/Gallery_Assets/AGM-1-Sep-2025-e1760336457774.jpg.jpeg',
    '/assets/Gallery_Assets/DSC_6354.jpg.jpeg',
    '/assets/Gallery_Assets/Site-visits-1.jpg.jpeg',
    '/assets/Gallery_Assets/AGM-2-Sep-2025.jpg.jpeg',
    '/assets/Gallery_Assets/Self-Help-Groups.jpg.jpeg',
    '/assets/Gallery_Assets/Site-visits.jpg.jpeg'
  ];

  return (
    <>
   
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
              <div key={index} className="project-gallery-item" style={{ position: 'relative' }}>
                <Image src={img} alt={`Gallery Image ${index + 1}`} fill sizes="420px" />
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
