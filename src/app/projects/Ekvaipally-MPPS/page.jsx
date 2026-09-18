import ProjectBanner from "../../(Components)/(Projects)/ProjectBanner";
import Headings from "../../(Components)/Headings";
import ProjectGallery from "../../(Components)/(Projects)/ProjectGallery";
import ProjectImpact from "../../(Components)/(Projects)/ProjectImpact";
import CTA from "../../(Components)/CTA";
import Loop from "../../(Components)/(Home)/Loop";
import TickerTape from "../../(Components)/(Home)/TickerTape";

export default function EkvaipallyMPPSProject() {
  const title = "MPPS Ekvaipally";

  return (
    <>
      <ProjectBanner
        title={title}
        visits={1}
        students={61}
        faculty={4}
        completed={100}
        image="/assets/Project_Gallery/ekwaipally-gallery/IMG_20260325_110038.webp"
      />
      <Headings
        eyebrowText="OUR IMPACT"
        eyebrowColor="#095e3f"
        headingText="Project Gallery"
        descriptionText="Improving access to clean water and hygiene facilities for 61+ students and 4+ faculty members."
      />
      <ProjectGallery images={[
    "/assets/Project_Gallery/ekwaipally-gallery/IMG_20260325_110038.webp",
    "/assets/Project_Gallery/ekwaipally-gallery/IMG_20260325_110227.webp",
    "/assets/Project_Gallery/ekwaipally-gallery/IMG_20260325_110251.webp",
    "/assets/Project_Gallery/ekwaipally-gallery/IMG_20260325_111702.webp",
    "/assets/Project_Gallery/ekwaipally-gallery/IMG_20260325_111807.webp",
    "/assets/Project_Gallery/ekwaipally-gallery/IMG_20260325_115102.webp",
    "/assets/Project_Gallery/ekwaipally-gallery/IMG_20260325_120510.webp",
    "/assets/Project_Gallery/ekwaipally-gallery/IMG_20260325_120934.webp",
  ]} />
      <ProjectImpact impactText={`Improved access to clean water and better hygiene practices among 61 students and 4 faculty members.`} />
      <TickerTape />

      <CTA />
      <Loop />
    </>
  );
}
