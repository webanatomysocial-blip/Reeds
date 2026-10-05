"use client";

import React, { useId } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { GrPrevious, GrNext } from 'react-icons/gr';
import 'swiper/css';
import '@/app/(Css)/(Home)/AwardWinners.css';
import PillButton from '@/app/(Components)/PillButton';

const CHALLENGE_LABEL = "CIRDAP–REEDS Innovation Challenge 2026";

const WINNERS = [
  {
    eyebrow: CHALLENGE_LABEL,
    subtitle: "Regional Awardees - Receiving US$ 500 Cash Awards plus a Certificate of Recognition",
    rank: "1st",
    innovation: "From Land Consolidation to Local Branding through Capacity Building: The Narrative of a Rural Extension Facilitator in Kermanshah, Iran",
    country: "IR Iran",
    proposer: "Mozhdeh Ketabi",
    image: "/assets/Awards_Winners/1st-rank.png",
    link: "https://lnkd.in/p/dVH8kHqj"
  },
  {
    eyebrow: CHALLENGE_LABEL,
    subtitle: "Regional Awardees - Receiving US$ 500 Cash Awards plus a Certificate of Recognition",
    rank: "2nd",
    innovation: "CARBODIT: A Community-Based Digital Carbon Finance Model for Rural Empowerment",
    country: "Bangladesh",
    proposer: "Saifullah Manwar and Team",
    image: "/assets/Awards_Winners/2nd-Saifullah-Manwar-and-Team.png",
    link: "https://lnkd.in/p/dKdFX2sn"
  },
  {
    eyebrow: CHALLENGE_LABEL,
    subtitle: "Regional Awardees - Receiving US$ 500 Cash Awards plus a Certificate of Recognition",
    rank: "3rd",
    innovation: "GramiGO – Smart Rural Delivery & Local Commerce Network",
    country: "India",
    proposer: "Charan Bhogavalli",
    image: "/assets/Awards_Winners/3rd-Charan-Bhogavalli.png",
    link: "https://lnkd.in/p/dvH2sWFD"
  },
  {
    eyebrow: CHALLENGE_LABEL,
    subtitle: "Regional Awardees - Receiving US$ 500 Cash Awards plus a Certificate of Recognition",
    rank: "4th",
    innovation: "PryoFuel Rural",
    country: "Malaysia",
    proposer: "Dr. Thinakaran Narayanan",
    image: "/assets/Awards_Winners/4th-Dr.-Thinakaran-Narayanan.png",
    link: "https://lnkd.in/p/d6Xxzx5q"
  },
  {
    eyebrow: CHALLENGE_LABEL,
    subtitle: "Regional Awardees - Receiving US$ 500 Cash Awards plus a Certificate of Recognition",
    rank: "5th",
    innovation: "Walking Cooler, A Low Cost, Zero Energy Mobile Cold Storage Solution for Smallholder Farmers",
    country: "Sri Lanka",
    proposer: "M. Dasuni Maheshika",
    image: "/assets/Awards_Winners/5th-M.-Dasuni-Maheshika.png",
    link: "https://lnkd.in/p/dbxhqTGD"
  },
  {
    eyebrow: CHALLENGE_LABEL,
    subtitle: "National Level Awardees - Receiving a Certificate of Appreciation",
    rank: "1st",
    innovation: "Digital Farmer 4.0 Platform: Real-time Forecasting and Market Connectivity for Smallholder Farmers in Vietnam",
    country: "Vietnam",
    proposer: "Khuất Duy Học"
  },
  {
    eyebrow: CHALLENGE_LABEL,
    subtitle: "National Level Awardees - Receiving a Certificate of Appreciation",
    rank: "2nd",
    innovation: "CHINMAYA-Rural Action Network (C-RAN)",
    country: "India",
    proposer: "Dr. Bindu MP"
  },
  {
    eyebrow: CHALLENGE_LABEL,
    subtitle: "National Level Awardees - Receiving a Certificate of Appreciation",
    rank: "3rd",
    innovation: "ECOLERY: A Replicable Women-Led Rural Green Economy Model",
    country: "Bangladesh",
    proposer: "Nafesa Anzum Helaly"
  },
  {
    eyebrow: CHALLENGE_LABEL,
    subtitle: "National Level Awardees - Receiving a Certificate of Appreciation",
    rank: "4th",
    innovation: "AgriConnect KOPIA: A Low-Cost ICT Advisory and Feedback Model",
    country: "Pakistan",
    proposer: "Dr. Umair Nawaz"
  },
  {
    eyebrow: CHALLENGE_LABEL,
    subtitle: "National Level Awardees - Receiving a Certificate of Appreciation",
    rank: "5th",
    innovation: "Eco_Protek: A Rural Microbial Innovation Driving Circular Agriculture, Food Security, and Environmental Resilience",
    country: "Philippines",
    proposer: "Jeremy M. Balisacan"
  },
  {
    eyebrow: CHALLENGE_LABEL,
    subtitle: "National Level Awardees - Receiving a Certificate of Appreciation",
    rank: "6th",
    innovation: "Digital Agri-Connect Nepal (DAC-Nepal): A Low-Cost Digital Innovation for Inclusive, Climate-Smart and Market-Linked Rural Livelihoods",
    country: "Nepal",
    proposer: "Dr. Yogendra Kumar Karki"
  },
  {
    eyebrow: CHALLENGE_LABEL,
    subtitle: "National Level Awardees - Receiving a Certificate of Appreciation",
    rank: "7th",
    innovation: "Community-Based Fisheries Lifestyle Tourism Concept",
    country: "Thailand",
    proposer: "Chanatip Boonchalee"
  },
  {
    eyebrow: CHALLENGE_LABEL,
    subtitle: "National Level Awardees - Receiving a Certificate of Appreciation",
    rank: "8th",
    innovation: "The Rural Resilience Academy (TRRA): Strategic Rural Innovation for Myanmar's \"Generation on Hold\"",
    country: "Myanmar",
    proposer: "Aung Htet Oo"
  },
  {
    eyebrow: CHALLENGE_LABEL,
    subtitle: "National Level Awardees - Receiving a Certificate of Appreciation",
    rank: "9th",
    innovation: "DOI Gampang: Digital Transformation for Rural Economy",
    country: "Indonesia",
    proposer: "Ary Andreas Toelle"
  },
  {
    eyebrow: CHALLENGE_LABEL,
    subtitle: "National Level Awardees - Receiving a Certificate of Appreciation",
    rank: "10th",
    innovation: "Forest to Foreign Fork: Sustainable Expansion of Wild Red Mushroom for Rural Resilience",
    country: "Lao PDR",
    proposer: "Dr. Ouanh Phomvisith"
  }
];

