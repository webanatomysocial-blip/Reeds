import React from "react";
import Link from "next/link";
import "../../(Css)/(Home)/ActionProgram.css";
import PillButton from "../PillButton";
import AnimatedContent from "@/app/(Components)/AnimatedContent";

// This array acts as your "folder" of files.
// You can add new objects here with an image path, category, heading, slug and the link to the file.
export const actionProgramsData = [
  {
    slug: "community-awareness-education",
    image: "/assets/Action_Programs/Community Awareness & Education.png",
    category: "",
    heading: "Community Awareness & Education",
    link: "/community-awareness-education",
  },
  {
    slug: "monitoring-evaluation",
    image: "/assets/Action_Programs/Monitoring & Evaluation.png",
    category: "",
    heading: "Monitoring & Evaluation",
    link: "/monitoring-evaluation",
  },
  {
    slug: "wash-projects",
    image: "/assets/Action_Programs/wash.png",
    category: "",
    heading: "WASH Projects",
    link: "/projects/wash-projects",
  },
  {
    slug: "entrepreneurship-development",
    image: "/assets/Action_Programs/Entrepreneurship-Development.png",
    category: "",
    heading: "Entrepreneurship Development",
    link: "/entrepreneurship-development",
  },
  {
    slug: "skills-development",
    image: "/assets/Action_Programs/Skills-Development.png",
    category: "",
    heading: "Skills Development",
    link: "/skills-development",
  },
  {
    slug: "rural-entrepreneurship-livelihood",
    image: "/assets/Action_Programs/rural-entrepreneurship.png",
    category: "",
    heading: "Rural Entrepreneurship & Livelihood Promotion",
    link: "/rural-entrepreneurship-livelihood",
  },
];

const ActionProgram = ({ showButton = true, currentSlug, showAll = false }) => {
  const filtered = actionProgramsData.filter(
    (program) => program.slug !== currentSlug,
  );
  const programs = showAll ? filtered : filtered.slice(0, 3);

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
          {programs.map((program) => (
            <Link
              href={program.link}
              key={program.slug}
              className="action-card-link"
              style={{ textDecoration: "none" }}
            >
              <div className="action-card">
                {program.image ? (
                  <div
                    className="action-card-image"
                    style={{ backgroundImage: `url("${program.image}")` }}
                  ></div>
                ) : (
                  <div className="action-card-image-placeholder"></div>
                )}
                <div className="action-card-content">
                  <span className="action-card-category">
                    {program.category}
                  </span>
                  <h3 className="action-card-heading">{program.heading}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
        {showButton && (
          <div className="action-program-footer">
            <Link
              href="/what-we-do#programs"
              style={{ textDecoration: "none" }}
            >
              <PillButton
                text="Explore All"
                bg="#F59E0A"
                color="black"
                arrowBg="white"
                arrowColor="black"
                hoverFillColor="white"
                hoverTextColor="black"
              />
            </Link>
          </div>
        )}
      </section>
    </AnimatedContent>
  );
};

export default ActionProgram;
