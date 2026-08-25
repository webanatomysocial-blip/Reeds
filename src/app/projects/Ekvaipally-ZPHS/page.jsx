import ProjectBanner from "../../(Components)/(Projects)/ProjectBanner";
import Headings from "../../(Components)/Headings";
import ProjectGallery from "../../(Components)/(Projects)/ProjectGallery";
import ProjectImpact from "../../(Components)/(Projects)/ProjectImpact";
import CTA from "../../(Components)/CTA";
import Loop from "../../(Components)/(Home)/Loop";
import TickerTape from "../../(Components)/(Home)/TickerTape";

export default function EkvaipallyZPHSProject() {
  const title = "ZPHS Ekvaipally";

  return (
    <>
      <ProjectBanner
        title={title}
        description={`We conducted 1 visit to ${title} to improve water, sanitation facilities and promote hygiene education among students and staff.`}
        visits={1}
        students={99}
        faculty={9}
        completed={100}
        image="/assets/Projects_Banner_Assets/Ekvaipally-ZPHS.jpg"
      />
      <Headings
        eyebrowText="OUR IMPACT"
        eyebrowColor="#095e3f"
        headingText="Project Gallery"
        descriptionText="Improving access to clean water and hygiene facilities for 99+ students and 9+ faculty members."
      />
      <ProjectGallery images={[
    "/assets/Project_Gallery/ekwaipally-gallery/IMG_20260325_110038.jpg",
    "/assets/Project_Gallery/ekwaipally-gallery/IMG_20260325_110227.jpg",
    "/assets/Project_Gallery/ekwaipally-gallery/IMG_20260325_110251.jpg",
    "/assets/Project_Gallery/ekwaipally-gallery/IMG_20260325_111702.jpg",
    "/assets/Project_Gallery/ekwaipally-gallery/IMG_20260325_111807.jpg",
    "/assets/Project_Gallery/ekwaipally-gallery/IMG_20260325_115102.jpg",
    "/assets/Project_Gallery/ekwaipally-gallery/IMG_20260325_120510.jpg",
    "/assets/Project_Gallery/ekwaipally-gallery/IMG_20260325_120934.jpg",
  ]} />
      <ProjectImpact impactText={`Improved access to clean water and better hygiene practices among 99 students and 9 faculty members.`} />
      <TickerTape />

      <CTA />
      <Loop />
    </>
  );
}
