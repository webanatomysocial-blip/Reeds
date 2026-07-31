"use client";
import React from 'react';
import '@/app/(Css)/InnerBanner.css';
import FadeContent from '@/app/(Components)/FadeContent';
import AnimatedContent from '@/app/(Components)/AnimatedContent';

const InnerBanner = ({ bgImage = "/assets/Home_Assets/HomeBannner.avif", eyebrowText, title, desc }) => {
    return (
        <section className="inner-banner">
            <div 
                className="inner-banner-bg" 
                style={{ backgroundImage: `url(${bgImage})` }}
            ></div>
            <div className="inner-banner-overlay"></div>
            
            <div className="inner-banner-content">
                <div className="inner-banner-text">
                    {eyebrowText && (
                        <div className="inner-banner-eyebrow">
                            {eyebrowText}
                        </div>
                    )}
                    {title && (
                        <FadeContent blur={true} duration={1000} ease="power2.out" initialOpacity={0}>
                            <h1 className="head-text-white inner-banner-title">
                                {title}
                            </h1>
                        </FadeContent>
                    )}
                    {desc && (
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
                            <p className="inner-banner-desc">
                                {desc}
                            </p>
                        </AnimatedContent>
                    )}
                </div>
                
            
            </div>
        </section>
    );
};

export default InnerBanner;
