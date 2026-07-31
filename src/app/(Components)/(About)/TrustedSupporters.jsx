"use client";

import React, { useId } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { GrPrevious, GrNext } from 'react-icons/gr';
import 'swiper/css';
import '@/app/(Css)/(About)/TrustedSupporters.css';
import AnimatedContent from '@/app/(Components)/AnimatedContent';


const DEFAULT_MEMBERS = [
  {
    name: "S Sunanda",
    role: "Treasurer",
    hoverText: "S Sunanda is a graduate of Arts from Sri Venkateswara University, Tirupati. Sunanda has been passionately involved for many years with women empowerment issues especially for the less educated and poor women with a particular focus on making access to skill and knowledge in Embroidery techniques by hand thereby they are able to increase their income opportunities. Sunanda supports REEDS community participation endeavors."
  },
  {
    name: "G Sudhir PaulT",
    role: "Member",
    hoverText: "G Sudhir PaulT has been a dedicated supporter of rural development initiatives. Under his guidance, several programs targeting youth skill building, healthcare literacy, and vocational training have been successfully implemented across rural regions."
  },
  {
    name: "Hari Prasad Reddy",
    role: "Member",
    hoverText: "Hari Prasad Reddy brings decades of experience in community farming, water resource management, and rural supply chain optimization. He advises REEDS on agricultural empowerment models and clean energy adoption."
  },
  {
    name: "M Ravindra Vikram",
    role: "Chairman",
    hoverText: "M Ravindra Vikram is the Chairman of REEDS. He is a prominent advocate for grassroots social enterprise models, financial inclusion for self-help groups, and leveraging technology to bridge the urban-rural divide."
  },
  {
    name: "J. Srinivasan",
    role: "Member",
    hoverText: "J. Srinivasan is a veteran administrative expert advising REEDS on corporate partnerships, governance compliance, and scaling operations across new states."
  },
  {
    name: "Dr. K. Radhakrishnan",
    role: "Member",
    hoverText: "Dr. K. Radhakrishnan specializes in rural health infrastructure and public-private partnerships. He spearheads the medical outreach and sanitation camps organized by REEDS."
  }
];


export default function TrustedSupporters({
  subHeading = "OUR TRUSTED SUPPORTERS",
  mainHeading = "Board Members",
  members = DEFAULT_MEMBERS,
  desktopPadding,
  mobilePadding
}) {
  // Unique ID so multiple instances on the same page don't conflict
  const uid = useId().replace(/:/g, '');
  const prevSel = `.ts-prev-${uid}`;
  const nextSel = `.ts-next-${uid}`;

  return (
    <section 
      className="trusted-supporters-section"
      style={{
        '--d-pad': desktopPadding,
        '--m-pad': mobilePadding
      }}
    >
      <AnimatedContent
        className="trusted-supporters-container"
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

        {/* Header: title on left, arrows on right (desktop only) */}
        <div className="trusted-supporters-header">
          <div className="trusted-supporters-title-group">
            <span className="trusted-supporters-subtitle">{subHeading}</span>
            <h2 className="trusted-supporters-title">{mainHeading}</h2>
          </div>

          {/* Desktop controls — hidden on mobile via CSS */}
          <div className="trusted-supporters-controls">
            <button className={`carousel-btn btn-prev ts-prev-${uid}`} aria-label="Previous Supporter">
              <GrPrevious size={18} />
            </button>
            <button className={`carousel-btn btn-next ts-next-${uid}`} aria-label="Next Supporter">
              <GrNext size={18} />
            </button>
          </div>
        </div>

        {/* Swiper Carousel — uses CSS selector strings for navigation */}
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={{ prevEl: prevSel, nextEl: nextSel }}
          autoplay={{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: false }}
          slidesPerView={4}
          spaceBetween={24}
          loop={true}
          className="trusted-supporters-swiper"
          breakpoints={{
            0:    { slidesPerView: 1 },
            640:  { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
        >
          {members.map((member) => (
            <SwiperSlide key={member.name}>
              <div className="member-card">
                <div className="member-info-box">
                  <div className="member-info-default">
                    <h3 className="member-name">{member.name}</h3>
                    <p className="member-role">{member.role}</p>
                  </div>
                  <p className="member-hover-desc">{member.hoverText}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Mobile-only controls — shown below swiper, hidden on desktop */}
        <div className="trusted-supporters-controls-mobile">
          <button className={`carousel-btn btn-prev ts-prev-${uid}`} aria-label="Previous Supporter">
            <GrPrevious size={18} />
          </button>
          <button className={`carousel-btn btn-next ts-next-${uid}`} aria-label="Next Supporter">
            <GrNext size={18} />
          </button>
        </div>

      </AnimatedContent>
    </section>
  );
}