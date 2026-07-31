"use client";
import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { IoLocationOutline } from 'react-icons/io5';
import '@/app/(Css)/Projects/ProjectBanner.css';
import AnimatedContent from '@/app/(Components)/AnimatedContent';

const ProjectBanner = ({ title, description, visits = 3, students = 37, faculty = 3, completed = 100 }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="project-banner-section" style={{ backgroundImage: 'url(/assets/Home_Assets/HomeBannner.avif)' }}>
      <div className="project-banner-overlay"></div>
      
      <AnimatedContent
        className="project-banner-content"
        distance={50}
        direction="vertical"
        reverse={false}
        duration={1.2}
        ease="power3.out"
        initialOpacity={0}
        animateOpacity
        scale={1}
        threshold={0.1}
        delay={0}
      >
        <div className="project-banner-pill">
          <IoLocationOutline />
          <span>{title}</span>
        </div>
        
        <h1 className="head-text">{title}</h1>
        
        <p className="project-banner-description">{description}</p>
        
        <div className="project-banner-stats" ref={ref}>
          <div className="project-banner-stat">
            <h2 className="project-banner-stat-value">
              {inView ? <CountUp end={visits} duration={2.5} separator="," /> : '0'}+
            </h2>
            <span className="project-banner-stat-label">Total Visits</span>
          </div>
          
          <div className="project-banner-stat">
            <h2 className="project-banner-stat-value">
              {inView ? <CountUp end={students} duration={2.5} separator="," /> : '0'}+
            </h2>
            <span className="project-banner-stat-label">Total Students</span>
          </div>
          
          <div className="project-banner-stat">
            <h2 className="project-banner-stat-value">
              {inView ? <CountUp end={faculty} duration={2.5} separator="," /> : '0'}+
            </h2>
            <span className="project-banner-stat-label">Total Faculty</span>
          </div>
          
          <div className="project-banner-stat">
            <h2 className="project-banner-stat-value">
              {inView ? <CountUp end={completed} duration={2.5} separator="," /> : '0'}+
            </h2>
            <span className="project-banner-stat-label">Projects Completed</span>
          </div>
        </div>
      </AnimatedContent>
    </section>
  );
};

export default ProjectBanner;
