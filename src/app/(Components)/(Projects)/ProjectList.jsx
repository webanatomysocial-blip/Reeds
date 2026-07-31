import React from 'react'
import Link from 'next/link'
import '@/app/(Css)/Projects/ProjectList.css';
import PillButton from '../PillButton';
import AnimatedContent from '@/app/(Components)/AnimatedContent';


export default function ReedsProjects({ desktopPadding, mobilePadding }) {
    const projectsList = [
        {
            id: 1,
            title: "Narsapur MPPS",
            location: "Narsapur",
            visits: "3 Visits",
            students: "73 Students",
            faculty: "3 Faculty",
            showBtn: false,
        },
        {
            id: 2,
            title: "Bandamailaram MPPS",
            location: "Bandamailaram",
            visits: "3 Visits",
            students: "73 Students",
            faculty: "3 Faculty",
            showBtn: false,
        },
        {
            id: 3,
            title: "Nagaram MPPS & ZPHS",
            location: "Nagaram",
            visits: "3 Visits",
            students: "73 Students",
            faculty: "3 Faculty",
            showBtn: false,
        },
        {
            id: 4,
            title: "Kothur MPPS",
            location: "Kothur",
            visits: "3 Visits",
            students: "73 Students",
            faculty: "3 Faculty",
            showBtn: false,
        }
    ]

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
        <div 
            className='reeds-projects-section'
            style={{
                '--d-pad': desktopPadding,
                '--m-pad': mobilePadding
            }}
        >



            <div className="reeds-projects-bottom-section">
                {
                    projectsList.map((project) => (
                        <Link href={`/projects/${project.location}`} className="reeds-project-card" key={project.id} style={{ textDecoration: 'none' }}>
                            {/* Top Tags */}
                            <div className="reeds-project-card-tags">
                                <span className="reeds-project-card-tag">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                                        <line x1="16" y1="2" x2="16" y2="6" />
                                        <line x1="8" y1="2" x2="8" y2="6" />
                                        <line x1="3" y1="10" x2="21" y2="10" />
                                    </svg>
                                    {project.visits}
                                </span>
                                <span className="reeds-project-card-tag">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                                        <circle cx="9" cy="7" r="4" />
                                        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                    </svg>
                                    {project.students}
                                </span>
                                <span className="reeds-project-card-tag">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                                        <circle cx="8.5" cy="7" r="4" />
                                        <polyline points="17 11 19 13 23 9" />
                                    </svg>
                                    {project.faculty}
                                </span>
                            </div>

                            {/* Bottom Card Info & View Details Button */}
                            <div className="reeds-project-card-bottom">
                                <div className="reeds-project-card-info">
                                    <h3 className="reeds-project-card-title">{project.title}</h3>
                                    <p className="reeds-project-card-location">{project.location}</p>
                                </div>

                                <div className="reeds-project-view-btn-wrapper">
                                    <PillButton 
                                        text="View Details"
                                        bg="#0b6b3b"
                                        color="#ffffff"
                                        arrowBg="#ffffff"
                                        arrowColor="#0b6b3b"
                                        hoverFillColor="#f5f5f5ff"
                                        hoverTextColor="#000000ff"
                                    />
                                </div>
                            </div>
                        </Link>
                    ))
                }
            </div>

            {/* Centered View All Button */}
            <div className="reeds-projects-view-all-wrapper">
                <Link href="/projects" style={{ textDecoration: 'none' }}>
                    <PillButton 
                        text="View All"
                        bg="#0b6b3b"
                        color="#ffffff"
                        arrowBg="#ffffff"
                        arrowColor="#0b6b3b"
                        hoverFillColor="#ffffffff"
                        hoverTextColor="#000000ff"
                    />
                </Link>
            </div>
        </div>
        </AnimatedContent>
    )
}