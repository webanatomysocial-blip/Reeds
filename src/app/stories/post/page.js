"use client";

import { useEffect, useRef, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { getStoryPostBySlug, parseStorySlides, getFeaturedImage, stripHtml } from "../../lib/wordpress";
import "../../(Css)/Stories/Stories.css";

const SLIDE_DURATION = 5000;

function StoryViewer() {
  const slug = useSearchParams().get("slug");
  const [slides, setSlides] = useState(null);
  const [slideIndex, setSlideIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [descExpanded, setDescExpanded] = useState(false);
  const [descOverflows, setDescOverflows] = useState(false);
  const descRef = useRef(null);

  useEffect(() => {
    if (!slug) return;
    getStoryPostBySlug(slug).then((post) => {
      if (!post) {
        setSlides([]);
        return;
      }
      const parsed = parseStorySlides(post.content.rendered);
      setSlides(
        parsed.length
          ? parsed
          : [{ image: getFeaturedImage(post), title: stripHtml(post.title.rendered), text: stripHtml(post.excerpt.rendered) }]
      );
    });
  }, [slug]);

  const slide = slides?.[slideIndex];

  const goNext = () => {
    setDescExpanded(false);
    setSlideIndex((i) => Math.min(i + 1, (slides?.length ?? 1) - 1));
  };
  const goPrev = () => {
    setDescExpanded(false);
    setSlideIndex((i) => Math.max(i - 1, 0));
  };

  const timerRef = useRef(null);
  useEffect(() => {
    if (!slide || paused || descExpanded || slideIndex >= slides.length - 1) return;
    timerRef.current = setTimeout(goNext, SLIDE_DURATION);
    return () => clearTimeout(timerRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slideIndex, paused, descExpanded, slide]);

  useEffect(() => {
    setDescOverflows(!!descRef.current && descRef.current.scrollHeight > descRef.current.clientHeight + 1);
  }, [slideIndex, slide]);

  const handleShare = async () => {
    const url = window.location.href;
    if (navigator.share) {
      navigator.share({ title: slide?.title, url }).catch(() => {});
    } else {
      await navigator.clipboard.writeText(url);
    }
  };

  if (slides === null) return <section className="stories-empty" />;

  if (slides.length === 0) {
    return (
      <section className="stories-empty">
        <p>Story not found.</p>
      </section>
    );
  }

  return (
    <section className="stories-viewer">
      <button className="stories-nav-btn stories-nav-prev" onClick={goPrev} disabled={slideIndex === 0} aria-label="Previous">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      <div className="stories-card">
        <div className="stories-progress-row">
          {slides.map((_, i) => (
            <div className="stories-progress-track" key={i}>
              {i < slideIndex && <div className="stories-progress-fill" style={{ width: "100%" }} />}
              {i === slideIndex && (
                <div
                  key={slideIndex}
                  className={`stories-progress-fill${paused ? " is-paused" : ""}`}
                  style={{ animationDuration: `${SLIDE_DURATION}ms` }}
                />
              )}
            </div>
          ))}
        </div>

        <div className="stories-controls">
          <button className="stories-icon-btn" onClick={() => setPaused((p) => !p)} aria-label={paused ? "Play" : "Pause"}>
            {paused ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M6 5h4v14H6zM14 5h4v14h-4z" /></svg>
            )}
          </button>
          <button className="stories-icon-btn" onClick={handleShare} aria-label="Share">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="22" y1="2" x2="11" y2="13" />
              <polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
          </button>
        </div>

        <div key={slideIndex} className="stories-slide">
          <div className="stories-image" style={{ backgroundImage: `url(${slide.image})` }} />
          <div className="stories-overlay" />

          <button className="stories-tap-zone stories-tap-left" onClick={goPrev} aria-label="Previous slide" />
          <button className="stories-tap-zone stories-tap-right" onClick={goNext} aria-label="Next slide" />

          <div className="stories-text">
            {slide.title && (
              <>
                <h2 className="stories-title">{slide.title}</h2>
                <span className="stories-title-underline" />
              </>
            )}
            {slide.text && (
              <>
                <p
                  ref={descRef}
                  className={`stories-desc${descExpanded ? " is-expanded" : ""}`}
                  style={{ cursor: descOverflows || descExpanded ? "pointer" : "default" }}
                  onClick={(e) => {
                    if (!descOverflows && !descExpanded) return;
                    e.stopPropagation();
                    setDescExpanded((v) => !v);
                  }}
                >
                  {slide.text}
                </p>
                {(descOverflows || descExpanded) && (
                  <button
                    className="stories-desc-toggle"
                    onClick={(e) => {
                      e.stopPropagation();
                      setDescExpanded((v) => !v);
                    }}
                  >
                    {descExpanded ? "Read less" : "Tap to read more"}
                  </button>
                )}
              </>
            )}
          </div>
        </div>
      </div>

      <button
        className="stories-nav-btn stories-nav-next"
        onClick={goNext}
        disabled={slideIndex >= slides.length - 1}
        aria-label="Next"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>
    </section>
  );
}

export default function StoryPostPage() {
  return (
    <Suspense fallback={<section className="stories-empty" />}>
      <StoryViewer />
    </Suspense>
  );
}
