"use client";
import React, { useRef, useEffect, useState } from 'react';
import { FiSun } from 'react-icons/fi';
import "@/app/(Css)/(Home)/TickerTape.css";

const TickerTape = () => {
    const trackRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);
    
    // Normal speed and slowed down speed (pixels per frame)
    const normalSpeed = 1;
    const hoverSpeed = 0.3;
    
    // Use refs for animation state to prevent re-renders
    const posRef = useRef(0);
    const reqRef = useRef(null);

    useEffect(() => {
        const animate = () => {
            if (!trackRef.current) return;
            
            const targetSpeed = isHovered ? hoverSpeed : normalSpeed;
            posRef.current -= targetSpeed; // Negative for right-to-left scrolling

            // Get the width of one group (half of the track)
            const firstGroup = trackRef.current.children[0];
            const groupWidth = firstGroup.offsetWidth;

            // Reset position seamlessly when one full group has scrolled past
            if (Math.abs(posRef.current) >= groupWidth) {
                posRef.current += groupWidth;
            }

            trackRef.current.style.transform = `translateX(${posRef.current}px)`;
            reqRef.current = requestAnimationFrame(animate);
        };
        
        reqRef.current = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(reqRef.current);
    }, [isHovered]);

    // Create 10 items per group to ensure it overflows the screen width
    const items = Array(10).fill(0);

    return (
        <section 
            className="ticker-section"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="ticker-track" ref={trackRef}>
                <div className="ticker-group">
                    {items.map((_, i) => (
                        <div className="ticker-item" key={`a-${i}`}>
                            <span className="ticker-text">CIRDAP-REEDS Winners Announcement</span>
                            <FiSun className="ticker-icon" />
                        </div>
                    ))}
                </div>
                <div className="ticker-group">
                    {items.map((_, i) => (
                        <div className="ticker-item" key={`b-${i}`}>
                            <span className="ticker-text">CIRDAP-REEDS Winners Announcement</span>
                            <FiSun className="ticker-icon" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default TickerTape;