export default function AwardWinners({ winners = WINNERS }) {
  const uid = useId().replace(/:/g, '');
  const prevSel = `.aw-prev-${uid}`;
  const nextSel = `.aw-next-${uid}`;

  return (
    <section className="award-winners-section">
      <button className={`aw-carousel-btn aw-btn-prev aw-prev-${uid}`} aria-label="Previous Winner">
        <GrPrevious size={18} />
      </button>

      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={{ prevEl: prevSel, nextEl: nextSel }}
        autoplay={{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true }}
        loop={true}
        slidesPerView={1}
        className="award-winners-swiper"
      >
        {winners.map((winner, idx) => (
          <SwiperSlide key={idx}>
            <div className="award-winner-card">
              <div className="award-winner-content">
                <span className="award-winner-eyebrow">{winner.eyebrow}</span>
                {winner.subtitle && <p className="award-winner-subtitle">{winner.subtitle}</p>}
                <h3 className="award-winner-name">{winner.proposer}</h3>
                <h4 className="award-winner-innovation">{winner.innovation}</h4>
                <div className="award-winner-meta">
                  <div>
                    <span className="award-winner-meta-label">Country</span>
                    <span className="award-winner-meta-value">{winner.country}</span>
                  </div>
                </div>
                {winner.link && (
                  <a
                    href={winner.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="award-winner-readmore"
                  >
                    <PillButton
                      text="Read More"
                      bg="#0b6b3b"
                      color="#ffffff"
                      arrowBg="#ffffff"
                      arrowColor="#0b6b3b"
                      hoverFillColor="#f5f5f5"
                      hoverTextColor="#000000"
                    />
                  </a>
                )}
              </div>
              <div className="award-winner-image">
                {winner.image ? (
                  <img src={winner.image} alt={winner.proposer} />
                ) : (
                  <div className="award-winner-no-image" aria-label={`${winner.proposer} — no photo available`}>
                    <svg viewBox="0 0 24 24" width="60" height="60" fill="currentColor">
                      <circle cx="12" cy="8" r="4" />
                      <path d="M4 20c0-4.4 3.6-8 8-8s8 3.6 8 8v1H4v-1z" />
                    </svg>
                  </div>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <button className={`aw-carousel-btn aw-btn-next aw-next-${uid}`} aria-label="Next Winner">
        <GrNext size={18} />
      </button>
    </section>
  );
}
