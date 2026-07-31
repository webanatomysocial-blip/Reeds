"use client";
import React, { useState, useEffect } from 'react';
import "@/app/(Css)/(Home)/HomeBanner.css";
import PillButton from '@/app/(Components)/PillButton';
import AnimatedContent from '@/app/(Components)/AnimatedContent';

const slides = [
  {
    image: "/assets/Home_Assets/HomeBannner.avif",
    title: "Healthcare Access",
    subtitle: "For Families and individuals."
  },
  {
    image: "/assets/Home_Assets/HomeBannner.avif",
    title: "Education for all",
    subtitle: "Building rural schools."
  },
  {
    image: "/assets/Home_Assets/HomeBannner.avif",
    title: "WASH for change",
    subtitle: "Clean water initiatives."
  }
];

const HomeBanner = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    const activeSlide = slides[currentSlide];

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
        <div className="home-banner">
            <div className="banner-overlay"></div>
            
            <div className="banner-content">
                <div className="banner-left">
                    <div className="banner-eyebrow eyebrow-text-white">
                        <span className="bullet">•</span> BUILDING RURAL INDIA SINCE 1989
                    </div>
                    <h1 className="banner-heading big-text-head-white">
                        Transforming rural<br/>lives across India.
                    </h1>
                    <p className="banner-desc sub-para-text-white">
                        Since 1989, REEDS has empowered millions through education, livelihoods, water, sanitation, healthcare and sustainable innovation — one village at a time.
                    </p>
                    <div className="banner-buttons">
                        <PillButton 
                            text="Become a Partner"
                            bg="var(--primary-color)"
                            color="var(--secondary-color)"
                            arrowBg="#0b5e3f"
                            arrowColor="white"
                            hoverFillColor="#0b5e3f"
                            hoverTextColor="var(--primary-color)"
                        />
                        <PillButton 
                            text="Donate Now"
                            bg="#e78d06ff"
                            color="white"
                            arrowBg="white"
                            arrowColor="black"
                            hoverFillColor="white"
                            hoverTextColor="black"
                        />
                      
                    </div>
                </div>
                
                <div className="banner-right">
                    <div className="carousel-container">
                        <div className="carousel-slide">
                            <div className="slide-content-left">
                                <div className="carousel-indicators">
                                    {slides.map((_, idx) => (
                                        <div 
                                            key={idx} 
                                            className={`indicator ${idx === currentSlide ? 'active' : ''}`}
                                            onClick={() => setCurrentSlide(idx)}
                                        />
                                    ))}
                                </div>
                                <div className="slide-text-wrapper">
                                    <h3 className='sub-head-text-white' style={{fontWeight:"lighter"}}>{activeSlide.title}</h3>
                                    <p className='para-text-white'>{activeSlide.subtitle}</p>
                                </div>
                            </div>
                            <div className="slide-image-right">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img key={activeSlide.title} src={activeSlide.image} alt={activeSlide.title} className="slide-image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </AnimatedContent>
    )
}

export default HomeBanner;