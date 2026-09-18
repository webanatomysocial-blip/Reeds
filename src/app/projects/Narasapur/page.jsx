import ProjectBanner from "../../(Components)/(Projects)/ProjectBanner";
import Headings from "../../(Components)/Headings";
import ProjectGallery from "../../(Components)/(Projects)/ProjectGallery";
import ProjectImpact from "../../(Components)/(Projects)/ProjectImpact";
import CTA from "../../(Components)/CTA";
import Loop from "../../(Components)/(Home)/Loop";
import TickerTape from "../../(Components)/(Home)/TickerTape";

export default function NarasapurProject() {
  const title = "Narasapur MPPS";

  return (
    <>
      <ProjectBanner
        title={title}
        visits={3}
        students={37}
        faculty={3}
        completed={100}
        image="/assets/Projects_Banner_Assets/Narasapur.webp"
      />
 <Headings
        eyebrowText="OUR IMPACT"
        eyebrowColor="#095e3f"
        headingText="Project Gallery"
        descriptionText="Improving access to clean water, hygiene, and better sanitation for students and faculty."
      />
      <ProjectGallery images={[
    "/assets/Project_Gallery/narasapur-gallery/IMG_20251114_112419.webp",
    "/assets/Project_Gallery/narasapur-gallery/IMG_20251114_113840.webp",
    "/assets/Project_Gallery/narasapur-gallery/IMG_20251114_114015.webp",
    "/assets/Project_Gallery/narasapur-gallery/IMG_20251114_120202.webp",
    "/assets/Project_Gallery/narasapur-gallery/IMG_20251114_121047.webp",
    "/assets/Project_Gallery/narasapur-gallery/IMG_20251114_121055.webp",
    "/assets/Project_Gallery/narasapur-gallery/IMG_20251114_121319.webp",
    "/assets/Project_Gallery/narasapur-gallery/IMG_20251114_121516.webp",
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
