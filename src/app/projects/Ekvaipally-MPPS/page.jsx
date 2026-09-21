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
        image="/assets/Projects_Banner_Assets/Ekvaipally-MPPS.webp"
      />
      <Headings
        eyebrowText="OUR IMPACT"
        eyebrowColor="#095e3f"
        headingText="Project Gallery"
        descriptionText="Improving access to clean water and hygiene facilities for 61+ students and 4+ faculty members."
      />
      <ProjectGallery images={[
        "/assets/Project_Gallery/ekvaipally-mpps-gallery/IMG_20260325_113421.webp",
        "/assets/Project_Gallery/ekvaipally-mpps-gallery/IMG_20260325_114527.webp",
        "/assets/Project_Gallery/ekvaipally-mpps-gallery/IMG_20260325_120509.webp",
        "/assets/Project_Gallery/ekvaipally-mpps-gallery/IMG_20260325_120711.webp",
        "/assets/Project_Gallery/ekvaipally-mpps-gallery/IMG_20260325_121107.webp",
        "/assets/Project_Gallery/ekvaipally-mpps-gallery/IMG_20260325_121515.webp",
        "/assets/Project_Gallery/ekvaipally-mpps-gallery/IMG_20260325_121812.webp",
        "/assets/Project_Gallery/ekvaipally-mpps-gallery/IMG_20260325_123715.webp",
        "/assets/Project_Gallery/ekvaipally-mpps-gallery/IMG_20260325_123224.webp",
        "/assets/Project_Gallery/ekvaipally-mpps-gallery/IMG_20260325_114850.webp",
      ]} />
      <ProjectImpact impactText={`Improved access to clean water and better hygiene practices among 61 students and 4 faculty members.`} />
      <TickerTape />

      <CTA />
      <Loop />
    </>
  );
}
