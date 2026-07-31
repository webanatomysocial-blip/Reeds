"use client";
import React, { useRef, useEffect, useState } from 'react';
import { FiSun } from 'react-icons/fi';
import Link from 'next/link';
import "@/app/(Css)/(Home)/TickerTape.css";

const defaultItems = Array.from({ length: 10 }, () => ({
    logo: "CIRDAP-REEDS Winners Announcement",
    icon: <FiSun className="ticker-icon" />,
    link: ""
}));

const TickerTape = ({ items = defaultItems }) => {
    const trackRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);
    
    // Normal speed and slowed down speed (pixels per frame)
    const normalSpeed = .5;
    const hoverSpeed = 0.1;
    
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

    return (
        <section 
            className="ticker-section"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="ticker-track" ref={trackRef}>
                <div className="ticker-group">
                    {items.map((item, i) => (
                        <div className="ticker-item" key={`a-${i}`}>
                            <Link href={item.link || "#"} className="ticker-text">
                                {item.logo}
                            </Link>
                            {item.icon}
                        </div>
                    ))}
                </div>
                <div className="ticker-group">
                    {items.map((item, i) => (
                        <div className="ticker-item" key={`b-${i}`}>
                            <Link href={item.link || "#"} className="ticker-text">
                                {item.logo}
                            </Link>
                            {item.icon}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default TickerTape;
