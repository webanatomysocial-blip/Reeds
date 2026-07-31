"use client";
import React from 'react';
import { IoCheckmark } from 'react-icons/io5';
import '@/app/(Css)/Projects/ProjectImpact.css';
import AnimatedContent from '@/app/(Components)/AnimatedContent';

const ProjectImpact = ({
  activities = [
    "Repaired and maintained drinking water facility",
    "Constructed handwashing station",
    "Hygiene awareness session for students",
    "Cleanliness drive in school premises"
  ],
  impactText = "Improved access to clean water and better hygiene practices among 37 students and 3 faculty members."
}) => {
  return (
    <section className="project-impact-section" style={{ backgroundImage: 'url(/assets/Home_Assets/HomeBannner.avif)' }}>
      {/* Light overlay to match the bright striped background in the design */}
      <div className="project-impact-overlay"></div>
      
      <div className="project-impact-container">
        <AnimatedContent
          className="project-impact-card-wrapper"
          distance={40}
          direction="vertical"
          duration={1}
          delay={0.1}
        >
          <div className="project-impact-card-wrapper">
            <div className="project-impact-card-tab"></div>
            <div className="project-impact-card-main">
              <h2 className="project-impact-title">Project Activities</h2>
              <ul className="project-impact-list">
                {activities.map((activity, index) => (
                  <li key={index}>
                    <IoCheckmark className="project-impact-icon" />
                    <span>{activity}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </AnimatedContent>

        <AnimatedContent
          className="project-impact-card-wrapper"
          distance={40}
          direction="vertical"
          duration={1}
          delay={0.3}
        >
          <div className="project-impact-card-wrapper">
            <div className="project-impact-card-tab" style={{ width: '50%' }}></div>
            <div className="project-impact-card-main">
              <h2 className="project-impact-title">Impact</h2>
              <p className="project-impact-text">{impactText}</p>
            </div>
          </div>
        </AnimatedContent>
      </div>
    </section>
  );
};

export default ProjectImpact;
