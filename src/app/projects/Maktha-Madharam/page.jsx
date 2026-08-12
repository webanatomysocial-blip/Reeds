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
        description={`We conducted 1 visit to ${title} to improve water, sanitation facilities and promote hygiene education among students and staff.`}
        visits={1}
        students={63}
        faculty={6}
        completed={100}
        image="/assets/Projects_Banner_Assets/Maktha-Madharam.jpg"
      />
      <Headings
        eyebrowText="OUR IMPACT"
        eyebrowColor="#0b6b3b"
        headingText="Project Gallery"
        descriptionText="Every cause we support is driven by real needs, real people, and real outcomes."
      />
      <ProjectGallery images={[
    "/assets/Project_Gallery/maktha-madahram-gallery/IMG_20260313_140135.jpg",
    "/assets/Project_Gallery/maktha-madahram-gallery/IMG_20260313_143727.jpg",
    "/assets/Project_Gallery/maktha-madahram-gallery/MPUPS Madharam - Students Demo on Hand Wash.jpg",
    "/assets/Project_Gallery/maktha-madahram-gallery/Soap & pepper Expirement.jpg",
  ]} />
      <ProjectImpact impactText={`Improved access to clean water and better hygiene practices among 63 students and 6 faculty members.`} />
      <TickerTape />

      <CTA />
      <Loop />
    </>
  );
}
