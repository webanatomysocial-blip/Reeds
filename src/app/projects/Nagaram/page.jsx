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
      />
 <Headings
        eyebrowText="OUR IMPACT"
        eyebrowColor="#0b6b3b"
        headingText="Project Gallery"
        descriptionText="Every cause we support is driven by real needs, real people, and real outcomes."
      />
      <ProjectGallery />
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
