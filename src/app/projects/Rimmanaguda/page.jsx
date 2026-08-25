import ProjectBanner from "../../(Components)/(Projects)/ProjectBanner";
import Headings from "../../(Components)/Headings";
import ProjectGallery from "../../(Components)/(Projects)/ProjectGallery";
import ProjectImpact from "../../(Components)/(Projects)/ProjectImpact";
import CTA from "../../(Components)/CTA";
import Loop from "../../(Components)/(Home)/Loop";
import TickerTape from "../../(Components)/(Home)/TickerTape";

export default function RimmanagudaProject() {
  const title = "ZPHS Rimmanaguda";

  return (
    <>
      <ProjectBanner
        title={title}
        description={`We conducted 1 visit to ${title} to improve water, sanitation facilities and promote hygiene education among students and staff.`}
        visits={1}
        students={67}
        faculty={8}
        completed={100}
        image="/assets/Projects_Banner_Assets/Rimmanaguda.jpg"
      />
      <Headings
        eyebrowText="OUR IMPACT"
        eyebrowColor="#095e3f"
        headingText="Project Gallery"
        descriptionText="Improving access to clean water and hygiene facilities while creating a cleaner, healthier school environment."
      />
      <ProjectGallery images={[
    "/assets/Project_Gallery/rimmanaguda-gallery/IMG_20260326_112151.jpg",
    "/assets/Project_Gallery/rimmanaguda-gallery/IMG_20260326_112353.jpg",
    "/assets/Project_Gallery/rimmanaguda-gallery/IMG_20260326_113235.jpg",
    "/assets/Project_Gallery/rimmanaguda-gallery/IMG_20260326_113448.jpg",
    "/assets/Project_Gallery/rimmanaguda-gallery/IMG_20260326_113828.jpg",
    "/assets/Project_Gallery/rimmanaguda-gallery/IMG_20260326_113958.jpg",
    "/assets/Project_Gallery/rimmanaguda-gallery/IMG_20260326_114123.jpg",
    "/assets/Project_Gallery/rimmanaguda-gallery/IMG_20260326_121451.jpg",
    "/assets/Project_Gallery/rimmanaguda-gallery/IMG_20260326_121644.jpg",
    "/assets/Project_Gallery/rimmanaguda-gallery/IMG_20260326_122327.jpg",
    "/assets/Project_Gallery/rimmanaguda-gallery/IMG_20260326_123307.jpg",
  ]} />
      <ProjectImpact impactText={`Improved access to clean water and better hygiene practices among 67 students and 8 faculty members.`} />
      <TickerTape />

      <CTA />
      <Loop />
    </>
  );
}
