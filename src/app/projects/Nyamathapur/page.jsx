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
        visits={1}
        students={27}
        faculty={2}
        completed={100}
        image="/assets/Projects_Banner_Assets/Nyamathapur.webp"
      />
      <Headings
        eyebrowText="OUR IMPACT"
        eyebrowColor="#095e3f"
        headingText="Project Gallery"
        descriptionText="Improving access to clean water and hygiene through better facilities, awareness, and school cleanliness."
      />
      <ProjectGallery images={[
    "/assets/Project_Gallery/nyamathapur-gallery/IMG_20260313_112610.webp",
    "/assets/Project_Gallery/nyamathapur-gallery/IMG_20260313_113535.webp",
    "/assets/Project_Gallery/nyamathapur-gallery/IMG_20260313_113739.webp",
    "/assets/Project_Gallery/nyamathapur-gallery/IMG_20260313_114824.webp",
    "/assets/Project_Gallery/nyamathapur-gallery/IMG_20260313_120438.webp",
    "/assets/Project_Gallery/nyamathapur-gallery/IMG_20260313_120947.webp",
    "/assets/Project_Gallery/nyamathapur-gallery/IMG_20260313_123247.webp",
    "/assets/Project_Gallery/nyamathapur-gallery/IMG_20260313_123737.webp",
  ]} />
      <ProjectImpact impactText={`Improved access to clean water and better hygiene practices among 27 students and 2 faculty members.`} />
      <TickerTape />

      <CTA />
      <Loop />
    </>
  );
}
