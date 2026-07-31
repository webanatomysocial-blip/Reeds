import React from 'react';
import Link from 'next/link';
import '../../(Css)/(Home)/ActionProgram.css';
import PillButton from '../PillButton';
import AnimatedContent from '@/app/(Components)/AnimatedContent';

// This array acts as your "folder" of files. 
// You can add new objects here with an image path, category, heading, and the link to the file.
const actionProgramsData = [
  {
    image: '/assets/Home_Assets/HomeBannner.avif',
    category: 'Healthcare',
    heading: 'Community Awareness',
    link: '/projects'
  },
  {
    image: '/assets/Home_Assets/HomeBannner.avif',
    category: 'Education',
    heading: 'Monitoring & Evaluation',
    link: '/projects'
  },
  {
    image: '/assets/Home_Assets/HomeBannner.avif',
    category: 'Emergency Relief',
    heading: 'WASH Projects',
    link: '/projects'
  }
];

const ActionProgram = () => {
  return (
    <AnimatedContent
      distance={50}
      direction="vertical"
      reverse={false}
      duration={1.5}
      ease="power3.out"
      initialOpacity={0}
      animateOpacity
      scale={1}
      threshold={0.1}
      delay={0}
    >
    <section className="action-program-section">
      <div className="action-program-grid">
        {actionProgramsData.map((program, index) => (
          <Link href={program.link} key={index} className="action-card-link" style={{ textDecoration: 'none' }}>
            <div className="action-card">
              {program.image ? (
                <div 
                  className="action-card-image" 
                  style={{ backgroundImage: `url(${program.image})` }}
                ></div>
              ) : (
                <div className="action-card-image-placeholder"></div>
              )}
              <div className="action-card-content">
                <span className="action-card-category">{program.category}</span>
                <h3 className="action-card-heading">{program.heading}</h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="action-program-footer">
     <PillButton 
                        text="Explore All"
                        bg="orange"
                        color="white"
                        arrowBg="white"
                        arrowColor="black"
                        hoverFillColor="white"
                        hoverTextColor="black"
                    />
      </div>
    </section>
    </AnimatedContent>
  );
};

export default ActionProgram;
