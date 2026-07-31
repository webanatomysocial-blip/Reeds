"use client";

import React from 'react';
import '@/app/(Css)/Contact/Map.css';
import AnimatedContent from '@/app/(Components)/AnimatedContent';

const DEFAULT_ADDRESS = "Trendset Hill Top Apartment, 11-4-646/B, Vijaya Hills Road, AC Guards, Lakdikapul, Hyderabad, Telangana 500004, India";
const DEFAULT_MAP_URL = "https://www.google.com/maps?q=Trendset+Hill+Top+Apartment,+11-4-646%2FB,+Vijaya+Hills+Road,+AC+Guards,+Lakdikapul,+Hyderabad,+Telangana+500004,+India&output=embed";

export default function ReedsLocationMap({
  title = "Visit Our Location",
  address = DEFAULT_ADDRESS,
  mapUrl = DEFAULT_MAP_URL
}) {
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
    <section className="reeds-location-map-section">
      <div className="reeds-location-map-container">
        <h2 className="reeds-location-map-title">{title}</h2>
        <div className="reeds-location-map-wrapper">
          <iframe
            title="REEDS Location Map"
            src={mapUrl}
            width="100%"
            height="550"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="reeds-location-map-iframe"
          ></iframe>
        </div>
      </div>
    </section>
    </AnimatedContent>
  );
}