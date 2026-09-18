import ProjectBanner from "../../(Components)/(Projects)/ProjectBanner";
import Headings from "../../(Components)/Headings";
import ProjectGallery from "../../(Components)/(Projects)/ProjectGallery";
import ProjectImpact from "../../(Components)/(Projects)/ProjectImpact";
import CTA from "../../(Components)/CTA";
import Loop from "../../(Components)/(Home)/Loop";
import TickerTape from "../../(Components)/(Home)/TickerTape";

export default function KokkondaProject() {
  const title = "Kokkonda MPPS";

  return (
    <>
      <ProjectBanner
        title={title}
        visits={2}
        students={104}
        faculty={3}
        completed={100}
        image="/assets/Projects_Banner_Assets/Kokkonda.webp"
      />
      <Headings
        eyebrowText="OUR IMPACT"
        eyebrowColor="#095e3f"
        headingText="Project Gallery"
        descriptionText="Improving school hygiene and sanitation through better water access, handwashing facilities, and awareness."
      />
      <ProjectGallery images={[
    "/assets/Project_Gallery/kokkonda-gallery/IMG_20260310_122307.webp",
    "/assets/Project_Gallery/kokkonda-gallery/IMG_20260310_124001.webp",
    "/assets/Project_Gallery/kokkonda-gallery/IMG_20260310_124140.webp",
    "/assets/Project_Gallery/kokkonda-gallery/IMG_20260310_124941.webp",
    "/assets/Project_Gallery/kokkonda-gallery/IMG_20260310_124947.webp",
    "/assets/Project_Gallery/kokkonda-gallery/IMG_20260310_125105.webp",
    "/assets/Project_Gallery/kokkonda-gallery/IMG_20260310_125248.webp",
  ]} />
      <ProjectImpact impactText={`Improved access to clean water and better hygiene practices among 104 students and 3 faculty members.`} />
      <TickerTape />

      <CTA />
      <Loop />
    </>
  );
}
