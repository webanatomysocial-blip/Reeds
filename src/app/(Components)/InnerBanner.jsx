"use client";
import React from 'react';
import '@/app/(Css)/InnerBanner.css';

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
                        <h1 className="head-text-white inner-banner-title">
                            {title}
                        </h1>
                    )}
                    {desc && (
                        <p className="inner-banner-desc">
                            {desc}
                        </p>
                    )}
                </div>
                
            
            </div>
        </section>
    );
};

export default InnerBanner;
