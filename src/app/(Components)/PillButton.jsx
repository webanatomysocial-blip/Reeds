import React from 'react';
import '@/app/(Css)/PillButton.css';

const PillButton = ({
  text,
  bg = "white",
  color = "black",
  arrowBg = "transparent",
  arrowColor = "black",
  borderColor = "transparent",
  borderWidth = "0px",
  hoverFillColor = "var(--secondary-color)",
  hoverTextColor = "var(--primary-color)",
  className = ""
}) => {
  return (
    <button 
      className={`pill-btn-custom ${className}`}
      style={{
        backgroundColor: bg,
        color: color,
        border: `${borderWidth} solid ${borderColor}`,
        '--hover-fill': hoverFillColor,
        '--hover-color': hoverTextColor,
        '--arrow-bg': arrowBg,
        '--arrow-color': arrowColor,
      }}
    >
      <span className="pill-btn-text">{text}</span>
      <span className="pill-btn-arrow-wrapper">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14"/>
          <path d="m12 5 7 7-7 7"/>
        </svg>
      </span>
    </button>
  );
};

export default PillButton;
