"use client";
import React from 'react';
import { FiDownload } from 'react-icons/fi';
import PillButton from '../PillButton';
import '@/app/(Css)/(Home)/AboutReeds.css';

const AboutReeds = () => {
    return (
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
                    <p className="sub-para-text" style={{marginTop: '24px', marginBottom: '40px', maxWidth: '500px'}}>
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
                        <div className="image-bg" style={{backgroundImage: "url('/assets/Home_Assets/HomeBannner.avif')"}}></div>
                    </div>
                    <div className="about-image-card img-wid">
                        <div className="image-bg " style={{backgroundImage: "url('/assets/Home_Assets/HomeBannner.avif')"}}></div>
                        <div className="about-image-overlay">
                            <p className="quote-text">
                                "They didn't just help me, they gave me my life back."
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutReeds;
