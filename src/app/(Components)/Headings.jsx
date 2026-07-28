import React from 'react';
import '../(Css)/Headings.css';
import '../(Css)/index.css';

const Headings = ({ 
  eyebrowText, 
  headingText, 
  descriptionText,
  eyebrowColor,
  headingColor,
  descriptionColor
}) => {
  return (
    <div className="headings-container">
      <div className="headings-left">
        {eyebrowText && (
          <span className="eyebrow-text-white" style={eyebrowColor ? { color: eyebrowColor } : {}}>
            {eyebrowText}
          </span>
        )}
        {headingText && (
          <h2 className="head-text" style={headingColor ? { color: headingColor } : {}}>
            {headingText}
          </h2>
        )}
      </div>
      <div className="headings-right">
        {descriptionText && (
          <p className="sub-para-text" style={descriptionColor ? { color: descriptionColor } : {}}>
            {descriptionText}
          </p>
        )}
      </div>
    </div>
  );
};

export default Headings;
