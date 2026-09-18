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
        visits={1}
        students={67}
        faculty={8}
        completed={100}
        image="/assets/Projects_Banner_Assets/Rimmanaguda.webp"
      />
      <Headings
        eyebrowText="OUR IMPACT"
        eyebrowColor="#095e3f"
        headingText="Project Gallery"
        descriptionText="Improving access to clean water and hygiene facilities while creating a cleaner, healthier school environment."
      />
      <ProjectGallery images={[
    "/assets/Project_Gallery/rimmanaguda-gallery/IMG_20260326_112151.webp",
    "/assets/Project_Gallery/rimmanaguda-gallery/IMG_20260326_112353.webp",
    "/assets/Project_Gallery/rimmanaguda-gallery/IMG_20260326_113235.webp",
    "/assets/Project_Gallery/rimmanaguda-gallery/IMG_20260326_113448.webp",
    "/assets/Project_Gallery/rimmanaguda-gallery/IMG_20260326_113828.webp",
    "/assets/Project_Gallery/rimmanaguda-gallery/IMG_20260326_113958.webp",
    "/assets/Project_Gallery/rimmanaguda-gallery/IMG_20260326_114123.webp",
    "/assets/Project_Gallery/rimmanaguda-gallery/IMG_20260326_121451.webp",
    "/assets/Project_Gallery/rimmanaguda-gallery/IMG_20260326_121644.webp",
    "/assets/Project_Gallery/rimmanaguda-gallery/IMG_20260326_122327.webp",
    "/assets/Project_Gallery/rimmanaguda-gallery/IMG_20260326_123307.webp",
  ]} />
      <ProjectImpact impactText={`Improved access to clean water and better hygiene practices among 67 students and 8 faculty members.`} />
      <TickerTape />

      <CTA />
      <Loop />
    </>
  );
}
