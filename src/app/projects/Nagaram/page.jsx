import ProjectBanner from "../../(Components)/(Projects)/ProjectBanner";
import Headings from "../../(Components)/Headings";
import ProjectGallery from "../../(Components)/(Projects)/ProjectGallery";
import ProjectImpact from "../../(Components)/(Projects)/ProjectImpact";
import CTA from "../../(Components)/CTA";
import Loop from "../../(Components)/(Home)/Loop";
import TickerTape from "../../(Components)/(Home)/TickerTape";

export default function NagaramProject() {
  const title = "Nagaram MPPS & ZPHS";

  return (
    <>
      <ProjectBanner
        title={title}
        description={`We conducted 1 visit to Nagaram MPPS & ZPHS to improve WASH infrastructure and create awareness
on hygiene.`}
        visits={1}
        students={505}
        faculty={3}
        completed={100}
        image="/assets/Projects_Banner_Assets/Nagaram.jpg"
      />
 <Headings
        eyebrowText="OUR IMPACT"
        eyebrowColor="#095e3f"
        headingText="Project Gallery"
        descriptionText="Promoting cleaner, healthier school environments through improved sanitation, safe water, and hygiene awareness."
      />
      <ProjectGallery images={[
    "/assets/Project_Gallery/nagaram-gallery/IMG_20250730_135715.jpg",
    "/assets/Project_Gallery/nagaram-gallery/IMG_20250730_135816.jpg",
    "/assets/Project_Gallery/nagaram-gallery/IMG_20250730_140700.jpg",
    "/assets/Project_Gallery/nagaram-gallery/IMG_20250730_140807.jpg",
    "/assets/Project_Gallery/nagaram-gallery/IMG_20250730_141328.jpg",
    "/assets/Project_Gallery/nagaram-gallery/IMG_20250730_142101.jpg",
    "/assets/Project_Gallery/nagaram-gallery/IMG_20250730_143121.jpg",
    "/assets/Project_Gallery/nagaram-gallery/IMG_20250730_152608.jpg",
    "/assets/Project_Gallery/nagaram-gallery/IMG_20250730_153038.jpg",
  ]} />
       <ProjectImpact 
      activities = {[
    "Inspected and maintained toilets",
    "Repaired water storage tank",
    "Hygiene and sanitation awareness",
    "Encouraged regular handwashing"
  ]}
      impactText="Enhanced sanitation and hygiene awareness among 505 students and 3 faculty members." />
      <TickerTape />

      <CTA />
      <Loop />
    </>
  );
}
