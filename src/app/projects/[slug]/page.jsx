import React from 'react';
import InnerBanner from "../../(Components)/InnerBanner";
import ProjectBanner from "../../(Components)/(Projects)/ProjectBanner";
import ProjectGallery from "../../(Components)/(Projects)/ProjectGallery";
import ProjectImpact from "../../(Components)/(Projects)/ProjectImpact";
import CTA from "../../(Components)/CTA";
import Loop from "../../(Components)/(Home)/Loop";
import TickerTape from "../../(Components)/(Home)/TickerTape";
// This tells Next.js how to generate the static paths if we want to SSG them
export function generateStaticParams() {
  return [
    { slug: 'Narsapur' },
    { slug: 'Bandamailaram' },
    { slug: 'Nagaram' },
    { slug: 'Kothur' }
  ];
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  
  // Create a display title from the slug (e.g. "Narsapur" -> "Narsapur Project")
  const title = slug.charAt(0).toUpperCase() + slug.slice(1) + " Project";

  return (
    <>
      <ProjectBanner 
        title={title}
        description={`We conducted 3 visits to ${title} to improve water, sanitation facilities and promote hygiene education among students and staff.`}
        visits={3}
        students={37}
        faculty={3}
        completed={100}
      />
      
      <ProjectGallery />
      <ProjectImpact />
      <TickerTape />

      <CTA />
      <Loop />
    </>
  );
}
