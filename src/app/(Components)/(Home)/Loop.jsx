"use client";
import React, { useState, useEffect, useRef } from 'react';
import '@/app/(Css)/(Home)/Loop.css';

const HUBSPOT_PORTAL_ID = "246020579";
const HUBSPOT_FORM_ID = "523aa68e-6e9d-4ecd-a10e-7c2b4f1ff6c5";
const HUBSPOT_SUBMIT_URL = `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${HUBSPOT_FORM_ID}`;

const loopImages = [
  "/assets/Gallery_Assets/thumbs/DDUGKY-visit-in-Tamil-Nadu-scaled.jpg.webp",
  "/assets/Gallery_Assets/thumbs/Felicitation-program-scaled.jpg.webp",
  "/assets/Gallery_Assets/thumbs/Creating-Awareness.jpg.webp",
  "/assets/Gallery_Assets/thumbs/Self-Help-Group.jpg.webp",
  "/assets/Gallery_Assets/thumbs/Self-Help-Groups.jpg.webp",
  "/assets/Gallery_Assets/thumbs/DSC_6345-3.jpg.webp",
  "/assets/Gallery_Assets/thumbs/DSC_6354.jpg.webp",
  "/assets/Gallery_Assets/thumbs/DSC_6492.jpg.webp",
  "/assets/Gallery_Assets/thumbs/REEDS-Secretary-meeting-with-Shri-Pranab-Kumar-Mukherjee-.webp",
  "/assets/Gallery_Assets/thumbs/WhatsApp-Image-2025-12-22-at-10.32.11-PM.webp",
  "/assets/Gallery_Assets/thumbs/WhatsApp-Image-2025-12-23-at-1.03.09-PM.webp",
  "/assets/Gallery_Assets/thumbs/WhatsApp-Image-2025-12-23-at-1.03.13-PM.webp",
  "/assets/Gallery_Assets/thumbs/WhatsApp-Image-2025-12-23-at-1.03.14-PM.webp",
  "/assets/Gallery_Assets/thumbs/WhatsApp-Image-2025-12-23-at-1.03.15-PM.webp",
  "/assets/Gallery_Assets/thumbs/WhatsApp-Image-2025-12-23-at-1.03.16-PM.webp",
  "/assets/Gallery_Assets/thumbs/Site-visits-1.jpg.webp",
  "/assets/Gallery_Assets/thumbs/capital-information.jpg.webp",
  "/assets/Gallery_Assets/thumbs/Team-interaction-with-Villagers.jpg.webp",
  "/assets/Gallery_Assets/thumbs/WhatsApp-Image-2025-12-22-at-9.47.08-PM.webp",
  "/assets/Gallery_Assets/thumbs/Monitoring-Studies-REEDS-1.webp"
];

const duplicatedImages = [...loopImages, ...loopImages];


// Our own file-based counter, hosted alongside the site (see public/counter.php) — no third-party service.
const COUNTER_URL = "/counter.php";
const STARTING_COUNT = 7500;

// `next dev` (and any host that doesn't execute PHP) can't run counter.php, so it falls back to a
// localStorage-only counter there — same starting point and increment logic, just not shared across visitors.
function localFallbackCount(increment) {
  const stored = parseInt(localStorage.getItem("reeds-visitor-count") || "", 10);
  const current = Number.isFinite(stored) ? stored : STARTING_COUNT;
  const next = increment ? current + 1 : current;
  localStorage.setItem("reeds-visitor-count", String(next));
  return next;
}

const Loop = () => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const totalRef = useRef(null);
  const hasAnimatedRef = useRef(false);
  const [email, setEmail] = useState("");
  const [subscribeStatus, setSubscribeStatus] = useState("idle"); // idle | sending | success | error

  const handleSubscribe = (e) => {
    e.preventDefault();
    setSubscribeStatus("sending");

    fetch(HUBSPOT_SUBMIT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fields: [{ name: "email", value: email }],
        context: {
          pageUri: window.location.href,
          pageName: document.title,
        },
      }),
    })
      .then((res) => {
        if (!res.ok) throw new Error("submit failed");
        setSubscribeStatus("success");
        setEmail("");
      })
      .catch(() => setSubscribeStatus("error"));
  };

  useEffect(() => {
    // Count this visit once per tab session, not on every re-render/navigation.
    const alreadyHit = sessionStorage.getItem("reeds-visit-counted");
    const shouldIncrement = !alreadyHit;
    // Cache-bust with a timestamp too, in case an edge/CDN cache ignores the no-store header.
    const url = `${COUNTER_URL}?${shouldIncrement ? "inc=1&" : ""}t=${Date.now()}`;

    const finish = (count) => {
      totalRef.current = count;
      sessionStorage.setItem("reeds-visit-counted", "1");
      if (hasAnimatedRef.current) animateTo(totalRef.current);
    };

    fetch(url, { cache: "no-store" })
      .then((res) => res.json())
      .then((data) => finish(data.count))
      // counter.php isn't executed by `next dev` (or any non-PHP host) — fall back locally instead of staying at 0.
      .catch(() => finish(localFallbackCount(shouldIncrement)));
  }, []);

  const animateTo = (end) => {
    let startTimestamp = null;
    const duration = 2000;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);

      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          hasAnimatedRef.current = true;
          if (totalRef.current !== null) animateTo(totalRef.current);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="loop-section">
      <div className="loop-header">
        <span className="eyebrow-text-white loop-eyebrow">STAY ON THE LOOP</span>
        <h2 className="head-text-white" style={{paddingBottom:"20px"}}>One story from the field. Once a month.</h2>
        <p className="loop-subtitle">No spam. Only impact updates, campaigns and annual reports.</p>
        
        <form className="loop-subscribe-form" onSubmit={handleSubscribe}>
          <input
            type="email"
            placeholder="name@email.com"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit" disabled={subscribeStatus === "sending"}>
            {subscribeStatus === "sending" ? "Sending..." : "Subscribe"}
          </button>
        </form>
        {subscribeStatus === "success" && (
          <p className="loop-subscribe-message">Thanks for subscribing!</p>
        )}
        {subscribeStatus === "error" && (
          <p className="loop-subscribe-message loop-subscribe-message-error">
            Something went wrong. Please try again.
          </p>
        )}
      </div>

      <div className="loop-marquee-container">
        <div className="loop-marquee-track">
          {duplicatedImages.map((img, idx) => (
            <div className="loop-image-card" key={idx}>
              <div 
                className="loop-image" 
                style={{ backgroundImage: `url(${img})` }}
              ></div>
            </div>
          ))}
        </div>
      </div>

      <div className="loop-footer" ref={countRef}>
        <p className="loop-footer-label">Total Visitors</p>
        <h3 className="loop-footer-count">{count.toLocaleString()}</h3>
      </div>
    </section>
  );
};

export default Loop;
