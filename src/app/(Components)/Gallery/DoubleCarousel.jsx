"use client";

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import '@/app/(Css)/Gallery/DoubleCarousel.css'

export default function OurJourney() {
  const topRowImages = [
    "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1542810634-71277d95dcbb?w=600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?w=600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&auto=format&fit=crop&q=80"
  ];

  const bottomRowImages = [
    "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=600&auto=format&fit=crop&q=80"
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
              <SwiperSlide key={`top-${idx}`} className="reeds-journey-slide">
                <img src={src} alt={`Our Journey Gallery Top ${idx + 1}`} loading="lazy" />
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
              <SwiperSlide key={`bottom-${idx}`} className="reeds-journey-slide">
                <img src={src} alt={`Our Journey Gallery Bottom ${idx + 1}`} loading="lazy" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}