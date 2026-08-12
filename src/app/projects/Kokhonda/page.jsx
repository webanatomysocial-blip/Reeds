import ProjectBanner from "../../(Components)/(Projects)/ProjectBanner";
import Headings from "../../(Components)/Headings";
import ProjectGallery from "../../(Components)/(Projects)/ProjectGallery";
import ProjectImpact from "../../(Components)/(Projects)/ProjectImpact";
import CTA from "../../(Components)/CTA";
import Loop from "../../(Components)/(Home)/Loop";
import TickerTape from "../../(Components)/(Home)/TickerTape";

export default function KokhondaProject() {
  const title = "Kokhonda MPPS";

  return (
    <>
      <ProjectBanner
        title={title}
        description={`We conducted 2 visits to ${title} to improve water, sanitation facilities and promote hygiene education among students and staff.`}
        visits={2}
        students={104}
        faculty={3}
        completed={100}
        image="/assets/Projects_Banner_Assets/Kokhonda.jpg"
      />
      <Headings
        eyebrowText="OUR IMPACT"
        eyebrowColor="#0b6b3b"
        headingText="Project Gallery"
        descriptionText="Every cause we support is driven by real needs, real people, and real outcomes."
      />
      <ProjectGallery images={[
    "/assets/Project_Gallery/kokkonda-gallery/IMG_20260310_122307.jpg",
    "/assets/Project_Gallery/kokkonda-gallery/IMG_20260310_124001.jpg",
    "/assets/Project_Gallery/kokkonda-gallery/IMG_20260310_124140.jpg",
    "/assets/Project_Gallery/kokkonda-gallery/IMG_20260310_124941.jpg",
    "/assets/Project_Gallery/kokkonda-gallery/IMG_20260310_124947.jpg",
    "/assets/Project_Gallery/kokkonda-gallery/IMG_20260310_125105.jpg",
    "/assets/Project_Gallery/kokkonda-gallery/IMG_20260310_125248.jpg",
  ]} />
      <ProjectImpact impactText={`Improved access to clean water and better hygiene practices among 104 students and 3 faculty members.`} />
      <TickerTape />

      <CTA />
      <Loop />
    </>
  );
}
