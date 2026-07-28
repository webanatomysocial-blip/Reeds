import React from 'react'
import '@/app/(Css)/WhatWeDo/Locations.css';


export default function Locations() {
    return (
        <section className="reeds-locations-section">
            <div className="reeds-locations-container">
                {/* Left Column: Text Content */}
                <div className="reeds-locations-content">
                    <span className="reeds-locations-tag" >OPERATIONAL LOCATIONS</span>
                    <h2 className="head-text-white" style={{paddingBottom:"15px"}}>Geographical Coverage</h2>
                    <p className="sub-para-text" style={{color:"White"}}>
                        REEDS programs/projects carried across Fifteen states - Andhra Pradesh, Bihar, Chhattisgarh, Delhi, Gujarat, Karnataka, Kerala, Maharashtra, Manipur, Odisha, Punjab, Tamil Nadu, Telangana, Uttar Pradesh, West Bengal.
                    </p>
                </div>

                {/* Right Column: Map Image */}
                <div className="reeds-locations-image-wrapper">
                    <img
                        src="/assets/WhatWeDo_Assets/IndiaMap.webp"
                        alt="Geographical Coverage Map"
                        className="reeds-locations-image-placeholder"
                    />
                </div>
            </div>
        </section>
    )
}