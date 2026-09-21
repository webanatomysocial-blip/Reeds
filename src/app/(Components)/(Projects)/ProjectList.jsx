import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import '@/app/(Css)/Projects/ProjectList.css';
import PillButton from '../PillButton';

const projectsList = [
    {
        id: 1,
        title: "Narasapur MPPS",
        location: "Narasapur",
        visits: "3 Visits",
        students: "37 Students",
        faculty: "3 Faculty",
        image: "/assets/Projects_Banner_Assets/Narasapur.webp",
    },
    {
        id: 2,
        title: "Bandamailaram MPPS",
        location: "Bandamailaram",
        visits: "2 Visits",
        students: "75 Students",
        faculty: "3 Faculty",
        image: "/assets/Projects_Banner_Assets/Bandamailaram.webp",
    },
    {
        id: 3,
        title: "Nagaram MPPS & ZPHS",
        location: "Nagaram",
        visits: "1 Visits",
        students: "505 Students",
        faculty: "3 Faculty",
        image: "/assets/Projects_Banner_Assets/Nagaram.webp",
    },
    {
        id: 4,
        title: "Kothur MPPS",
        location: "Kothur",
        visits: "2 Visits",
        students: "78 Students",
        faculty: "3 Faculty",
        image: "/assets/Projects_Banner_Assets/Kothur.webp",
    },
    {
        id: 5,
        title: "Kokkonda MPPS",
        location: "Kokkonda",
        visits: "2 Visits",
        students: "104 Students",
        faculty: "3 Faculty",
        image: "/assets/Projects_Banner_Assets/Kokkonda.webp",
    },
    {
        id: 6,
        title: "Nyamathapur MPPS",
        location: "Nyamathapur",
        visits: "1 Visits",
        students: "27 Students",
        faculty: "2 Faculty",
        image: "/assets/Projects_Banner_Assets/Nyamathapur.webp",
    },
    {
        id: 7,
        title: "MPUPS Maktha Madharam",
        location: "Maktha-Madharam",
        visits: "1 Visits",
        students: "63 Students",
        faculty: "6 Faculty",
        image: "/assets/Projects_Banner_Assets/Maktha-Madharam.webp",
    },
    {
        id: 8,
        title: "ZPHS Rimmanaguda",
        location: "Rimmanaguda",
        visits: "1 Visits",
        students: "67 Students",
        faculty: "8 Faculty",
        image: "/assets/Projects_Banner_Assets/Rimmanaguda.webp",
    },
    {
        id: 9,
        title: "ZPHS Ekvaipally",
        location: "Ekvaipally-ZPHS",
        visits: "1 Visits",
        students: "99 Students",
        faculty: "9 Faculty",
        image: "/assets/Projects_Banner_Assets/Ekvaipally-ZPHS.webp",
    },
    {
        id: 10,
        title: "MPPS Ekvaipally",
        location: "Ekvaipally-MPPS",
        visits: "1 Visits",
        students: "61 Students",
        faculty: "4 Faculty",
        image: "/assets/Projects_Banner_Assets/Ekvaipally-MPPS.webp",
    }
];

export default function ReedsProjects({ desktopPadding, mobilePadding }) {
    return (
        <div
            className='reeds-projects-section'
            style={{
                '--d-pad': desktopPadding,
                '--m-pad': mobilePadding
            }}
        >
            <div className="reeds-projects-bottom-section">
                {projectsList.map((project) => (
                    <Link href={`/projects/${project.location}`} className="reeds-project-card" key={project.id} style={{ textDecoration: 'none' }}>
                        <div className="reeds-project-card-bg">
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                style={{ objectFit: 'cover' }}
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                            <div className="reeds-project-card-gradient"></div>
                        </div>

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
                ))}
            </div>
        </div>
    )
}
