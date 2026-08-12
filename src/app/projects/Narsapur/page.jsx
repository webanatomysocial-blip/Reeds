import ProjectBanner from "../../(Components)/(Projects)/ProjectBanner";
import Headings from "../../(Components)/Headings";
import ProjectGallery from "../../(Components)/(Projects)/ProjectGallery";
import ProjectImpact from "../../(Components)/(Projects)/ProjectImpact";
import CTA from "../../(Components)/CTA";
import Loop from "../../(Components)/(Home)/Loop";
import TickerTape from "../../(Components)/(Home)/TickerTape";

export default function NarsapurProject() {
  const title = "Narsapur MPPS";

  return (
    <>
      <ProjectBanner
        title={title}
        description={`We conducted 3 visits to Narsapur MPPS to improve water, sanitation facilities and promote hygiene education among students and staff.`}
        visits={3}
        students={37}
        faculty={3}
        completed={100}
        image="/assets/Projects_Banner_Assets/Narsapur.jpg"
      />
 <Headings
        eyebrowText="OUR IMPACT"
        eyebrowColor="#0b6b3b"
        headingText="Project Gallery"
        descriptionText="Every cause we support is driven by real needs, real people, and real outcomes."
      />
      <ProjectGallery images={[
    "/assets/Project_Gallery/narasapur-gallery/IMG_20251114_112419.jpg",
    "/assets/Project_Gallery/narasapur-gallery/IMG_20251114_113840.jpg",
    "/assets/Project_Gallery/narasapur-gallery/IMG_20251114_114015.jpg",
    "/assets/Project_Gallery/narasapur-gallery/IMG_20251114_120202.jpg",
    "/assets/Project_Gallery/narasapur-gallery/IMG_20251114_121047.jpg",
    "/assets/Project_Gallery/narasapur-gallery/IMG_20251114_121055.jpg",
    "/assets/Project_Gallery/narasapur-gallery/IMG_20251114_121319.jpg",
    "/assets/Project_Gallery/narasapur-gallery/IMG_20251114_121516.jpg",
  ]} />
      <ProjectImpact 
      activities = {[
    "Repaired and maintained drinking water facility",
    "Constructed handwashing station",
    "Hygiene awareness session for students",
    "Cleanliness drive in school premises"
  ]}
      impactText="Improved access to clean water and better hygiene practices among 37 students and 3 faculty members." />
      <TickerTape />

      <CTA />
      <Loop />
    </>
  );
}
