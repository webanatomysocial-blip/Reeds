"use client";
import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import '../(Css)/VideoFrame.css';

const VideoModal = ({ isOpen, onClose, iframe }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!mounted || !isOpen) return null;

  const getAutoplayIframe = (htmlStr) => {
    if (!htmlStr) return htmlStr;
    return htmlStr.replace(/src="([^"]+youtube\.com\/embed\/[^"]+)"/, (match, p1) => {
      const separator = p1.includes('?') ? '&' : '?';
      return `src="${p1}${separator}autoplay=1"`;
    });
  };

  const renderIframe = getAutoplayIframe(iframe);

  return createPortal(
    <div className="videoframe-modal-overlay" onClick={onClose}>
      <div className="videoframe-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="videoframe-modal-close" onClick={onClose}>
          &times;
        </button>
        <div 
          className="videoframe-modal-iframe-container"
          dangerouslySetInnerHTML={{ __html: renderIframe }} 
        />
      </div>
    </div>,
    document.body
  );
};

const getYoutubeThumbnail = (htmlStr) => {
  if (!htmlStr) return null;
  const match = htmlStr.match(/youtube\.com\/embed\/([^"?]+)/);
  if (match && match[1]) {
    return `https://img.youtube.com/vi/${match[1]}/hqdefault.jpg`;
  }
  return null;
};

const VideoItem = ({ iframe, vidtitle, viddesc }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const thumbnailUrl = getYoutubeThumbnail(iframe);

  return (
    <div className="videoframe-item">
      <div className="videoframe-container">
        {thumbnailUrl ? (
          <img src={thumbnailUrl} alt={vidtitle || "Video thumbnail"} className="videoframe-thumbnail-preview" />
        ) : (
          <div 
            className="videoframe-iframe-preview"
            dangerouslySetInnerHTML={{ __html: iframe }} 
          />
        )}
        <div className="videoframe-overlay" onClick={() => setIsModalOpen(true)}>
          <div className="glass-play-button">
            <svg viewBox="0 0 24 24" fill="currentColor" className="play-icon">
              <path d="M8 5v14l11-7z" />
            </svg>
            <span className="play-text">Play</span>
          </div>
        </div>
      </div>
      {(vidtitle || viddesc) && (
        <div className="videoframe-info">
          {vidtitle && <h3 className="videoframe-title">{vidtitle}</h3>}
          {viddesc && <p className="videoframe-desc">{viddesc}</p>}
        </div>
      )}
      <VideoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} iframe={iframe} />
    </div>
  );
};

const VideoFrame = ({ videos, iframe, vidtitle, viddesc, columns = 2, desktopPadding, mobilePadding }) => {
  // Support both single item (legacy) and array of items
  const items = videos || [];
  if (iframe && !videos) {
    items.push({ iframe, vidtitle, viddesc });
  }

  if (items.length === 0) return null;

  return (
    <section 
      className="videoframe-wrapper"
      style={{ 
        '--grid-cols': columns,
        '--d-pad': desktopPadding,
        '--m-pad': mobilePadding 
      }}
    >
      <div className="videoframe-grid">
        {items.map((vid, idx) => (
          <VideoItem key={idx} {...vid} />
        ))}
      </div>
    </section>
  );
};

export default VideoFrame;
