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
        image="/assets/Projects_Banner_Assets/Bandamailaram.jpg"
      />
 <Headings
        eyebrowText="OUR IMPACT"
        eyebrowColor="#0b6b3b"
        headingText="Project Gallery"
        descriptionText="Every cause we support is driven by real needs, real people, and real outcomes."
      />
      <ProjectGallery images={[
    "/assets/Project_Gallery/bandamailaram-gallery/IMG-20250630-WA0042 (1) (1).jpg",
    "/assets/Project_Gallery/bandamailaram-gallery/IMG-20250630-WA0042 (1).jpg",
    "/assets/Project_Gallery/bandamailaram-gallery/IMG-20250630-WA0053 (1).jpg",
    "/assets/Project_Gallery/bandamailaram-gallery/IMG_20250630_133221 (1).jpg",
    "/assets/Project_Gallery/bandamailaram-gallery/IMG_20250630_140531 (1).jpg",
    "/assets/Project_Gallery/bandamailaram-gallery/IMG_20250630_140719 (1).jpg",
    "/assets/Project_Gallery/bandamailaram-gallery/IMG_20250630_140736 (1).jpg",
    "/assets/Project_Gallery/bandamailaram-gallery/IMG_20250630_140801 (1).jpg",
  ]} />
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
