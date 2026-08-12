import ProjectBanner from "../../(Components)/(Projects)/ProjectBanner";
import Headings from "../../(Components)/Headings";
import ProjectGallery from "../../(Components)/(Projects)/ProjectGallery";
import ProjectImpact from "../../(Components)/(Projects)/ProjectImpact";
import CTA from "../../(Components)/CTA";
import Loop from "../../(Components)/(Home)/Loop";
import TickerTape from "../../(Components)/(Home)/TickerTape";

export default function NyamathapurProject() {
  const title = "Nyamathapur MPPS";

  return (
    <>
      <ProjectBanner
        title={title}
        description={`We conducted 1 visit to ${title} to improve water, sanitation facilities and promote hygiene education among students and staff.`}
        visits={1}
        students={27}
        faculty={2}
        completed={100}
        image="/assets/Projects_Banner_Assets/Nyamathapur.jpg"
      />
      <Headings
        eyebrowText="OUR IMPACT"
        eyebrowColor="#0b6b3b"
        headingText="Project Gallery"
        descriptionText="Every cause we support is driven by real needs, real people, and real outcomes."
      />
      <ProjectGallery images={[
    "/assets/Project_Gallery/nyamathapur-gallery/IMG_20260313_112610.jpg",
    "/assets/Project_Gallery/nyamathapur-gallery/IMG_20260313_113535.jpg",
    "/assets/Project_Gallery/nyamathapur-gallery/IMG_20260313_113739.jpg",
    "/assets/Project_Gallery/nyamathapur-gallery/IMG_20260313_114824.jpg",
    "/assets/Project_Gallery/nyamathapur-gallery/IMG_20260313_120438.jpg",
    "/assets/Project_Gallery/nyamathapur-gallery/IMG_20260313_120947.jpg",
    "/assets/Project_Gallery/nyamathapur-gallery/IMG_20260313_123247.jpg",
    "/assets/Project_Gallery/nyamathapur-gallery/IMG_20260313_123737.jpg",
  ]} />
      <ProjectImpact impactText={`Improved access to clean water and better hygiene practices among 27 students and 2 faculty members.`} />
      <TickerTape />

      <CTA />
      <Loop />
    </>
  );
}
