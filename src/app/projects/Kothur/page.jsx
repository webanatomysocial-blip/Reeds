import ProjectBanner from "../../(Components)/(Projects)/ProjectBanner";
import Headings from "../../(Components)/Headings";
import ProjectGallery from "../../(Components)/(Projects)/ProjectGallery";
import ProjectImpact from "../../(Components)/(Projects)/ProjectImpact";
import CTA from "../../(Components)/CTA";
import Loop from "../../(Components)/(Home)/Loop";
import TickerTape from "../../(Components)/(Home)/TickerTape";

export default function KothurProject() {
  const title = "Kothur MPPS";

  return (
    <>
      <ProjectBanner
        title={title}
        description={`We conducted 2 visits to ${title} to improve water, sanitation facilities and promote hygiene education among students and staff.`}
        visits={2}
        students={78}
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
      <ProjectImpact impactText="Improved access to clean water and better hygiene practices among 78 students and 3 faculty members." />
      <TickerTape />

      <CTA />
      <Loop />
    </>
  );
}
