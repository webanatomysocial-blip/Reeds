"use client";

import React from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import '@/app/(Css)/Gallery/DoubleCarousel.css'

export default function OurJourney() {
  const topRowImages = [
    "/assets/Gallery_Assets/8a519ff4-1299-4562-ae2b-b4b3e25960c2-scaled.jpg.jpeg",
    "/assets/Gallery_Assets/AGM-1-Sep-2025-e1760336457774.jpg.jpeg",
    "/assets/Gallery_Assets/AGM-2-Sep-2025.jpg.jpeg",
    "/assets/Gallery_Assets/Assesments-scaled.jpg.jpeg",
    "/assets/Gallery_Assets/Creating-Awareness.jpg.jpeg",
    "/assets/Gallery_Assets/Creating-WASH-awareness-among-school-children-1.jpg.jpeg",
    "/assets/Gallery_Assets/DDUGKY-visit-in-Tamil-Nadu-scaled.jpg.jpeg",
    "/assets/Gallery_Assets/DSC_6345-3.jpg.jpeg",
    "/assets/Gallery_Assets/DSC_6354.jpg.jpeg",
    "/assets/Gallery_Assets/DSC_6492.jpg.jpeg",
    "/assets/Gallery_Assets/Felicitation-program-scaled.jpg.jpeg",
    "/assets/Gallery_Assets/Focused-Group-Discussions.jpeg",
    "/assets/Gallery_Assets/Hand-Wash-Awareness.jpg.jpeg",
    "/assets/Gallery_Assets/Monitoring-Studies-REEDS-1.jpeg",
    "/assets/Gallery_Assets/REEDS-Secretary-meeting-with-Shri-Pranab-Kumar-Mukherjee-.jpeg",
    "/assets/Gallery_Assets/School-Student-Participated-in-Painting-Competition-1.jpg.jpeg",
    "/assets/Gallery_Assets/Self-Help-Group.jpg.jpeg"
  ];

  const bottomRowImages = [
    "/assets/Gallery_Assets/Self-Help-Groups.jpg.jpeg",
    "/assets/Gallery_Assets/Site-visits-1.jpg.jpeg",
    "/assets/Gallery_Assets/Studies-Andhra-Pradesh.jpeg",
    "/assets/Gallery_Assets/Sun-News.jpg.jpeg",
    "/assets/Gallery_Assets/Team-interaction-with-Villagers.jpg.jpeg",
    "/assets/Gallery_Assets/WhatsApp-Image-2025-12-22-at-10.32.09-PM.jpeg",
    "/assets/Gallery_Assets/WhatsApp-Image-2025-12-22-at-10.32.11-PM.jpeg",
    "/assets/Gallery_Assets/WhatsApp-Image-2025-12-22-at-10.32.19-PM.jpeg",
    "/assets/Gallery_Assets/WhatsApp-Image-2025-12-22-at-9.47.08-PM.jpeg",
    "/assets/Gallery_Assets/WhatsApp-Image-2025-12-23-at-1.03.09-PM.jpeg",
    "/assets/Gallery_Assets/WhatsApp-Image-2025-12-23-at-1.03.13-PM.jpeg",
    "/assets/Gallery_Assets/WhatsApp-Image-2025-12-23-at-1.03.14-PM.jpeg",
    "/assets/Gallery_Assets/WhatsApp-Image-2025-12-23-at-1.03.15-PM.jpeg",
    "/assets/Gallery_Assets/WhatsApp-Image-2025-12-23-at-1.03.16-PM.jpeg",
    "/assets/Gallery_Assets/capital-information.jpg.jpeg",
    "/assets/Gallery_Assets/news.jpg.jpeg",
    "/assets/Gallery_Assets/press-media.jpg.jpeg"
  ];

  return (
    <section className="reeds-journey-section">
     
      <div className="reeds-journey-carousels">
        {/* Top Row: Moves Right Continuously */}
        <div className="reeds-journey-row">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={22}
            slidesPerView="auto"
            loop={true}
            speed={4500}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              reverseDirection: true,
            }}
            allowTouchMove={true}
            className="reeds-journey-swiper"
          >
            {topRowImages.map((src, idx) => (
              <SwiperSlide key={`top-${idx}`} className="reeds-journey-slide" style={{ position: 'relative' }}>
                <Image src={src} alt={`Our Journey Gallery Top ${idx + 1}`} fill sizes="310px" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Bottom Row: Moves Left Continuously */}
        <div className="reeds-journey-row">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={22}
            slidesPerView="auto"
            loop={true}
            speed={4500}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            allowTouchMove={true}
            className="reeds-journey-swiper"
          >
            {bottomRowImages.map((src, idx) => (
              <SwiperSlide key={`bottom-${idx}`} className="reeds-journey-slide" style={{ position: 'relative' }}>
                <Image src={src} alt={`Our Journey Gallery Bottom ${idx + 1}`} fill sizes="310px" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}