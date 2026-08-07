"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import "@/app/(Css)/(Home)/HomeBanner.css";
import PillButton from "@/app/(Components)/PillButton";
import AnimatedContent from "@/app/(Components)/AnimatedContent";
import { actionProgramsData } from "@/app/(Components)/(Home)/ActionProgram";

const slides = actionProgramsData.map((program) => ({
  image: program.image,
  title: program.heading,
  subtitle: program.category,
  link: program.link,
}));

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
    
      <div className="home-banner" style={{ position: "relative" }}>
        <Image
          src="/assets/Gallery_Assets/DSC_6354.jpg.jpeg"
          alt="Home Banner"
          fill
          style={{ objectFit: "cover", zIndex: -1 }}
          priority
        />
        <div className="banner-overlay"></div>
        <div className="banner-content">
          <AnimatedContent
            className="banner-left"
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
            <div className="banner-eyebrow eyebrow-text-white">
              <span className="bullet">•</span> BUILDING RURAL INDIA SINCE 1989
            </div>
            <h1 className="banner-heading big-text-head-white">
              Transforming rural
              <br />
              lives across India.
            </h1>
            <p className="banner-desc sub-para-text-white">
              Since 1989, REEDS has empowered millions through education,
              livelihoods, water, sanitation, healthcare and sustainable
              innovation — one village at a time.
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
                bg="#F59E0A"
                color="black"
                arrowBg="white"
                arrowColor="black"
                hoverFillColor="white"
                hoverTextColor="black"
              />
            </div>
          </AnimatedContent>

          <div className="banner-right">
            <div className="carousel-container">
              <div className="carousel-slide">
                <div className="slide-content-left">
                  <div className="carousel-indicators">
                    {slides.map((_, idx) => (
                      <div
                        key={idx}
                        className={`indicator ${idx === currentSlide ? "active" : ""}`}
                        onClick={() => setCurrentSlide(idx)}
                      />
                    ))}
                  </div>
                  <Link
                    href={activeSlide.link}
                    className="slide-text-wrapper"
                    style={{ textDecoration: "none" }}
                  >
                    <h3 style={{ fontWeight: "lighter" }}>
                      {activeSlide.title}
                    </h3>
                    <p className="para-text-white">{activeSlide.subtitle}</p>
                  </Link>
                </div>
                <Link
                  href={activeSlide.link}
                  className="slide-image-right"
                  style={{ position: "relative" }}
                >
                  <Image
                    key={activeSlide.title}
                    src={activeSlide.image}
                    alt={activeSlide.title}
                    className="slide-image"
                    fill
                    sizes="180px"
                    priority
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default HomeBanner;
