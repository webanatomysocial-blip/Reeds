"use client";
import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import { FiDownload } from 'react-icons/fi';
import PillButton from '../PillButton';
import '@/app/(Css)/(Home)/AboutReeds.css';
import AnimatedContent from '@/app/(Components)/AnimatedContent';

const ISO_CERT_URL = "https://reeds.in/reports/ISO.pdf";

function PdfPreviewModal({ url, onClose }) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    if (!mounted) return null;

    return createPortal(
        <div className="about-pdf-modal-overlay" onClick={onClose}>
            <div className="about-pdf-modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="about-pdf-modal-close" onClick={onClose} aria-label="Close">
                    &times;
                </button>
                <iframe src={url} title="ISO Certificate Preview" className="about-pdf-modal-frame" />
            </div>
        </div>,
        document.body
    );
}

const AboutReeds = () => {
    const [isPdfOpen, setIsPdfOpen] = useState(false);

    return (
        <>
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
                    <button
                        type="button"
                        onClick={() => setIsPdfOpen(true)}
                        className="about-cert"
                    >
                        <FiDownload className="cert-icon" />
                        <span>Certified under 9001:2015.</span>
                    </button>
                    <h2 className="head-text" style={{marginTop: '24px'}}>
                        Building sustainable rural communities village by village.
                    </h2>
                    <p className="sub-para-text about-reeds-desc">
                        We partner with panchayats, government departments, corporates and foundations to deliver programs that last generations, not news cycles.
                    </p>
                    <Link href="/about" style={{ textDecoration: 'none' }}>
                        <PillButton
                            text="Read More"
                            bg="#08512bff"
                            color="white"
                            arrowBg="white"
                            arrowColor="black"
                            hoverFillColor="white"
                            hoverTextColor="black"
                        />
                    </Link>
                </div>
                
                <div className="about-right">
                    <div className="about-image-card">
                        <div className="image-bg" style={{backgroundImage: "url('/assets/About_Assets/about3.png')"}}></div>
                    </div>
                    <div className="about-image-card img-wid">
                        <div className="image-bg " style={{backgroundImage: "url('/assets/About_Assets/about2.jpg')"}}></div>
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
        {isPdfOpen && <PdfPreviewModal url={ISO_CERT_URL} onClose={() => setIsPdfOpen(false)} />}
        </>
    );
};

export default AboutReeds;
