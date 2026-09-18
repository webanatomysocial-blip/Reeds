import ProjectBanner from "../../(Components)/(Projects)/ProjectBanner";
import Headings from "../../(Components)/Headings";
import ProjectGallery from "../../(Components)/(Projects)/ProjectGallery";
import ProjectImpact from "../../(Components)/(Projects)/ProjectImpact";
import CTA from "../../(Components)/CTA";
import Loop from "../../(Components)/(Home)/Loop";
import TickerTape from "../../(Components)/(Home)/TickerTape";

export default function MakthaMadharamProject() {
  const title = "MPUPS Maktha Madharam";

  return (
    <>
      <ProjectBanner
        title={title}
        visits={1}
        students={63}
        faculty={6}
        completed={100}
        image="/assets/Projects_Banner_Assets/Maktha-Madharam.webp"
      />
      <Headings
        eyebrowText="OUR IMPACT"
        eyebrowColor="#095e3f"
        headingText="Project Gallery"
        descriptionText="Creating a cleaner, healthier school environment through improved sanitation, hygiene, and access to safe water."
      />
      <ProjectGallery images={[
    "/assets/Project_Gallery/maktha-madahram-gallery/IMG_20260313_140135.webp",
    "/assets/Project_Gallery/maktha-madahram-gallery/IMG_20260313_143727.webp",
    "/assets/Project_Gallery/maktha-madahram-gallery/MPUPS Madharam - Students Demo on Hand Wash.webp",
    "/assets/Project_Gallery/maktha-madahram-gallery/Soap & pepper Expirement.webp",
  ]} />
      <ProjectImpact impactText={`Improved access to clean water and better hygiene practices among 63 students and 6 faculty members.`} />
      <TickerTape />

      <CTA />
      <Loop />
    </>
  );
}
