"use client";
import React from 'react';
import { FiDownload } from 'react-icons/fi';
import PillButton from '../PillButton';
import '@/app/(Css)/(Home)/AboutReeds.css';
import AnimatedContent from '@/app/(Components)/AnimatedContent';

const AboutReeds = () => {
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
        <section className="about-reeds-section">
            <div className="about-reeds-container">
                <div className="about-left">
                    <div className="about-eyebrow">
                        <span className="eyebrow-text-white" style={{color: "#08512bff"}}>ABOUT REEDS</span>
                    </div>
                    <a 
                        href="https://drive.google.com/uc?export=download&id=1YYW9-nNtDXHtA_nLB7-wAtPWOY40KIIq" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="about-cert"
                    >
                        <FiDownload className="cert-icon" /> 
                        <span>ISO Certified under 9001:2015.</span>
                    </a>
                    <h2 className="head-text" style={{marginTop: '24px'}}>
                        Building sustainable rural communities village by village.
                    </h2>
                    <p className="sub-para-text about-reeds-desc">
                        We partner with panchayats, government departments, corporates and foundations to deliver programs that last generations, not news cycles.
                    </p>
                    <PillButton 
                        text="Read More"
                        bg="#08512bff"
                        color="white"
                        arrowBg="white"
                        arrowColor="black"
                        hoverFillColor="white"
                        hoverTextColor="black"
                    />
                </div>
                
                <div className="about-right">
                    <div className="about-image-card">
                        <div className="image-bg" style={{backgroundImage: "url('/assets/About_Assets/about3.png')"}}></div>
                    </div>
                    <div className="about-image-card img-wid">
                        <div className="image-bg " style={{backgroundImage: "url('/assets/About_Assets/about2.png')"}}></div>
                        <div className="about-image-overlay">
                            <p className="quote-text">
                                "They didn't just help me, they gave me my life back."
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </AnimatedContent>
    );
};

export default AboutReeds;
