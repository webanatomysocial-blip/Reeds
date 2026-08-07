import ProjectBanner from "../../(Components)/(Projects)/ProjectBanner";
import Headings from "../../(Components)/Headings";
import ProjectGallery from "../../(Components)/(Projects)/ProjectGallery";
import ProjectImpact from "../../(Components)/(Projects)/ProjectImpact";
import CTA from "../../(Components)/CTA";
import Loop from "../../(Components)/(Home)/Loop";
import TickerTape from "../../(Components)/(Home)/TickerTape";

export default function BandamailaramProject() {
  const title = "Bandamailaram MPPS";

  return (
    <>
      <ProjectBanner
        title={title}
        description={`We conducted 2 visits to Bandamailaram MPPS to enhance water availability, sanitation and hygiene education.`}
        visits={2}
        students={75}
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
    "Repaired borewell and ensured safe water",
    "Built handwashing stations",
    "Conducted hygiene education sessions",
    "Promoted clean toilet usage"
  ]}
      impactText="Better water access and improved hygiene habits among 75 students and 3 faculty members." />
      <TickerTape />
      <TickerTape />

      <CTA />
      <Loop />
    </>
  );
}
